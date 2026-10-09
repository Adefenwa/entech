import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function Home() {
  const productLinkClassName =
    "flex items-center gap-2 w-48 bg-[#F59E0B] text-[#12263F] px-4 py-2 rounded-full font-light hover:bg-[#D97706] transition-colors";

  return (
    <main id="main">
      <section
        id="hero"
        className="w-19/20 mx-auto py-4 md:py-8 md:flex md:justify-between md:items-center"
      >
        <div className="md:w-1/2">
          <div className="bg-[#F59E0B]/25 px-4 py-2 rounded-full flex gap-2 items-center my-8 hover:bg-[#F59E0B]/40 transition-colors w-fit">
            <div className="bg-[#f59e0b] w-2 h-2 rounded-full"></div>
            <p className="text-[#12263F] text-xs font-thin">
              Early Access. Limited units
            </p>
          </div>
          <h1 className="text-3xl font-light text-[#12263F] my-4 uppercase">
            Never guess your gas level or worry about leaks again.
          </h1>
          <p className="text-[#12263F] font-thin text-sm sm:text-base mb-7 ">
            Track your Gas usage in real-time and get notified the second a leak
            is detected, before it becomes a hazard.
          </p>

          <Link href="/products" className={productLinkClassName}>
            See the Products{" "}
            <ArrowRight size={16} strokeWidth={1.5} color="#12263f" />
          </Link>
        </div>

        <div id="image" className="my-8 md:w-1/2 flex justify-center">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={500}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
