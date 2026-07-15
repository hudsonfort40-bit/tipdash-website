const steps = [
  {
    number: "01",
    title: "Get a Quote",
    description:
      "Send photos or tell us what needs removing and we’ll provide a quick estimate.",
  },
  {
    number: "02",
    title: "Choose a Time",
    description:
      "Once you’re happy with the quote, we’ll arrange a time that works for you.",
  },
  {
    number: "03",
    title: "We Remove It",
    description:
      "We arrive, handle the heavy lifting and leave your space clean and clutter-free.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-20">
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
              className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tipdash-dark text-xl font-bold text-white">
                {step.number}
              </div>


              <h3 className="mt-6 text-2xl font-bold text-tipdash-dark">
                {step.title}
              </h3>


              <p className="mt-3 leading-relaxed text-gray-700">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}