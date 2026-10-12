import { Volume2, Check } from "lucide-react";
import Link from "next/link";
export default function Products() {
  const greenTextClassName =
    "text-[#12b76a] font-semibold uppercase text-xs mb-4";
  const listClassName =
    "flex items-center gap-3 text-[#12263f] text-xs font-thin my-3";
  return (
    <section
      id="what-we-are-building"
      className="bg-[#FAF8F4] mx-auto py-20 md:py-20 "
    >
      <div className="w-19/20 mx-auto">
        <p className={greenTextClassName}>what we are building</p>
        <h2 className="text-[#12263F] text-2xl/6 font-bold mb-8">
          Two focused tools for LPG safety
        </h2>
        <div id="product--cards" className="md:flex md:items-center md:gap-3">
          <div id="product--card" className="w-1/2 bg-[#fff] p-4 rounded-xl">
            <div
              id="placeholder"
              className="w-full h-40 bg-[#FDECEA] rounded-lg"
            ></div>
            <div id="product--body" className="my-4">
              <h4 className="text-lg text-[#12263f] font-bold">
                Gas Leakage Detector
              </h4>
              <p className="text-xs text-[#12263f] font-thin my-2">
                Know about leaks at home or away.
              </p>
              <ul>
                <li className={listClassName}>
                  <Volume2
                    size={20}
                    color="#D92D20"
                    strokeWidth={2}
                    className="bg-[#d92d20]/10 p-1 rounded-full"
                  />
                  Sounds an alarm when gas is detected
                </li>
                <li className={listClassName}>
                  <Check
                    size={20}
                    color="#12B76A"
                    strokeWidth={2}
                    className="bg-[#12b76a]/10 p-1 rounded-full"
                  />
                  Sends a remote alert to your phone
                </li>
              </ul>
              <div className="py-2 hover:bg-[#f59e0b]/70 pointer rounded-full text-[#12263f] font-bold text-sm text-center bg-[#f59e0b]">
                <Link href="/products">Explore the Product </Link>
              </div>
            </div>
          </div>
          <div
            id="product--card"
            className="w-1/2 bg-[#fff] p-4 rounded-xl mt-4 md:mt-0"
          >
            <div
              id="placeholder"
              className="w-full h-40 bg-[#E8F8F0] rounded-lg"
            ></div>
            <div id="product--body" className="my-4">
              <h4 className="text-lg text-[#12263f] font-bold">Gas Meter</h4>
              <p className="text-xs text-[#12263f] font-thin my-2">
                Know how much gas remain before it runs low.
              </p>
              <ul>
                <li className={listClassName}>
                  <Check
                    size={20}
                    color="#12B76A"
                    strokeWidth={2}
                    className="bg-[#12b76a]/10 p-1 rounded-full"
                  />
                  Shows your gas level
                </li>
                <li className={listClassName}>
                  <Check
                    size={20}
                    color="#12B76A"
                    strokeWidth={2}
                    className="bg-[#12b76a]/10 p-1 rounded-full"
                  />
                  Sends a low-gas alert to your phone
                </li>
              </ul>
              <div className="py-2 hover:bg-[#f59e0b]/70 pointer rounded-full text-[#12263f] font-bold text-sm text-center bg-[#f59e0b]">
                <Link href="/products">Explore the Product </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
