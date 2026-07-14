const steps = [
  {
    number: "01",
    title: "Send Photos",
    description:
      "Send us photos of your rubbish and let us know what needs removing.",
  },
  {
    number: "02",
    title: "Get Your Quote",
    description:
      "We’ll provide a clear upfront quote based on the job details.",
  },
  {
    number: "03",
    title: "We Remove It",
    description:
      "We arrive on time, load everything up and leave your space clean.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-tipdash-light px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-black">
          How It Works
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
          Getting rid of unwanted rubbish is simple with TipDash.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border-2 border-black bg-white p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tipdash-dark text-xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-tipdash-dark">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}