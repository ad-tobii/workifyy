import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import JobButton from "./Component/JobButton";

const ClientDashboard = () => {
  return (
    <div className="bg-[#151519]  min-h-screen ">
      <Navbar />
      <main className="w-max  p-8">
        <HeroSection />
        <div className="p-8">
          <JobButton />
        </div>




      </main>
    </div>
  );
};

export default ClientDashboard;
