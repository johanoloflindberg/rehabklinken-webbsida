
import React from "react";
import { PhoneCall, Mail, MapPin, SquareParking } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Contact Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kontakta oss</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Har du frågor eller vill boka tid? Kontakta oss via telefon eller e-post.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontaktinformation</h2>
              
              <div className="space-y-12">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-rehab-red mr-5 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Adress</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Lantmäterigatan 2<br />
                      802 64 Gävle
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneCall className="w-6 h-6 text-rehab-red mr-5 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Telefon</h3>
                    <p className="text-lg text-gray-600">
                      <a 
                        href="tel:026127600" 
                        className="hover:text-rehab-red transition-colors"
                      >
                        026-12 76 00
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-rehab-red mr-5 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">E-post</h3>
                    <p className="text-lg text-gray-600">
                      <a 
                        href="mailto:reception@rekg.se" 
                        className="hover:text-rehab-red transition-colors"
                      >
                        reception@rekg.se
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Boka tid</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  För att boka tid, vänligen ring oss på <a 
                    href="tel:026127600" 
                    className="text-rehab-red hover:text-rehab-red/80 transition-colors"
                  >
                    026-12 76 00
                  </a>.
                </p>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
              <img 
                src="/lovable-uploads/6416c138-0743-4b37-9456-d6acdef164d4.png" 
                alt="Karta över Rehabkliniken" 
                className="w-full h-auto"
              />
              <div className="bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Hitta till oss</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vi finns på Lantmäterigatan 2 med ingång från Parkvägen. 
                  Parkering finns tillgänglig direkt utanför kliniken samt längs Lantmäterigatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parking Section */}
      <section className="py-16 bg-rehab-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <SquareParking className="w-8 h-8 text-rehab-red mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Parkering vid Rehabkliniken</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-rehab-gray-600">
              <p>
                För att underlätta ditt besök hos oss på Rehabkliniken har vi reserverat <strong>tre parkeringsplatser</strong> specifikt för våra besökare. 
                Dessa parkeringsplatser är tydligt markerade med en <span className="text-rehab-red font-semibold">röd rektangel</span> på kartan och ligger i närheten av vår huvudentré för din bekvämlighet.
              </p>
              
              <p>
                För de som har särskilda behov finns även en <strong>handikapparkering</strong> tillgänglig, belägen närmast ingången och markerad med en <span className="text-blue-600 font-semibold">blå rektangel</span> på kartan.
              </p>
              
              <p>
                Om våra reserverade parkeringsplatser skulle vara upptagna vid ditt besök, finns det <strong>flera betalparkeringar</strong> i området. 
                Dessa parkeringar är belägna på gångavstånd från kliniken.
              </p>
              
              <p>
                Vi rekommenderar att du anländer några minuter tidigare för att säkerställa att du hittar en lämplig parkeringsplats för att komma i tid till din bokade tid.
              </p>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-rehab-red rounded-sm mr-2"></div>
                <span className="font-medium">Rehabklinikens besöksparkeringar</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-sm mr-2"></div>
                <span className="font-medium">Handikapparkering</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
