import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const code = <FontAwesomeIcon icon={faCode} />;
const js = <FontAwesomeIcon icon={faJs} />;
const server = <FontAwesomeIcon icon={faServer} />;

export default function About() {
  return (
    <div className="w-full h-fit py-10">
      <h1 className="mont">Things I Love</h1>
      <div className="flex ">
        <div className="py-[20px] px-[30px] rounded-lg shadow-black/7 shadow-lg  flex flex-col justify-evenly items-center text-center w-[20vw] h-76">
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
      </div>
    </div>
  );
}
