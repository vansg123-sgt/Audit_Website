import type { ReactNode } from "react";
import { motion } from "framer-motion";


interface SectionCardProps {

  title: string;

  subtitle?: string;

  children: ReactNode;

}



export default function SectionCard({

  title,

  subtitle,

  children,

}: SectionCardProps) {


  return (

    <motion.section

      initial={{
        opacity:0,
        y:20,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.4,
      }}


      className="
        rounded-2xl
        border
        border-black/10
        dark:border-white/10
        bg-black/5
        dark:bg-white/5
        backdrop-blur-xl
        p-6
        transition-colors
      "

    >


      <div className="mb-5">


        <h2

          className="
            text-lg
            font-semibold
            text-gray-900
            dark:text-white
          "

        >

          {title}

        </h2>



        {
          subtitle &&

          <p

            className="
              mt-1
              text-sm
              text-gray-500
              dark:text-gray-400
            "

          >

            {subtitle}

          </p>

        }


      </div>



      {children}


    </motion.section>

  );

}