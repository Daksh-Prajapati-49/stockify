import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
