// src/components/Highlights.jsx
import { useEffect } from "react";
import "../styles/Highlights.scss";
import { HiMiniUsers } from "react-icons/hi2";

const cards = [
  {
    title: "Courses",
    desc: "Discover our diverse programs across various disciplines.",
  },
  {
    title: "Developing Proactive & Empathetic Learners",
    desc: "Explore our social outreach projects.",
  },
  {
    title: "Student Life",
    desc: "Explore our cutting-edge facilities and join our engaging clubs and organizations.",
  },
  {
    title: "Partnerships",
    desc: "Empowering innovation and growth through strategic partnerships and collaborations.",
  },
];

const Highlights = () => {
  return (
    <section className="highlight-section d-flex">
      <div className="highlight-left p-5 text-white d-flex flex-column justify-content-center">
        <p className="section-label">SCHOOL HIGHLIGHTS</p>
        <h2 className="fw-bold mb-3">Discover What Makes Our Learning Experience Exceptional</h2>
        <p className="mb-4">
          From global curricula to vibrant student life, innovation, and meaningful partnerships — explore the core of a future-ready education.
        </p>
        <button className="btn btn-light explore-btn"><img src="/person.png" alt="person icon" className="me-1"/>Explore More</button>
      </div>

      <div className="highlight-right row row-cols-1 row-cols-md-2 g-5">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="card highlight-card h-100">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
              </div>
              <div className="bg-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
