import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Home from "./Pages/HomePage";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
