import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./styles/index.css";

import Signup from "./Pages/Signup/Signup";
import { Signin } from "./Pages/Forms/signin/signin_user";
import SignupasProfessional from "./Pages/Forms/professional/Professionalsignup";
import ClientSignup from "./Pages/Forms/client/Clientsignup";
/* import ClientDashboardHome from "./Pages/ClientDashboard/Home"; */
import Jobs from "./Pages/ProfessionalDashboard/Jobs";
// import Wallet from "./Pages/ClientDashboard/Component/Wallet";
// import Navbar from "./Pages/ClientDashboard/Component/Navbar";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/ProfessionalSignup"
          element={<SignupasProfessional />}
        ></Route>
        <Route path="/ClientSignup" element={<ClientSignup />}></Route>
        <Route
          path="/Jobs"
          element={<Jobs />}
        ></Route>
        {/* <Route path="/wallet" element={<Wallet />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
