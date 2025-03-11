
import React from 'react';
import { PhoneCall, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rehab-gray-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Rehabkliniken</h3>
            <p className="mb-2">Lantmäterigatan 2</p>
            <p className="mb-4">802 64 Gävle</p>
            <div className="flex items-center mb-2">
              <PhoneCall className="w-5 h-5 mr-2" />
              <span>026-12 76 00</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@rehabklinikengavle.se</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Öppettider</h3>
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <div>
                <p>Måndag - Torsdag: 8:00 - 17:00</p>
                <p>Fredag: 8:00 - 15:00</p>
                <p>Lördag - Söndag: Stängt</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Boka tid</h3>
            <p className="mb-4">Kontakta oss via telefon för att boka en tid.</p>
            {/* Booking button removed */}
          </div>
        </div>
        
        <div className="border-t border-rehab-gray-600 mt-8 pt-8 text-center text-rehab-gray-400">
          <p>&copy; {new Date().getFullYear()} Rehabkliniken i Gävle. Alla rättigheter reserverade.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
