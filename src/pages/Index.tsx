
import { Activity, Heart, Users, Brain } from "lucide-react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Fysioterapi",
    description: "Specialiserad behandling för att återställa rörlighet och funktion genom målriktad fysioterapi.",
    Icon: Activity
  },
  {
    title: "Rehabilitering",
    description: "Skräddarsydda rehabiliteringsprogram för att hjälpa dig återhämta dig efter skada eller operation.",
    Icon: Heart
  },
  {
    title: "Gruppträning",
    description: "Motiverande gruppträningspass anpassade för olika behov och förutsättningar.",
    Icon: Users
  },
  {
    title: "Stresshantering",
    description: "Effektiva metoder och tekniker för att hantera stress och förbättra ditt välmående.",
    Icon: Brain
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-rehab-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rehab-black mb-12">
            Våra tjänster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
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
              <p className="text-lg text-rehab-gray-600">
                Vi har landstingsavtal enligt nationella taxan.
              </p>
            </div>
            
            {/* Placeholder for Google Maps - To be implemented later */}
            <div className="bg-rehab-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-rehab-gray-600">Karta kommer snart</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
