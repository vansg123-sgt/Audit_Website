import { motion } from "framer-motion";
import SectionCard from "./SectionCard";


const actions = [
  {
    title: "Create Audit",
    icon: "➕",
    primary: true,
  },
  {
    title: "Generate Report",
    icon: "📄",
    primary: false,
  },
  {
    title: "Invite User",
    icon: "👥",
    primary: false,
  },
];


export default function QuickActions() {


  return (

    <SectionCard
      title="Quick Actions"
      subtitle="Frequently used shortcuts"
    >

      <div className="space-y-3">


        {
          actions.map((action, index) => (

            <motion.button

              key={action.title}

              initial={{
                opacity:0,
                x:20,
              }}

              animate={{
                opacity:1,
                x:0,
              }}

              transition={{
                delay:index * 0.1,
              }}

              className={`
                w-full
                rounded-xl
                p-3
                text-white
                transition
                ${
                  action.primary
                  ?
                  "bg-indigo-600 hover:bg-indigo-500"
                  :
                  "bg-white/10 hover:bg-white/20"
                }
              `}

            >

              {action.icon} {action.title}


            </motion.button>


          ))
        }


      </div>


    </SectionCard>

  );

}