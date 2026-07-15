const areas = [
  {
    title: "Central Gold Coast",
    suburbs: [
      "Ashmore",
      "Benowa",
      "Southport",
      "Bundall",
      "Surfers Paradise",
      "Broadbeach",
      "Carrara",
      "Molendinar",
    ],
  },
  {
    title: "Southern Gold Coast",
    suburbs: [
      "Burleigh Heads",
      "Burleigh Waters",
      "Miami",
      "Palm Beach",
      "Currumbin",
      "Tugun",
      "Coolangatta",
    ],
  },
  {
    title: "Western Gold Coast",
    suburbs: [
      "Robina",
      "Varsity Lakes",
      "Mudgeeraba",
      "Merrimac",
      "Reedy Creek",
      "Nerang",
      "Worongary",
    ],
  },
  {
    title: "Northern Gold Coast",
    suburbs: [
      "Helensvale",
      "Oxenford",
      "Arundel",
      "Labrador",
      "Coomera",
      "Upper Coomera",
      "Pimpama",
      "Ormeau",
    ],
  },
];


export default function ServiceAreas() {
  return (
    <section className="bg-tipdash-light px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-black">
          Gold Coast Rubbish Removal Areas
        </h2>


        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700">
          TipDash provides reliable rubbish removal across the Gold Coast,
          helping homes, businesses and properties clear unwanted items
          throughout the region.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {areas.map((area) => (

            <div
              key={area.title}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <h3 className="text-2xl font-bold text-tipdash-dark">
                {area.title}
              </h3>


              <div className="mt-5 flex flex-wrap gap-2">

                {area.suburbs.map((suburb) => (

                  <span
                    key={suburb}
                    className="rounded-full bg-tipdash-light px-3 py-1 text-sm text-gray-700"
                  >
                    {suburb}
                  </span>

                ))}

              </div>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}