import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import AddRider from "./Pages/AddRider";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rider" element={<AddRider />} />
      </Routes>
    </Router>
  );
};

export default Routing;
