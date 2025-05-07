
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Behandlingar from "./pages/Behandlingar";
import VanligaFragor from "./pages/VanligaFragor";
import Fysioterapi from "./pages/Fysioterapi";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import EvaHelde from "./pages/EvaHelde";
import PetraNasselqvist from "./pages/PetraNasselqvist";
import LindaEnghEriksson from "./pages/LindaEnghEriksson";
import Personuppgiftspolicy from "./pages/Personuppgiftspolicy";

// Supabase client has been removed

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});

const App = () => {
  // Removed Supabase logging

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/behandlingar" element={<Behandlingar />} />
            <Route path="/fysioterapi" element={<Fysioterapi />} />
            <Route path="/vanliga-fragor" element={<VanligaFragor />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/eva-helde" element={<EvaHelde />} />
            <Route path="/petra-nasselqvist" element={<PetraNasselqvist />} />
            <Route path="/linda-engh-eriksson" element={<LindaEnghEriksson />} />
            <Route path="/personuppgiftspolicy" element={<Personuppgiftspolicy />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
