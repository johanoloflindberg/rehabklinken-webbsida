
import { Activity, Heart, Users, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Fysioterapi",
    description: "Specialiserad behandling för att återställa rörlighet och funktion genom målriktad fysioterapi.",
    Icon: Activity
  },
  {
    title: "Rehabilitering",
    description: "Skräddarsydda rehabiliteringsprogram för att hjälpa dig återhämta dig efter skada eller operation.",
    Icon: Heart
  },
  {
    title: "Gruppträning",
    description: "Motiverande gruppträningspass anpassade för olika behov och förutsättningar.",
    Icon: Users
  },
  {
    title: "Stresshantering",
    description: "Effektiva metoder och tekniker för att hantera stress och förbättra ditt välmående.",
    Icon: Brain
  }
];

const Behandlingar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Services Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Våra behandlingar</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Vi erbjuder ett brett utbud av behandlingar inom rehabilitering och fysioterapi.
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
          
          {/* Treatment Methods Section */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Olika behandlingsmetoder</h2>
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">• Idrottsmedicin</p>
                <p className="text-gray-600">
                  Idrottsmedicin är ett medicinskt och fysioterapeutiskt område som fokuserar på förebyggande, diagnostik, behandling och rehabilitering av idrottsrelaterade skador. Det omfattar biomekanisk analys, träningsoptimering och rehabilitering för att återställa funktion och minska smärta.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Ortopedisk medicin och ortopedisk manuell terapi</p>
                <p className="text-gray-600">
                  Ortopedisk medicin och ortopedisk manuell terapi är ett specialistområde, som innefattar manuella undersöknings- och behandlingstekniker för muskuloskeletala besvär, skador och sjukdomar. Det inkluderar ledmobilisering, manipulation, mjukdelsbehandling, kortisoninjektioner och specifika övningar för att återställa funktion och minska smärta.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Akupunktur</p>
                <p className="text-gray-600">
                  Akupunktur är en behandlingsmetod där tunna nålar appliceras på specifika punkter på kroppen för att modulera smärta och fysiologiska funktioner. Används för smärtlindring och muskelavslappning vid muskuloskelatala besvär.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Neurac (NEURomuscular ACtivation)</p>
                <p className="text-gray-600">
                  Neurac (NEURomuscular ACtivation) är en behandlingsmetod som använder slyngträning (Red Cord) för att stimulera neuromuskulär kontroll och återställa optimal rörelsefunktion. Metoden bygger på att minska smärta och förbättra muskelaktivering genom övningar i instabila positioner, vilket utmanar muskelsamordning och stabilitet.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Dynamic Neuromuscular Stabilization (DNS)</p>
                <p className="text-gray-600">
                  Dynamic Neuromuscular Stabilization (DNS) är en metod som syftar till att utnyttja hjärnans plasticitet och reaktivera patientens medfödda och naturliga stabiliserings mönster. Målet är att aktivera bålen optimalt samt att skapa s k ledcentrering, vilket innebär att en led belastas i en korrekt biomekanisk position vid rörelse och belastning. En centrerad led ger en optimal kraft eftersom muskler, ligament och ledytor är i balans för att uppnå ett effektivt rörelsemönster. Detta gör också att du kan belasta hårdare i din träning. Ett annat mål är även att uppnå gott andningsmönster, där diafragman har en viktig uppgift som huvudsaklig inandningsmusklen. Diafragman har även en mycket viktigt stabiliserande funktion.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Muscle System Impairment (MSI)</p>
                <p className="text-gray-600">
                  Muscle System Impairment (MSI) är ett begrepp som beskriver nedsatt funktion i det neuromuskulära systemet, vilket kan leda till förändrade rörelsemönster, muskelsvaghet, minskad uthållighet och koordintation samt kompensatroiska strategier vid rörelse. Dessa förändringar kan uppstå till följd av skada, smärta eller inaktivitete och är ofta associerat med muskuloskeletala besvär såsom ländryggssmärta, nacksmärta och överbelastgninsskador. I behandlingen och bedömningen fokuserar man på att identifiera avvikande rörelsemönster och återställa optimal muskelfunktion genom specifik träning av motorisk kontroll träning.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Mekanisk Diagnostik och Diagnostik (MDT)</p>
                <p className="text-gray-600">
                  Mekanisk Diagnostik och Diagnostik (MDT) även kallat McKenziemetoden, är ett systematiskt tillvägagångssätt för underöskning, klassificering och behandling av muskuloskeletala besvär, särskilt för rygg, nacke och extreiteter. MDT bygger på principen att smärta och funktionella begränsningar ofta kan påverkas av upprepade rörelser eller specifika positioner. Metoden indentifierar patientens respons på mekaniska belastningar för att klassificera besvären och styra behandlingen, som ofta involverar patientstyrda övningar och ergonomiska strategier. MDT betonar självbehandling och patientutbildning för att främja långsiktig symptomkontroll och förebyggande av återfall.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Kortisoninjektion</p>
                <p className="text-gray-600">
                  Kortisoninjektion är en medicinsk behandling där en systetisk glukokortikoid injiceras i en led eller mjukdelsvävnad för att dämpa inflammation och lindra smärta vid tillstånd som artrit, tendinopatier och bursit. Upprepad användning kan ha biverkningar såsom vävnadsnedbrytning.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Traktion</p>
                <p className="text-gray-600">
                  Traktion är en terapeutisk teknik där en mekanisk eller manuell dragkraft appliceras på en led, vanligtvis ryggraden eller nacken. Syftet med traktion är att minska trycket på nervstrukturer, förbättra rörlighet och lindra smärta vid exempelvis diskbråck eller facettledsbesvär.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-2">• Aktiv handledd fysioterapeutisk rehabilitering</p>
                <p className="text-gray-600">
                  Aktiv handledd fysioterapeutisk rehabilitering är en evidensbaserad rehabiliteringsmetod där patienten deltar i individuellt anpassad fysisk träning under handledning av en fysioterapeut. Fokus ligger på att återställa funktion, minska smärta och förbättra livskvalitet genom progressiv belastning och rörelsekontroll.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Kostnadsinformation</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-3xl">
              Vi har landstingsavtal enligt nationella taxan. Din patientavgift är samma som vid besök hos landstingets fysioterapeuter.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Behandlingar;
