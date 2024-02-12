import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NetflixShowcase from "./pages/NetflixShowcase";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/netflix-show-case" Component={NetflixShowcase} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
