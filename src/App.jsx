import React from "react";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Technologies from "./Components/Technologies";
import ParticlesAnimation from "./Components/ParticlesAnimation";
import Projects from "./Components/Projects";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ParticlesAnimation />
      <Services />
      <Technologies />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
