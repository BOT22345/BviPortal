import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Background from "./Components/Background/Background.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contactus from "./Components/Contactus/Contactus.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Background></Background>
      <Title title="our program " subtitle="What We Offer"></Title>
      <Programs className="1"></Programs>
      <About></About>
      <Title title="Gallery" subtitle="Campus Photos"></Title>
      <Campus></Campus>
      <Title title="Testimonials" subtitle="What Student Says"></Title>
      <Testimonials></Testimonials>
      <Title title="Contact Us" subtitle="Get in Touch"></Title>
      <Contactus></Contactus>
      <Footer></Footer>
    </div>
  );
};

export default App;
