export default function Hero() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center bg-white px-6 text-center">


      <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-black sm:text-6xl">
        Gold Coast Rubbish Removal Made Simple
      </h1>


      <p className="mt-6 max-w-2xl text-lg text-gray-700">
        Fast, reliable and affordable rubbish removal for homes, businesses
        and property managers across the Gold Coast.
      </p>



      <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">


        <a
          href="#quote"
          className="rounded-lg bg-tipdash-dark px-8 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Get Your Free Quote
        </a>



        <a
          href="tel:+61481767433"
          className="rounded-lg border-2 border-black px-8 py-3 font-semibold text-black transition hover:bg-tipdash-light"
        >
          Call 0481 767 433
        </a>


      </div>




      <div className="mt-10 grid w-full max-w-2xl gap-3 text-sm text-gray-800 sm:grid-cols-2">


        <p>
          ✓ Local Gold Coast team
        </p>


        <p>
          ✓ Fast response times
        </p>


        <p>
          ✓ Household & commercial rubbish
        </p>


        <p>
          ✓ Send photos for a quick quote
        </p>


      </div>



    </section>
  );
}