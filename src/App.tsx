
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EternoGT from "./pages/EternoGT";
import Aura from "./pages/Aura";
import Vento from "./pages/Vento";
import Lampo from "./pages/Lampo";
import Stella from "./pages/Stella";
import Fulmine from "./pages/Fulmine";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eterno-gt" element={<EternoGT />} />
          <Route path="/aura" element={<Aura />} />
          <Route path="/vento" element={<Vento />} />
          <Route path="/lampo" element={<Lampo />} />
          <Route path="/stella" element={<Stella />} />
          <Route path="/fulmine" element={<Fulmine />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
