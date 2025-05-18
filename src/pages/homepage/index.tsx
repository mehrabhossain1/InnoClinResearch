import AboutUs from "@/components/HomePage/AboutUs";
import BannerCarousel from "@/components/HomePage/BannerCarousel";
import Services from "@/components/HomePage/Services";

export default function HomePage() {
  return (
    <div>
      <BannerCarousel />
      <AboutUs />
      <Services />
    </div>
  );
}
