
import React from 'react';
import { PhoneCall, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="bg-rehab-gray-700 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Rehabkliniken</h3>
            <p className="mb-3 text-rehab-gray-200">Lantmäterigatan 2</p>
            <p className="mb-6 text-rehab-gray-200">802 64 Gävle</p>
            <div className="flex items-center mb-4">
              <PhoneCall className="w-5 h-5 mr-3 text-rehab-gray-300" />
              <a 
                href="tel:026127600" 
                className="hover:text-rehab-gray-200 transition-colors"
              >
                026-12 76 00
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-rehab-gray-300" />
              <a 
                href="mailto:reception@rekg.se" 
                className="hover:text-rehab-gray-200 transition-colors"
              >
                reception@rekg.se
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Boka tid</h3>
            <p className="mb-6 text-rehab-gray-200 leading-relaxed">
              Kontakta oss via telefon för att boka en tid hos våra experter.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <Link to="/kontakt" className="text-rehab-gray-200 hover:text-white transition-colors">
                  Kontakt
                </Link>
                <Link to="/behandlingar" className="text-rehab-gray-200 hover:text-white transition-colors">
                  Behandlingar
                </Link>
                <Link to="/fysioterapi" className="text-rehab-gray-200 hover:text-white transition-colors">
                  Fysioterapi
                </Link>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <Link to="/om-oss" className="text-rehab-gray-200 hover:text-white transition-colors">
                  Om oss
                </Link>
                <Link to="/personuppgiftspolicy" className="text-rehab-gray-200 hover:text-white transition-colors">
                  Personuppgiftspolicy
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-rehab-gray-600 mt-12 pt-8 text-center">
          <p className="text-rehab-gray-400">&copy; {new Date().getFullYear()} Rehabkliniken i Gävle. Alla rättigheter reserverade.</p>
          <p className="text-rehab-gray-500 text-sm mt-2">
            Skapad av Webbyrån{' '}
            <a 
              href="https://webbab.se/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors inline-flex items-center"
            >
              WEBBAB
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>;
};

export default Footer;
