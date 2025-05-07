
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import ContactInfo from "@/components/booking/ContactInfo";
import BookingForm from "@/components/booking/BookingForm";
import CancellationInfo from "@/components/booking/CancellationInfo";

const PetraNasselqvist = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Banner */}
      <PageBanner title="Petra Nässelqvist, Specialistfysioterapeut, MSc" />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Petra är specialistfysioterapeut i ortopedisk manuell terapi (OMT) med ett starkt intresse för rörelseanalys och människokroppens funktion. Hon har lång klinisk erfarenhet av att behandla besvär i rygg, nacke, axlar och idrottsskador.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Vidareutbildning:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-8 text-gray-600">
              <li>Högsta examen i OMT (steg III)</li>
              <li>McKenzie-metoden (ED?)</li>
              <li>Certifierad Sports Physiotherapist (CSP)</li>
              <li>Certified Neurac Practitioner (CNP)</li>
              <li>Clinical neurodynamic – Avancerad nivå</li>
              <li>Muscle System Impairment (MSI) – Avancerad nivå (rygg, nacke och extremiteter)</li>
              <li>Dynamic Neuromuscular Stabilization (DNS) – Nivå C–D</li>
              <li>Beteendemedicin I och II</li>
              <li>Akupunktur</li>
            </ul>
          </div>
          
          {/* Booking Form Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Boka tid</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-center">
              Skicka en förfrågan via formuläret nedan eller maila direkt till:{" "}
              <a href="mailto:petra@rekg.se" className="font-bold text-rehab-red hover:underline">
                petra@rekg.se
              </a>
            </p>
            
            <BookingForm 
              recipient="petra@rekg.se" 
              subject="Bokningsförfrågan från hemsidan" 
              fromName="Rehabkliniken i Gävle"
            />
          </div>
          
          {/* Cancellation Info */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Avbokning:</h3>
              <p className="text-gray-600">
                Om du behöver avboka eller flytta en tid, gör det minst 24 timmar i förväg.
                Vid uteblivet besök eller för sen ombokning debiteras 400 kronor enligt Region Gävleborgs taxa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PetraNasselqvist;
