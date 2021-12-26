import "./App.css";
import Hero from "./components/hero/hero.js";
import Section2 from "./components/section2/section2.js";
import Section3 from "./components/section3/section3.js";
import Section4 from "./components/section4/section4.js";
import Section5 from "./components/section5/section5.js";
import Section6 from "./components/section6/section6.js";
function App() {
  return (
    <div className="App">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
