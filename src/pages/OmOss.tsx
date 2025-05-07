
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OmOss = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* About Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Om oss</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Lär känna teamet bakom Rehabkliniken i Gävle.
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vår historia</h2>
            <div className="max-w-3xl">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Rehabkliniken etablerades med målsättningen att erbjuda högkvalitativ rehabilitering och 
                fysioterapi till invånarna i Gävle. Med vår kombination av erfarna fysioterapeuter och 
                modern utrustning kan vi erbjuda en omfattande vårdplan anpassad efter varje patients behov.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rehabkliniken är ett samarbete mellan Fysioterapeut Petra Nässelqvist, 
                Fysioterapeut Linda Engh Eriksson och Läkare Eva Helde.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vårt team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Petra Nässelqvist</h3>
                <p className="text-lg text-gray-700 font-medium mb-4">Fysioterapeut</p>
                <p className="text-gray-600 leading-relaxed">
                  Specialiserad inom ortopedisk rehabilitering med över 15 års erfarenhet.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Linda Engh Eriksson</h3>
                <p className="text-lg text-gray-700 font-medium mb-4">Fysioterapeut</p>
                <p className="text-gray-600 leading-relaxed">
                  Specialist inom ortopedi och idrottsmedicin med över 20 års erfarenhet.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eva Helde</h3>
                <p className="text-lg text-gray-700 font-medium mb-4">Läkare</p>
                <p className="text-gray-600 leading-relaxed">
                  Specialiserad inom rehabiliteringsmedicin och förebyggande vård.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vår filosofi</h2>
            <div className="max-w-3xl">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vi tror på en helhetssyn där varje patient behandlas individuellt utifrån deras specifika behov. 
                Genom att kombinera beprövade behandlingsmetoder med nya forskningsrön strävar vi efter att ge 
                bästa möjliga vård och resultat för våra patienter.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vår målsättning är att du som patient ska känna dig sedd, hörd och få den hjälp du behöver för 
                att återgå till ett aktivt och smärtfritt liv.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OmOss;
