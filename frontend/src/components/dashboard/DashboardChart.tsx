import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import SectionCard from "./SectionCard";


const chartData = [
  {
    month: "Jan",
    audits: 20,
  },
  {
    month: "Feb",
    audits: 32,
  },
  {
    month: "Mar",
    audits: 45,
  },
  {
    month: "Apr",
    audits: 38,
  },
  {
    month: "May",
    audits: 56,
  },
  {
    month: "Jun",
    audits: 70,
  },
];


export default function DashboardChart() {


  return (

    <SectionCard
      title="Audit Growth"
      subtitle="Monthly audit completion overview"
    >

      <div
        className="
          h-[350px]
          w-full
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={chartData}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />


            <XAxis
              dataKey="month"
              stroke="#9ca3af"
            />


            <YAxis
              stroke="#9ca3af"
            />


            <Tooltip
              contentStyle={{
                background:"#111827",
                border:"1px solid rgba(255,255,255,0.1)",
                borderRadius:"12px",
                color:"#fff",
              }}
            />


            <Line

              type="monotone"

              dataKey="audits"

              stroke="#6366f1"

              strokeWidth={3}

              dot={{
                fill:"#6366f1",
                r:5,
              }}

            />


          </LineChart>


        </ResponsiveContainer>


      </div>


    </SectionCard>

  );

}