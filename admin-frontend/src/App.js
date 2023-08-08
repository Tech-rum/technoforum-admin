import React from "react";
import Admin from "./components/Admin";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
