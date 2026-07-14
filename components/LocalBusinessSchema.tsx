export default function LocalBusinessSchema() {

  const schema = {

    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: "TipDash Rubbish Removal",

    description:
      "Fast and reliable rubbish removal across the Gold Coast including household rubbish removal, green waste removal, furniture removal, property clean outs and commercial rubbish removal.",

    url:
      "https://tipdash.com.au",

    telephone:
      "+61481767433",

    email:
      "tipdashrr@gmail.com",


    address: {

      "@type":
        "PostalAddress",

      addressLocality:
        "Gold Coast",

      addressRegion:
        "QLD",

      addressCountry:
        "AU",

    },


    areaServed: {

      "@type":
        "City",

      name:
        "Gold Coast",

    },


    serviceType: [

      "Rubbish Removal",

      "Green Waste Removal",

      "Furniture Removal",

      "Property Clean Outs",

      "Commercial Rubbish Removal",

    ],


  };


  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{

        __html:
          JSON.stringify(schema),

      }}

    />

  );

}