import StatCard from "./StatCard";
import { dashboardStats } from "../../data/dashboard";


export default function DashboardStats() {


  return (

    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >

      {
        dashboardStats.map((item) => (

          <StatCard

            key={item.title}

            title={item.title}

            value={String(item.value)}

            change={item.change}

            icon={item.icon}

            color={item.color}

          />

        ))
      }


    </div>

  );

}