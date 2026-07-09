import { MoreHorizontal } from "lucide-react";
import SectionCard from "./SectionCard";
import { recentAudits } from "../../data/audits";

export default function RecentAuditsTable() {
  return (
    <SectionCard
      title="Recent Audits"
      subtitle="Latest audit records"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="pb-4 text-gray-400 font-medium">Audit</th>
              <th className="pb-4 text-gray-400 font-medium">Department</th>
              <th className="pb-4 text-gray-400 font-medium">Auditor</th>
              <th className="pb-4 text-gray-400 font-medium">Status</th>
              <th className="pb-4 text-gray-400 font-medium">Due</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {recentAudits.map((audit) => (
              <tr
                key={audit.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-5 font-medium text-white">
                  {audit.name}
                </td>

                <td className="text-gray-300">
                  {audit.department}
                </td>

                <td className="text-gray-300">
                  {audit.auditor}
                </td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      audit.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : audit.status === "Pending"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {audit.status}
                  </span>
                </td>

                <td className="text-gray-400">
                  {audit.dueDate}
                </td>

                <td>
                  <button className="rounded-lg p-2 hover:bg-white/10">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}