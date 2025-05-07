
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import ContactInfo from "@/components/booking/ContactInfo";
import BookingForm from "@/components/booking/BookingForm";
import CancellationInfo from "@/components/booking/CancellationInfo";

const EvaHelde = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Banner */}
      <PageBanner title="Eva Helde, Specialistläkare" />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Eva Helde är specialist i allmänmedicin med OMT-examen och tar emot både nya och återkommande patienter på mottagningen hos Dr. Ersson på Byggmästargatan. Fokus ligger på smärtor från rörelse- och stödjeorganen. Vi erbjuder även försäkringsmedicinska tjänster såsom invaliditetsintyg samt enklare intygsskrivning, exempelvis körkortsintyg.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Boka tid</h2>
            <ContactInfo />
          </div>
          
          {/* Booking Form */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Boka tid hos Eva Helde</h2>
            <BookingForm />
          </div>
          
          {/* Cancellation Info */}
          <CancellationInfo />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EvaHelde;
