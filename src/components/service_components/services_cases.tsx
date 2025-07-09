import { Bell, CheckCircle2, FileText, UserPlus, Zap } from "lucide-react";
import React from "react";

export const Services_Cases = () => {
  const useCases = [
    {
      icon: <FileText className="w-5 h-5 text-primaryL" />,
      label: "Invoice entry and ERP system automation",
    },
    {
      icon: <Zap className="w-5 h-5 text-primaryL" />,
      label: "Email parsing and automated report generation",
    },
    {
      icon: <UserPlus className="w-5 h-5 text-primaryL" />,
      label: "Client and vendor registration automation",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primaryL" />,
      label: "Data validation across platforms",
    },
    {
      icon: <Bell className="w-5 h-5 text-primaryL" />,
      label: "Stock monitoring and automatic alerts",
    },
  ];
  return (
    <section className="px-6 mb-20 text-gray-200">
      <h2 className="text-primaryL font-semibold text-3xl mb-6">
        Common Use Cases
      </h2>
      <ul className="space-y-3">
        {useCases.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {item.icon}
            <span className="text-gray-300">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
