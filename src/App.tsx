import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./styles/index.css";
import Signup from "./Pages/Signup/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
