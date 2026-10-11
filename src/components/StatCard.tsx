import { Stat } from "@/lib/stats";
function StatIcon({ kind }: { kind: Stat["kind"] }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "public" ? (
        <path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3l9 5H3l9-5z" />
      ) : (
        <>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
        </>
      )}
    </svg>
  );
}

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <article className="flex flex-col justify-between h-full bg-[#fff] rounded-3xl border border-[#e5e7eb] p-4 md:p-6  mb-3 md:mb-0">
      <div className="mb-4 md:mb-6">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full mb-4 ${
            stat.kind === "public"
              ? "bg-blue-50 text-brand"
              : "bg-green-50 text-green-600"
          }`}
        >
          <StatIcon kind={stat.kind} />
        </span>
        <h3 className="text-xl/6 md:text-base font-semibold text-[#12263F] mb-4">
          {stat.text}
        </h3>
      </div>

      <p className="text-[#6C7888] text-sm  ">
        {stat.source} · {stat.date}
      </p>
    </article>
  );
}
