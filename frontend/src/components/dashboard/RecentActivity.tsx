import SectionCard from "./SectionCard";
import { recentActivities } from "../../data/dashboard";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";


export default function RecentActivity() {

  return (

    <SectionCard
      title="Recent Activity"
      subtitle="Latest actions happening in your workspace"
    >

      <div className="space-y-4">

        {
          recentActivities.map((activity, index) => (

            <motion.div

              key={activity.id}

              initial={{
                opacity:0,
                x:-20
              }}

              animate={{
                opacity:1,
                x:0
              }}

              transition={{
                delay:index * 0.1
              }}

              className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-white/5
                p-4
                border
                border-white/5
              "

            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500/20
                  "
                >

                  <CheckCircle2
                    className="text-green-400"
                    size={20}
                  />

                </div>


                <div>

                  <p className="text-white font-medium">
                    {activity.title}
                  </p>


                  <p className="text-sm text-gray-400">
                    {activity.time}
                  </p>

                </div>


              </div>


            </motion.div>

          ))
        }


      </div>

    </SectionCard>

  );
}