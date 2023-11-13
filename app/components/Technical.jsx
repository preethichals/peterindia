import Link from "next/link";
import React from "react";


function Technical() {
  const features = [
    {
      id: 1,
      name: "Data Engineering",
      description:
        "The practical application of data collection, processing, and management",
      href: "https://www.peterindia.net/DataEngineering.html",
    },
    {
      id: 2,
      name: "Knowledge Engineering",
      description:
        "The development and application of methods and tools to acquire",
      href: "https://www.peterindia.net/KnowledgeEngineering.html",
    },
    {
      id: 3,
      name: "Process Engineering",
      description:
        "Focuses on designing, optimizing, and implementing processes within various industries ",
      href: "https://www.peterindia.net/ProcessEngineering.html",
    },
    {
      id: 4,
      name: "Reliability Engineering",
      description: "Ensuring the dependability and performance",
      href: "https://www.peterindia.net/ReliabilityEngineering.html",
    },
    {
      id: 5,
      name: "Software Engineering",
      description:
        "The design, development, testing, deployment, and maintenance of software systems",
      href: "https://www.peterindia.net/SoftwareEngineering.html",
    },

    {
      id: 6,
      name: "Platform Engineering",
      description:
        "The foundational infrastructure, frameworks, and tools that support",
      href: "https://www.peterindia.net/PlatformSoftware.html",
    },
  ];
  const tech = [
    {
      id: 1,
      name: "Digital InfraStructure",
      imageUrl: "/cloud-03.jpg",
      href: "http://www.peterindia.net/DigitalInfrastructure.html",
    },

    {
      id: 2,
      name: "IT Networking",
      imageUrl: "/cloud-04.jpg",
      href: "http://www.peterindia.net/Networking.html",
    },
    {
      id: 3,
      name: "Middleware",
      imageUrl: "/cloud-7.jpg",
      href: "http://www.peterindia.net/Middleware.html",
    },
    {
      id: 4,
      name: "IT Operations",
      imageUrl: "/cloud-1.jpg",
      href: "https://www.peterindia.net/ITOperations.html",
    },
    {
      id: 5,
      name: "Industry 4.0",
      imageUrl: "/cloud-06.jpg",
      href: "http://www.peterindia.net/Industry4.0.html",
    },
    {
      id: 6,
      name: "Computing Paradigms",
      imageUrl: "/cloud-5.jpg",
      href: "http://www.peterindia.net/Computing.html",
    },
  ];
  
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-3 grid-rows-2 sm:gap-6 lg:gap-6">
          {tech.map((item) => (
            <div key={item.id} className="items-center">
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="block w-full h-3/4 rounded-lg object-cover object-center"
                />
                <h4 className="text-center text-base font-semibold tracking-widest mt-2">
                  {item.name}
                </h4>
              </Link>
            </div>
          ))}
        </div>

        <div className="m-auto p-6 bg-neutral-700 rounded-lg">
          <h2 className="text-4xl text-center font-light tracking-wide text-cyan-300 sm:text-4xl pt-3">
            Engineering Paradigms
          </h2>
          

          <dl className="mt-7 pb-7 bg-white grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-400 pt-4">
                <Link
                  href={feature.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <dt className="font-semibold text-md text-cyan-500 ms-3 tracking-wider uppercase hover:text-neutral-800 hover:underline">
                    {feature.name} <span aria-hidden="true">→</span>
                  </dt>
                </Link>
                <dd className="mt-2 text-sm text-neutral-700 ms-3">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Technical;
