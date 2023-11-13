import Link from "next/link";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

function Tech() {
  const features = [
    {
      name: "Microservices Architecture",
      description: "Style that structures an application as a collection of small, independent, loosely coupled services.",
      href: "https://www.peterindia.net/MSA.html",
    },

    {
      name: "Robotics Technology",
      description:
        "Use of robots to perform tasks in various industries and applications",
      href: "https://www.peterindia.net/Robotics.html",
    },
    {
      name: "Enterprise Architecture",
      description: "A strategic framework that defines the structure and operation of an organization",
      href: "https://www.peterindia.net/EA.html",
    },
    {
      name: "Blockchain Technology",
      description: "A decentralized and distributed ledger system that enables secure, transparent transactions",
      href: "https://www.peterindia.net/Blockchain.html",
    },
    {
      name: "Event Driven Architecture",
      description: "EDA is a software design pattern that structures the flow of information and processing",
      href: "https://www.peterindia.net/EDA.html",
    },
    {
      name: "Integration Technologies",
      description: "A set of tools, techniques, and approaches used to connect and enable the interoperability",
      href: "https://www.peterindia.net/IntegrationTechnologies.html",
    },
  ];

  

  return (
    <div className="bg-white pt-4">
      <div className="mx-auto max-w-full py-6 sm:px-6 sm:py-2 lg:px-8">
        <div className="relative isolate overflow-hidden bg-tech px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.2"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl text-center font-bold tracking-wide text-neutral-800 sm:text-4xl">
              Emerging Technologies
              <br />
            </h2>
            
            <p className="mt-4 bg-white p-4 rounded-lg opacity-80">
              AI, Blockchain, Quantum and Edge computing, Advanced robotics, 5G/6G technology, and more...
              <br/>These technologies are closely monitored by industry experts, researchers, for their potential to shape the future of various domains.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/technology"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 "
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mx-auto my-6 p-6 bg-white rounded-lg">
            <h4 className="text-4xl text-center font-extrabold tracking-wide  text-gray-700 sm:text-4xl pt-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500">
                Digital Technologies and Tools <br />
              </span>{" "}
            </h4>
            <p className="mt-6 text-base pt-4 text-neutral-800 text-center leading-loose border-t border-gray-300">
              Digital technology and tools in the IT industry are diverse and
              dynamic, <br/>continuously evolving to meet the demands of a rapidly
              changing technological landscape, Tools empower businesses
              to streamline operations, enhance productivity, and drive
              innovation in various domains.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8 bg-sky-50 py-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-l-8 border-cyan-700 pt-4 ml-4"
                >
                  <Link
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <dt className="font-semibold text-base text-gray-900 ms-3 tracking-wide uppercase hover:ml-4 hover:text-sky-500 hover:tracking-wider">
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
    </div>
  );
}

export default Tech;
