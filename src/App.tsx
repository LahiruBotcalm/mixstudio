import "./App.css"
import Navbar from "./components/NavBar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#111111]">
      <Hero/>
      <AboutUs/>
      <Navbar/>
    </div>
  );
};

export default App;
