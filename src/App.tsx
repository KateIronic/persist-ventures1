import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Documentation from "./components/Documentation";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* <Route
          path="/login"
          element={<Login />}
        /> */}
        <Route
          path="/documentation"
          element={<Documentation />}
        />
      </Routes>
    </Router>
  );
};

export default App;
