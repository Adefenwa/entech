import Link from "next/link";
export default function Products() {
  return (
    <main id="wrapper" className="mt-5">
      <section id="switch" className="bg-white px-4 py-10 ">
        <div className="flex justify-between w-full bg-white outline outline-[#12263f]/20 p-1 rounded-md">
          <Link
            href="/"
            className="bg-[#12263F] hover:bg-[#12263f]/80 text-white font-bold w-1/2 rounded-md py-1 text-center"
          >
            Gas Leak Detector
          </Link>
          <Link
            href="/"
            className="font-thin w-1/2 rounded-md py-1 text-center"
          >
            Meter
          </Link>
        </div>
      </section>
    </main>
  );
}
