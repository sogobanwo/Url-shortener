import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./Stylesheets/Desktop.css"
import "./Stylesheets/mobile.css"
import HeroSection from "./Components/heroSection";
import MainSection from "./Components/mainSection";
import BoostSection from "./Components/boostSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainSection />
      <BoostSection />
      <Footer />
    </>
  );
}

export default App;
