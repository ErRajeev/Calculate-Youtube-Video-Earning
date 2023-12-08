import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Earning from "./component/Earning/Earning";
import Call from "./component/Call/Call";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earning" element={<Earning />} />
        <Route path="/call" element={<Call />} />
      </Routes>
    </Router>
  );
}

export default App;
