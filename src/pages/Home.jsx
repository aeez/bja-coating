import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import OurMitra from "../components/ourMitra";
import KenapaKami from "../components/KenapaKami";
import Pengerjaan from "../components/Pengerjaan";
import Footer from "../components/Footer";

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
        <div className="isolate">
          {/* Our Services */}
          <OurServices />
        </div>
        <div className="isolate">
          {/* Why Us? */}
          <KenapaKami />
        </div>
        <div className="isolate">
          {/* Tahapan Pengerjaan */}
          <Pengerjaan />
        </div>
        <div className="isolate">
          {/* Our Mitra */}
          <OurMitra />
        </div>
        <div className="isolate">
          {/* Footer */}
          <Footer />
        </div>
      </section>
    </div>
  );
}
