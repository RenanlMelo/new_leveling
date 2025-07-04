import React from "react";

export const Objectives = () => {
  return (
    <section className="mb-20 px-6">
      <h2 className="text-3xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent mt-14 mb-6">
        What is your objective?
      </h2>
      <ul className="flex flex-col gap-y-6 text-xl">
        <li className="border-l-2 border-white pl-2">
          Cost Efficiency & Productivity
        </li>
        <li className="border-l-2 border-white pl-2">Time Savings</li>
        <li className="border-l-2 border-white pl-2">Time Savings</li>
        <li className="border-l-2 border-white pl-2">Accuracy & Compliance</li>
        <li className="border-l-2 border-white pl-2">Scalability & Growth</li>
        <li className="border-l-2 border-white pl-2">
          Customer & Employee Experience
        </li>
      </ul>
    </section>
  );
};
