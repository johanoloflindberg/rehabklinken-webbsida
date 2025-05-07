
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Personuppgiftspolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Privacy Policy Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Personuppgiftspolicy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Så behandlar vi dina personuppgifter på Rehabkliniken
          </p>
        </div>
      </div>
      
      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Personuppgiftspolicy för Rehabkliniken</h2>
            
            <p>
              På Rehabkliniken värnar vi om din integritet och ser det som vår skyldighet att skydda dina personuppgifter. 
              Denna personuppgiftspolicy beskriver hur vi samlar in, använder, delar och skyddar dina personuppgifter i enlighet med 
              <strong> GDPR (General Data Protection Regulation)</strong> och svensk lagstiftning, inklusive 
              <strong> Patientdatalagen (PDL)</strong>. Genom att använda våra tjänster godkänner du denna policy.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Vilka personuppgifter samlar vi in?</h3>
            <p>
              För att kunna erbjuda dig vård och behandling av högsta kvalitet samlar vi in och behandlar följande typer av personuppgifter:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Identifikationsuppgifter:</strong> Namn, personnummer, kontaktuppgifter (telefonnummer, e-postadress, adress).
              </li>
              <li>
                <strong>Hälso- och sjukvårdsuppgifter:</strong> Journaluppgifter, medicinsk historia, behandlingsplaner, diagnoser och resultat från undersökningar.
              </li>
              <li>
                <strong>Betalningsuppgifter:</strong> Uppgifter som behövs för fakturering och betalning (t.ex. försäkringsnummer, betalningshistorik).
              </li>
              <li>
                <strong>Teknisk information:</strong> IP-adress, enhetsinformation och besöksdata när du använder vår webbplats eller digitala tjänster.
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Hur använder vi dina personuppgifter?</h3>
            <p>
              Dina personuppgifter används för följande ändamål:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Vård och behandling:</strong> För att kunna ge dig den bästa möjliga vården och följa upp ditt behandlingsförlopp.
              </li>
              <li>
                <strong>Administration:</strong> För att hantera bokningar, betalningar och kommunikation med dig som patient.
              </li>
              <li>
                <strong>Förbättring av tjänster:</strong> För att analysera och förbättra våra tjänster och behandlingsmetoder.
              </li>
              <li>
                <strong>Rättsliga skyldigheter:</strong> För att uppfylla lagkrav, t.ex. rapportering till myndigheter eller försäkringsbolag.
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Rättigheter enligt GDPR</h3>
            <p>
              Enligt GDPR har du följande rättigheter när det gäller dina personuppgifter:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Tillgång till uppgifter:</strong> Du har rätt att begära en kopia av de personuppgifter vi har om dig.
              </li>
              <li>
                <strong>Rättelse:</strong> Du kan begära att felaktiga eller ofullständiga uppgifter rättas till.
              </li>
              <li>
                <strong>Begränsning av behandling:</strong> Du kan begära att behandlingen av dina uppgifter begränsas under vissa omständigheter.
              </li>
            </ul>
            
            <p className="bg-gray-50 p-4 border-l-4 border-gray-400">
              <strong>Observera:</strong><br />
              <strong>Rätten till radering</strong> är begränsad inom sjukvården på grund av lagkrav enligt <strong>Patientdatalagen (PDL)</strong>. 
              Journaluppgifter måste sparas i minst <strong>10 år</strong> efter det senaste besöket för att säkerställa en säker och kontinuerlig vård. 
              Därför kan vi inte radera dina journaluppgifter om de behövs för vårdändamål eller om det finns lagkrav som kräver att de sparas.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">4. Delning av personuppgifter</h3>
            <p>
              Vi delar endast dina personuppgifter med tredje part när det är nödvändigt för att utföra våra tjänster eller uppfylla lagkrav. Detta kan inkludera:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Försäkringsbolag:</strong> För att hantera ersättningsärenden och fakturering.
              </li>
              <li>
                <strong>Myndigheter:</strong> När vi är skyldiga att rapportera enligt lag (t.ex. Socialstyrelsen).
              </li>
              <li>
                <strong>Samarbetspartners:</strong> T.ex. laboratorier eller specialister som behöver dina uppgifter för att utföra vissa delar av din behandling.
              </li>
            </ul>
            <p>
              Alla tredje parter som vi delar uppgifter med är skyldiga att följa GDPR och svensk lagstiftning för att säkerställa att dina uppgifter skyddas.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">5. Hur skyddar vi dina personuppgifter?</h3>
            <p>
              Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller skada. Detta inkluderar:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Kryptering:</strong> Alla digitala uppgifter krypteras för att säkerställa konfidentialitet.
              </li>
              <li>
                <strong>Begränsad åtkomst:</strong> Endast behörig personal har tillgång till dina uppgifter, och endast i den utsträckning som krävs för att utföra deras arbetsuppgifter.
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">6. Hur länge sparar vi dina personuppgifter?</h3>
            <p>
              Vi sparar dina personuppgifter så länge som det är nödvändigt för att uppfylla de ändamål som anges i denna policy, eller så länge som vi är skyldiga att spara dem enligt lag. 
              Journaluppgifter sparas i enlighet med <strong>Patientdatalagen (PDL)</strong>, vanligtvis i minst <strong>10 år</strong> efter senaste besöket.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">7. Kontaktuppgifter</h3>
            <p>
              Om du har frågor om hur vi behandlar dina personuppgifter, eller om du vill utöva dina rättigheter enligt GDPR, är du välkommen att kontakta oss.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">8. Ändringar i personuppgiftspolicyn</h3>
            <p>
              Vi förbehåller oss rätten att uppdatera denna personuppgiftspolicy vid behov. Eventuella ändringar kommer att publiceras på vår webbplats, 
              och vi rekommenderar att du regelbundet granskar policyn för att hålla dig informerad.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Personuppgiftspolicy;
