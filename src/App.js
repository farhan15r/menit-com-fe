import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/Register";
import Results from "./components/Results";
import ShowPost from "./components/ShowPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="Login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":slug" element={<ShowPost />} />
      </Routes>
    </div>
  );
}

export default App;
