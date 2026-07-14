export default function QuoteCTA() {
  return (
    <section className="bg-tipdash-dark px-6 py-20 text-center">

      <div className="mx-auto max-w-4xl">


        <h2 className="text-4xl font-bold text-white">
          Need Rubbish Gone?
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Get a fast quote from your local Gold Coast rubbish removal team.
          Send us photos of the job and we’ll get back to you quickly.
        </p>



        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">


          <a
            href="#quote"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-tipdash-dark hover:bg-tipdash-light"
          >
            Get Your Free Quote
          </a>



          <a
            href="tel:+61481767433"
            className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-tipdash-dark"
          >
            Call TipDash
          </a>


        </div>


      </div>


    </section>
  );
}