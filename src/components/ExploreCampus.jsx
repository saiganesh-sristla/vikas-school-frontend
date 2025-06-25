import { useState } from "react";
import "../styles/ExploreCampus.scss";

const ExploreCampus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 1,
      image: '/explore-card1.jpg',
      category: 'BASKETBALL GROUND',
      title: '94ft X 50ft Basketball Ground',
      description: 'As we usher in the new academic year we Sulonians are off with a kick-start as we celebrate.',
      alt: 'Basketball Ground'
    },
    {
      id: 2,
      image: '/explore-card1.jpg',
      category: 'SCIENCE LABORATORY',
      title: 'State-of-the-Art Science Labs',
      description: 'Our modern science laboratories provide hands-on learning experiences with the latest equipment and technology.',
      alt: 'Science Laboratory'
    },
    {
      id: 3,
      image: '/explore-card1.jpg',
      category: 'DIGITAL LIBRARY',
      title: 'Modern Digital Library',
      description: 'Access thousands of digital resources and books in our quiet, technology-enabled learning environment.',
      alt: 'Digital Library'
    },
    {
      id: 4,
      image: '/explore-card1.jpg',
      category: 'ART STUDIO',
      title: 'Creative Art Studios',
      description: 'Express your creativity in our well-equipped art studios with professional-grade materials and tools.',
      alt: 'Art Studio'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentCard = carouselData[currentSlide];

  return (
    <section
      className="explore-campus-section"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 44, 71, 0.7), rgba(30, 44, 71, 0.7)), url('/explore-campus-bg.png')`,
      }}
    >
      <div className="container text-white position-relative">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-6 ps-5 pt-5">
            <p className="sub-heading">EXPERIENCE OUR CAMPUS</p>
            <h2 className="main-heading">
              Explore Life at Vikas The Concept School
            </h2>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="row align-items-start position-relative">
          {/* Left side - Carousel Area */}
          <div className="col-lg-8 p-5 position-relative">
            {/* Info Card Container */}
            <div className="info-card-container">
              {/* Info Card - Animated */}
              <div className="info-card" key={currentCard.id}>
                <div className="card-img">
                  <img
                    src={currentCard.image}
                    alt={currentCard.alt}
                    className="img-fluid"
                  />
                  <button className="close-btn">&times;</button>
                </div>
                <div className="card-body">
                  <h6 className="card-category">
                    {currentCard.category}
                  </h6>
                  <h5 className="card-title">
                    {currentCard.title}
                  </h5>
                  <p className="card-description">
                    {currentCard.description}
                  </p>
                  <a href="#" className="btn btn-learnmore rounded-pill">
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Carousel Controls - Below the card */}
              <div className="carousel-controls">
                <button 
                  className="carousel-control-btn carousel-prev" 
                  type="button"
                  onClick={prevSlide}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Carousel Indicators */}
                <div className="carousel-indicators-bottom">
                  {carouselData.map((_, index) => (
                    <span 
                      key={index}
                      className={`indicator ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>

                <button 
                  className="carousel-control-btn carousel-next" 
                  type="button"
                  onClick={nextSlide}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Hotspots - Interactive Plus Icons */}
            {/* <div className="hotspot hotspot-1">
              <span className="hotspot-icon">+</span>
            </div>
            <div className="hotspot hotspot-2">
              <span className="hotspot-icon">+</span>
            </div> */}
          </div>

          {/* Right-side Buttons */}
          <div className="col-lg-4 d-flex flex-column align-items-end pe-5 gap-3">
            <button className="side-btn">
              <div className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span>Science Labs</span>
            </button>
            
            <button className="side-btn">
              <div className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span>Digital Library</span>
            </button>
            
            <button className="side-btn">
              <div className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span>Art Studios</span>
            </button>
            
            <button className="side-btn">
              <div className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span>Sports Complex</span>
            </button>
            
            <button className="btn virtual-tour-btn">
              <div className="btn-content">
                <span className="main-text">Virtual Tour</span>
                <small className="sub-text">Coming Soon!</small>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCampus;