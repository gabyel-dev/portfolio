import Hero from "./components/Hero";
import NavDesktop from "./components/NavDesktop";
import "../src/index.css";

function App() {
  return (
    <>
      <NavDesktop />
      <div className="pt-[215px] px-[10vw]">
        <Hero />
      </div>
    </>
  );
}

export default App;
