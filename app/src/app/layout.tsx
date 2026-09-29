import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Replacement Number Plates from £12.49 | Royal Mail Delivery",
  description:
    "Order replacement number plates online from £12.49 per plate. Standard, 3D, 4D, 5D, Ghost and Bevel styles from a DVLA-registered supplier. Royal Mail delivery or Ilford collection.",
  keywords: [
    "replacement number plates",
    "number plates UK",
    "DVLA registered",
    "Royal Mail delivery plates",
    "3D number plates",
    "4D number plates",
  ],
  openGraph: {
    title: "Replacement Number Plates from £12.49 | ReplacementPlates.uk",
    description:
      "DVLA-registered number plate supplier. Standard, 3D, 4D, 5D, Ghost & Bevel styles. Royal Mail delivery UK-wide or Ilford collection.",
    type: "website",
    locale: "en_GB",
    siteName: "ReplacementPlates.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Replacement Number Plates from £12.49",
    description: "DVLA-registered. Royal Mail delivery or Ilford collection.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://replacementplates.uk/#organization",
      name: "ReplacementPlates",
      legalName: "Private Number Plate Maker Ltd",
      url: "https://replacementplates.uk/",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Stand 53, New Spitalfields Market, 1 Sherrin Road",
        addressLocality: "London",
        postalCode: "E10 5SQ",
        addressCountry: "GB",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://replacementplates.uk/#website",
      url: "https://replacementplates.uk/",
      name: "ReplacementPlates",
      publisher: { "@id": "https://replacementplates.uk/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-white">
        {children}
      </body>
    </html>
  );
}
