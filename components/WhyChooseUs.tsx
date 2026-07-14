const reasons = [
  {
    title: "Local Gold Coast Team",
    description:
      "We are a local rubbish removal team servicing homes, businesses and properties across the Gold Coast.",
  },
  {
    title: "Fast & Reliable Service",
    description:
      "Quick communication, flexible availability and efficient rubbish removal when you need it.",
  },
  {
    title: "Easy Quote Process",
    description:
      "Send us photos of your rubbish and we can provide a quick estimate with no complicated process.",
  },
  {
    title: "Upfront Pricing",
    description:
      "Clear quotes before the job starts, so you know exactly what to expect.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-black">
          Why Choose TipDash?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
          A reliable local rubbish removal service focused on making clean-ups
          simple and stress-free.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border-2 border-black bg-tipdash-light p-6"
            >
              <h3 className="text-xl font-bold text-tipdash-dark">
                {reason.title}
              </h3>

              <p className="mt-3 text-gray-700">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}