import Script from "next/script";

const faqs = [
  {
    question: "How much does rubbish removal cost?",
    answer:
      "Pricing depends on the amount of rubbish, type of waste, access and disposal requirements. Send us photos of the job and we can provide a quick quote.",
  },
  {
    question: "What types of rubbish do you remove?",
    answer:
      "We remove household rubbish, furniture, appliances, green waste, property clean-outs and commercial rubbish.",
  },
  {
    question: "Do I need to be home for the removal?",
    answer:
      "Not always. If we have clear instructions and access to the rubbish, we can often complete the job while you’re away.",
  },
  {
    question: "How quickly can you complete a job?",
    answer:
      "We offer flexible availability and will always try to arrange a time that works best for you. For urgent jobs, contact us and we’ll let you know what’s possible.",
  },
  {
    question: "Can I get a quote without someone coming out?",
    answer:
      "Yes. For many jobs, photos and a description are enough for us to provide an accurate quote before arriving.",
  },
  {
    question: "Do you service the entire Gold Coast?",
    answer:
      "Yes. TipDash services suburbs across the Gold Coast, including central, northern, southern and western areas.",
  },
  {
    question: "Do you recycle or reuse items where possible?",
    answer:
      "Yes. We aim to recycle and divert as much waste as possible, and where items can be reused or donated, we look for better options before disposal.",
  },
];

export default function FAQ() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };


  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />


      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
            Have questions about our rubbish removal service? We’ve answered
            some of the most common questions below.
          </p>


          <div className="mt-12 grid gap-5">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group overflow-hidden rounded-xl bg-tipdash-light shadow-sm transition hover:shadow-md"
              >

                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-lg font-bold text-tipdash-dark">

                  <span>
                    {faq.question}
                  </span>


                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tipdash-dark text-xl font-bold text-white transition-transform duration-300 group-open:rotate-180">

                    <span className="group-open:hidden">
                      +
                    </span>


                    <span className="hidden group-open:block">
                      −
                    </span>

                  </span>

                </summary>


                <div className="bg-white px-6 pb-6 pt-6">

                  <p className="leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>

                </div>


              </details>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}