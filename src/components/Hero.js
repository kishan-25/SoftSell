import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Shield, Zap } from "lucide-react";

const Hero = ({ darkMode }) => {
  const words = ["Excitment", "Discounts", "Deals"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-lime-300"} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                <span className={darkMode ? "text-white" : "text-black"}>Marketplace for </span>
                <span className={darkMode ? "text-blue-400" : "text-black"}>SaaS Platforms</span>
              </h1>
              <p className={`mt-3 text-lg sm:text-xl md:text-2xl max-w-3xl ${
                darkMode ? "text-gray-300" : "text-black"
              }`}>
                Buy and sell software licenses, subscriptions, and credits at unbeatable prices, with complete security and verification.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
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
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-full ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                  <DollarSign size={20} />
                </div>
                <span className="text-sm font-medium">Escrow Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-full ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                  <Shield size={20} />
                </div>
                <span className="text-sm font-medium">AI Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-full ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                  <Zap size={20} />
                </div>
                <span className="text-sm font-medium">Private Chat</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Logos section */}
              <div className="mt-16 grid grid-cols-6 gap-2">
                {["aws", "OpenAI", "ANTHROPIC", "slack"].map((logo, index) => (
                  <div key={index} className={`flex items-center justify-center ${darkMode ? "opacity-70" : "opacity-90"}`}>
                    <span className="text-sm font-bold">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;