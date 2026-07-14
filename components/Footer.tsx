export default function Footer() {
  return (
    <footer className="bg-tipdash-dark px-6 py-12 text-white">

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">


        <div>

          <h2 className="text-2xl font-bold">
            TipDash Rubbish Removal
          </h2>


          <p className="mt-4 text-white/80">
            Fast and reliable rubbish removal across the Gold Coast.
            Helping homes, businesses and property managers clear unwanted
            rubbish quickly.
          </p>

        </div>





        <div>

          <h3 className="text-xl font-bold">
            Contact TipDash
          </h3>


          <div className="mt-4 space-y-3 text-white/80">


            <p>
              📍 Gold Coast, Queensland
            </p>


            <p>
              ✉️ tipdashrr@gmail.com
            </p>


            <a
              href="tel:+61481767433"
              className="block hover:text-white"
            >
              📞 0481 767 433
            </a>


          </div>


        </div>






        <div>

          <h3 className="text-xl font-bold">
            Services
          </h3>


          <ul className="mt-4 space-y-2 text-white/80">


            <li>
              Household Rubbish Removal
            </li>


            <li>
              Green Waste Removal
            </li>


            <li>
              Furniture Removal
            </li>


            <li>
              Property Clean Outs
            </li>


            <li>
              Commercial Rubbish Removal
            </li>


          </ul>


        </div>


      </div>





      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/70 sm:flex-row">


        <p>
          © {new Date().getFullYear()} TipDash Rubbish Removal. All rights reserved.
        </p>



        <div className="flex gap-4">


          <a
            href="/privacy-policy"
            className="hover:text-white"
          >
            Privacy Policy
          </a>


          <a
            href="/terms"
            className="hover:text-white"
          >
            Terms & Conditions
          </a>


        </div>


      </div>


    </footer>
  );
}