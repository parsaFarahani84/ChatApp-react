import "./App.css";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.scss";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
