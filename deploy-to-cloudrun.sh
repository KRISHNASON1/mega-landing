#!/bin/bash
# =============================================================================
# MEGA Enterprise Landing - Google Cloud Run Deployment Script
# =============================================================================
# This script automates the full deployment process to Google Cloud Run.
#
# Prerequisites:
#   1. Google Cloud SDK (gcloud) installed
#   2. Docker installed (for local builds)
#   3. A Google Cloud project with billing enabled
#
# Usage:
#   chmod +x deploy-to-cloudrun.sh
#   ./deploy-to-cloudrun.sh
#
# =============================================================================

set -euo pipefail

# ------------- CONFIGURATION (Edit these values) -------------
PROJECT_ID=""                          # Your GCP Project ID (e.g., "mega-enterprise-12345")
REGION="asia-southeast1"               # GCP Region (Singapore - supports custom domains)
SERVICE_NAME="mega-enterprise-landing" # Cloud Run service name
IMAGE_NAME="mega-enterprise-landing"   # Docker image name

# SMTP Configuration (for contact form emails)
SMTP_HOST="smtpout.secureserver.net"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="sales@megaenterprise.in"
SMTP_PASSWORD="Mega@123ent"
EMAIL_FROM="sales@megaenterprise.in"
EMAIL_TO="info@megaenterprise.in"
# --------------------------------------------------------------

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Print functions
info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
success() { echo -e "${GREEN}✅ $1${NC}"; }
warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
error() { echo -e "${RED}❌ $1${NC}"; exit 1; }
step() { echo -e "\n${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"; echo -e "${CYAN}🚀 $1${NC}"; echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"; }

# =============================================================================
# PRE-FLIGHT CHECKS
# =============================================================================

step "Pre-flight Checks"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    error "Google Cloud SDK (gcloud) is not installed. Install it from: https://cloud.google.com/sdk/docs/install"
fi
success "gcloud CLI found"

# Check if Docker is installed and running
if ! command -v docker &> /dev/null || ! docker info &> /dev/null; then
    warning "Docker is not running locally or not installed. Will use Cloud Build for building."
    USE_CLOUD_BUILD=true
else
    success "Docker is running"
    USE_CLOUD_BUILD=false
fi

# Prompt for Project ID if not set
if [ -z "$PROJECT_ID" ]; then
    echo -e "${YELLOW}Enter your Google Cloud Project ID:${NC}"
    read -r PROJECT_ID
    if [ -z "$PROJECT_ID" ]; then
        error "Project ID is required!"
    fi
fi

info "Project ID: $PROJECT_ID"
info "Region: $REGION"
info "Service: $SERVICE_NAME"

# =============================================================================
# STEP 1: AUTHENTICATE & CONFIGURE PROJECT
# =============================================================================

step "Step 1: Authenticating & Configuring GCP Project"

# Check if already authenticated
CURRENT_ACCOUNT=$(gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>/dev/null || true)

if [ -z "$CURRENT_ACCOUNT" ]; then
    info "No active account found. Starting authentication..."
    gcloud auth login
else
    success "Already authenticated as: $CURRENT_ACCOUNT"
fi

# Set the project
gcloud config set project "$PROJECT_ID"
success "Project set to: $PROJECT_ID"

# =============================================================================
# STEP 2: ENABLE REQUIRED APIs
# =============================================================================

step "Step 2: Enabling Required Google Cloud APIs"

APIS=(
    "run.googleapis.com"              # Cloud Run
    "cloudbuild.googleapis.com"       # Cloud Build
    "containerregistry.googleapis.com" # Container Registry
    "artifactregistry.googleapis.com"  # Artifact Registry
)

for api in "${APIS[@]}"; do
    info "Enabling $api..."
    gcloud services enable "$api" --quiet
    success "Enabled: $api"
done

# =============================================================================
# STEP 3: BUILD & PUSH DOCKER IMAGE
# =============================================================================

step "Step 3: Building & Pushing Docker Image"

IMAGE_TAG="gcr.io/$PROJECT_ID/$IMAGE_NAME:latest"

if [ "$USE_CLOUD_BUILD" = true ]; then
    info "Building with Google Cloud Build (this may take 5-10 minutes)..."
    gcloud builds submit \
        --tag "$IMAGE_TAG" \
        --timeout=1200s \
        --machine-type=e2-highcpu-8 \
        .
else
    info "Building Docker image locally..."
    docker build -t "$IMAGE_TAG" .
    
    info "Configuring Docker for GCR..."
    gcloud auth configure-docker --quiet
    
    info "Pushing image to Google Container Registry..."
    docker push "$IMAGE_TAG"
fi

success "Image built and pushed: $IMAGE_TAG"

# =============================================================================
# STEP 4: DEPLOY TO CLOUD RUN
# =============================================================================

step "Step 4: Deploying to Cloud Run"

info "Deploying service to Cloud Run..."

gcloud run deploy "$SERVICE_NAME" \
    --image "$IMAGE_TAG" \
    --region "$REGION" \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --min-instances 0 \
    --max-instances 10 \
    --timeout 300 \
    --concurrency 80 \
    --set-env-vars "NODE_ENV=production" \
    --set-env-vars "SMTP_HOST=$SMTP_HOST" \
    --set-env-vars "SMTP_PORT=$SMTP_PORT" \
    --set-env-vars "SMTP_SECURE=$SMTP_SECURE" \
    --set-env-vars "SMTP_USER=$SMTP_USER" \
    --set-env-vars "SMTP_PASSWORD=$SMTP_PASSWORD" \
    --set-env-vars "EMAIL_FROM=$EMAIL_FROM" \
    --set-env-vars "EMAIL_TO=$EMAIL_TO" \
    --quiet

success "Deployment complete!"

# =============================================================================
# STEP 5: GET SERVICE URL
# =============================================================================

step "Step 5: Getting Service URL"

SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" \
    --region "$REGION" \
    --format="value(status.url)")

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🎉 DEPLOYMENT SUCCESSFUL!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  🌐 ${CYAN}Website URL:${NC} $SERVICE_URL"
echo -e "  📦 ${CYAN}Image:${NC}       $IMAGE_TAG"
echo -e "  🏗️  ${CYAN}Service:${NC}     $SERVICE_NAME"
echo -e "  🌍 ${CYAN}Region:${NC}      $REGION"
echo ""
echo -e "${YELLOW}📌 Next Steps:${NC}"
echo -e "  • Map a custom domain: ${BLUE}gcloud run domain-mappings create --service=$SERVICE_NAME --domain=megaenterprise.in --region=$REGION${NC}"
echo -e "  • View logs: ${BLUE}gcloud run services logs read $SERVICE_NAME --region=$REGION${NC}"
echo -e "  • View in console: ${BLUE}https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME?project=$PROJECT_ID${NC}"
echo ""
