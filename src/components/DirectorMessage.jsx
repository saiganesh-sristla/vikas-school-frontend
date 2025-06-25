import "../styles/DirectorMessage.scss";
import { FaPlay } from "react-icons/fa";

const DirectorMessage = () => {
  return (
    <section className="director-message text-white py-5">
      <img className="chakra-bg" src="/chakra-bg.svg" alt="" />
      <div className="container">
        <div className="top-heading">
        <p className="section-subtitle text-uppercase text-light small mb-2">
              Message from the Director
            </p>
            <h2 className="fw-bold mb-3">
              Guiding Every Learner Toward Purpose and Excellence
            </h2>
            </div>
        <div className="row align-items-center g-5">
          {/* Image and Video Overlay */}
          <div className="col-lg-5">
            <div className="director-image position-relative rounded-4 overflow-hidden">
              <img
                src="/director-final.png"
                alt="Director"
                className=""
              />
              <button><img className="icon" src="/play-icon-red.png" alt="" /></button>
            </div>
          </div>

          {/* Textual Content */}
          <div className="col-lg-7">
            

            <blockquote className="blockquote text-white fs-5 fst-italic mb-4">
              <div className="bi bi-quote fs-4 me-3 text-info"><img src="/quotes.png" alt="quote icon" /></div>
              "Education is not just about academic excellence—it’s about
              nurturing compassionate, confident, and capable global citizens
              who will shape tomorrow’s world."
            </blockquote>

            <p className="text-white-50 mb-3">
              Welcome to Vikas The Concept School, where we believe every child
              has the potential to excel and make a meaningful difference in the
              world. Our partnership with Cambridge University and our
              commitment to the IB curriculum ensures that your child receives a
              world-class education.
            </p>
            <p className="text-white-50 mb-4">
              We don’t just prepare students for exams—we prepare them for life.
              Our holistic approach combines academic rigor with character
              development, ensuring our graduates are not only knowledgeable but
              also ethical, empathetic, and ready to lead.
            </p>

            <div className="watch-full-container">
              <div>
              <h5 className="fw-semibold mb-0">Dr Surapaneni Swarajya</h5>
              <p className="text-info mb-4">
                Director Education and Group Vean, Vikas Group of Schools
              </p>
              </div>
              <button className="btn btn-message px-4 py-2 rounded-pill ">
                  <img src="/play-icon.png" alt="play icon" className="me-2"/>Watch Full Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;