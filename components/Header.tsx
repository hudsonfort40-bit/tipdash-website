import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-black bg-tipdash-light px-4 py-5 shadow-sm sm:px-8">

      <Image
        src="/tipdash-logo-nobg.png"
        alt="TipDash Rubbish Removal Gold Coast"
        width={220}
        height={75}
        className="h-auto w-[170px] sm:w-[220px]"
        priority
      />


      <a
        href="#quote"
        className="rounded-lg bg-tipdash-dark px-4 py-2 text-sm font-semibold text-white hover:opacity-90 sm:px-6 sm:py-3 sm:text-base"
      >
        Get a Quote
      </a>


    </header>
  );
}