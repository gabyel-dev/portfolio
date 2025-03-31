import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./css/Mobile.css";

export default function NavDesktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[55px] flex justify-between items-center px-[10.2vw] py-[20px] bg-[var(--bg)] fixed top-0 mont md:shadow-md md:shadow-gray-200">
      <img
        src="/logo.webp"
        alt="Logo"
        width={35}
        height={35}
        className="mt-1"
      />

      {/* Desktop Navigation */}
      <ul className="nav-desktop hidden md:flex gap-[3vw] text-[13px] text-[var(--blue)]">
        <li className="cursor-pointer hover:text-[var(--black)]">home</li>
        <li className="cursor-pointer hover:text-[var(--black)]">about me</li>
        <li className="cursor-pointer hover:text-[var(--black)]">
          technologies
        </li>
        <li className="cursor-pointer hover:text-[var(--black)]">projects</li>
        <li className="cursor-pointer hover:text-[var(--black)]">contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {!mobileMenuOpen ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </button>

      {/* Mobile Navigation with Animated Height Transition */}
      <div
        className={`absolute top-[55px] left-0 w-full bg-[var(--bg)] overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-3 text-[13px] text-[var(--blue)]">
          <li className="cursor-pointer hover:text-[var(--black)]">home</li>
          <li className="cursor-pointer hover:text-[var(--black)]">about me</li>
          <li className="cursor-pointer hover:text-[var(--black)]">
            technologies
          </li>
          <li className="cursor-pointer hover:text-[var(--black)]">projects</li>
          <li className="cursor-pointer hover:text-[var(--black)]">contact</li>
        </ul>
      </div>
    </div>
  );
}
