
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
      <section className="py-16 md:py-24 bg-rehab-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-rehab-black mb-8">
              Välkommen till Rehabkliniken i Gävle
            </h2>
            <p className="text-lg text-rehab-gray-600 mb-10 leading-relaxed">
              Vi erbjuder professionell rehabilitering och fysioterapi med fokus på din hälsa och välmående. 
              Vårt erfarna team hjälper dig att återfå styrka och rörlighet genom individanpassade behandlingar.
            </p>
            <Link 
              to="/behandlingar" 
              className="inline-flex items-center text-rehab-red hover:text-rehab-red/90 font-medium text-lg"
            >
              Se våra behandlingar <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-rehab-black mb-8">
                Hitta hit
              </h2>
              <p className="text-lg text-rehab-gray-600 mb-6 leading-relaxed">
                Rehabkliniken hittar ni på:
              </p>
              <p className="text-xl font-medium text-rehab-black mb-12">
                Lantmäterigatan 2<br />
                802 64 Gävle
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-rehab-black mb-8">
                Om oss
              </h2>
              <p className="text-lg text-rehab-gray-600 mb-6 leading-relaxed">
                Rehabkliniken är ett samarbete mellan Fysioterapeut Petra Nässelqvist, 
                Fysioterapeut Linda Eng-Eriksson och Läkare Eva Helde.
              </p>
              <p className="text-lg text-rehab-gray-600 mb-8 leading-relaxed">
                Vi har landstingsavtal enligt nationella taxan.
              </p>
              <Link 
                to="/om-oss" 
                className="inline-flex items-center text-rehab-red hover:text-rehab-red/90 font-medium text-lg"
              >
                Läs mer om oss <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Map image */}
            <div className="rounded-lg overflow-hidden border border-rehab-gray-300 shadow-lg">
              <img 
                src="/lovable-uploads/c55e128d-3078-40a5-92ed-9d4e7cc76c4e.png" 
                alt="Karta över Rehabkliniken" 
                className="w-full h-auto"
              />
              <div className="bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Hitta till oss</h3>
                <p className="text-gray-600">
                  Vi finns på Lantmäterigatan 2 med ingång från Parkvägen. 
                  Parkering finns tillgänglig direkt utanför kliniken samt längs Lantmäterigatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
