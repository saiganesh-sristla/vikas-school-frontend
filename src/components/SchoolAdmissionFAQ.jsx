import React, { useEffect } from 'react';
import '../styles/SchoolAdmissionFAQ.scss';

const SchoolAdmissionFAQ = () => {
  // Load Bootstrap JS for accordion functionality
  useEffect(() => {
    const loadBootstrapJS = async () => {
      if (!window.bootstrap) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
        script.async = true;
        document.head.appendChild(script);
      }
    };
    loadBootstrapJS();
  }, []);
  const faqData = [
    {
      id: 'faq1',
      question: 'What are the advantages of admitting your child to Vikas The Concept School?'
    },
    {
      id: 'faq2',
      question: 'What curriculum does the school follow?'
    },
    {
      id: 'faq3',
      question: 'At what age or grade can the child join the school?'
    },
    {
      id: 'faq4',
      question: 'What are the benefits of the Cambridge and IBDP curriculum?'
    },
    {
      id: 'faq5',
      question: 'Is there an entrance test for admission?'
    },
    {
      id: 'faq6',
      question: 'What subjects are offered at each stage?'
    },
    {
      id: 'faq7',
      question: 'Are IGCSE and IBDP recognized in India and abroad?'
    },
    {
      id: 'faq8',
      question: 'How are students assessed?'
    },
    {
      id: 'faq9',
      question: 'What are the school hours and calendar?'
    },
    {
      id: 'faq10',
      question: 'What co-curricular and extracurricular activities are offered?'
    }
  ];

  return (
    <div className="faq-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Header Section */}
            <div className="faq-header mb-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="quick-answers-label mb-2">QUICK ANSWERS</p>
                  <h2 className="faq-title mb-3">Get Clarity on Admissions, Curriculum, and More</h2>
                  <p className="faq-subtitle">
                    From age criteria to learning pathways and co-curriculars - get all your key 
                    queries addressed here.
                  </p>
                </div>
                <button className="btn-view-all">
                  View All FAQs
                </button>
              </div>
            </div>

            {/* Accordion Section */}
            <div className="accordion faq-accordion" id="faqAccordion">
              {faqData.map((faq, index) => (
                <div className="accordion-item faq-item" key={faq.id}>
                  <h3 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className="accordion-button collapsed faq-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${faq.id}`}
                    >
                      <span className="faq-question">{faq.question}</span>
                      <span className="faq-icon">
                        <span className="plus-icon">+</span>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`collapse${faq.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      <p>This is where the answer content would go for: {faq.question}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolAdmissionFAQ;