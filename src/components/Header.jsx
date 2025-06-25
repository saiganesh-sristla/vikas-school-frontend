import React, { useState } from "react";
import "../styles/Header.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? "" : name);
  };

  const dropdownItems = ["Dummy 1", "Dummy 2", "Dummy 3"];

  return (
    <header className="main-header">
      <img src="/Left-Logo.png" alt="Logo" className="logo-img" />

      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-end align-items-center px-3 px-md-4 py-3">
        <div className="d-none d-lg-flex gap-3 social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <div className="d-lg-none">
          <HiOutlineMenuAlt3 className="hamburger" onClick={() => setShowSidebar(true)} />
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="main-nav d-none d-lg-flex justify-content-end gap-5 py-2 pe-5">
        <a href="#">Home</a>

        <div className="nav-item-dropdown">
          <a href="#">About Us <span className="plus">+</span></a>
          <div className="dropdown-content">
            {dropdownItems.map((item, i) => <a key={i} href="#">{item}</a>)}
          </div>
        </div>

        <div className="nav-item-dropdown">
          <a href="#">Admissions <span className="plus">+</span></a>
          <div className="dropdown-content">
            {dropdownItems.map((item, i) => <a key={i} href="#">{item}</a>)}
          </div>
        </div>

        <div className="nav-item-dropdown">
          <a href="#">Academics <span className="plus">+</span></a>
          <div className="dropdown-content">
            {dropdownItems.map((item, i) => <a key={i} href="#">{item}</a>)}
          </div>
        </div>

        <a href="#">Faqs</a>
        <a href="#">Contact Us</a>
        <a href="#">Virtual Tour</a>
      </nav>

      {/* Sidebar (Mobile) */}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center px-3 py-3">
          <IoMdClose className="close-icon" onClick={() => setShowSidebar(false)} />
        </div>
        <div className="sidebar-links d-flex flex-column gap-2 px-4">
          <a href="#">Home</a>

          <div className="accordion-item">
            <div onClick={() => toggleAccordion("about")} className="accordion-title">
              About Us <span className="plus">+</span>
            </div>
            {openAccordion === "about" && (
              <div className="accordion-content">
                {dropdownItems.map((item, i) => <a key={i} href="#">{item}</a>)}
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div onClick={() => toggleAccordion("admissions")} className="accordion-title">
              Admissions <span className="plus">+</span>
            </div>
            {openAccordion === "admissions" && (
              <div className="accordion-content">
                {dropdownItems.map((item, i) => <a key={i} href="#">{item}</a>)}
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div onClick={() => toggleAccordion("academics")} className="accordion-title">
              Academics <span className="plus">+</span>
            </div>
            {openAccordion === "academics" && (
              <div className="accordion-content">
                {dropdownItems.map((item, i) => <a key={i} href="#">{item}</a>)}
              </div>
            )}
          </div>

          <a href="#">Faqs</a>
          <a href="#">Contact Us</a>
          <a href="#">Virtual Tour</a>
        </div>

        <div className="sidebar-footer d-flex justify-content-center gap-3 mt-auto px-3 pb-4">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)} />}
    </header>
  );
};

export default Header;
