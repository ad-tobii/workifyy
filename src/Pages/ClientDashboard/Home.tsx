import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";

const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <HeroSection />
      </main>
    </div>
  );
};

export default ClientDashboard;
