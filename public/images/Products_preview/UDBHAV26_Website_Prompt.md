# UDBHAV'26 — Website Build Prompt
## Public Pages: Complete Design + Dev Specification

---

## 🎨 Design Identity — "DARK FORGE"

### Concept
UDBHAV'26 is a 24-hour war room. 50 teams. A 15-minute PS Drop. ₹45,000 on the line.
The website should feel like a **championship arena meets hacker terminal** — raw energy, high stakes,
no softness. NOT a startup SaaS landing page. NOT a college fest poster. Something that makes
participants feel the clock ticking the moment they land.

### Color System
```css
:root {
  --bg-void:       #07070F;   /* near-black with blue undertone — page base */
  --bg-surface:    #0D0D1A;   /* card/section surfaces */
  --bg-elevated:   #12121F;   /* elevated elements */
  --border-dim:    #1E1E30;   /* subtle dividers */
  --border-glow:   #FFAA0022; /* amber glow borders */

  --amber:         #FFAA00;   /* PRIMARY accent — energy, ignition, highlight */
  --amber-dim:     #FFAA0066; /* amber at 40% opacity */
  --crimson:       #FF2D2D;   /* SECONDARY accent — urgency, deadline, slots running out */
  --crimson-dim:   #FF2D2D44;
  --ice:           #A0B4D0;   /* muted blue-white for body text */
  --ghost:         #3A3A55;   /* muted elements */

  --text-primary:  #F0EDE8;   /* warm off-white — not pure white */
  --text-secondary:#8A8AA0;   /* secondary text */
  --text-muted:    #4A4A65;   /* placeholders, disabled */
}
```

### Typography
```
Display / Hero:      "Bebas Neue" — condensed, aggressive, championship posters
                     Import: https://fonts.googleapis.com/css2?family=Bebas+Neue

Subheadings / UI:    "Syne" (weight 600–800) — geometric, editorial, modern
                     Import: https://fonts.googleapis.com/css2?family=Syne:wght@400;600;800

Body / Descriptions: "DM Sans" (weight 300–500) — clean, readable, not generic
                     Import: https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500

Monospace / Counters:"IBM Plex Mono" — code-feel for timers, team codes, stats
                     Import: https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600
```

### Visual Language
- **Texture**: Subtle CSS noise grain overlay on the body (`opacity: 0.03`)
- **Shapes**: Angular cuts (clip-path diagonals) on section dividers — not smooth waves
- **Grid lines**: Very faint blueprint-style grid on the hero background
- **Glow**: Amber `box-shadow: 0 0 30px #FFAA0022` on key CTA elements
- **No**: Rounded pill buttons everywhere. No white cards on dark bg. No purple gradients.
- **Yes**: Sharp corners or very subtle radius (4px max). Geometric line accents. Monospace numbers.

### Animation Philosophy
- Hero text: staggered letter reveal with `animation-delay` — not typewriter, feels like ignition
- Stat counters: count-up animation on scroll-into-view
- Cards: `translateY(20px) → 0` + opacity on scroll reveal
- Hover states: amber underline slide-in, not color fills
- PS Drop page: pulsing red border on active slots, real-time counter flicker

---

## 🛠 Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSR for SEO + client islands for PS Drop |
| Styling | **Tailwind CSS + CSS Variables** | Utility speed + custom theme tokens |
| Animations | **Framer Motion** | Scroll triggers, counter animation, page transitions |
| Icons | **Lucide React** | Clean outlined icons, tree-shakeable |
| Fonts | **next/font + Google Fonts** | Performance-optimised loading |
| Backend (later) | Supabase / Prisma + PostgreSQL | Auth, registrations, PS Drop real-time |
| Payments (later) | Razorpay SDK | Round 2 registration |
| Real-time (PS Drop) | Supabase Realtime / Pusher | Live slot counts |

**File structure (Next.js App Router):**
```
/app
  /page.tsx              → Home (all sections)
  /register/page.tsx     → Round 2 form
  /ps/page.tsx           → PS Drop
  /conduct/page.tsx      → Code of Conduct
  /winners/page.tsx      → Winners
  /admin/...
/components
  /layout/Navbar.tsx
  /layout/Footer.tsx
  /sections/
    Hero.tsx
    Stats.tsx
    About.tsx
    Tracks.tsx
    Timeline.tsx
    Judging.tsx
    Sponsors.tsx
    Contact.tsx
  /ui/
    CounterCard.tsx
    TrackCard.tsx
    TimelineItem.tsx
    SponsorGrid.tsx
/lib
  /theme.ts              → CSS variable definitions
/public
  /fonts
  /icons
```

---

## 📄 Page-by-Page Specifications

---

### PAGE 1 — Home ( `/` )

#### Navbar
```
Layout: sticky, backdrop-blur, border-bottom: 1px solid --border-dim
Left:   UDBHAV'26 logo in Bebas Neue — amber accent on '26
Center: nav links (Home · About · Tracks · Timeline · Judging · Sponsors · Contact)
        — DM Sans 14px, --text-secondary on idle, --text-primary + amber underline on hover
Right:  "Register Now" CTA button
        — border: 1px solid --amber, color: --amber
        — hover: bg: --amber, color: --bg-void
        — font: Syne 600 12px uppercase letter-spacing: 0.1em

Mobile: Hamburger → slide-down overlay menu (full width, bg: --bg-surface)
```

#### Hero Section
```
Background:
  - --bg-void base
  - Faint CSS blueprint grid (1px lines at 60px intervals, opacity: 0.04)
  - Two radial gradients: amber top-left (#FFAA0008), crimson bottom-right (#FF2D2D05)
  - Grain noise overlay (SVG filter or CSS mask, opacity: 0.03)

Content layout: left-aligned, 60% width, vertically centered

Eyebrow text:  "BY ALTA SCHOOL OF TECHNOLOGY · SAGE UNIVERSITY, INDORE"
               IBM Plex Mono 11px, --text-secondary, letter-spacing: 0.15em

Main headline: "UDBHAV'26"
               Bebas Neue 180px (desktop) / 80px (mobile)
               Gradient text: linear-gradient(135deg, #FFAA00, #FF8C00)
               Line 2: "24-HOUR HACKATHON" in --text-primary, no gradient

Date line:     "25 – 26 APRIL 2026"
               IBM Plex Mono 16px, --amber, letter-spacing: 0.2em

Subtext:       "50 teams. 10 problems. 15 minutes to choose your battlefield."
               DM Sans 18px, --text-secondary, max-width: 480px

CTAs (side by side):
  Button 1: "Register on Unstop (Round 1)"
            Filled: bg --amber, color --bg-void, Syne 600 — PRIMARY
  Button 2: "Register for Round 2 →"
            Outlined: border --border-dim, color --text-primary
            hover: border --amber, color --amber

Right side (desktop):  Angular geometric graphic — 
  SVG or CSS art: overlapping rectangles in outline style, amber + crimson accents,
  suggesting tension/competition. Not a photo. Think: abstract battle map.
```

#### Stats Bar
```
Full-width section, bg: --bg-surface
4 stat cards in a horizontal row, separated by 1px --border-dim dividers

Each card:
  Number:  IBM Plex Mono 48px, --amber (animated counter on scroll)
  Label:   DM Sans 13px uppercase, --text-secondary, letter-spacing: 0.12em

Stats:
  ₹45,000   PRIZE POOL
  50         TEAMS
  200+       PARTICIPANTS
  24         HOURS

Counter animation: uses IntersectionObserver, counts from 0 to final value over 1.5s
with ease-out easing. Monospace font prevents layout shift during count.
```

#### About Section
```
Two-column layout (desktop):
  Left col (40%):  Section label + heading
  Right col (60%): Content

Section label: "/ 01 ABOUT" — IBM Plex Mono 11px, --amber, letter-spacing: 0.2em

Heading: "What is UDBHAV'26?" — Syne 800 40px, --text-primary

Content blocks (right column):
  1. Event description paragraph — DM Sans 16px, --ice, line-height: 1.8
  2. "Why Participate" — 3 horizontal feature points with amber icon bullets
  3. Organising Body — Enclope / Alta School of Technology / Sunstone
     Show as logo row (placeholder boxes if logos not ready)
  4. Organising Team — 2–3 member cards
     Card: name (Syne 600), role (DM Sans --text-secondary), minimal border

Divider between About and next section: diagonal clip-path cut, not a horizontal line
```

#### Event Highlights Cards
```
4 cards in a 2×2 grid (or horizontal scroll on mobile)
Card style:
  bg: --bg-elevated
  border: 1px solid --border-dim
  border-radius: 4px
  padding: 32px
  top-left: large icon (Lucide, 32px, --amber)
  bottom: metric + label

Cards:
  🏗  Format    "24-Hour Non-Stop Hackathon"
  📍  Venue     "Sage University, Indore"
  📅  Date      "25–26 April 2026"
  🏆  Prize     "₹45,000 Total Prize Pool"

Hover state: border-color transitions to --amber, slight translateY(-4px)
```

#### Tracks Section
```
Section label + heading pattern (same as About)
Heading: "Problem Domains"

6 track cards in a 3×2 grid:
Card design:
  bg: --bg-surface
  left border: 3px solid --amber (distinctive, not top border)
  no border-radius (sharp, industrial feel)
  padding: 24px
  
  Icon: relevant Lucide icon, 24px, --amber
  Track name: Syne 700 18px, --text-primary
  Description: DM Sans 14px, --text-secondary, 2 lines max

Tracks:
  🏥  HealthTech & MedTech      — Healthcare, diagnostics, patient management
  💰  FinTech & Web3            — Financial services, crypto, DeFi, payments
  🎓  EdTech & Skilling         — Learning platforms, skill development
  🌿  Sustainability & GreenTech — Climate, energy, circular economy
  🏙  Smart Cities & IoT        — Urban infrastructure, connected devices
  🤖  AI/ML & Data Science      — Intelligent systems, ML applications
                                   (placeholder if 6th track not specified)

Hover: left border color → --crimson, bg → --bg-elevated
```

#### Timeline Section
```
Full-width section, alternating left/right timeline items (desktop)
Mobile: single column left-aligned

Center spine: 2px solid --border-dim with amber dot at each node

Each item:
  Time:        IBM Plex Mono 13px, --amber
  Phase name:  Syne 600 18px, --text-primary
  Description: DM Sans 14px, --text-secondary

Key moment styling (PS Drop, Final Pitch, Results):
  Node dot: --crimson instead of --amber, larger (12px vs 8px)
  Phase name: --crimson

Scroll animation: items reveal with translateX (left items from left, right from right)
```

#### Judging Criteria Section
```
Placeholder state:
  "Judging criteria will be announced soon"
  Show card skeleton placeholders with shimmer animation

When criteria provided — card grid:
  Each card: criterion name + description + weight badge
  Weight badge: --amber text, --amber/10 bg, IBM Plex Mono font
```

#### Sponsors Section
```
Three tiers:

Title Sponsor:    Large center logo, 200px wide
Gold Sponsors:    Row of logos, 140px wide each
Silver Sponsors:  Row of logos, 100px wide each

Unfilled slots:   Dashed border box, --ghost color, text: "Become a Sponsor"
                  with contact email

All logos: grayscale by default, full color on hover
Tier label: IBM Plex Mono uppercase, --text-muted
```

#### Contact Section
```
Two contact cards side by side:
  Card: name (Syne 700), role (DM Sans --text-secondary)
  Contact row: email + phone with Lucide icons (Mail, Phone)

Background: subtle amber radial gradient behind the section (very faint, 3% opacity)
```

#### Footer
```
bg: --bg-surface
border-top: 1px solid --border-dim

Layout: 3 columns
  Left:   UDBHAV'26 wordmark + event details (date, venue)
  Center: Quick links (all page sections + separate pages)
  Right:  Contact info + social links

Bottom bar: "© 2026 Alta School of Technology · Sage University, Indore"
            IBM Plex Mono 11px, --text-muted
```

---

### PAGE 2 — Round 2 Registration ( `/register` )

```
Layout: max-width: 720px, centered, generous top padding

Page header:
  "Round 2 Registration"  — Syne 800 48px
  Subtext: "For shortlisted teams only. 50 teams compete."

Registration Flow (numbered steps at top):
  6 steps displayed as a horizontal step tracker
  Completed steps: filled amber circle
  Current step: amber ring
  Future steps: ghost circle
  Step labels below each circle in DM Sans 12px

Round 1 CTA banner:
  Dark card with amber left border
  "Not shortlisted yet? Start with Round 1 on Unstop"
  Button: opens Unstop link in new tab
  Deadline notice: "Round 1 deadline: 10 April 2026"

--- FORM ---

Section labels: IBM Plex Mono 11px, --amber, uppercase, margin-bottom: 8px

Team Info block:
  Team Name (text)
  College Name (text)
  Branch (text)
  Year of Study (select: 1st–4th Year)

Team Leader block:
  Full Name, Email, Phone (+91 format)

Member 2 (mandatory):
  Full Name, Email, Phone
  
Members 3 & 4 (optional):
  Initially hidden
  "+ Add Member" button (amber outlined, Lucide PlusCircle icon)
  Clicking reveals the next member block with slide-down animation

Mentor & Payment block:
  Checkbox: "I want a Mentor Session (+ ₹300)"
  Total Payable display: "₹800" or "₹1,100" — IBM Plex Mono 32px, --amber
  Updates instantly on checkbox toggle

Agreement checkboxes:
  Both mandatory before Pay button enables
  Custom styled checkboxes (amber fill when checked)

Pay Now button:
  Full width, bg: --amber, color: --bg-void, Syne 700 18px
  Disabled state: --ghost bg, cursor: not-allowed
  Enabled state: amber glow box-shadow

Input field style:
  bg: --bg-elevated
  border: 1px solid --border-dim
  color: --text-primary
  border-radius: 4px
  focus: border-color: --amber, outline: none
  placeholder: --text-muted
```

---

### PAGE 3 — PS Drop ( `/ps` )

```
This page has 4 distinct states. All share the same dark, high-tension aesthetic.

--- STATE 1: PRE-DROP ---
bg: --bg-void with slow pulsing crimson radial glow (very subtle, keyframe animation)

Top: "PROBLEM STATEMENT DROP" — Bebas Neue 72px
Subtext: "Stay sharp. Enter your Team Code when the drop opens."

Countdown timer (large, center of screen):
  IBM Plex Mono 80px, --text-primary
  Format: HH : MM : SS
  Label below each unit: HOURS / MINUTES / SECONDS — 11px --text-muted

Bottom message:
  "PS Drop opens at 10:45 AM on 25 April 2026"
  "Have your Team Code ready — check your confirmation email."

--- STATE 2: ACTIVE (10:45–11:00 AM) ---
Top alert bar (full width): 
  bg: --crimson, color: white
  "⚡ PS DROP IS LIVE — 15 minutes remaining — Select your Problem Statement now"
  Countdown: MM:SS in IBM Plex Mono

Team Code input:
  Large centered input, placeholder: "Enter your 6-character Team Code (e.g. UDB-7K3X)"
  border: 2px solid --amber
  "Verify Code" button → amber filled

After verification — 10 PS Cards appear (grid 2×5 on desktop, 1 col mobile):
  Card: 
    PS number (IBM Plex Mono, --text-muted)
    PS Title (Syne 700, --text-primary)
    Slots remaining: "3 / 5 slots left" — color shifts: green (5) → amber (3) → red (1) → gray (full)
    "Select This PS" button
    
    If full: card opacity: 0.5, "FULL" badge (crimson), button disabled
    
  Slot count updates every 3–5 seconds (polling or WebSocket)
  When a slot changes, the count flickers with a brief amber flash animation

Confirmation modal:
  bg: --bg-surface, border: 1px solid --amber
  "Confirm Selection"
  "[PS Title]"
  Warning: "This cannot be changed after confirmation."
  Two buttons: "Confirm" (amber filled) | "Cancel" (outlined)

--- STATE 3: CLOSED ---
  Centered message:
  "SELECTION CLOSED" — Bebas Neue 64px, --crimson
  "PS selection has ended. Check your team email for your assigned problem statement."

--- STATE 4: ALREADY SELECTED ---
  Shows team's chosen PS in a large highlighted card
  Amber border, checkmark icon, PS title prominent
  "Your team has locked in this PS. Good luck."
```

---

### PAGE 4 — Code of Conduct ( `/conduct` )

```
Layout: editorial, max-width: 680px, centered

Header:
  "Code of Conduct" — Syne 800 56px
  "UDBHAV'26 · Sage University, Indore" — IBM Plex Mono 12px, --amber

Content: placeholder for text provided by Prince/Rishabh
  Paragraph style: DM Sans 16px, --ice, line-height: 1.9
  Section headings: Syne 600 20px, --text-primary
  Key rules: left border accent (3px --amber), padding-left 16px
```

---

### PAGE 5 — Winners ( `/winners` )

```
--- DEFAULT STATE (unpublished) ---
  "RESULTS PENDING" — Bebas Neue 80px, --text-muted
  Blurred/redacted winner cards with "????" placeholders
  Card outlines visible but content is ghost/skeleton

--- PUBLISHED STATE ---
  Confetti burst on page load (use canvas-confetti library)
  
  Header: "WINNERS" — Bebas Neue 100px, amber gradient
  Subtext: "UDBHAV'26 · 26 April 2026"

  1st Place:  Large card, amber border glow, trophy icon
  2nd Place:  Medium card, silver border
  3rd Place:  Smaller card, --ghost border

  Each card:
    Rank label (IBM Plex Mono), Team name (Syne 800), Members list (DM Sans)
    Prize amount (IBM Plex Mono --amber), PS Title below

  Special mentions / track prizes: smaller cards below the podium
```

---

## 📌 Reference Sites for UI Inspiration

Pull inspiration (don't copy) from:

| Site | What to steal |
|---|---|
| `linear.app` | Dark surface hierarchy, typography scale, nav blur effect |
| `raycast.com` | Subtle gradient orbs on dark, spotlight-style section reveals |
| `liveblocks.io` | Grid layout energy, dark cards with subtle borders |
| `clerk.dev` | Form UI on dark — input focus states, step flows |
| `buildspace.so` | Raw hacker community energy, bold headline treatment |
| `hack.mit.edu` | Hackathon-specific layout ideas |
| `resend.com` | Clean dark footer, typography hierarchy |

---

## ✅ Build Order (Public Pages)

1. **Set up design tokens** — CSS variables, font imports, global styles
2. **Navbar + Footer** — shared layout shell
3. **Hero section** — most important first impression
4. **Stats Bar** — counter animation
5. **About + Tracks** — content sections
6. **Timeline** — visual vertical timeline
7. **Sponsors + Contact** — simpler sections
8. **`/register`** — form with Razorpay (UI only first, wire later)
9. **`/ps`** — all 4 states, static first
10. **`/conduct`** — placeholder content
11. **`/winners`** — both states with confetti

---

## 🔑 Key Design Rules (Non-Negotiable)

- Never use `Inter`, `Roboto`, or `Arial` anywhere in this project
- No purple gradients on white backgrounds
- All number displays use `IBM Plex Mono`
- Section entry animation: `translateY(24px) + opacity: 0` → default, triggered by IntersectionObserver
- Mobile-first responsive: all sections must work at 375px width
- The hero headline (`UDBHAV'26`) must be the single largest typographic element on the entire site
- The PS Drop page must feel like genuine tension — crimson, monospace, countdown urgency
