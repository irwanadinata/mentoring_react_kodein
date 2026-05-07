import EighthSection from "../components/sections/eigthSection";
import FifthSection from "../components/sections/fifthSection";
import FourthSection from "../components/sections/fourthSection";
import MainSection from "../components/sections/mainSection";
import Navbar from "../components/sections/navbar";
import SecondSection from "../components/sections/secondSection";
import SeventhSection from "../components/sections/seventhSection";
import SixthSection from "../components/sections/sixthSection";
import ThirdSection from "../components/sections/thirdSection";
import "../styles/App.css";

function App() {
  return (
    <>
      <Navbar/>
      <MainSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EighthSection/>
    </>
  );
}

export default App;
