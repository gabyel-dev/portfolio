import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import Skew from "../skewBG";
import { faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const code = <FontAwesomeIcon icon={faCode} />;
const js = <FontAwesomeIcon icon={faMobileScreenButton} />;
const server = <FontAwesomeIcon icon={faPaintBrush} />;

const react = <FontAwesomeIcon icon={faReact} />
const nodeJS = <FontAwesomeIcon icon={faNodeJs} />
const py = <FontAwesomeIcon icon={faPython} />

export default function About() {
  return (
    <div className="w-full h-fit py-10 pt-40 md:pt-10 overflow-x-hidden">
      <h1 className="mont text-center text-[var(--blue)] font-black text-[28px] pb-10">What can i do</h1>
      <div className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:flex-wrap lg:flex-nowrap md:gap-[3vw] lg:justify-between pb-6">
        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg flex flex-col justify-evenly items-center text-center h-76 w-77 md:w-[35vw] md:min-w-60 md:max-w-77 bg-[var(--bg)] hover:-translate-y-4 duration-400">
          <div className="linear-gradient rounded-full p-[30px] text-[30px] w-[100px] h-[100px] text-[var(--bg)] flex items-center justify-center ">
            {code}
          </div>
          <h1 className="mont text-[var(--blue)] text-xl">
            Web Development
          </h1>
          <p className="karla text-[0.9em]">
            Custom website development using the latest technologies and frameworks to create fast and responsive.
          </p>
        </div>

        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg flex flex-col justify-evenly items-center text-center w-77 md:w-[35vw] md:min-w-60 md:max-w-77 h-76 bg-[var(--bg)] hover:-translate-y-4 duration-400">
          <div className="linear-gradient rounded-full p-[30px] text-[30px] w-[100px] h-[100px] text-[var(--bg)] flex items-center justify-center ">
            {js}
          </div>
          <h1 className="mont text-[var(--blue)] text-xl">
            Responsive Design
          </h1>
          <p className="karla text-[0.9em]">
            Mobile-first approach to ensure your website looks and functions perfectly on all devices and screen sizes.
          </p>
        </div>

        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg flex flex-col justify-evenly items-center text-center w-77 md:w-[35vw] md:min-w-60 md:max-w-77 h-76 bg-[var(--bg)] hover:-translate-y-4 duration-400">
          <div className="linear-gradient rounded-full p-[30px] text-[30px] w-[100px] h-[100px] text-[var(--bg)] flex items-center justify-center ">
            {server}
          </div>
          <h1 className="mont text-[var(--blue)] text-xl">
            UI/UX Design
          </h1>
          <p className="karla text-[0.9em]">
           User-centered design that focuses on creating intuitive interfaces and seamless user experiences.
          </p>
        </div>
      </div>

          <div className="pt-20 flex flex-col justify-center items-center">
            <Skew />
            <h1 className="mont text-center text-[var(--blue)] font-black text-[28px] pb-7">About me</h1>
            <img src="/profile_picture.webp" alt="Profile"  className="__profile__ rounded-full border-6 border-[var(--bg)] w-60 h-60 md:w-70 md:h-70" />
        </div>

        {/* techstack */}
        <div className="flex flex-col pt-220 md:pt-120">
          <h1 className="mont text-center text-[var(--blue)] font-black text-[28px] pb-20">My Skillsets</h1>

          <div className="flex justify-between md:justify-center md:gap-[11vw]">
            <div className="text-6xl md:text-8xl text-[var(--black)] ">
              {react}
            </div>

            <div className="text-6xl md:text-8xl text-[var(--black)] ">
              {nodeJS}
            </div>

            <div className="text-6xl md:text-8xl text-[var(--black)] ">
              {py}
            </div>

            <div className="">
              <img src="/sql.webp" alt="postgreSQL Logo" className="md:w-[8rem] md:h-[8rem] w-[5rem] h-[5rem]" />
            </div>
          </div>
        </div>
    </div>
    
  );
}
