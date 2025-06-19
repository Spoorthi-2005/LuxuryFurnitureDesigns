import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords = 'luxury furniture, custom furniture, interior design, handcrafted furniture, premium furniture',
  image = '/og-image.jpg',
  url,
  type = 'website'
}: SEOProps) {
  const [location] = useLocation();
  const currentUrl = url || `https://blackhorsefurnitures.com${location}`;
  const fullTitle = `${title} | Blackhorse Furnitures - Luxury Custom Furniture`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateOrCreateMeta = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);
    updateOrCreateMeta('author', 'Blackhorse Furnitures');
    updateOrCreateMeta('robots', 'index, follow');

    // Open Graph tags
    updateOrCreateMeta('og:title', fullTitle, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:image', image, true);
    updateOrCreateMeta('og:url', currentUrl, true);
    updateOrCreateMeta('og:type', type, true);
    updateOrCreateMeta('og:site_name', 'Blackhorse Furnitures', true);

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image', true);
    updateOrCreateMeta('twitter:title', fullTitle, true);
    updateOrCreateMeta('twitter:description', description, true);
    updateOrCreateMeta('twitter:image', image, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, currentUrl, type, fullTitle]);

  return null;
}

// JSON-LD Structured Data for better SEO
export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://blackhorsefurnitures.com/#organization",
          "name": "Blackhorse Furnitures",
          "url": "https://blackhorsefurnitures.com",
          "logo": "https://blackhorsefurnitures.com/logo.png",
          "description": "Premium luxury furniture manufacturer specializing in handcrafted custom furniture for homes, hotels, and restaurants.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "telephone": "+91-9718978337",
          "sameAs": [
            "https://wa.me/919718978337"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://blackhorsefurnitures.com/#website",
          "url": "https://blackhorsefurnitures.com",
          "name": "Blackhorse Furnitures",
          "description": "Luxury Custom Furniture - Handcrafted Excellence",
          "publisher": {
            "@id": "https://blackhorsefurnitures.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://blackhorsefurnitures.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://blackhorsefurnitures.com/#business",
          "name": "Blackhorse Furnitures",
          "image": "https://blackhorsefurnitures.com/hero-image.jpg",
          "telephone": "+91-9718978337",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6139",
            "longitude": "77.2090"
          },
          "url": "https://blackhorsefurnitures.com",
          "sameAs": [
            "https://wa.me/919718978337"
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}

// Breadcrumb structured data
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  useEffect(() => {
    if (items.length === 0) return;

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    let script = document.querySelector('script[data-breadcrumb="true"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-breadcrumb', 'true');
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(breadcrumbData);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [items]);

  return null;
}

// Product structured data for furniture items
export function ProductStructuredData({ 
  name, 
  description, 
  image, 
  price, 
  currency = 'INR' 
}: {
  name: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
}) {
  useEffect(() => {
    const productData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "description": description,
      "image": image,
      "brand": {
        "@type": "Brand",
        "name": "Blackhorse Furnitures"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Blackhorse Furnitures"
      },
      ...(price && {
        "offers": {
          "@type": "Offer",
          "price": price,
          "priceCurrency": currency,
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Blackhorse Furnitures"
          }
        }
      })
    };

    let script = document.querySelector('script[data-product="true"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-product', 'true');
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(productData);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [name, description, image, price, currency]);

  return null;
}