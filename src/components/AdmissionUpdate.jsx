// src/components/AdmissionUpdate.jsx
import React from "react";
import "../styles/AdmissionUpdate.scss";
import { FaCalendarAlt, FaClock, FaUserGraduate, FaFileDownload, FaInfoCircle } from "react-icons/fa";

const AdmissionUpdate = () => {
  return (
    <section className="admission-section text-white text-center py-5">
      <p className="update-label">ADMISSIONS UPDATE</p>

      <h2 className="highlight-text mx-auto">
        Now Accepting Applications for Academic Year 2025–26
      </h2>

      <p className="subtitle mx-auto mt-3">
        Join our community of global learners and embark on an educational journey that will
        prepare you for success in the 21st century
      </p>

      <div className="row justify-content-center mt-5 gx-4">
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="info-box">
            <img src="/calender-icon.png" alt="" />
            <h5 className="mt-2">Limited Seats</h5>
            <p>Apply Early</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="info-box">
            <img src="/clock-icon.png" alt="" />
            <h5 className="mt-2">Consistent Academic Record</h5>
            <p>First Come, First Served</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="info-box">
            <img src="/user-icon.png" alt="" className="user-icon"/>
            <h5 className="mt-2">All Grades</h5>
            <p>Grade 1 to 8, IGCSE Grade 9</p>
          </div>
        </div>
      </div>

      <div className="button-container d-flex flex-wrap justify-content-center gap-3 mt-4">
        <button className="btn btn-admission px-4 py-2 d-flex align-items-center gap-2 rounded-pill">
          <img src="/employee-icon.png" alt="" /> View Admission Process
        </button>
        <button className="btn btn-light px-4 py-2 d-flex align-items-center gap-2 rounded-pill">
          <img src="/download-icon.png" alt="" /> Download Application Form
        </button>
        <button className="btn btn-light px-4 py-2 d-flex align-items-center gap-2 rounded-pill">
          <img src="/download-icon.png" alt="" /> Download Admission Handbook
        </button>
      </div>

      <div className="alert-box mt-5">
        ⚡ Admission Forms available from 5th June to 15th June 2025.
      </div>
    </section>
  );
};

export default AdmissionUpdate;
