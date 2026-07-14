import type { Metadata } from "next";
import "./globals.css";
import LocalBusinessSchema from "../components/LocalBusinessSchema";


export const metadata: Metadata = {

  title:
    "TipDash Rubbish Removal | Gold Coast Rubbish Removal",

  description:
    "TipDash provides fast and reliable rubbish removal across the Gold Coast. Household rubbish, green waste, furniture removal, property clean outs and more.",

  keywords: [
    "Gold Coast rubbish removal",
    "rubbish removal Gold Coast",
    "junk removal Gold Coast",
    "green waste removal Gold Coast",
    "furniture removal Gold Coast",
    "TipDash",
  ],


  openGraph: {

    title:
      "TipDash Rubbish Removal | Gold Coast",

    description:
      "Reliable rubbish removal services across the Gold Coast. Get a fast quote today.",

    type:
      "website",

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