import { Home_Button } from "@/components/comum_components/HomeButton";
import { Services_Benefits } from "@/components/service_components/services_benefits";
import { Services_Cases } from "@/components/service_components/services_cases";
import { Services_Hero } from "@/components/service_components/services_hero";
import { Services_RpaEvolution } from "@/components/service_components/services_rpaEvolution";

export default function Services() {
  return (
    <>
      <main className="my-10 ">
        <Home_Button />

        <Services_Hero />

        <Services_Benefits />

        <Services_Cases />

        <Services_RpaEvolution />

        <div className="mt-16 bg-gradient-to-r from-primaryL to-primary text-white p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Ready to Automate?</h2>
          <p className="mb-4">
            Contact us and discover how RPA can transform your business.
          </p>
          <a
            href="https://whatsa.me/5515996839690/?t=Hello,%20could%20you%20please%20provide%20more%20information%20about%20your%20RPA%20services?"
            className="inline-block bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </main>
    </>
  );
}
