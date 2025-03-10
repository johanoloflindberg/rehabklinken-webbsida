
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OmOss = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* About Banner */}
      <div className="bg-gray-100 pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Om oss</h1>
          <p className="text-lg text-gray-600">
            Lär känna teamet bakom Rehabkliniken i Gävle.
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vår historia</h2>
            <p className="text-gray-600 mb-4">
              Rehabkliniken etablerades med målsättningen att erbjuda högkvalitativ rehabilitering och 
              fysioterapi till invånarna i Gävle. Med vår kombination av erfarna fysioterapeuter och 
              modern utrustning kan vi erbjuda en omfattande vårdplan anpassad efter varje patients behov.
            </p>
            <p className="text-gray-600">
              Rehabkliniken är ett samarbete mellan Fysioterapeut Petra Nässelqvist, 
              Fysioterapeut Linda Eng-Eriksson och Läkare Eva Helde.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vårt team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Petra Nässelqvist</h3>
                <p className="text-gray-700 font-medium mb-2">Fysioterapeut</p>
                <p className="text-gray-600">
                  Specialiserad inom ortopedisk rehabilitering med över 15 års erfarenhet.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Linda Eng-Eriksson</h3>
                <p className="text-gray-700 font-medium mb-2">Fysioterapeut</p>
                <p className="text-gray-600">
                  Expert inom idrottsmedicin och rehabilitering efter sportskador.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eva Helde</h3>
                <p className="text-gray-700 font-medium mb-2">Läkare</p>
                <p className="text-gray-600">
                  Specialiserad inom rehabiliteringsmedicin och förebyggande vård.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vår filosofi</h2>
            <p className="text-gray-600 mb-4">
              Vi tror på en helhetssyn där varje patient behandlas individuellt utifrån deras specifika behov. 
              Genom att kombinera beprövade behandlingsmetoder med nya forskningsrön strävar vi efter att ge 
              bästa möjliga vård och resultat för våra patienter.
            </p>
            <p className="text-gray-600">
              Vår målsättning är att du som patient ska känna dig sedd, hörd och få den hjälp du behöver för 
              att återgå till ett aktivt och smärtfritt liv.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OmOss;
