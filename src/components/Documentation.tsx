import React from "react";
import Navbar from "./documentation/Navbar";
import Sidebar from "./documentation/Sidebar";
import Main from "./documentation/Main";

const App = () => {
  return (
    <React.Fragment>
      <div className="relative top-10">
        <Navbar />
        <Sidebar />
        <Main />
      </div>
    </React.Fragment>
  );
};

export default App;
