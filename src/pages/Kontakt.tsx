
import React from "react";
import { PhoneCall, Mail, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Contact Banner */}
      <div className="bg-gray-100 pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakta oss</h1>
          <p className="text-lg text-gray-600">
            Har du frågor eller vill boka tid? Kontakta oss via telefon eller e-post.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformation</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adress</h3>
                    <p className="text-gray-600">
                      Lantmäterigatan 2<br />
                      802 64 Gävle
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneCall className="w-5 h-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600">026-12 76 00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-post</h3>
                    <p className="text-gray-600">info@rehabklinikengavle.se</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Öppettider</h3>
                    <p className="text-gray-600">
                      Måndag - Torsdag: 8:00 - 17:00<br />
                      Fredag: 8:00 - 15:00<br />
                      Lördag - Söndag: Stängt
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Boka tid</h3>
                <p className="text-gray-600 mb-4">
                  För att boka tid, vänligen ring oss på 026-12 76 00.
                </p>
                {/* Booking button removed */}
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-300">
              <img 
                src="/lovable-uploads/6416c138-0743-4b37-9456-d6acdef164d4.png" 
                alt="Karta över Rehabkliniken" 
                className="w-full h-auto"
              />
              <div className="bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Hitta till oss</h3>
                <p className="text-gray-600 text-sm">
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
