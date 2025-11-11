import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router";

const ErrorElement = () => {
  return (
    <div>
      <title>404-error</title>
      <div className="flex  mt-12 max-w-[1280px] mx-auto p-8  flex-col items-center justify-center h-screen bg-gradient-to-b from-[#beb4ff] to-[#76b6ff]">
     
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-9xl font-extrabold text-[#3f00a4] drop-shadow-lg"
        >
          404
        </motion.h1>

    
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl font-semibold text-gray-700 mt-4 text-center"
        >
          Oops! The page you’re looking for isn’t here.
        </motion.p>

    
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mt-6"
        >
          😵‍💫
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-[#3f00a4] text-white font-medium rounded-lg shadow-lg hover:bg-[#5b18e5] transition-all duration-300"
          >
            ⬅ Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorElement;
