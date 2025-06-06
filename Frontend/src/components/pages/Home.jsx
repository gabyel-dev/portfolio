import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/base.css";
import "../css/Home.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;

const handleCopy = (e) => {
  const color = window.getComputedStyle(e.target).backgroundColor;
  navigator.clipboard
    .writeText(color)
    .then(() => console.log(`copied: ${color}`));
};

export default function Home() {
  return (
    <>
      <div className="home-container w-[100%] h-[478px] flex flex-col gap-4 md:gap-0 md:flex md:flex-row justify-center items-center md:items-start">
        <img
          src="/bg.webp"
          alt="bg-card"
          className="home-card absolute top-[0px] md:top-[50px] z-[-1] right-0 w-[55%] md:w-[40%] tb:top-0 tb:w-[10%] opacity-80 md:opacity-100"
        />
        <section className="left text-[var(--black)] min-w-[200px] max-w-[500px] leading-12 flex flex-col items-center justify-center text-center md:items-start md:text-start  ">
          <div className="intro leading-5 md:leading-12">
            <p className="hello text-[0.875em] sm:text-[1em] md:text-[1.125em] lg:text-[1.25em] xl:text-[1em] pt-4">
              Hello, I'm
            </p>
            <h1 className="title text-base text-[1.8em] md:text-[2.7em] lg:text-[3em] font-black leading-10 text-nowrap md:text-wrap overflow-hidden">
              GABRIEL GUBAN
            </h1>
            <p className="desc text-[1.03em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.3em] pt-0 md:pt-[10px] md:leading-7 overflow-hidden">
              FULL-STACK WEB DEVELOPER
            </p>
          </div>

          <button className="resume-btn rounded-[5px] text-[12px] text-white px-3 h-[38px] flex justify-center items-center mb-6 mt-4 cursor-pointer overflow-hidden">
            Download Resume
          </button>

          <section className="socials">
            <ul className="links flex gap-8">
              <li className="hover:-translate-y-1 duration-400">
                <a
                  href="https://www.linkedin.com/in/gab-guban-474237334/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedIn}
                </a>
              </li>
              <li className="hover:-translate-y-1 duration-400">
                <a
                  href="https://www.facebook.com/gab.guban"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {facebook}
                </a>
              </li>
              <li className="hover:-translate-y-1 duration-400">
                <a
                  href="https://github.com/dv-gb"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {github}
                </a>
              </li>
            </ul>
          </section>
        </section>

        {/* Right Container */}
        <div className="right flex flex-col max-w-[500px] h-[fit-content] min-w-[fit-content] items-center">
          <div className="_right__container relative z-0  md:scale-100">
            {/* Card Section */}
            <section className="dev-card px-[30px] py-[30px] md:px-[30px] md:py-[40px] min-h-[220px]  md:min-w-[330px] md:max-w-fit md:min-h-[240px] md:scale-90 lg:scale-100 bg-[#fbfafa] rounded-[10px] shadow-black/7 shadow-lg text-[var(--blue)] text-nowrap ">
              <ol className="card-content text-[.76em] md:text-[1em] leading-7 md:leading-8">
                <li>
                  1 &nbsp;&nbsp;class <b>Person</b> {"{"}
                </li>
                <li>2 &nbsp;&nbsp;&nbsp;constructor() {"{"}</li>
                <li>
                  3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = "
                  <b>Gabriel Guban"</b>;
                </li>
                <li>
                  4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.traits = ["<b>DEV</b>"];
                </li>
                <li>
                  5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = new
                  Date().getFullYear() - 2004;
                </li>
                <li>6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</li>
                <li>7 &nbsp;&nbsp;{"}"}</li>
              </ol>
            </section>
          </div>
          {/* Colors Section - Moved to a Better Position */}
          <section className="colors flex justify-center items-center gap-[6px] p-3 mt-3 body-color shadow-black/7 shadow-lg rounded-[8px] w-max relative bottom-11 md:bottom-11 right-[0px]  md:right-[145px] lg:right-[175px]">
            <div className="a" onClick={handleCopy}></div>
            <div className="s" onClick={handleCopy}></div>
            <div className="d" onClick={handleCopy}></div>
            <div className="f" onClick={handleCopy}></div>
            <div className="g" onClick={handleCopy}></div>
          </section>
        </div>
      </div>
    </>
  );
}
