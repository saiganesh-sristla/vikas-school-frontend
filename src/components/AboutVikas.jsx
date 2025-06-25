import React from "react";
import "../styles/AboutVikas.scss";

const AboutVikas = () => {
  return (
    <div className="about-vikas">
      <div className="container">

      
      <div className="text-center text-uppercase gradient-text small fw-semibold mb-2">
        About Vikas The Concept School
      </div>
      <h2 className="fw-bold text-center mb-3">
        Fostering Global Thinkers with Indian Cultural Roots
      </h2>
      <p className="text-center mb-5 px-md-5">
        Rooted in tradition and inspired by innovation, we offer global education
        with strong Indian values from Cambridge to IBDP. A proud heritage from the
        Vikas Group, blending Indian culture with world-class international curriculums.
      </p>

      <div className="row align-items-center g-4">
        {/* Left image section */}
        <div className="col-lg-6">
          <div className="image-section">
            <img
              src="/about-left.png"
              alt="Vikas students"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Right content section */}
        <div className="col-lg-6">
          <p className="mb-3">
            At <strong>Vikas The Concept School</strong>, we foster global-mindedness
            and academic excellence empowering students to thrive in a rapidly
            changing world. The School aims at developing learners who are
            internationally minded but are firmly rooted to Indian culture.
          </p>
          <p>
            We offer a seamless academic journey from <strong>Cambridge Primary</strong>{" "}
            through to the <strong>International Baccalaureate Diploma Programme (IBDP)</strong>.
          </p>

          <div className="cards-container row g-3 mt-4">
            <div className="col-6">
              <div className="info-box shadow-sm">
                <div className="">
                  <img src="/plane-icon.png" alt="plane" />
                </div>
                <div>
                  <div className="fw-semibold card-title">International</div>
                  <small>Curriculum Standards</small>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box shadow-sm">
                <div className="" >
                  <img src="/globe-icon.png" alt="globe" />
                </div>
                <div>
                  <div className="fw-semibold card-title">Global</div>
                  <small>Mindedness</small>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box shadow-sm">
                <div className="" >
                  <img src="/user-icon.png" alt="user" />
                </div>
                <div>
                  <div className="fw-semibold card-title">Indian</div>
                  <small>Values</small>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box shadow-sm">
                <div className="" >
                  <img src="/rank-icon.png" alt="rank" />
                </div>
                <div>
                  <div className="fw-semibold card-title">IB Programme</div>
                  <small>Co-curricular Education</small>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-learn mt-4 px-4">
            Learn More <span className="ms-1">&rarr;</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutVikas;
