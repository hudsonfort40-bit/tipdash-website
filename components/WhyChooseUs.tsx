const reasons = [
  {
    title: "Local Team You Can Trust",
    description:
      "We are a Gold Coast owned and operated team that takes pride in helping our local community clear unwanted items and reclaim their spaces.",
  },
  {
    title: "Simple & Stress-Free Removal",
    description:
      "From small pickups to full clean outs, we make rubbish removal easy with clear communication and a hassle-free process.",
  },
  {
    title: "Responsible Disposal",
    description:
      "We aim to recycle and divert as much waste as possible, helping reduce landfill and give unwanted items a better outcome.",
  },
  {
    title: "Honest Upfront Pricing",
    description:
      "Clear quotes before the job starts, so you know what to expect without surprise costs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-black">
          Why Gold Coast Locals Choose TipDash
        </h2>


        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700">
          More than just rubbish removal — we help homes, businesses and
          property managers clear unwanted items with care, reliability and
          responsible disposal.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-gray-200 bg-tipdash-light p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <h3 className="text-xl font-bold text-tipdash-dark">
                {reason.title}
              </h3>


              <p className="mt-3 leading-relaxed text-gray-700">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}