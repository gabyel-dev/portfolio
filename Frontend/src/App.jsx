import Home from "./components/Home";
import NavDesktop from "./components/NavDesktop";
import "../src/index.css";

function App() {
  return (
    <>
      <NavDesktop />
      <div className="pt-[100px] px-[5vw] md:pt-[180px] lg:pt-[210px] md:px-[10vw]">
        <Home />
      </div>
    </>
  );
}

export default App;
