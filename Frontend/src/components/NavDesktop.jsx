import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./css/Mobile.css";

export default function NavDesktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`w-full h-[60px] flex justify-between items-center px-[5vw] md:px-[10vw] py-[20px] md:bg-[var(--bg)] ${
        mobileMenuOpen
          ? "bg-[var(--bg)] transition-all duration-200 ease-in-out"
          : ""
      } fixed top-0 mont md:shadow-black/4 md:shadow-lg z-50`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.webp"
          alt="Logo"
          width={35}
          height={35}
          className="mt-1 hidden md:block"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <ul className="nav-desktop flex gap-[3vw] text-[13px] text-[var(--blue)]">
          <li className="cursor-pointer hover:text-[var(--black)]">home</li>
          <li className="cursor-pointer hover:text-[var(--black)]">about me</li>
          <li className="cursor-pointer hover:text-[var(--black)]">
            technologies
          </li>
          <li className="cursor-pointer hover:text-[var(--black)]">projects</li>
          <li className="cursor-pointer hover:text-[var(--black)]">contact</li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center">
        <button
          className="text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute shadow-lg/5 top-[60px] left-0 w-full bg-[var(--bg)] overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-3 text-[13px] text-[var(--blue)]  ">
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
