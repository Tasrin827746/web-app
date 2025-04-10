
import AllPlatform from "@/app/components/home/AllPlatform";
import Anything from "@/app/components/home/Anything";
import Banner from "@/app/components/home/Banner";
import Collaborate from "@/app/components/home/Collaborate";
import Global from "@/app/components/home/Global";
import Productivity from "@/app/components/home/Productivity";
import Savings from "./components/home/Savings";
import PerformanceCount from "./components/home/PerformanceCount";
import Pricing from "./components/home/Pricing";
import Robust from "./components/home/Robust";
import AccordionCard from "./components/home/AccordionCard";
import PayLess from "./components/home/Payless";


export default function Home() {
  return (
   <>
   <Banner/>
   <Collaborate/>
   <Productivity/>
   <Global/>
   <AllPlatform/>
   <Anything/>
   <Savings />
   <PerformanceCount />
   <Pricing />
   <Robust />
   <AccordionCard />
   <PayLess />
   </>
  );
}
