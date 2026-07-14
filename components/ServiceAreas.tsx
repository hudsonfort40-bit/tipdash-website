const areas = [
  {
    title: "Central Gold Coast",
    suburbs:
      "Ashmore • Benowa • Southport • Bundall • Surfers Paradise • Broadbeach • Carrara • Molendinar",
  },
  {
    title: "Southern Gold Coast",
    suburbs:
      "Burleigh Heads • Burleigh Waters • Miami • Palm Beach • Currumbin • Tugun • Coolangatta",
  },
  {
    title: "Western Gold Coast",
    suburbs:
      "Robina • Varsity Lakes • Mudgeeraba • Merrimac • Reedy Creek • Nerang • Worongary",
  },
  {
    title: "Northern Gold Coast",
    suburbs:
      "Helensvale • Oxenford • Arundel • Labrador • Coomera • Upper Coomera • Pimpama • Ormeau",
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
          TipDash provides reliable rubbish removal across the Gold Coast.
          From household clean-ups and green waste removal to property
          clear-outs, we service homes, businesses and properties throughout
          the region.
        </p>



        <div className="mt-12 grid gap-6 md:grid-cols-2">


          {areas.map((area) => (

            <div
              key={area.title}
              className="rounded-xl border-2 border-black bg-white p-8"
            >

              <h3 className="text-2xl font-bold text-tipdash-dark">
                {area.title}
              </h3>


              <p className="mt-4 leading-relaxed text-gray-700">
                {area.suburbs}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}