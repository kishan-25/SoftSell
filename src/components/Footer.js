import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin } from "lucide-react";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];
  
  const contactInfo = [
    { 
      icon: <Mail size={16} />, 
      text: "bkbajpay0905@gmail.com", 
      href: "mailto:bkbajpay0905@gmail.com",
      ariaLabel: "Email us" 
    },
    { 
      icon: <PhoneCall size={16} />, 
      text: "+91-7877058098", 
      href: "tel:+917877058098",
      ariaLabel: "Call us" 
    },
    { 
      icon: <MapPin size={16} />, 
      text: "123, Sidh Nagar, Morena, MP", 
      href: "https://maps.google.com/?q=123,+Sidh+Nagar,+Morena,+MP",
      ariaLabel: "View on map" 
    },
  ];
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { text: "How It Works", href: "#how-it-works" },
        { text: "Features", href: "#why-choose-us" },
        { text: "Pricing", href: "#" },
        { text: "FAQ", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Cookie Policy", href: "#" },
      ]
    }
  ];
  
  return (
    <footer className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-black text-gray-300"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Social Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">  
                <div className={ `w-10 h-10 rounded-full ${darkMode ? "bg-blue-600" : "bg-lime-300"  } flex items-center justify-center` } >
                  <span className= {`${darkMode ? "text-white" : "text-black"} font-bold text-xl`} >S</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">SoftSell</span>
              </div>
              
              <p className="text-gray-400 mb-6">
                The marketplace for buying and selling software licenses at the best prices.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-400 hover:text-lime-400"} transition-colors`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex} className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
              >
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-400 hover:text-lime-400"} transition-colors`}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a 
                      href={info.href}
                      className="flex items-center space-x-2 group"
                      aria-label={info.ariaLabel}
                    >
                      <span className={`${darkMode ? "text-blue-400" : "text-lime-400"}`}>{info.icon}</span>
                      <span className={`text-gray-400 group-hover:${darkMode ? "text-blue-400" : "text-lime-400"} transition-colors`}>
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <select 
                className={`${darkMode ? "bg-gray-800 focus:ring-blue-500" : "bg-gray-800 focus:ring-lime-500"} text-gray-400 text-sm rounded-md px-3 py-1 border border-gray-700 focus:outline-none focus:ring-1`}
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;