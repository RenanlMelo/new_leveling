import React from "react";
import { DollarSign, ShieldCheck, BarChart2, Clock, Smile } from "lucide-react";

export const Services_Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="text-primaryL w-6 h-6" />,
      title: "Reduces Operational Costs",
      description: "Automates repetitive tasks to save on labor and resources.",
    },
    {
      icon: <ShieldCheck className="text-primaryL w-6 h-6" />,
      title: "Eliminates Human Errors",
      description: "Ensures consistent, error-free execution across processes.",
    },
    {
      icon: <BarChart2 className="text-primaryL w-6 h-6" />,
      title: "Increases Productivity",
      description:
        "Lets your team focus on high-value tasks while bots handle the rest.",
    },
    {
      icon: <Clock className="text-primaryL w-6 h-6" />,
      title: "Operates 24/7",
      description: "No breaks, no downtime — bots work around the clock.",
    },
    {
      icon: <Smile className="text-primaryL w-6 h-6" />,
      title: "Improves Customer Experience",
      description:
        "Faster response times and greater reliability in service delivery.",
    },
  ];
  return (
    <section className="px-6 mb-20">
      <h2 className="text-primaryL font-semibold text-3xl mb-4">
        Key Benefits of RPA
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#111] rounded-xl p-5 shadow-lg hover:shadow-primaryL/40 transition"
          >
            <div className="shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
