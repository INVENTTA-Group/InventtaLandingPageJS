import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found.jsx";
import Home from "@/pages/home.jsx";
import Healthcare from "@/pages/healthcare.jsx";
import Pharmaceuticals from "@/pages/pharmaceuticals.jsx"
import Zyrarx from "@/pages/zyrarx.jsx";
import Education from "@/pages/education.jsx";
import Hospitality from "@/pages/hospitality.jsx";
import Automobiles from "@/pages/automobiles.jsx";
import Consulting from "@/pages/consulting.jsx";
import ConsumerGoods from "@/pages/consumer-goods.jsx";
import Insurance from "@/pages/insurance.jsx";
import RealEstate from "@/pages/real-estate.jsx";
import Electronics from "@/pages/electronics.jsx";
import GreenEnergy from "@/pages/green-energy.jsx";
import Fashion from "@/pages/fashion.jsx";
import Media from "@/pages/media.jsx";
import Careers from "@/pages/careers.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/verticals/healthcare" component={Healthcare}/>
      <Route path="/verticals/pharmaceuticals" component={Pharmaceuticals}/>
      <Route path="/verticals/zyrarx" component={Zyrarx}/>
      <Route path="/verticals/education" component={Education}/>
      <Route path="/verticals/hospitality" component={Hospitality}/>
      <Route path="/verticals/automobiles" component={Automobiles}/>
      <Route path="/verticals/consulting" component={Consulting}/>
      <Route path="/verticals/consumer-goods" component={ConsumerGoods}/>
      <Route path="/verticals/insurance" component={Insurance}/>
      <Route path="/verticals/real-estate" component={RealEstate}/>
      <Route path="/verticals/electronics" component={Electronics}/>
      <Route path="/verticals/green-energy" component={GreenEnergy}/>
      <Route path="/verticals/fashion" component={Fashion}/>
      <Route path="/verticals/media" component={Media}/>
      <Route path="/careers" component={Careers}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;