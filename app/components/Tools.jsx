import Link from "next/link";
import React from "react";

function Tools() {
  const features = [
    {
      id: 1,
      name: "Microservices Architecture",
      description: "Style that structures an application",
      href: "https://www.peterindia.net/MSA.html",
    },
    {
      id: 2,
      name: "Software Engineering",
      description: "The design, development maintenance of software systems",
      href: "https://www.peterindia.net/SoftwareEngineering.html",
    },
    {
      id: 3,
      name: "Robotics Technology",
      description:
        "Use of robots to perform tasks in various industries and applications",
      href: "https://www.peterindia.net/Robotics.html",
    },
    {
      id: 4,
      name: "Theoretical Computer Science",
      description: "Mathematical and Theoretical aspects of computing",
      href: "http://www.peterindia.net/TCS.html",
    },
    {
      id: 5,
      name: "IT Storage",
      description: "The Infrastructure and Technologies",
      href: "http://www.peterindia.net/Storage.html",
    },
    {
      id: 6,
      name: "IT Jobs",
      description: "IT Job Search Sites",
      href: "https://www.peterindia.net/ITJobSearchSites.html",
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-20 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
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

        <div className="m-auto p-6 bg-gradient-to-b from-purple-100 to-pink-100  rounded-lg">
          <h2 className="text-3xl text-center font-bold tracking-wide text-gray-900 sm:text-3xl pt-3">
            The Modern
            <br /> Technology and Computing
          </h2>
          <p className="mt-4 text-neutral-700 text-center">
            The contemporary tools, systems, and methods that have evolved in recent times to address current needs and challenges in various fields. 
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.id} className="border-t border-gray-500 pt-4">
                <Link
                  href={feature.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <dt className="font-semibold text-base text-cyan-600 ms-3 tracking-wider uppercase hover:text-zinc-900 hover:font-bold">
                    {feature.name} <span aria-hidden="true">→</span>
                  </dt>
                </Link>
                <dd className="mt-2 text-sm text-neutral-900 ms-3">
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

export default Tools;
