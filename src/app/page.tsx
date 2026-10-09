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
      <section id="problem" className="bg-[#12263F] mx-auto py-4 md:py-8 ">
        <div
          id="problem--container"
          className="w-19/20 mx-auto md:flex md:justify-between items-end md:gap-10"
        >
          <div id="row--1" className="md:w-1/2">
            <p className="text-[#12b76a] font-semibold uppercase text-xs mb-4">
              a problem that has been hidden for years
            </p>
            <h2 className="text-[#fff] text-xl/6 font-semibold mb-8 md:mb-0">
              Cooking Gas has become essential for everyday cooking, yet we
              remain exposed to its unsafe side.
            </h2>
          </div>
          <div id="row--2" className="md:w-1/2">
            <p className="text-[#fff] font-thin text-xs mb-4">
              We use it daily at home, commercially and in our offices.
            </p>
            <hr className="hidden md:block border-1 border-[#f59e0b] w-1/4 my-4" />
            <p className="text-[#fff] font-thin text-xs ">
              Unlike other energy tools, we not only feel unsafe using gas, we
              also do not have a reliable way to measure or monitor our usage or
              know when is is leaking.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
