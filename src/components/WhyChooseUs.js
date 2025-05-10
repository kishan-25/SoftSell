import { motion } from "framer-motion";
import { Shield, BadgeDollarSign, Brain, Lock } from "lucide-react";

const WhyChooseUs = ({ darkMode }) => {
  const features = [
    {
      name: "Secure Escrow Protection",
      description: "Your payment stays in escrow until license transfer is verified and complete",
      icon: <Shield size={36} />,
    },
    {
      name: "Best Market Rates",
      description: "Save up to 70% on software licenses compared to retail prices",
      icon: <BadgeDollarSign size={36} />,
    },
    {
      name: "AI License Verification",
      description: "Advanced AI technology verifies license authenticity and transferability",
      icon: <Brain size={36} />,
    },
    {
      name: "End-to-End Encryption",
      description: "All communications and transactions are fully encrypted for your security",
      icon: <Lock size={36} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="why-choose-us" 
      className={`py-24 ${darkMode ? "bg-gray-900" : "bg-lime-300"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-xl md:text-2xl font-bold ${darkMode ? "text-blue-400" : "text-black"}`}
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-3 text-4xl md:text-5xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-black"}`}
          >
            A better way to buy and sell software
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className= {`mt-6 max-w-3xl mx-auto text-xl md:text-2xl font-medium ${darkMode ? "text-gray-300" : "text-black"}`}
          >
            Our platform offers unique advantages for both buyers and sellers in the software marketplace
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`flex ${darkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg`}
              >
                <div className={`flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-md ${darkMode ? "bg-blue-900 text-blue-300" : "bg-black text-lime-300"}`}>
                  {feature.icon}
                </div>
                <div className="ml-5">
                  <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                    {feature.name}
                  </h3>
                  <p className= {`mt-3 text-lg leading-relaxed text-gray-600 ${darkMode} ? "text-gray-300" : "text-black`} >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;