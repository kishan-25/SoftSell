import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const licenseTypes = [
    "SaaS Subscription",
    "Enterprise License",
    "Cloud Credits",
    "Development Tools",
    "Other"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validate = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      tempErrors.company = "Company is required";
      isValid = false;
    }
    
    if (!formData.licenseType) {
      tempErrors.licenseType = "Please select a license type";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            company: "",
            licenseType: "",
            message: ""
          });
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };
  
  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-lime-300"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                Ready to get started?
              </h2>
              <p className={`mt-4 text-xl ${darkMode ? "text-gray-300" : "text-black"}`}>  
                Fill out the form and our team will get back to you within 24 hours to help you buy or sell software licenses.
              </p>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-md ${darkMode ? "bg-blue-600" : "bg-lime-500"} flex items-center justify-center`}>
                    <Send size={24} className="text-white" />
                  </div>
                  <div className="ml-4 text-lg leading-6 font-medium">
                    <p className={darkMode ? "text-white" : "text-gray-900"}>Fast Response Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`px-6 py-8 rounded-lg shadow-xl ${darkMode ? "bg-gray-700" : "bg-white"}`}
            >
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-2`}>Thank you!</h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.name ? "border-red-300" : darkMode ? "border-gray-600" : "border-gray-300"} rounded-md shadow-sm focus:outline-none ${darkMode ? "bg-gray-800 text-white focus:border-lime-500" : "bg-white text-gray-900 focus:border-lime-500"} focus:ring focus:ring-lime-200 focus:ring-opacity-50`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.email ? "border-red-300" : darkMode ? "border-gray-600" : "border-gray-300"} rounded-md shadow-sm focus:outline-none ${darkMode ? "bg-gray-800 text-white focus:border-lime-500" : "bg-white text-gray-900 focus:border-lime-500"} focus:ring focus:ring-lime-200 focus:ring-opacity-50`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="company" className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.company ? "border-red-300" : darkMode ? "border-gray-600" : "border-gray-300"} rounded-md shadow-sm focus:outline-none ${darkMode ? "bg-gray-800 text-white focus:border-lime-500" : "bg-white text-gray-900 focus:border-lime-500"} focus:ring focus:ring-lime-200 focus:ring-opacity-50`}
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="licenseType" className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        License Type
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.licenseType ? "border-red-300" : darkMode ? "border-gray-600" : "border-gray-300"} rounded-md shadow-sm focus:outline-none ${darkMode ? "bg-gray-800 text-white focus:border-lime-500" : "bg-white text-gray-900 focus:border-lime-500"} focus:ring focus:ring-lime-200 focus:ring-opacity-50`}
                      >
                        <option value="">Select License Type</option>
                        {licenseTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.licenseType && <p className="mt-1 text-sm text-red-600">{errors.licenseType}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-md shadow-sm focus:outline-none ${darkMode ? "bg-gray-800 text-white focus:border-lime-500" : "bg-white text-gray-900 focus:border-lime-500"} focus:ring focus:ring-lime-200 focus:ring-opacity-50`}
                      />
                    </div>
                    
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition-colors"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;