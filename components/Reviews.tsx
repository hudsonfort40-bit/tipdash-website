const reviews = [
  {
    name: "Jason O.",
    review:
      "Great service, fit young guys that did a great job taking my heavy junk to the tip. They also did a delivery job for me.",
  },
  {
    name: "Michael M.",
    review:
      "Great service, very friendly guys would definitely use them again.",
  },
  {
    name: "Sayed H.",
    review:
      "Extremely satisfied with his job!!",
  },
];


export default function Reviews() {
  return (
    <section className="bg-tipdash-light px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-black">
          Trusted by Gold Coast Locals
        </h2>


        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700">
          From small rubbish pickups to larger clean outs, we focus on making
          every job simple, stress-free and done properly.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="text-lg">
                ⭐⭐⭐⭐⭐
              </div>


              <p className="mt-5 leading-relaxed text-gray-700">
                "{review.review}"
              </p>


              <div className="mt-6">
                <h3 className="font-bold text-tipdash-dark">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Gold Coast Customer
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}