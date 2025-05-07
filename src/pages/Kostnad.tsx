
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CreditCard, Users, Clock } from "lucide-react";

const Kostnad = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kostnad</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Information om priser och avgifter för våra behandlingar.
          </p>
        </div>
      </div>
      
      {/* Cost Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl mb-8">
              <strong>Rehabkliniken</strong> har <strong>samverkansavtal med Region Gävleborg</strong>, vilket innebär att <strong>högkostnadsskyddet</strong> gäller. 
              Detta gör vår specialistvård mer tillgänglig och ekonomiskt förutsägbar för dig.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
              <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <CreditCard className="mr-3 h-8 w-8 text-rehab-red" />
                Vad kostar ett besök?
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="bg-rehab-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span><strong>Vuxna:</strong> Ett besök kostar <strong>250 kronor</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-rehab-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span><strong>Barn och ungdomar upp till 20 år:</strong> Besöken är <strong>avgiftsfria</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-rehab-red text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span><strong>Personer över 85 år:</strong> Besöken är <strong>avgiftsfria</strong>.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
              <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <Users className="mr-3 h-8 w-8 text-rehab-red" />
                Vad innebär högkostnadsskydd?
              </h2>
              <p className="text-lg">
                Högkostnadsskyddet är en del av den svenska sjukvården och innebär att du som patient sammanlagt betalar 1450 kr för sjukvårdande behandling under en 12 månanders period.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <Clock className="mr-3 h-8 w-8 text-rehab-red" />
                Avbokning
              </h2>
              <p className="text-lg mb-4">
                Om du behöver avboka eller flytta en tid, ska du göra detta minst <strong>24 timmar</strong> i förväg.
              </p>
              <p className="text-lg">
                Vid försenad avbokning/ombokning eller uteblivet besök debiteras <strong>400 kronor</strong> enligt Region Gävleborgs taxa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Kostnad;
