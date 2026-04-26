import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/home.jsx";
import Home from "./pages/about.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
