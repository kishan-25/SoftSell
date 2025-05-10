import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Shield, Zap } from "lucide-react";

const Hero = ({ darkMode }) => {
  const words = ["Excitement", "Discounts", "Deals"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-lime-300"} py-20`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 h-24 md:h-28">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={darkMode ? "text-white" : "text-black"}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className={darkMode ? "text-white" : "text-black"}>Your Gateway to </span>
            <span className={darkMode ? "text-blue-400" : "text-black"}>Verified SaaS Deals</span>
          </h1>
          <p className={`mt-3 text-lg sm:text-xl md:text-2xl max-w-3xl ${
            darkMode ? "text-gray-300" : "text-black"
          }`}>
            Explore verified SaaS subscriptions, credits, and licenses at unbeatable prices — backed by escrow protection and AI-powered verification.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-8 py-3 text-lg font-medium rounded-md shadow ${
                darkMode 
                  ? "bg-blue-500 hover:bg-blue-600 text-white" 
                  : "bg-black hover:bg-gray-800 text-white"
              } transition-colors`}
            >
              Sell My Licenses
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#how-it-works"
              className={`px-8 py-3 text-lg font-medium rounded-md border ${
                darkMode 
                  ? "border-blue-500 text-blue-400 hover:bg-gray-800" 
                  : "border-black text-black hover:bg-lime-400"
              } transition-colors`}
            >
              Get a Quote
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-lime-200"
              }`}
            >
              <div className={`p-3 rounded-full mb-3 ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                <DollarSign size={24} />
              </div>
              <span className={`text-lg font-medium ${darkMode ? "text-white" : "text-black"}`}>Escrow Protection</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-lime-200"
              }`}
            >
              <div className={`p-3 rounded-full mb-3 ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                <Shield size={24} />
              </div>
              <span className={`text-lg font-medium ${darkMode ? "text-white" : "text-black"}`}>AI Verification</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-lime-200"
              }`}
            >
              <div className={`p-3 rounded-full mb-3 ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                <Zap size={24} />
              </div>
              <span className={`text-lg font-medium ${darkMode ? "text-white" : "text-black"}`}>Private Chat</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;