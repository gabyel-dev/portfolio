import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NavDesktop from "./components/NavDesktop";
import "../src/index.css";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <NavDesktop />
      <div className="pt-[80px] px-[5vw] md:pt-[180px] lg:pt-[210px] md:px-[10vw] h-fit">
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
