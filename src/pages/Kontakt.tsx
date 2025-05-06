
import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";
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
                    <p className="text-lg text-gray-600">026-12 76 00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-rehab-red mr-5 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">E-post</h3>
                    <p className="text-lg text-gray-600">info@rehabklinikengavle.se</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Boka tid</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  För att boka tid, vänligen ring oss på 026-12 76 00.
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
      
      <Footer />
    </div>
  );
};

export default Kontakt;
