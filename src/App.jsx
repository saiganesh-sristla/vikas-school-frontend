import AboutVikas from "./components/AboutVikas"
import AdmissionUpdate from "./components/AdmissionUpdate"
import DirectorMessage from "./components/DirectorMessage"
import EnhancedCurriculum from "./components/EnhancedCurriculum"
import ExploreCampus from "./components/ExploreCampus"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroBanner from "./components/HeroBanner"
import HeroSection from "./components/HeroSection"
import Highlights from "./components/Highlights"
import HighlightSection from "./components/HighlightSection"
import SchoolAdmissionFAQ from "./components/SchoolAdmissionFAQ"
import VikasLearner from "./components/VikasLearner"
import './styles/Main.scss';
function App() {

  return (
    <div>
      <Header/>
      <HeroBanner/>
      <Highlights/>
      <AboutVikas/>
      <DirectorMessage/>
      <VikasLearner/>
      <EnhancedCurriculum/>
      <AdmissionUpdate/>
      <HighlightSection/>
      <ExploreCampus/>
      <SchoolAdmissionFAQ/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App
