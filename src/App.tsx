import "./App.css"
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Hero/>
      <AboutUs/>
    </div>
  );
};

export default App;
