import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { HiOutlineArrowNarrowRight, HiUsers  } from "react-icons/hi";
import { FaBolt } from "react-icons/fa";
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <footer className="footer-section text-white">
      <img className="bg-image" src="/chakra-bg.svg" alt="" />
      <div className="container">
        <div className="row gy-5">
          {/* Logo + Description */}
          <div className="col-md-3 col-sm-6">
            <img
              src="/Logo.png"
              alt="Logo"
              className="mb-5"
              width="120"
            />
            <p>
              Empowering students to thrive in a rapidly changing world through
              global education rooted in Indian values. 50+ years of academic
              excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-sm-6">
            <h6 className="mb-4">Reach Us At</h6>
            <p className="mb-4">
              <MdLocationOn className="me-2 text-danger" />
              <strong>Location:</strong><div className="ps-4 pt-1"> Sai Krishnaja Hills, off Miyapur,
              Bachupally, Hyderabad, Telangana-500118</div>
            </p>
            <p className="mb-4">
              <MdCall className="me-2 text-danger" />
              <strong>Board Line:</strong> <div className="ps-4 pt-1">(+91) 022-5036 88 10 / 12</div> 
            </p>
            <p>
              <MdEmail className="me-2 text-danger" />
              <strong>Email:</strong> <div className="ps-4 pt-1"> support@vikasschool.org </div>
            </p>
          </div>

          {/* Quick Links */}
          <div className="quick-links col-md-2 col-sm-6">
            <h6 className="mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Admissions</li>
              <li>Academics</li>
              <li>Campus Life</li>
              <li>Alumni</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Academic Programmes */}
          <div className="col-md-2 col-sm-6">
            <h6 className="mb-4">Academic Programmes</h6>
            <ul className="list-unstyled">
              <li>Cambridge Primary</li>
              <li>Cambridge Secondary</li>
              <li>IGCSE</li>
              <li>IB Diploma</li>
              <li>Co-curricular Activities</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="col-md-2 col-12">
            <div className="cta-box rounded text-white">
              <FaBolt className="text-warning fs-3 mb-2" />
              <h5>Let's</h5>
              <h5>make it</h5>
              <h5>happen.</h5>
              <button className="btn btn-cta mt-3 d-flex align-items-center justify-content-center gap-2 rounded-pill">
                <HiUsers />
                Book A Visit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 text-white opacity-25" />

        {/* Bottom Row */}
        <div className="row align-items-center text-center text-md-start gy-3">
          <div className="col-md-3">
            <p className="mb-0">Follow Us On</p>
            <p>Stay Connected and Updated</p>
            <div className="d-flex gap-3 mt-2 justify-content-center justify-content-md-start">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedinIn />
            </div>
          </div>

          <div className="col-md-4">
            <p className="mb-1">Stay Connected</p>
            <p className="small mb-0 text-white">
              Get updates on admissions, events, and school news
            </p>
          </div>

          <div className="col-md-5">
            <div className="d-flex">
              <input
                type="email"
                className="form-control rounded-pill me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-subscribe px-4 py-2 rounded-pill d-flex align-items-center gap-1">
                Subscribe <HiOutlineArrowNarrowRight />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 text-white opacity-25" />

        {/* Bottom Text */}
        <div className="row mt-4 text-center text-md-start">
          <div className="col-md-6">
            <p className="mb-0">
              © 2025 Vikas The Concept School. All rights reserved.
            </p>
            <div className="mt-1">
            <a href="#" className="text-white text-decoration-none me-3 fw-light opacity-75">
                Disclaimer
              </a>
              <a href="#" className="text-white text-decoration-none fw-light opacity-75">
                Privacy Policy
              </a>
              </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="small mb-0">
              Designed with ❤️ by Ideamagix. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;