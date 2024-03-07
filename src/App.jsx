import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Access from "./components/Access";
import Conferences from "./components/conferences/Conferences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Expo from "./components/Expo";
import Info from "./components/Info";
import News from "./components/News";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Expo />} />
          <Route path="/conf" element={<Conferences />} />
          <Route path="/info" element={<Info />} />
          <Route path="/news" element={<News />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Access />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
