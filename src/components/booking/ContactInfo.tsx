
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
        <p className="text-lg text-gray-600 mb-6">
          För att boka tid, vänligen kontakta medicinska sekreteraren:
        </p>
        <div className="mb-4">
          <p className="font-bold text-gray-800">Elisabeth Yng</p>
        </div>
        <div className="flex items-center mb-3">
          <p className="font-bold text-gray-800 mr-2">Telefon:</p>
          <a 
            href="tel:026127600" 
            className="text-rehab-red hover:underline transition-colors"
          >
            026-12 76 00
          </a>
        </div>
        <div className="flex items-center">
          <p className="font-bold text-gray-800 mr-2">E-post:</p>
          <a 
            href="mailto:reception@rekg.se" 
            className="text-rehab-red hover:underline transition-colors"
          >
            reception@rekg.se
          </a>
        </div>
      </div>
      
      {/* Mobile Only Button */}
      <div className="md:hidden mb-8">
        <Button className="w-full py-6 text-lg bg-rehab-red hover:bg-rehab-red/90 flex items-center justify-center" asChild>
          <a href="tel:026127600">
            <Phone className="mr-2" />
            Ring oss direkt
          </a>
        </Button>
      </div>
    </>
  );
};

export default ContactInfo;
