import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
    const location = useLocation();
    const siteUrl = "https://amolashtekarandsons.com";

    // Page-specific SEO data based on route
    const pageSEO = {
        '/': {
            title: 'Best Jewellery Store in Nashik | Amol Ashtekar & Sons | BIS Hallmarked Gold',
            description: "Nashik's Premier Jewellers Since 1971. BIS Hallmarked 22K Gold, Diamond Jewellery, Bridal Sets & Silver Articles. 2 Showrooms in Nashik Road. Gold Exchange Available.",
            keywords: 'jewellery stores in Nashik, best jewellers Nashik, gold jewellery Nashik, BIS hallmarked gold, Amol Ashtekar, Nashik Road jewellery'
        },
        '/collections': {
            title: 'Gold & Diamond Jewellery Collection Nashik | Amol Ashtekar & Sons',
            description: 'Explore our exclusive collection of BIS hallmarked gold, diamond rings, necklaces, bangles & traditional Maharashtrian jewellery. Visit our Nashik showrooms.',
            keywords: 'gold jewellery collection Nashik, diamond jewellery Nashik, traditional jewellery Nashik, jewellery showroom Nashik Road'
        },
        '/bridal-jewellery': {
            title: 'Bridal Jewellery Nashik | Wedding Jewellery Sets | Amol Ashtekar & Sons',
            description: 'Complete bridal jewellery sets in Nashik. 22K gold, diamond & traditional Maharashtrian wedding jewellery. Custom designs available. Visit us at Nashik Road.',
            keywords: 'bridal jewellery Nashik, wedding jewellery Nashik, Maharashtrian bridal jewellery, bridal jewellery sets Nashik, wedding jewellery showroom Nashik'
        },
        '/about-us': {
            title: 'About Amol Ashtekar & Sons | Trusted Nashik Jewellers Since 1971',
            description: 'Family-owned jewellers serving Nashik for 50+ years. 40,000+ happy customers. BIS certified, HUID compliant. Located in Anand Mall & Esteem Tower, Nashik Road.',
            keywords: 'trusted jewellers Nashik, family jewellers Nashik, BIS certified jewellers Nashik, jewellery stores Nashik Road'
        },
        '/services': {
            title: 'Jewellery Services Nashik | Gold Exchange, Custom Design & Repair',
            description: 'Professional jewellery services in Nashik: Old gold exchange at best rates, custom bridal designs, jewellery repair & BIS hallmarking. Visit our Nashik Road showrooms.',
            keywords: 'gold exchange Nashik, custom jewellery design Nashik, jewellery repair Nashik, old gold exchange Nashik'
        },
        '/contact-us': {
            title: 'Contact Amol Ashtekar & Sons | Jewellery Showrooms in Nashik Road',
            description: 'Visit our jewellery showrooms: Shop 5&6 Anand Mall & Shop 4 Esteem Tower, Nashik Road. Call: 9822733333. Best jewellery store in Nashik since 1971.',
            keywords: 'jewellery showroom Nashik Road, jewellery store Anand Mall, jewellers Esteem Tower, contact jewellers Nashik'
        }
    };

    // Get current page SEO or use defaults
    const currentPage = pageSEO[location.pathname] || {};
    const defaultTitle = "Amol Ashtekar & Sons | Best Jewellers in Nashik";
    const defaultDescription = "Amol Ashtekar & Sons - Nashik's Trusted Jewellers Since 1971 | BIS Hallmarked 22K Gold, Diamond & Bridal Jewellery | 2 Showrooms in Nashik Road | Gold Exchange, Custom Designs & Wedding Sets | Visit Our Anand Mall & Esteem Tower Locations";
    const defaultKeywords = "Jewellery Stores in Nashik, Best Jewellers Nashik, BIS Hallmarked Gold Jewellery Nashik, Bridal Jewellery Nashik, Diamond Rings Nashik, 22K Gold Nashik, Gold Exchange Nashik, Wedding Jewellery Nashik, Traditional Maharashtrian Jewellery, Jewellery Showroom Nashik Road, Amol Ashtekar Nashik, Custom Bridal Sets Nashik, Silver Articles Nashik";

    const pageTitle = title || currentPage.title || defaultTitle;
    const pageDescription = description || currentPage.description || defaultDescription;
    const pageKeywords = keywords || currentPage.keywords || defaultKeywords;
    const pageUrl = canonicalUrl || `${siteUrl}${location.pathname}`;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="google-site-verification" content="googlee74ce199ab18043b" />
            <link rel="canonical" href={pageUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />

            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ET9272RFW"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-9ET9272RFW');
                `}
            </script>

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
                            "streetAddress": "Shop No 5 & 6, Anand Mall, Near Kanya Kothari School, Jail Road",
                            "addressLocality": "Nashik Road",
                            "postalCode": "422101",
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
