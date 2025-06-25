// src/components/EnhancedCurriculum.jsx
import React from "react";
import "../styles/EnhancedCurriculum.scss";
import { FaBookOpen, FaGlobe, FaMedal } from "react-icons/fa";

const EnhancedCurriculum = () => {
  return (
    <section className="enhanced-curriculum-section py-5">
      <div className="text-center mb-5">
        <p className="text-danger text-uppercase small mb-1 fw-semibold">Exciting News!</p>
        <h2 className="fw-bold">Introducing Our Enhanced Curriculum</h2>
      </div>

      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column */}
          <div className="col-md-7">
            <h4 className="fw-bold mb-3">Proposed Cambridge Pathway School</h4>
            <p className="text-muted mb-5">
              We are proud to announce the launch of our International School as a proposed
              Cambridge Pathway School leading up to the IBDP, offering students an unparalleled
              educational experience that combines academic rigor with a global perspective.
            </p>

            <div className="curriculum-points mt-4">
              <div className="d-flex gap-3 align-items-start mb-5">
                <div className="icon-box"><FaBookOpen /></div>
                <div>
                  <h6 className="fw-bold mb-1">Cambridge Curriculum</h6>
                  <p className="text-muted mb-0">
                    World-class Cambridge International curriculum with IGCSE recognized by universities worldwide.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start mb-5">
                <div className="icon-box"><FaGlobe /></div>
                <div>
                  <h6 className="fw-bold mb-1">IB Diploma Programme</h6>
                  <p className="text-muted mb-0">
                    International Baccalaureate Diploma Programme fostering critical thinking, intercultural understanding, and global citizenship.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="icon-box"><FaMedal /></div>
                <div>
                  <h6 className="fw-bold mb-1">Seamless Transition</h6>
                  <p className="text-muted mb-0">
                    Carefully designed pathways ensuring smooth progression from primary through secondary education with consistent excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5">
            <div className="program-box p-4 rounded-4 text-white position-relative">
              <div className="cambridge-badge badge bg-light m-3 shadow-lg py-4 px-4">Cambridge <div className="text-small text-dark"> Certified</div></div>
              <h5 className="fw-bold mb-4">Programmes Offered</h5>

              <div className="d-grid gap-3">
                <div className="program-item d-flex justify-content-between align-items-center rounded-2 px-3 py-3">
                  <span>Cambridge Primary</span>
                  <small>Ages 3–11</small>
                </div>
                <div className="program-item d-flex justify-content-between align-items-center rounded-2 px-3 py-3">
                  <span>Cambridge Lower Secondary</span>
                  <small>Ages 11–14</small>
                </div>
                <div className="program-item d-flex justify-content-between align-items-center rounded-2 px-3 py-3">
                  <span>Cambridge IGCSE</span>
                  <small>Ages 14–16</small>
                </div>
                <div className="program-item d-flex justify-content-between align-items-center rounded-2 px-3 py-3">
                  <span>IB Diploma Programme</span>
                  <small>Ages 16–19</small>
                </div>
                <div className="success-box text-center py-3 rounded-2 mt-2">
                  <h4 className="mb-1">100%</h4>
                  <p className="mb-0 small">University Placement Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCurriculum;
