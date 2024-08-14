import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import CardScrollable from "./components/CardScrollable";

const App = () => {
  return (
    <React.Fragment>
      <div className="relative top-14">
        <Navbar />
        <Hero />
        <Main />
        <CardScrollable title="OvaDrive" />
        <CardScrollable title="Careers" />
        <CardScrollable title="Our Team" />
      </div>
    </React.Fragment>
  );
};

export default App;

//TODO:Hero //TODO:main //TODO:others--boxes
