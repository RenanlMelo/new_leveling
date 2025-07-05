import {
  DatabaseIcon,
  MonitorIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "lucide-react";
import React from "react";

export const Services = () => {
  const servicesDict = [
    {
      title: "Process Automation",
      content:
        "Automate repetitive workflows across departments using RPA bots and integrations.",
      icon: <WorkflowIcon className="w-6 h-6" stroke="#fff" />,
    },
    {
      title: "Data Handling",
      content:
        "Extract, transform, and migrate data securely between systems — fast and error-free.",
      icon: <DatabaseIcon className="w-6 h-6" stroke="#fff" />,
    },
    {
      title: "Compliance & Auditing",
      content:
        "Ensure process compliance with logging, tracking, and audit-ready automation.",
      icon: <ShieldCheckIcon className="w-6 h-6" stroke="#fff" />,
    },
    {
      title: "Bot Monitoring",
      content:
        "Monitor your bots in real-time and receive alerts to guarantee operational stability.",
      icon: <MonitorIcon className="w-6 h-6" stroke="#fff" />,
    },
  ];
  return (
    <section className="px-6 py-10 bg-black text-white">
      <h2 className="text-3xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent mb-6 w-fit">
        Our Services
      </h2>
      <div className="grid grid-rows-4 divide-y divide-[#505050]">
        {servicesDict.map((item) => (
          <div key={item.title} className="flex items-start gap-4 py-4">
            <div className="p-3 bg-primaryL text-black rounded-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-base text-gray-300">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
