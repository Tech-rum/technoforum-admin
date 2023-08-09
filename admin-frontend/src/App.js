import React from "react";
import Admin from "./components/Admin";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AppbarAdmin from "./components/AppbarAdmin"
function App() {
  return (
   <div>
    <Router>
      <AppbarAdmin></AppbarAdmin>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
