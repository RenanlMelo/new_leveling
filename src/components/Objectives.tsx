"use client";
import { CirclePlus } from "lucide-react";
import React, { useState } from "react";

export const Objectives = () => {
  const objectivesDict = [
    {
      title: "Cost Efficiency & Productivity",
      content:
        "Boost operational efficiency while reducing manual tasks and costs by leveraging RPA automation.",
    },
    {
      title: "Time Savings",
      content:
        "Automate repetitive processes to free up employees for more strategic tasks, reducing delays.",
    },
    {
      title: "Accuracy & Compliance",
      content:
        "Minimize human errors and ensure adherence to regulations through consistent automated actions.",
    },
    {
      title: "Scalability & Growth",
      content:
        "Enable your operations to grow without needing to proportionally increase resources.",
    },
    {
      title: "Customer & Employee Experience",
      content:
        "Enhance satisfaction by speeding up service delivery and reducing repetitive workload.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mb-20 px-6">
      <h2 className="text-3xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent mt-14 mb-6 w-fit">
        What is your objective?
      </h2>
      <ul className="flex flex-col gap-y-6 text-lg text-white">
        {objectivesDict.map((obj, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={index} className="border-l-2 border-white pl-2 relative">
              <div
                className={`flex items-center justify-between cursor-pointer py-1`}
                onClick={() => toggleIndex(index)}
              >
                {obj.title}
                {obj.content && (
                  <span className="absolute right-0">
                    <CirclePlus
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                )}
              </div>
              {obj.content && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-white p-3 rounded-md">{obj.content}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
