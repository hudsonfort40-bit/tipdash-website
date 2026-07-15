const services = [
  {
    icon: "🏠",
    title: "Household Rubbish Removal",
    description:
      "Old furniture, appliances, general household waste and unwanted items removed quickly so you can enjoy your space again.",
  },
  {
    icon: "🌿",
    title: "Green Waste Removal",
    description:
      "Garden clean-ups, branches, palm fronds and other green waste removed to help keep your property looking its best.",
  },
  {
    icon: "🛋️",
    title: "Furniture & Appliance Removal",
    description:
      "Couches, beds, fridges, washing machines and bulky items removed without the heavy lifting or hassle.",
  },
  {
    icon: "🧹",
    title: "Property Clean Outs",
    description:
      "End of lease, rental, estate and full property clean ups handled with care, efficiency and respect.",
  },
  {
    icon: "🏢",
    title: "Builders & Businesses",
    description:
      "Reliable rubbish removal solutions for builders, businesses and property managers who need the job done properly.",
  },
  {
    icon: "♻️",
    title: "Responsible Disposal",
    description:
      "We aim to recycle and divert as much waste as possible, helping reduce landfill and give unwanted items a better outcome.",
  },
];

export default function Services() {
  return (
    <section className="bg-tipdash-light px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-black">
          Our Rubbish Removal Services
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700">
          From single-item pickups to full property clean outs, TipDash helps
          Gold Coast homes, businesses and property managers clear unwanted
          items quickly, responsibly and hassle-free.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="text-4xl">
                {service.icon}
              </div>


              <h3 className="mt-4 text-xl font-bold text-tipdash-dark">
                {service.title}
              </h3>


              <p className="mt-3 leading-relaxed text-gray-700">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}