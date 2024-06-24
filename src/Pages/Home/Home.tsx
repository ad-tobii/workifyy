import Nav from "../Home/Component/Nav";
import HomeHeroSection from "../Home/Component/HomeHeroSection";
import Section from "./Component/Section";
import ClientSection from "./Component/ClientSection";

import MoreSection from "./Component/MoreSection";
import Footer from "./Component/Footer";
function Home() {
  return (
    <div>
      <div>
        <Nav>
          <HomeHeroSection />
        </Nav>
      </div>

      <div>
        <Section />
      </div>

      <div>
        <MoreSection />
      </div>

      <div>
        <ClientSection />
      </div>
      <a href="/ClientDashboard" className="text-5xl">
        click me
      </a>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
