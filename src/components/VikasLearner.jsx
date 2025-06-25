// import React, { useEffect, useState } from "react";
// import "../styles/VikasLearner.scss";

// const VikasLearner = () => {
//   const [learnerData, setLearnerData] = useState([
//     {
//       id: 1,
//       title: "Proactive",
//       desc: "We make things happen!",
//       image: "/learner-card1.png",
//       color: "#F4D548",
//     },
//     {
//       id: 2,
//       title: "Empathetic",
//       desc: "We share the experiences of others as our own!",
//       image: "/learner-card2.jpg",
//       color: "#52C1E2",
//     },
//     {
//       id: 3,
//       title: "Resilient",
//       desc: "We find the inner strength to overcome the most difficult of situations with creative solutions.",
//       image: "/learner-card3.jpg",
//       color: "#4C9BD2",
//     },
//     {
//       id: 4,
//       title: "Creative",
//       desc: "We use our imagination to think out of the box!",
//       image: "/learner-card4.jpg",
//       color: "#88D060",
//     },
//     {
//       id: 5,
//       title: "Self-assured",
//       desc: "We have confidence in our own abilities!",
//       image: "/learner-card5.jpg",
//       color: "#F4643E",
//     },
//   ]);

//   return (
//     <div className="vikas-wrapper">
//         <img className="bg-image" src="/chakra-bg.svg" alt="" />
//       <p className="above-title">VIKAS IS LEARNER PROFILE</p>
//       <h2 className="title">The PERC(k)s of Being a Vikas Learner</h2>
//       <p className="subtitle">
//         At SMT Vikas The Concept School, we believe that education goes beyond
//         academics. The Vikas IB Learner Profile reflects the core values we
//         instill in our students, shaping them into well-rounded individuals
//         ready to thrive in a global world.
//       </p>
//       <div className="carousel-container">
//         <div className="scroll-track">
//           <img
//             src="/line_and_Arrow.png"
//             alt="arrow-line"
//             className="arrow-line"
//           />
//           <div className="scroll-wrapper">
//             {learnerData.map((item, index) => (
//               <div
//                 className={`learner-card ${index % 2 === 0 ? "up" : "down"}`}
//                 key={item.id}
//               >
//                 <div className="image-wrapper">
//                   <img src={item.image} alt={item.title} />
//                   <span
//                     className="badge-number"
//                     style={{ backgroundColor: item.color }}
//                   >
//                     {item.id}.
//                   </span>
//                 </div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VikasLearner;

// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "../styles/VikasLearner.scss";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// const VikasLearner = () => {
//   const learnerData = [
//     {
//       id: 1,
//       title: "Proactive",
//       desc: "We make things happen!",
//       image: "/learner-card1.png",
//       color: "#F4D548",
//     },
//     {
//       id: 2,
//       title: "Empathetic",
//       desc: "We share the experiences of others as our own!",
//       image: "/learner-card2.jpg",
//       color: "#52C1E2",
//     },
//     {
//       id: 3,
//       title: "Resilient",
//       desc: "We find the inner strength to overcome the most difficult of situations with creative solutions.",
//       image: "/learner-card3.jpg",
//       color: "#4C9BD2",
//     },
//     {
//       id: 4,
//       title: "Creative",
//       desc: "We use our imagination to think out of the box!",
//       image: "/learner-card4.jpg",
//       color: "#88D060",
//     },
//     {
//       id: 5,
//       title: "Self-assured",
//       desc: "We have confidence in our own abilities!",
//       image: "/learner-card5.jpg",
//       color: "#F4643E",
//     },
//     {
//       id: 6,
//       title: "Resilient",
//       desc: "We make things happen!",
//       image: "/learner-card3.jpg",
//       color: "#52C1E2",
//     },
//   ];

//   return (
//     <div className="vikas-wrapper">
//       <img className="bg-image" src="/chakra-bg.svg" alt="" />
//       <p className="above-title">VIKAS IS LEARNER PROFILE</p>
//       <h2 className="title">The PERC(k)s of Being a Vikas Learner</h2>
//       <p className="subtitle">
//         At SMT Vikas The Concept School, we believe that education goes beyond
//         academics. The Vikas IB Learner Profile reflects the core values we
//         instill in our students, shaping them into well-rounded individuals
//         ready to thrive in a global world.
//       </p>

//       <div className="carousel-container">
//         {/* <img
//           src="/line_and_Arrow.png"
//           alt="arrow-line"
//           className="arrow-line"
//         /> */}
//         <Splide
//           options={{
//             type: "loop",
//             perPage: 5,
//             perMove: 1,
//             gap: "0rem",
//             autoplay: true,
//             interval: 2500,
//             speed: 1000,
//             pauseOnHover: false,
//             arrows: false,
//             pagination: false,
//             breakpoints: {
//               768: {
//                 perPage: 1,
//               },
//               1024: {
//                 perPage: 2,
//               },
//             },
//           }}
//           className="scroll-wrapper"
//         >
//           {learnerData.map((item, index) => (
//             <SplideSlide key={item.id}>
//               <div
//                 className={`learner-card ${index % 2 === 0 ? "up" : "down"}`}
//               >
//                 <div className="image-wrapper">
//                   <img src={item.image} alt={item.title} />
//                   <span
//                     className="badge-number"
//                     style={{ backgroundColor: item.color }}
//                   >
//                     {item.id}.
//                   </span>
//                 </div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             </SplideSlide>
//           ))}
//         </Splide>
//       </div>
//     </div>
//   );
// };

// export default VikasLearner;



import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../styles/VikasLearner.scss";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const VikasLearner = () => {
  const learnerData = [
    {
      id: 1,
      title: "Proactive",
      desc: "We make things happen!",
      image: "/learner-card1.png",
      color: "#F4D548",
    },
    {
      id: 2,
      title: "Empathetic",
      desc: "We share the experiences of others as our own!",
      image: "/learner-card2.jpg",
      color: "#52C1E2",
    },
    {
      id: 3,
      title: "Resilient",
      desc: "We find the inner strength to overcome the most difficult of situations with creative solutions.",
      image: "/learner-card3.jpg",
      color: "#4C9BD2",
    },
    {
      id: 4,
      title: "Creative",
      desc: "We use our imagination to think out of the box!",
      image: "/learner-card4.jpg",
      color: "#88D060",
    },
    {
      id: 5,
      title: "Self-assured",
      desc: "We have confidence in our own abilities!",
      image: "/learner-card5.jpg",
      color: "#F4643E",
    },
    {
      id: 6,
      title: "Resilient",
      desc: "We make things happen!",
      image: "/learner-card3.jpg",
      color: "#52C1E2",
    },
  ];

  return (
    <div className="vikas-wrapper">
      <img className="bg-image" src="/chakra-bg.svg" alt="" />
      <p className="above-title">VIKAS IS LEARNER PROFILE</p>
      <h2 className="title">The PERC(k)s of Being a Vikas Learner</h2>
      <p className="subtitle">
        At SMT Vikas The Concept School, we believe that education goes beyond
        academics. The Vikas IB Learner Profile reflects the core values we
        instill in our students, shaping them into well-rounded individuals
        ready to thrive in a global world.
      </p>

      <div className="carousel-container">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 5,
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: false,
              pauseOnFocus: false,
            },
            breakpoints: {
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
              1224: {
                perPage: 4,
              }
            },
          }}
          extensions={{ AutoScroll }}
          className="scroll-wrapper"
        >
          {learnerData.map((item, index) => (
            <SplideSlide key={item.id}>
              <div
                className={`learner-card ${index % 2 === 0 ? "up" : "down"}`}
              >
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <span
                    className="badge-number"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.id}.
                  </span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default VikasLearner;