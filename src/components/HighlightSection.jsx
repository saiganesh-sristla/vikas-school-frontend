import React from 'react';
import '../styles/HighlightSection.scss';

const HighlightSection = () => {
  return (
    <section className="highlight1-section text-white d-flex align-items-center">
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-10">
            <p className="legacy-text mb-2">Legacy Highlight</p>
            <h2 className="display-5 fw-bold mb-3">Humility Before Academic Success.</h2>
            <p className="lead fw-medium fs-6">Discover dynamic clubs, sports, leadership programs, and more—crafted to develop holistic learners.</p>

            <div className="row text-center mb-5">
              <div className="col-md-4 mb-4 mb-md-0">
                <img src="/Card1.png" alt="image" className='card1'/>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <img src="/Card2.png" alt="image" className='card2'/>
              </div>
              <div className="col-md-4">
                <img src="/Card3.png" alt="image" className='card3'/>
              </div>
            </div>
          </div>

          {/* Right side brochure */}
          <div className="col-lg-2 text-center">
            <img src="/brochure.png" alt="Brochure" className="brochure-img my-4" />
            <h5 className="fw-semibold">Get Brochure</h5>
            <button className="btn btn-download mt-2 px-4 py-2 rounded-pill">
              Download <span className="ms-1">→</span>
            </button>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="card vision-card">
              <h5>⚡ Vision Statement</h5>
              <p>To create a world where we foster global-mindedness and academic excellence empowering students to thrive in a rapidly changing world.</p>
            </div>
          </div>
          <div className="col-md-7 mt-3 mt-md-0">
            <div className="card mission-card">
              <h5>⚡ Mission Statement</h5>
              <p>We are committed to delivering a rigorous and globally recognized international curriculum that encourages academic excellence and prepares students to adapt and succeed in an ever-changing world...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
