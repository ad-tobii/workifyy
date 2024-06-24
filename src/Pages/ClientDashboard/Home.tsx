import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import JobButton from "./Component/JobButton";

const ClientDashboard = () => {
  return (
    <div className=" min-h-screen bg-[#151519]  ">
      <Navbar />
      <main className=" p-8">
        <HeroSection />
        <div className="p-8 xsMobile:-ml-9 miniMobile:-ml-7 miniTablet:-ml-8 mobile:-ml-7 tablet:-ml-8 miniLaptop:-ml-8">
          <JobButton />
        </div>
      </main>
    </div>
  );
};
export default ClientDashboard;
