import React from "react";

export const About_Values = () => {
  return (
    <section className="px-6 mb-20">
      <h2 className="text-primaryL font-semibold text-3xl mb-8">
        Our Mission & Values
      </h2>
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-lg font-medium text-white mb-1">Our Mission</h3>
          <p>
            To empower businesses by automating mundane tasks, enabling teams to
            focus on innovation and strategic growth.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">Our Vision</h3>
          <p>
            To be the leading partner in digital transformation, delivering
            scalable, reliable, and intelligent automation solutions worldwide.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">Our Values</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Integrity & Transparency</li>
            <li>Innovation & Excellence</li>
            <li>Client-Centric Approach</li>
            <li>Collaboration & Teamwork</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
