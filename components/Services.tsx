const services = [
  {
    title: "Household Rubbish Removal",
    description:
      "Unwanted furniture, appliances, general household waste and more removed quickly and efficiently.",
  },
  {
    title: "Green Waste Removal",
    description:
      "Garden clean-ups, branches, palm fronds and other green waste taken care of.",
  },
  {
    title: "Furniture Removal",
    description:
      "Couches, beds, tables and bulky items removed without the hassle.",
  },
  {
    title: "Property Clean Outs",
    description:
      "End of lease, rental, estate and full property clean-ups across the Gold Coast.",
  },
  {
    title: "Commercial Rubbish Removal",
    description:
      "Reliable rubbish removal solutions for builders, businesses and property managers.",
  },
];

export default function Services() {
  return (
    <section className="bg-tipdash-light px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-black">
          Our Rubbish Removal Services
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
          Reliable rubbish removal across the Gold Coast for homes, businesses
          and property managers.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border-2 border-black bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-tipdash-dark">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}