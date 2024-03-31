import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Earning from "./components/Earning/Earning";
import Call from "./components/Call/Call";
import Navbar from "./components/Navbar/Navbar";
import { VideoProvider } from "./components/context/Context";

const App = () => {
  return (
    <Router>
      <Navbar />
      <VideoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/call" element={<Call />} />
        </Routes>
      </VideoProvider>
    </Router>
  );
};

export default App;
