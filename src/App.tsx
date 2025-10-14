import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Therapists from "./pages/Therapists";
import TherapistProfile from "./pages/TherapistProfile";
import Questionnaire from "./pages/Questionnaire";
import AssessmentResults from "./pages/AssessmentResults";
import BookAppointment from "./pages/BookAppointment";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
// import CareerCounselling from "./pages/Dmit";
const queryClient = new QueryClient();

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // change to "smooth" if you want smooth scrolling
    });
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/therapists/:id" element={<TherapistProfile />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/assessment-results" element={<AssessmentResults />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career-counselling" element={<CareerCounselling/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
