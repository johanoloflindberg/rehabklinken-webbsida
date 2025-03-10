
import { Activity, Heart, Users, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

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

const Tjanster = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Services Banner */}
      <div className="bg-rehab-gray-100 pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-rehab-black mb-4">Våra tjänster</h1>
          <p className="text-lg text-rehab-gray-600">
            Vi erbjuder ett brett utbud av tjänster inom rehabilitering och fysioterapi.
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
          
          <div className="bg-rehab-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-rehab-black mb-4">Kostnadsinformation</h2>
            <p className="text-rehab-gray-600 mb-4">
              Vi har landstingsavtal enligt nationella taxan. Din patientavgift är samma som vid besök hos landstingets fysioterapeuter.
            </p>
            <a 
              href="https://www.bokadirekt.se/places/rehabkliniken-33257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-rehab-red hover:bg-rehab-red/90 text-white px-4 py-2 rounded inline-block"
            >
              Boka tid
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tjanster;
