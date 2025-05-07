
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import ContactInfo from "@/components/booking/ContactInfo";
import BookingForm from "@/components/booking/BookingForm";
import CancellationInfo from "@/components/booking/CancellationInfo";

const LindaEnghEriksson = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Banner */}
      <PageBanner title="Linda Engh Eriksson, Specialistfysioterapeut" />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Linda är fysioterapeut och sjukgymnast sedan 1999 med specialisering inom ortopedi och idrottsmedicin. 
              Hon har lång erfarenhet från ortopedisk specialistvård och driver sedan 2021 verksamhet på Rehabkliniken.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Specialisering och vidareutbildning:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Specialistfysioterapeut i ortopedi</li>
                <li>Steg II-utbildning i idrottsmedicin (Steg III ackrediteringskurs våren 2025)</li>
                <li>OMT (Ortopedisk manuell terapi), steg I</li>
                <li>Kinetic Control – Rörelseanalys (rygg/nacke och extremiteter)</li>
                <li>McKenzie A</li>
                <li>Akupunktur</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Boka tid</h2>
            <p className="text-gray-600 mb-6">
              Välkommen att kontakta Linda för tidsbokning.<br />
              <strong>Maila direkt till:</strong> <a href="mailto:linda@rekg.se" className="text-rehab-red hover:underline">linda@rekg.se</a><br />
              eller fyll i formuläret nedan.
            </p>
            <BookingForm 
              recipient="linda@rekg.se" 
              subject="Bokningsförfrågan från hemsidan" 
              fromName="Rehabkliniken i Gävle"
            />
          </div>
          
          {/* Cancellation Info */}
          <CancellationInfo />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LindaEnghEriksson;
