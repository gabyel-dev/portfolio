import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const code = <FontAwesomeIcon icon={faCode} />;
const js = <FontAwesomeIcon icon={faJs} />;
const server = <FontAwesomeIcon icon={faServer} />;

export default function About() {
  return (
    <div className="w-full h-fit py-10 pt-40 md:pt-10">
      <h1 className="mont text-center text-[var(--blue)] font-black text-[28px] pb-7">Things I love</h1>
      <div className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:flex-wrap lg:flex-nowrap md:gap-[3vw] lg:justify-between  ">
        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg flex flex-col justify-evenly items-center text-center h-76 w-77 md:w-[35vw] md:min-w-60 md:max-w-77 bg-[var(--bg)]">
          <div className="linear-gradient rounded-full p-[30px] text-[30px] w-[100px] h-[100px] text-[var(--bg)] flex items-center justify-center ">
            {code}
          </div>
          <h1 className="mont text-[var(--blue)] text-xl">
            Frontend and Backend
          </h1>
          <p className="karla text-[0.9em]">
            Working on front-end and back-end development.
          </p>
        </div>

        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg flex flex-col justify-evenly items-center text-center w-77 md:w-[35vw] md:min-w-60 md:max-w-77 h-76 bg-[var(--bg)]">
          <div className="linear-gradient rounded-full p-[30px] text-[30px] w-[100px] h-[100px] text-[var(--bg)] flex items-center justify-center ">
            {js}
          </div>
          <h1 className="mont text-[var(--blue)] text-xl">
            Frontend and Backend
          </h1>
          <p className="karla text-[0.9em]">
            Working on front-end and back-end development.
          </p>
        </div>

        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg flex flex-col justify-evenly items-center text-center w-77 md:w-[35vw] md:min-w-60 md:max-w-77 h-76 bg-[var(--bg)]">
          <div className="linear-gradient rounded-full p-[30px] text-[30px] w-[100px] h-[100px] text-[var(--bg)] flex items-center justify-center ">
            {server}
          </div>
          <h1 className="mont text-[var(--blue)] text-xl">
            Frontend and Backend
          </h1>
          <p className="karla text-[0.9em]">
            Working on front-end and back-end development.
          </p>
        </div>
      </div>
    </div>
  );
}
