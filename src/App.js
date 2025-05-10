import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <HowItWorks darkMode={darkMode} />
      <WhyChooseUs darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;