import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
    const siteTitle = "Amol Ashtekar & Sons | Best Jewellers in Nashik";
    const defaultDescription = "Amol Ashtekar & Sons - Trusted gold, silver, and gemstone jewelry in Nashik since 1971. Explore our exclusive bridal collection and purity-guaranteed ornaments.";
    const defaultKeywords = "Jewellers in Nashik, Gold Jewellery Nashik, Diamond Rings, Bridal Jewellery Nashik, 1 Gram Gold, Amol Ashtekar";
    const siteUrl = "https://amolashtekarandsons.com"; // Replace with actual domain

    return (
        <Helmet>
            <title>{title ? `${title} | Amol Ashtekar & Sons` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={canonicalUrl || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={canonicalUrl || siteUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />

            {/* Local Business Schema (JSON-LD) */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "JewelryStore",
                        "name": "Amol Ashtekar & Sons",
                        "image": "https://amolashtekarandsons.com/logo.png",
                        "@id": "https://amolashtekarandsons.com",
                        "url": "https://amolashtekarandsons.com",
                        "telephone": "+919822733333",
                        "priceRange": "₹₹",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Shop No. 4, Saraf Bazaar, Main Road",
                            "addressLocality": "Nashik",
                            "postalCode": "422001",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 19.9975, 
                            "longitude": 73.7898
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "10:30",
                            "closes": "20:30"
                        },
                        "sameAs": [
                            "https://www.facebook.com/amolashtekarandsons",
                            "https://www.instagram.com/amolashtekarandsons"
                        ]
                    }
                `}
            </script>
        </Helmet>
    );
};

export default SEO;
