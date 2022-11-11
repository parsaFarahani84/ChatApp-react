import "./App.css";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
