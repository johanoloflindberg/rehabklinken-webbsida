
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const VanligaFragor = () => {
  const faqs = [
    {
      question: "Behöver jag förbereda något inför första besöket?",
      answer: "Ta gärna med eventuella journaler, röntgensvar, remisser eller andra medicinska dokument som rör dina besvär. Detta ger oss värdefull information för att kunna ge dig bästa möjliga behandling."
    },
    {
      question: "Behöver jag en remiss för att besöka Rehabkliniken?",
      answer: "Nej, du behöver ingen remiss för att boka tid hos oss. Du kan kontakta oss direkt för att boka din tid oavsett var du är listad."
    },
    {
      question: "Hur lång tid tar en behandling?",
      answer: "En behandling tar vanligtvis 30–60 minuter, beroende på vad som ska behandlas och vilken metod som används."
    },
    {
      question: "Ska jag avstå att komma till mottagningen om jag känner mig sjuk?",
      answer: "Ja, för att inte smitta andra bör du stanna hemma vid sjukdomssymptom."
    },
    {
      question: "Kan jag få behandling för idrottsskador hos er?",
      answer: "Ja, vi är specialiserade på idrottsskador och arbetar med att diagnostisera och behandla allt från akuta idrottsskador till långvariga överbelastningsskador."
    },
    {
      question: "Är det möjligt att kombinera olika behandlingar?",
      answer: "Absolut, vi kombinerar ofta olika behandlingar för att anpassa oss till din unika situation och uppnå bästa resultat."
    },
    {
      question: "Kan jag få journalen utskriven?",
      answer: "Ja, tala med din ansvariga vårdgivare."
    },
    {
      question: "Vad händer om jag missar en behandlingstid?",
      answer: "Om du missar en tid utan att avboka minst 24 timmar i förväg kan vi debitera dig för uteblivet besök."
    },
    {
      question: "Kan jag boka tid för en andra åsikt?",
      answer: "Ja, vi tar emot patienter som söker en andra åsikt om sin diagnos eller behandlingsplan."
    },
    {
      question: "Hur ofta bör jag besöka kliniken för behandling?",
      answer: "Behandlingsfrekvensen varierar beroende på dina individuella behov och bestäms av ansvarig vårdgivare."
    },
    {
      question: "Har ni parkeringsplatser tillgängliga för patienter?",
      answer: "Ja, vi har tre parkeringsplatser reserverade för våra patienter samt en handikapparkering nära ingången."
    },
    {
      question: "Vad är skillnaden mellan fysioterapi och sjukgymnastik?",
      answer: "Fysioterapi och sjukgymnastik är samma sak. Fysioterapi är den moderna benämningen på yrket."
    },
    {
      question: "Kan jag få behandling för arbetsrelaterade skador?",
      answer: "Ja, vi behandlar ofta patienter med arbetsrelaterade besvär som musarm, ryggproblem eller nacksmärtor som kan vara orsakade av repetitiva rörelser eller statiska positioner."
    },
    {
      question: "Skriver ni invaliditetsintyg till försäkringsbolag?",
      answer: "Ja, vanligtvis. Det ska finnas en begäran från ditt försäkringsbolag."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* FAQ Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vanliga frågor</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Här finner du svar på de vanligaste frågorna om våra tjänster och behandlingar.
          </p>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VanligaFragor;
