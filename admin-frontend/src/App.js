import React from "react";
import Admin from "./components/Admin";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import AppbarAdmin from "./components/AppbarAdmin"
import "./App.css"
import Events from "./components/Events";
import AddEvent from "./components/addEvent";

function App() {
  return (
   <div>
    <Router>
      <AppbarAdmin></AppbarAdmin>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/addEvent" element={<AddEvent />} />

      </Routes>
    </Router>
   </div>
  );
}

export default App;
