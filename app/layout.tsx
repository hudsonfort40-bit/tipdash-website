import type { Metadata } from "next";
import "./globals.css";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://tipdash.com.au"),

  title: {
    default: "TipDash | Rubbish Removal Gold Coast",
    template: "%s | TipDash",
  },

  description:
    "Fast, reliable and affordable rubbish removal across the Gold Coast. Household rubbish, green waste, furniture removal, property clean outs and commercial rubbish removal. Get your free quote today.",

  keywords: [
    "Rubbish Removal Gold Coast",
    "Gold Coast Rubbish Removal",
    "Green Waste Removal Gold Coast",
    "Furniture Removal Gold Coast",
    "Property Clean Out Gold Coast",
    "Commercial Rubbish Removal",
    "Junk Removal Gold Coast",
    "TipDash",
  ],

  authors: [
    {
      name: "TipDash",
    },
  ],

  creator: "TipDash",

  publisher: "TipDash",

  applicationName: "TipDash",

  category: "Rubbish Removal",

  alternates: {
    canonical: "https://tipdash.com.au",
  },

  openGraph: {
    type: "website",

    locale: "en_AU",

    url: "https://tipdash.com.au",

    siteName: "TipDash",

    title: "TipDash | Rubbish Removal Gold Coast",

    description:
      "Fast, reliable and affordable rubbish removal across the Gold Coast. Get your free quote today.",

    images: [
      {
        url: "/tipdash-logo-nobg.png",
        width: 1200,
        height: 630,
        alt: "TipDash Rubbish Removal Gold Coast",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "TipDash | Rubbish Removal Gold Coast",

    description:
      "Fast, reliable and affordable rubbish removal across the Gold Coast.",

    images: ["/tipdash-logo-nobg.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}