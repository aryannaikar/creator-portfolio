import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Portfolio from "./components/Portfolio/Portfolio";
import Brands from "./components/Brands/Brands";
import YouTube from "./components/YouTube/YouTube";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Brands />
        <YouTube />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
