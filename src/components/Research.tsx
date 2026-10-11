import StatCard from "./StatCard";
import { stats } from "@/lib/stats";
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
          <p className="text-[#6C7888] text-xs mb-4">
            Here is what we found...
          </p>
          {/* <div className="flex items-center gap-2">
            <Link href="#" passHref>
              <ArrowLeft size={16} color="#12263F" strokeWidth={1.5} />
            </Link>
            <Link href="#" passHref>
              <ArrowRight size={16} color="#12263F" strokeWidth={1.5} />
            </Link>
          </div> */}
        </div>
        <ul
          id="cards"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
        >
          {stats.map((stat) => (
            <li
              key={stat.id}
              className="w-[70%] shrink-0 snap-start md:w-full md:shrink-1 md:snap-none"
            >
              <StatCard stat={stat} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
