import { Home_Button } from "@/components/comum_components/HomeButton";
import { Service_Contact } from "@/components/service_components/service_contact";
import { Services_Benefits } from "@/components/service_components/services_benefits";
import { Services_Cases } from "@/components/service_components/services_cases";
import { Services_Hero } from "@/components/service_components/services_hero";
import { Services_RpaEvolution } from "@/components/service_components/services_rpaEvolution";

export default function Services() {
  return (
    <>
      <main className="mt-4 mb-10">
        <Home_Button />

        <Services_Hero />

        <Services_Benefits />

        <Services_Cases />

        <Services_RpaEvolution />

        <Service_Contact />
      </main>
    </>
  );
}
