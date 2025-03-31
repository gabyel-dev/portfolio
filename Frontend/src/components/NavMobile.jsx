import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./css/Mobile.css";

const menu = <FontAwesomeIcon icon={faBars} className="text-xl" />;

export default function NavDesktop() {
  return (
    <div className="w-full h-[55px] flex justify-between items-center px-[10.2vw] py-[20px] bg-[var(--bg)] shadow-gray-200 shadow-md fixed top-0 mont">
      <img
        src="/logo.webp"
        alt="Logo"
        width={35}
        height={35}
        className="mt-1"
      />
    </div>
  );
}
