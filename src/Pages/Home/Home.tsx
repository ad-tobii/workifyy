
import Nav from "../Home/Component/Nav"
import HomeHeroSection from "../Home/Component/HomeHeroSection";
import Section from "./Component/Section";

function Home() {
  return (
    <div>
      <div>
        <Nav>

        <HomeHeroSection />
          </Nav>
      </div>

      <div>
        <Section/>
      </div>
    </div>
  );
}

export default Home;