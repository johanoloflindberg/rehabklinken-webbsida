
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Activity } from "lucide-react";

const Fysioterapi = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fysioterapi</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Expertbehandling för smärtlindring och funktionsåterställning genom individuellt anpassade program.
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="mr-6 mt-1">
                <Activity className="h-12 w-12 text-rehab-red" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fysioterapi</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Fysioterapi är ett evidensbaserat medicinskt område som syftar till att bedöma, 
                    förebygga och behandla funktionsnedsättnignar, smärta och rörelserelaterade besvär. 
                    Behandlingsmetoder bygger på vetenskaplig forskning och klinisk expertis för att 
                    optimera en individs hälsa, funktion och livskvalitet.
                  </p>
                  <p className="mt-4">
                    Fysioterapeuter använder interventioner som individuellt anpassad träning, 
                    manuella tekniker, smärtlindringsstrategier och patientutbildning.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Första besöket</h3>
                <p className="text-gray-600">
                  Vid första mötet utförs en grundlig medicinsk undersökning och rörelseanalys 
                  som ligger till grund för Din individuellt skräddarsydda aktiva rehabilitering. 
                  Den aktiva rehabiliteringen utformas efter Dina förutsättningar och stegras 
                  successivt allteftersom Dina förmågor förbättras så att du kan återgå till 
                  Din önskade aktivitetsnivå, på motions- eller elitnivå.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Rekommendationer</h3>
                <p className="text-gray-600">
                  Vi rekommenderar att du utför dina förskrivna övningar regelbundet enligt 
                  den individuella plan vi tagit fram. Övningarna är specifikt utvalda för att 
                  stärka rätt muskler och förbättra din funktion.
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

export default Fysioterapi;
