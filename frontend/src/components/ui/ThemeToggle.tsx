import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";


export default function ThemeToggle() {


  const {
    theme,
    toggleTheme,
  } = useTheme();



  return (

    <motion.button

      onClick={toggleTheme}

      whileHover={{
        scale:1.1,
      }}

      whileTap={{
        scale:0.9,
      }}

      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-white/10
        text-white
        transition
        hover:bg-white/20
      "

      aria-label="Toggle theme"

    >

      {
        theme === "dark"

        ?

        <Sun
          size={20}
          className="text-yellow-400"
        />

        :

        <Moon
          size={20}
          className="text-indigo-400"
        />

      }


    </motion.button>

  );

}