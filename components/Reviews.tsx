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
          What Our Customers Say
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
          We pride ourselves on providing reliable rubbish removal with great
          service from start to finish.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {reviews.map((review) => (

            <div
              key={review.name}
              className="rounded-xl border-2 border-black bg-white p-6 shadow-sm"
            >

              <div className="text-xl">
                ⭐⭐⭐⭐⭐
              </div>


              <p className="mt-4 text-gray-700">
                "{review.review}"
              </p>


              <h3 className="mt-5 font-bold text-tipdash-dark">
                {review.name}
              </h3>

            </div>

          ))}


        </div>


      </div>

    </section>
  );
}