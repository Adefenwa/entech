import Link from "next/link";
import Image from "next/image";
import {
  Accessibility,
  ArrowRight,
  BellRing,
  CircleCheck,
  MoonStar,
  ScanLine,
  ShieldCheck,
  Vibrate,
  Volume2,
  Wifi,
} from "lucide-react";

export default function Products() {
  const greenTextClassName =
    "text-[#12b76a] font-semibold uppercase text-xs mb-4";

  const headerClassName = "text-[#12263F] text-2xl/6 font-semibold mb-2";

  const containerClassName = "w-19/20 mx-auto";
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
        <div id="container" className={containerClassName}>
          <p className={greenTextClassName}>how it betters your life</p>
          <h2 className={headerClassName}>Everyday confidence, made clear</h2>
          <div
            id="merit-cards"
            className="my-4 md:flex md:justify-between md:gap-4"
          >
            <div
              id="merit-card"
              className="md:w-1/3 p-4 outline outline-[#12263f]/30 rounded-2xl my-4"
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
              className="md:w-1/3 p-4 outline outline-[#12263f]/30 rounded-2xl my-4"
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
              className="md:w-1/3 p-4 outline outline-[#12263f]/30 rounded-2xl my-4"
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
      <section id="features" className="bg-[#FAF8F4] py-10">
        <div id="container" className={containerClassName}>
          <p className={greenTextClassName}>features</p>
          <h2 className={headerClassName}>
            Simple tools, focused on what matters
          </h2>
          <p className="text-sm my-4 font-thin text-[#12263f]/80">
            These are the features confirmed for the current early-access
            concept.
          </p>
          <div
            id="features-cards"
            className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1"
          >
            <div
              id="features-card"
              className="bg-white p-4 rounded-lg outline outline-[#12263f]/10 shadow-lg"
            >
              <ScanLine
                size={48}
                color="#12263f"
                strokeWidth={3}
                className="bg-[#12263f]/10 p-3 rounded-full"
              />
              <p className="text-[#12263f] font-bold text-md my-3">
                Gas detection
              </p>
              <p className="w-34 flex items-center gap-1 bg-[#12b76a]/10 p-3 rounded-full uppercase text-[#12b76a] font-bold text-sm ">
                <CircleCheck size={16} color="#12b76a" strokeWidth={3} />
                Confirmed
              </p>
            </div>
            <div
              id="features-card"
              className="bg-white p-4 rounded-lg outline outline-[#12263f]/10 shadow-lg"
            >
              <Volume2
                size={48}
                color="#12263f"
                strokeWidth={3}
                className="bg-[#12263f]/10 p-3 rounded-full"
              />
              <p className="text-[#12263f] font-bold text-md my-3">
                Loud alarm
              </p>
              <p className="w-34 flex items-center gap-1 bg-[#12b76a]/10 p-3 rounded-full uppercase text-[#12b76a] font-bold text-sm ">
                <CircleCheck size={16} color="#12b76a" strokeWidth={3} />
                Confirmed
              </p>
            </div>
            <div
              id="features-card"
              className="bg-white p-4 rounded-lg outline outline-[#12263f]/10 shadow-lg"
            >
              <BellRing
                size={48}
                color="#12263f"
                strokeWidth={3}
                className="bg-[#12263f]/10 p-3 rounded-full"
              />
              <p className="text-[#12263f] font-bold text-md my-3">
                Phone alert
              </p>
              <p className="w-34 flex items-center gap-1 bg-[#12b76a]/10 p-3 rounded-full uppercase text-[#12b76a] font-bold text-sm ">
                <CircleCheck size={16} color="#12b76a" strokeWidth={3} />
                Confirmed
              </p>
            </div>
            <div
              id="features-card"
              className="bg-white p-4 rounded-lg outline outline-[#12263f]/10 shadow-lg "
            >
              <Wifi
                size={48}
                color="#12263f"
                strokeWidth={3}
                className="bg-[#12263f]/10 p-3 rounded-full"
              />
              <p className="text-[#12263f] font-bold text-md my-3">Wi-Fi</p>
              <p className="w-34 flex items-center gap-1 bg-[#12b76a]/10 p-3 rounded-full uppercase text-[#12b76a] font-bold text-sm ">
                <CircleCheck size={16} color="#12b76a" strokeWidth={3} />
                Confirmed
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="demo" className="bg-[#12263f] py-10">
        <div id="container" className={containerClassName}>
          <p className={greenTextClassName}>see how it works</p>
          <h2 className="text-white text-2xl/6 font-semibold mb-2">
            A quick look, from setup to everyday use
          </h2>
          <p className="text-gray-200 text-sm font-thin">
            A short, captioned walkthrough of the early-access demo.
          </p>
          <div
            id="row"
            className="my-4 md:flex md:items-start md:justify-between"
          >
            <div className="flex justify-center md:w-2/4 md:justify-start">
              <Image
                src="/demo-mobile.png"
                width={250}
                height={100}
                className="md:hidden"
                alt="demo video of the product"
              />
              <Image
                src="/demo-desktop.png"
                width={350}
                height={100}
                className="hidden md:block"
                alt="demo video of the product"
              />
            </div>
            <div id="storyboard" className="my-4 md:w-3/4 ">
              <div id="row" className="flex justify-between md:my-4">
                <p className="text-white font-medium text-xs">
                  Storyboard . captions
                </p>
                <p className="text-[#12b76a] text-xs">5 scenes</p>
              </div>
              <div id="captions" className="my-2">
                <div
                  id="caption"
                  className="flex items-center bg-white/10 outline outline-white/30 rounded-lg p-2 text-xs gap-2 my-2"
                >
                  <p className="text-[#12263f] font-bold bg-amber-500 py-2 px-3.5 rounded-full">
                    1
                  </p>
                  <p className="text-white">
                    Plug in, power on, scan QR, connect Wi-Fi
                  </p>
                </div>
                <div
                  id="caption"
                  className="flex items-center bg-white/10 outline outline-white/30 rounded-lg p-2 text-xs gap-2 my-2"
                >
                  <p className="text-[#12263f] font-bold bg-slate-300 py-2 px-3.5 rounded-full">
                    2
                  </p>
                  <p className="text-white">App shows green &quot;Safe&quot;</p>
                </div>
                <div
                  id="caption"
                  className="flex items-center bg-red-200 outline outline-red-600 rounded-lg p-2 text-xs gap-2 my-2"
                >
                  <p className="text-white font-bold bg-red-600 py-2 px-3.5 rounded-full">
                    3
                  </p>
                  <p className="text-red-600">
                    Leak reading rises, red alarm ring, phone alert
                  </p>
                </div>
                <div
                  id="caption"
                  className="flex items-center bg-white/10 outline outline-white/30 rounded-lg p-2 text-xs gap-2 my-2"
                >
                  <p className="text-[#12263f] font-bold bg-slate-300 py-2 px-3.5 rounded-full">
                    4
                  </p>
                  <p className="text-white">
                    Owner away at work receives notification with &quot;Call
                    contact&quot;
                  </p>
                </div>
                <div
                  id="caption"
                  className="flex items-center bg-white/10 outline outline-white/30 rounded-lg p-2 text-xs gap-2 my-2"
                >
                  <p className="text-[#12263f] font-bold bg-slate-300 py-2 px-3.5 rounded-full">
                    5
                  </p>
                  <p className="text-white">
                    End card &quot;See it in person&quot; with a button
                  </p>
                </div>
                <div
                  id="caption"
                  className="flex items-center bg-white/5 rounded-lg p-2 text-xs gap-2 my-2"
                >
                  <Accessibility size={36} color="#12b76a" strokeWidth={2} />
                  <p className="text-white">
                    Reduced-motion mode shows static scenes with captions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="early-access" className="bg-[#FAF8F4] py-10">
        <div
          id="box"
          className="w-[90%] bg-white p-3 rounded-lg shadow-lg mx-auto md:flex md:items-center md:justify-between"
        >
          <div id="row" className="md:w[70%]">
            <p className={greenTextClassName}>early access</p>
            <h2 className={headerClassName}>
              Early-access price <span className="font-sans font-bold">₦</span>
              35,000
            </h2>
            <p className="font-medium text-sm text-[#12263f] my-3">
              Free in-person demo. No payment now.
            </p>
            <p className="text-[#12263f]/80 text-xs my-3">
              Handoff. configured variants{" "}
              <span className="font-sans font-normal">₦</span>25,000 /{" "}
              <span className="font-sans font-normal">₦</span>
              35,000 / <span className="font-sans font-normal">₦</span>
              45,000. one retained per session
            </p>
          </div>
          <div id="button" className="md:w-[40%]">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-[#12263f] bg-amber-500 py-3 justify-center rounded-full"
            >
              Get the Device
              <ArrowRight color="#12263f" size={16} strokeWidth={3} />{" "}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
