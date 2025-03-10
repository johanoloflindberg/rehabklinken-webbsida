
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-rehab-gray-100 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-rehab-black mb-6">
            Välkommen till Rehabkliniken i Gävle
          </h1>
          <p className="text-lg md:text-xl text-rehab-gray-600 mb-8">
            Vi erbjuder professionell rehabilitering och fysioterapi med fokus på din hälsa och välmående. 
            Vårt erfarna team hjälper dig att återfå styrka och rörlighet.
          </p>
          <a 
            href="https://www.bokadirekt.se/places/rehabkliniken-33257" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-rehab-red hover:bg-rehab-red/90 text-white px-8 py-6 text-lg">
              Boka tid nu
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
