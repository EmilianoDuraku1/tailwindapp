import React from "react";
import AboutUs from "./Components/About/AboutUs";
import Header from "./Components/Header/Header";
import Stage from "./Components/Stage/Stage";
import "./style/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";
import HelloWorld from "./Components/Hello World/HelloWorld";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="Tailwind">
      <Header />
      <Stage />
      <AboutUs />
      <HelloWorld />
      <Footer />
    </div>
  );
}
export default App;
