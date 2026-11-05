import { ShieldCheck } from "lucide-react";

export default function EarlyAccess() {
  const greenTextClassName =
    "text-[#12b76a] font-semibold uppercase text-xs mb-2";
  const headerClassName = "text-[#12263F] text-3xl/9 font-semibold mb-2";
  return (
    <main id="wrapper" className="mt-5 bg-[#FAF8F4] px-4 py-10 ">
      <section id="hero">
        <div className="bg-amber-100 px-4 py-2 rounded-full flex gap-2 items-center cursor-pointer my-3 hover:bg-amber-100/50 transition-colors w-fit ">
          <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
          <p className="text-[#12263f] text-xs font-thin">
            Early Access. Free in-person demo
          </p>
        </div>
        <div className="md:w-[40%]">
          <p className={greenTextClassName}>request a demo</p>
          <h1 className={headerClassName}>
            See it in perosn before you decide.
          </h1>
          <p className="text-xs/4 text-[#12263f]/80">
            Tell us what you are interested in. We will use these details to
            arrange a free demo when a unit is ready in your area.
          </p>
        </div>
      </section>
      <section
        id="notice"
        className="bg-amber-500/30 p-5 rounded-lg mt-2 outline-1 outline-amber-500"
      >
        <h3 className="text-lg font-semibold text-[#12263f] mb-2">
          Thank you for your interest in Gas Detector
        </h3>
        <p className="text-xs/4 text-[#12263f]/80 mb-2">
          EnTech is in early access with limited units. Your early-access price
          is ₦35,000.
        </p>
        <p className="text-xs/4 text-[#12263f]/80">
          Book a free in-person demo. The team brings a working device, you test
          it, then decide. You pay only after testing.
        </p>
        <div>
          <ShieldCheck size={16} color="#12b76a" strokeWidth={0.5} />
        </div>
      </section>
    </main>
  );
}
