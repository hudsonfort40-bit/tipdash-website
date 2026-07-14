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
];


export default function FAQ() {
  return (
    <section className="bg-white px-6 py-20">

      <div className="mx-auto max-w-4xl">


        <h2 className="text-center text-4xl font-bold text-black">
          Frequently Asked Questions
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
          Have questions about our rubbish removal service? We’ve answered
          some of the most common questions below.
        </p>



        <div className="mt-12 grid gap-6">


          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="rounded-xl border-2 border-black bg-tipdash-light p-6"
            >

              <h3 className="text-xl font-bold text-tipdash-dark">
                {faq.question}
              </h3>


              <p className="mt-3 text-gray-700">
                {faq.answer}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}