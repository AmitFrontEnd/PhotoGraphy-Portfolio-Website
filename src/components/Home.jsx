import Header from "./Header";
import { Button } from "./ui/button";
import PortfolioGallery from "./PortfolioGallery";
import TestimonialSection from "./TestimonialSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import { portfolioImages } from "@/data/portfolio";
import CounterSection from "./CounterSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection
        title="Zoomin Photography"
        description="Capturing timeless moments through the lens."
      />
      <section className="max-w-6xl mx-auto py-20 px-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Hello, I'm Allen Anthony
          </h2>

          <p className="leading-7 text-muted-foreground">
            I'm a professional photographer based in the United States. I became
            interested in landscape photography about five years ago when I moved
            to the United States. During that time I had a full-time job during the
            week, but I spent my weekends getting as far away from the city as
            possible to explore nature and capture beautiful landscapes.
          </p>

          <p className="leading-7 text-muted-foreground">
            Photography has now become more than just a hobby for me — it is my
            profession and passion. I love capturing real moments, natural light,
            and beautiful scenes that tell a story.
          </p>

          <div className="space-y-2">
            <p><strong>Experience:</strong> 12 Years of Experience</p>
            <p><strong>Phone:</strong> +105 773 321 7771</p>
            <p><strong>E-mail:</strong> demo@example.com</p>
          </div>

          <Button size="lg">
            About More
          </Button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://barakahit.net/html/zoomin/assets/img/about.jpg"
            alt="photography"
            className="rounded-xl "
          />
        </div>

      </section>
      <CounterSection/>
     <ServicesSection/>
      <PortfolioGallery data={portfolioImages}/>
      <TestimonialSection />
    </>
  );
};

export default Home;
