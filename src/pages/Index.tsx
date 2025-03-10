
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 bg-rehab-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-rehab-black mb-6">
              Välkommen till Rehabkliniken i Gävle
            </h2>
            <p className="text-lg text-rehab-gray-600 mb-8">
              Vi erbjuder professionell rehabilitering och fysioterapi med fokus på din hälsa och välmående. 
              Vårt erfarna team hjälper dig att återfå styrka och rörlighet genom individanpassade behandlingar.
            </p>
            <Link 
              to="/tjanster" 
              className="inline-flex items-center text-rehab-red hover:text-rehab-red/90 font-medium"
            >
              Se våra tjänster <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-rehab-black mb-6">
                Hitta hit
              </h2>
              <p className="text-lg text-rehab-gray-600 mb-4">
                Rehabkliniken hittar ni på:
              </p>
              <p className="text-xl font-medium text-rehab-black mb-8">
                Lantmäterigatan 2<br />
                802 64 Gävle
              </p>
              
              <h2 className="text-3xl font-bold text-rehab-black mb-6">
                Om oss
              </h2>
              <p className="text-lg text-rehab-gray-600 mb-4">
                Rehabkliniken är ett samarbete mellan Fysioterapeut Petra Nässelqvist, 
                Fysioterapeut Linda Eng-Eriksson och Läkare Eva Helde.
              </p>
              <p className="text-lg text-rehab-gray-600 mb-6">
                Vi har landstingsavtal enligt nationella taxan.
              </p>
              <Link 
                to="/om-oss" 
                className="inline-flex items-center text-rehab-red hover:text-rehab-red/90 font-medium"
              >
                Läs mer om oss <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Map image replacing placeholder */}
            <div className="rounded-lg overflow-hidden border border-rehab-gray-300">
              <img 
                src="/lovable-uploads/c55e128d-3078-40a5-92ed-9d4e7cc76c4e.png" 
                alt="Karta över Rehabkliniken" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
