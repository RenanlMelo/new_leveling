import React from "react";

export const Services_Hero = () => {
  return (
    <section className="px-6 pt-12 pb-20">
      <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent w-fit mb-8">
        RPA Solutions
      </h1>

      <h2 className="text-primaryL font-semibold text-3xl mb-4">
        Key Services for Your Business
      </h2>
      <div className="grid gap-6 mb-1">
        <div className="bg-[#141414] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">
            System Automation
          </h3>
          <p className="text-gray-300">
            Bots that fill out forms, extract data, and interact with software
            like ERPs and CRMs.
          </p>
        </div>
        <div className="bg-[#141414] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Report Generation
          </h3>
          <p className="text-gray-300">
            Automate financial, operational, and performance reports with
            scheduled delivery.
          </p>
        </div>
        <div className="bg-[#141414] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">
            System Integrations
          </h3>
          <p className="text-gray-300">
            Connect different tools without the need for APIs, using smart
            automation alone.
          </p>
        </div>
      </div>
    </section>
  );
};
