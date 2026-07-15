export default function Hero() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-10 text-center">

      <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-black sm:text-6xl">
        Gold Coast
        <br />
        Rubbish Removal
        <br />
        Made Simple
      </h1>


      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
        We remove unwanted rubbish, furniture, green waste and more —
        helping Gold Coast homes and businesses clear their spaces quickly,
        responsibly and hassle-free.
      </p>



      <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">

        <a
          href="#quote"
          className="rounded-lg bg-tipdash-dark px-10 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Get Your Free Quote
        </a>


        <a
          href="tel:+61481767433"
          className="rounded-lg border-2 border-black px-10 py-4 font-semibold text-black transition hover:bg-tipdash-light"
        >
          Call 0481 767 433
        </a>

      </div>



      <div className="mt-10 flex flex-col gap-3 text-sm font-semibold text-black sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">

        <p>
          ✓ Local Gold Coast Team
        </p>

        <p>
          ✓ Honest Pricing
        </p>

        <p>
          ✓ Fast Response Times
        </p>

        <p>
          ✓ Responsible Disposal
        </p>

      </div>


    </section>
  );
}