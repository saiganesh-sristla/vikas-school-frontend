// HeroBanner.jsx
import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/HeroBanner.scss';
import { BsWhatsapp, BsEnvelope, BsTelephone, BsFillCameraVideoFill } from 'react-icons/bs';
import { FaRegCircleDot } from 'react-icons/fa6';

const slides = [
  
  {
    id: 1,
    title: 'Legacy Of 50+ Years Of Educational Excellence',
    subtitle: 'Cambridge University Partnership • International Curriculum • Indian Values',
    tag: 'Cambridge + IB Partnership',
    cta1: 'Admissions Open 2025',
    cta2: 'Apply Now',
    bgImage: '/hero-bg.jpg',
    cardImage: '/hero-card1.png',
    cardTitle: 'IBDP Results are out!'
  },
  {
    id: 1,
    title: 'Legacy Of 50+ Years Of Educational Excellence',
    subtitle: 'Cambridge University Partnership • International Curriculum • Indian Values',
    tag: 'Cambridge + IB Partnership',
    cta1: 'Admissions Open 2025',
    cta2: 'Apply Now',
    bgImage: '/hero-bg.jpg',
    cardImage: '/hero-card1.png',
    cardTitle: 'IBDP Results are out!'
  },
  {
    id: 1,
    title: 'Legacy Of 50+ Years Of Educational Excellence',
    subtitle: 'Cambridge University Partnership • International Curriculum • Indian Values',
    tag: 'Cambridge + IB Partnership',
    cta1: 'Admissions Open 2025',
    cta2: 'Apply Now',
    bgImage: '/hero-bg.jpg',
    cardImage: '/hero-card1.png',
    cardTitle: 'IBDP Results are out!'
  },
  {
    id: 1,
    title: 'Legacy Of 50+ Years Of Educational Excellence',
    subtitle: 'Cambridge University Partnership • International Curriculum • Indian Values',
    tag: 'Cambridge + IB Partnership',
    cta1: 'Admissions Open 2025',
    cta2: 'Apply Now',
    bgImage: '/hero-bg.jpg',
    cardImage: '/hero-card1.png',
    cardTitle: 'IBDP Results are out!'
  }
  // Add more slides if needed
];

const HeroBanner = () => {
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [showInquire, setShowInquire] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showVirtual, setShowVirtual] = useState(false);
  return (
    <div className="hero-wrapper">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 5000,
          arrows: false,
          pagination: true,
        }}>
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.bgImage})` }}>
              <div className="overlay-content container">
                <span className="tag">{slide.tag}</span>
                <h1 className="heading">{slide.title}</h1>
                <p className="subheading">{slide.subtitle}</p>
                <div className="cta-buttons">
                  <button className="btn btn-cta1"><img className='me-2 icon' src="/calendar-final.png" alt="" />{slide.cta1}</button>
                  <button className="btn btn-cta2"><img className='me-2 icon' src="/person.png" alt="" />{slide.cta2}</button>
                </div>
              </div>

              <div className="vertical-icons">
                <div className="icon-wrapper whatsapp" onMouseEnter={() => {setShowWhatsapp(true)}} onMouseLeave={() => {setShowWhatsapp(false)}}><img src="/whatsapp.png" alt="" /></div>
                <div className="icon-wrapper inquire" onMouseEnter={() => {setShowInquire(true)}} onMouseLeave={() => {setShowInquire(false)}}><img src="/inquire-now.png" alt="" /></div>
                <div className="icon-wrapper call" onMouseEnter={() => {setShowCall(true)}} onMouseLeave={() => {setShowCall(false)}}><img src="/call.png" alt="" /></div>
                <div className="icon-wrapper email" onMouseEnter={() => {setShowMessage(true)}} onMouseLeave={() => {setShowMessage(false)}}><img src="/email.png" alt="" /></div>
                <div className="icon-wrapper virtual" onMouseEnter={() => {setShowVirtual(true)}} onMouseLeave={() => {setShowVirtual(false)}}><img src="/Vector.png" alt="" /></div>
                <div className="tooltip">Virtual Tour</div>
                <img className='bg-img' src="/Rectangle.png" alt="" />
                {showWhatsapp ? <img className='virtual-bar1' src="/virtual-bar.png" alt="" /> : ""}
                {showInquire ? <img className='virtual-bar2' src="/virtual-bar.png" alt="" /> : ""}
                {showCall ? <img className='virtual-bar3' src="/virtual-bar.png" alt="" /> : ""}
                {showMessage ? <img className='virtual-bar4' src="/virtual-bar.png" alt="" /> : ""}
                {showVirtual ? <img className='virtual-bar5' src="/virtual-bar.png" alt="" /> : ""}
               
              </div>

              <div className="bottom-card">
                <img src={slide.cardImage} alt="card" />
                <div>
                  <small>Next</small>
                  <p>{slide.cardTitle}</p>
                  <div className="progress-line"></div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HeroBanner;
