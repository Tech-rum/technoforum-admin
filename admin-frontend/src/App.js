import React from "react";
import Admin from "./components/Admin";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import AppbarAdmin from "./components/AppbarAdmin"
import "./App.css"

function App() {
  return (
   <div>
    <Router>
      <AppbarAdmin></AppbarAdmin>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
