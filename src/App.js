import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
