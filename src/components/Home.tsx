import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Main from "./Main";
import CardScrollable from "./CardScrollable";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <div className="relative top-14 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Main />
        <CardScrollable title="OvaDrive" />
        <CardScrollable title="Careers" />
        <CardScrollable title="Our Team" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
