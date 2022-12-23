import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";

export default function Home() {
  return (
    <div className="bg-hero grid grid-cols-12">
      <section className="col-span-10 col-start-2">
        {/* Navbar */}
        <Navbar />

        <div className="isolate">
          {/* Hero Section */}
          <HeroSection />
        </div>

        {/* Our Services */}
        <OurServices />
      </section>
    </div>
  );
}
