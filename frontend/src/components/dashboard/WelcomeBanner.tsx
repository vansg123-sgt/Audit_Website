import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

export default function WelcomeBanner() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-blue-600
        p-8
        text-white
      "
    >
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck size={28} />
            <span className="font-semibold tracking-wide uppercase">
              Audit Overview
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-bold leading-tight">
            82% of your audits have been completed successfully.
          </h2>

          <p className="mt-4 max-w-xl text-indigo-100">
            Your team has completed 18 out of 22 scheduled audits this month.
            Keep the momentum going.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="text-right">
            <p className="text-sm text-indigo-200">
              Completion Rate
            </p>

            <h1 className="text-6xl font-bold">
              82%
            </h1>
          </div>

          <Button
            variant="secondary"
            className="bg-white text-indigo-700 hover:bg-indigo-50"
          >
            View Reports

            <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      <div
        className="
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-white/10
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-40
          rounded-full
          bg-white/5
        "
      />
    </section>
  );
}