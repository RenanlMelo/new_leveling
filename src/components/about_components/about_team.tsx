import Image from "next/image";
import React from "react";

export const About_Team = () => {
  const teamMembers = [
    {
      name: "Renan Melo",
      title: "Automation Specialist",
      image: "/profile1.jpg",
    },
    {
      name: "Bruno Reis",
      title: "Full-Stack Developer",
      image: "/profile1.jpg",
    },
    {
      name: "Kevin Scavassin",
      title: "UI/UX Designer",
      image: "/profile1.jpg",
    },
  ];
  return (
    <section className="px-6 mb-20">
      <h2 className="text-primaryL font-semibold text-3xl mb-8">Our Team</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-[#111] rounded-xl p-6 text-center">
            <div className="w-60 h-60 mx-auto mb-4 bg-gray-800 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={512}
                height={512}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-white mb-1">
              {member.name}
            </h3>
            <p className="text-gray-400">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
