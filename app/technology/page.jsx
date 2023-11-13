import Link from "next/link";
import React from "react";
import Tools from "../components/Tools";
import tech from "./tech.json";

export const metadata = {
  title: "Technology and Tools",
  description: "Digital technology and tools play a crucial role in the IT (Information Technology) industry",
  keywords:
    "Cloud Technology, Internet of Things, Blockchain, Digital Technology, Books,Computing, Artificial intelligence, models, streaming analytics, digital twins, cloud-native computing, edge and serverless computing, reliability engineering, microservices architecture, quantum computing, event-driven architecture,5G/6G",
};

function page() {
  return (
    <>
      <div className="bg-fixed bg-technology">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
          <div className="text-center mt-10 mb-12">
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl sm:text-5xl">
              <span className="text-transparent leading-relaxed bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Digital Technologies <br />
              </span>{" "}
              and Tools
            </h1>
            <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl">
              are Innovative, Disruptive and Transformative
            </h1>
            <div className=" bg-white mt-4 bg-opacity-70 rounded-lg py-3 px-5">
              <p className="mt-4 mb-3 text-lg leading-8 text-gray-900">
                Digital technology and tools play a crucial role in the IT
                (Information Technology) industry, driving innovation,
                efficiency, and transformative changes across various sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Technology */}

        <div className="mx-auto my-4 p-6 bg-white rounded-lg">
          <h4 className="text-3xl text-center  font-semibold  text-gray-700 sm:text-3xl pt-3">
            Digital Technologies and Tools
          </h4>
          <p className="mt-6 pt-4 text-neutral-800 text-center leading-loose border-t border-gray-300">
            Digital technology and tools in the IT industry are diverse and
            dynamic, continuously evolving to meet the demands
            <br /> of a rapidly changing technological landscape. These tools
            empower businesses to streamline operations, enhance productivity,
            and drive innovation in various domains.
          </p>

          <dl className="mt-10 py-10 grid gap-x-6 gap-y-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-6 lg:gap-x-8 bg-slate-800 px-6">
            {tech.map((tech) => (
              <div
                key={tech.id}
                className="border-l-8 border-gray-400 pt-4 ml-4"
              >
                <Link
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <dt className="font-semibold text-base text-cyan-400 ms-3 tracking-wide uppercase hover:ml-4 hover:tracking-wider">
                    {tech.name} <span aria-hidden="true">→</span>
                  </dt>
                </Link>
                <dd className="mt-2 text-sm  text-slate-50 ms-3">
                  {tech.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Tools />
      </div>
    </>
  );
}

export default page;
