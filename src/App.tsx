import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <React.Fragment>
      <div className="relative top-14">
        <Navbar />
        <Hero/>
      </div>
    </React.Fragment>
  );
};

export default App;

//TODO:Hero //TODO:main //TODO:others--boxes
