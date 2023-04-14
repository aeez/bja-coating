import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import HeroSection from "../components/home/HeroSection";
import OurServices from "../components/home/OurServices";
import KenapaKami from "../components/home/KenapaKami";
import Pengerjaan from "../components/home/Pengerjaan";
import OurMitra from "../components/home/ourMitra";

export default function Home() {
  return (
    <>
      <div className="bg-hero relative z-10 grid grid-cols-12 bg-cover text-white shadow-xl">
        <section className="navbar col-span-10 col-start-2">
          {/* Navbar */}
          <Navbar />

          <div className="relative isolate z-10">
            {/* Hero Section */}
            <HeroSection />
          </div>
        </section>
      </div>

      <div className="grid grid-cols-12">
        <section className="col-span-10 col-start-2">
          {/* Our Services */}
          <div className="isolate">
            <OurServices />
          </div>

          {/* Why Us */}
          <div className="isolate">
            <KenapaKami />
          </div>

          {/* Tahap Pengerjaan */}
          <div className="isolate">
            <Pengerjaan />
          </div>

          {/* Mitra */}
          <div className="isolate">
            <OurMitra />
          </div>

          {/* Footer */}
          <div className="isolate">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
