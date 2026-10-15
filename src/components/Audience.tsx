import Image from "next/image";

export default function Audience() {
  const greenTextClassName =
    "text-[#12b76a] font-semibold uppercase text-xs mb-4";
  const cardClassName =
    "md:w-1/3 md:mb-0 mb-8 border border-[#E6E8EC] rounded-lg p-4";

  const copyClassName = "text-[#12263F] text-sm mt-4";
  const imageClassName = "rounded-lg mb-4";
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
        <div
          id="audience--cards"
          className="md:flex md:justify-between md:gap-4"
        >
          <div id="audience--card" className={cardClassName}>
            <Image
              src="/card-one.jpg"
              alt="Household Scene"
              width={500}
              height={300}
              className={imageClassName}
            />
            <p className={greenTextClassName}>households</p>
            <p className={copyClassName}>
              You sleep at night, and leave for work, knowing your home is safe
              from leakages.
            </p>
          </div>
          <div id="audience--card" className={cardClassName}>
            <Image
              src="/card-two.jpg"
              alt="Commercial Kitchen Scene"
              width={500}
              height={300}
              className={imageClassName}
            />
            <p className={greenTextClassName}>commercicals</p>
            <p className={copyClassName}>
              You know days ahead your gas is running low, not halfway through
              cooking.
            </p>
          </div>
          <div id="audience--card" className={cardClassName}>
            <Image
              src="/card-three.jpg"
              alt="Two guys carrying a gas cylinder"
              width={500}
              height={300}
              className={imageClassName}
            />
            <p className={greenTextClassName}>gas retailers</p>
            <p className={copyClassName}>
              You know how much gas your vendor fills into your cylinder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
