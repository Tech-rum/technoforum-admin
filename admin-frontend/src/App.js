import React from "react";
import Admin from "./components/Admin";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import AppbarAdmin from "./components/AppbarAdmin"
import "./App.css"
import Events from "./components/Events";
import AddEvent from "./components/addEvent";
import Front from "./components/Front";
import Event from "./components/Event";
function App() {
  return (
   <div>
    <Router>
      <AppbarAdmin></AppbarAdmin>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/" element={<Front />} />
        <Route path="/event/:eventId" element={<Event />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
