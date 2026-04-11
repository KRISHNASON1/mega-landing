export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MEGA Enterprise",
    "url": "https://megaenterprise.in",
    "logo": "https://megaenterprise.in/logo.png",
    "description": "Authorized supplier of electrical, safety & industrial materials. GeM approved vendor serving major clients across India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 57, Opp M.I.D.C Water Tank, TALOJA",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "410208",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7506070157",
        "contactType": "sales",
        "email": "nirmal@megaenterprise.in",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8591169113",
        "contactType": "customer service",
        "email": "kailash@megaenterprise.in"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({ name, description, image, brand }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "image": image || "https://megaenterprise.in/logo.png",
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": brand || "MEGA Enterprise"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SpeakableSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "MEGA Enterprise Industrial Supplier",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#hero-headline", "#about-snippet"]
    },
    "url": "https://megaenterprise.in"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SiteLinksSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MEGA Enterprise",
    "url": "https://megaenterprise.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://megaenterprise.in/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
