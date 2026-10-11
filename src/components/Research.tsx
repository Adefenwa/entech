import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Research() {
  return (
    <section className="bg-[#FAF8F4]  mx-auto py-4 md:py-8">
      <div className="w-19/20 mx-auto ">
        <p className="text-[#12b76a] font-semibold uppercase text-xs mb-4">
          This is not just household problem
        </p>
        <h2 className="text-[#12263F] text-2xl/6 font-semibold mb-8">
          It is also a National Problem.
        </h2>
        <div className="md:hidden flex items-center gap-4 justify-between">
          <p className="text-[#6C7888] text-xs">Here is what we found...</p>
          <div className="flex items-center gap-2">
            <Link href="#" passHref>
              <ArrowLeft size={16} color="#12263F" strokeWidth={1.5} />
            </Link>
            <Link href="#" passHref>
              <ArrowRight size={16} color="#12263F" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
        <div id="cards">
            
        </div>
      </div>
    </section>
  );
}
