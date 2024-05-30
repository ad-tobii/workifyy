import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./styles/index.css";

import Signup from "./Pages/Signup/Signup";
import Signup2 from "./Pages/professional/signup"
import Signup3 from "./Pages/client/signup"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signup2" element={<Signup2 />}></Route>
        <Route path="/signup3" element={<Signup3 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
