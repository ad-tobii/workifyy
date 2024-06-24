import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./styles/index.css";

import Signup from "./Pages/Signup/Signup";
import { Signin } from "./Pages/Forms/signin/signin_user";
import SignupasProfessional from "./Pages/Forms/professional/Professionalsignup";
import ClientSignup from "./Pages/Forms/client/Clientsignup";
import ClientDashboard from "./Pages/ClientDashboard/Home";
import Jobs from "./Pages/ProfessionalDashboard/Jobs";
import Wallet from "./Pages/ClientDashboard/Component/Wallet";
import HeroSection from "./Pages/ClientDashboard/Component/HeroSection";
import Navbar from "./Pages/ClientDashboard/Component/Navbar";

const NotFound = () => (
  <div>
    <h2>Page Not Found</h2>
    <a href="/">Back to Home</a>
  </div>
);

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/ProfessionalSignup" element={<SignupasProfessional />} />
        <Route path="/ClientSignup" element={<ClientSignup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/clientDashboard" element={<ClientDashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
