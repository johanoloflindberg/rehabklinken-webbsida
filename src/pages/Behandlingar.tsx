
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

const Behandlingar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Services Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Våra behandlingar</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Vi erbjuder ett brett utbud av behandlingar inom rehabilitering och fysioterapi.
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Kostnadsinformation</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-3xl">
              Vi har landstingsavtal enligt nationella taxan. Din patientavgift är samma som vid besök hos landstingets fysioterapeuter.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Behandlingar;
