import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./styles/index.css";

import Signup from "./Pages/Signup/Signup";
import { Signin } from "./Pages/Forms/signin/signin_user";
import SignupasProfessional from "./Pages/Forms/professional/Professionalsignup";
import ClientSignup from "./Pages/Forms/client/Clientsignup"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/ProfessionalSignup"
          element={<SignupasProfessional />}
        ></Route>
        <Route path="/ClientSignup" element={<ClientSignup />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
