import "../styles/HeroSection.scss";
import { SlCalender } from "react-icons/sl";
import { HiMiniUsers } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-white text-center">
      <div className="overlay-content container">
        <p className="small-text mb-2">TAKE THE NEXT STEP</p>
        <h1 className="display-5 fw-bold mb-3">
          Begin Your Child’s Global Learning Journey Today
        </h1>
        <p className="lead mb-4">
          Secure a world-class education rooted in values. Explore our admissions
          process or book a campus visit now.
        </p>
        <div className="button-group d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn custom-buttom px-4 py-2 rounded-pill">
            <img src="/calendar-final.png" alt="calender icon" className="icon"/>
            Admissions Open 2025
          </button>
          <button className="btn btn-book px-4 py-2 rounded-pill">
            <img src="/person.png" alt="calender icon" className="icon"/>
            Book A Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
