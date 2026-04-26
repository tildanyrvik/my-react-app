import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Navbar from "./navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
