import Image from "next/image";

export default function Audience() {
  const greenTextClassName =
    "text-[#12b76a] font-semibold uppercase text-xs mb-4";
  return (
    <section id="audience" className="bg-[#FFF] mx-auto py-20 md:py-20 ">
      <div className="w-19/20 mx-auto">
        <div id="audience--header" className="md:w-1/2">
          <p className={greenTextClassName}>
            more than a product, a soluion! - who it is for?
          </p>
          <h2 className="text-[#12263F] text-2xl/6 font-semibold mb-8">
            Confidence for everyday gas users
          </h2>
        </div>
        <div id="audience--cards">
          <div
            id="audience--card"
            className="md:w-1/3 md:mb-0 mb-8 border border-[#E6E8EC] rounded-lg p-4"
          >
            <Image
              src="/card-one.png"
              alt="Household Scene"
              width={380}
              height={230}
              className="rounded-xl mb-4"
            />
            <p className={greenTextClassName}>households</p>
            <p className="text-[#12263F] text-sm mt-4">
              You sleep at night, and leave for work, knowing your home is safe
              from leakages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
