import Link from "next/link";
import React from "react";

function Technical() {
  const features = [
    {
      name: "Software Engineering",
      description: "Hand sanded and finished with natural oil",
      href: "https://www.peterindia.net/SoftwareEngineering.html",
    },
    {
      name: "IT Jobs",
      description: '6.25" x 3.55" x 1.15"',
      href: "https://www.peterindia.net/ITJobSearchSites.html",
    },
    {
      name: "Microservices Architecture",
      description: "Hand sanded and finished with natural oil",
      href: "https://www.peterindia.net/MSA.html",
    },
    {
      name: "IT Storage",
      description: "Designed by Good Goods, Inc.",
      href: "http://www.peterindia.net/Storage.html",
    },
    {
      name: "Robotics Technology",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
      href: "https://www.peterindia.net/Robotics.html",
    },
    {
      name: "The Computer Science",
      description: '6.25" x 3.55" x 1.15"',
      href: "http://www.peterindia.net/TCS.html",
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
      name: "IT Operations",
      imageUrl: "/cloud-01.jpg",
      href: "https://www.peterindia.net/ITOperations.html",
    },
    {
      id: 4,
      name: "Middleware",
      imageUrl: "/cloud-07.jpg",
      href: "http://www.peterindia.net/Middleware.html",
    },
    {
      id: 5,
      name: "Computing Paradigms",
      imageUrl: "/cloud-05.png",
      href: "http://www.peterindia.net/Computing.html",
    },
    {
      id: 6,
      name: "Industry 4.0",
      imageUrl: "/cloud-06.jpg",
      href: "http://www.peterindia.net/Industry4.0.html",
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

        <div className="m-auto p-6 bg-neutral-100 rounded-lg">
          <h2 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl pt-3">
            Technical Specifications
          </h2>
          <p className="mt-4 text-neutral-700 text-center">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-300 pt-4">
                <dt className="font-medium text-base text-cyan-600 ms-3 tracking-wider uppercase">
                  {feature.name} <span aria-hidden="true">→</span>
                </dt>
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

export default Technical;
