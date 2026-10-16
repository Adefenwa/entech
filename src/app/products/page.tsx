import Link from "next/link";
import Image from "next/image";
import { MoonStar, ShieldCheck, Vibrate } from "lucide-react";

export default function Products() {
  const greenTextClassName =
    "text-[#12b76a] font-semibold uppercase text-xs mb-4";

  return (
    <main id="wrapper" className="mt-5">
      <section id="switch" className="bg-[#FAF8F4]  px-4 py-10 ">
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
      <section
        id="hero"
        className="bg-white mx-auto outline outline-[#12263f]/30 px-4 py-4 md:py-8 md:flex md:justify-between md:gap-4 md:items-center"
      >
        <div className="md:w-1/2">
          <div className="bg-amber-100 px-4 py-2 rounded-full flex gap-2 items-center cursor-pointer my-8 hover:bg-amber-100/50 transition-colors w-fit">
            <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
            <p className="text-[#12263f] text-xs font-thin">
              Early Access. Free demo
            </p>
          </div>
          <h1 className="text-3xl font-bold text-[#12263f] my-4">
            Know about gas leaks at home or away.
          </h1>
          <p className="text-[#12263f] font-thin text-sm sm:text-base mb-7 ">
            The detector sounds a loud alarm when gas is detected and can send a
            phone alert over Wi-Fi, so you can check in while away.
          </p>
          <p className="text-xs text-[#12263f]/50">
            Early-access concept for an in-person demo. Product form may change.
          </p>
        </div>

        <div id="image" className="my-8 md:w-1/2 flex justify-center">
          <Image
            src="/product-one.jpeg"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-2xl"
          />
        </div>
      </section>
      <section id="advantages" className="bg-white py-10">
        <div id="container" className="w-19/20 mx-auto">
          <p className={greenTextClassName}>how it betters your life</p>
          <h2 className="text-[#12263F] text-2xl/6 font-semibold mb-2">
            Everyday confidence, made clear
          </h2>
          <div
            id="merit-cards"
            className="my-4 md:flex md:justify-between md:gap-4"
          >
            <div
              id="merit-card"
              className="w-1/3 p-4 outline outline-[#12263f]/30 rounded-2xl my-4"
            >
              <MoonStar
                size={30}
                color="#12b76a"
                strokeWidth={2}
                className="bg-[#12b76a]/10 p-2 rounded-full"
              />
              <p className="text-[#12263f] text-lg font-bold my-4">
                Sleep without worry
              </p>
            </div>
            <div
              id="merit-card"
              className="w-1/3 p-4 outline outline-[#12263f]/30 rounded-2xl my-4"
            >
              <Vibrate
                size={30}
                color="#12b76a"
                strokeWidth={2}
                className="bg-[#12b76a]/10 p-2 rounded-full"
              />
              <p className="text-[#12263f] text-lg font-bold my-4">
                Alerted even when away.
              </p>
            </div>
            <div
              id="merit-card"
              className="w-1/3 p-4 outline outline-[#12263f]/30 rounded-2xl my-4"
            >
              <ShieldCheck
                size={30}
                color="#12b76a"
                strokeWidth={2}
                className="bg-[#12b76a]/10 p-2 rounded-full"
              />
              <p className="text-[#12263f] text-lg font-bold my-4">
                Protect family and property
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features"></section>
    </main>
  );
}
