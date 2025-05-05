import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavDesktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navToHome = () => {
    const home = document.querySelector('.home-container');

    window.scrollTo({
      top: home.offsetTop - 220,
      behavior: "smooth"
    })
  }

  const navToAbout = () => {
    const about = document.querySelector('.__about__');

    window.scrollTo({
      top: about.offsetTop - 60,
      behavior: "smooth"
    })
  }

  const navToSkills = () => {
    const skills = document.querySelector('.__skills__');

    window.scrollTo({
      top: skills.offsetTop + 100,
      behavior: "smooth"
    })
  }

  return (
    <div
      className={`w-full h-[60px] flex justify-between items-center px-[5vw] md:px-[10vw] py-[20px] md:bg-[var(--bg)]  ${
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
          <li className="cursor-pointer hover:text-[var(--black)]" onClick={navToHome}>home</li>
          <li className="cursor-pointer hover:text-[var(--black)]" onClick={navToAbout}>about me</li>
          <li className="cursor-pointer hover:text-[var(--black)]" onClick={navToSkills}>
            technologies
          </li>
          <li className="cursor-pointer hover:text-[var(--black)]">projects</li>
          <li className="cursor-pointer hover:text-[var(--black)]">contact</li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center">
        <button
          className="__menu_button__ text-xl"
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
          <li className="cursor-pointer hover:text-[var(--black)]" >home</li>
          <li className="cursor-pointer hover:text-[var(--black)]" onClick={navToAbout}>about me</li>
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