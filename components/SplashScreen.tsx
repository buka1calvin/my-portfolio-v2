import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (progress < 100) {
      timer = setTimeout(() => setProgress(progress + 1), 10);
    }
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center text-text_color gap-5 bg-black/85 z-[2000]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src="/icons/logo.svg" alt="logo" width={100} height={100} />
      </motion.div>
      <div className="relative w-[80%] max-w-[200px] h-2 bg-text_color rounded-full mt-6">
        <motion.div
          className="absolute top-0 left-0 h-full bg-stone-700"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-sm font-bold mt-4"
      >
        {progress}%
      </motion.div>
      <ClipLoader color="#6b7280" loading={progress < 100} />
    </section>
  );
};

export default SplashScreen;
