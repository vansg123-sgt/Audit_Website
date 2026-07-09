import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";


export default function AuthLayout() {

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      px-4
      "
    >

      {/* Animated Background */}
      <motion.div

        animate={{
          scale:[1,1.2,1],
          rotate:[0,90,0]
        }}

        transition={{
          duration:20,
          repeat:Infinity
        }}

        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        bg-indigo-600/30
        blur-3xl
        "
      />


      {/* Page Content */}

      <div className="relative z-10 w-full">

        <Outlet />

      </div>


    </div>

  );
}