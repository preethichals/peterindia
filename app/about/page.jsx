import Link from "next/link";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

export const metadata = {
  title: "About Me",
  description: "Currently, Working as the Chief Architect and Vice President at Edge AI Division of Reliance Jio Platforms Ltd Bangalore, India.",
  keywords:
    "Cloud Technology, Internet of Things, Blockchain, Digital Technology, Books,Computing, Artificial intelligence, models, streaming analytics, digital twins, cloud-native computing, edge and serverless computing, reliability engineering, microservices architecture, quantum computing, event-driven architecture,5G/6G",
};

function page() {
  const researchs = [
    {
      id: 1,
      name: "Google Scholar",
      href: "https://scholar.google.co.in/citations?user=MgMlqAwAAAAJ&hl=en&authuser=1",
    },
    {
      id: 2,
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Pethuru-Raj-Phd-Chelliah",
    },
    {
      id: 3,
      name: "The Research Publications List",
href:"https://drive.google.com/file/d/1s0McJPUUc1amEvHSrQeVO_C6yQuaQ_XF/view?usp=drive_link,"    },
    {
      id: 4,
      name: "IEEE Xplore Publication",
      href: "https://ieeexplore.ieee.org/author/37085351124",
    },
    {
      id: 5,
      name: "Scopus Publications",
      href: "https://www.scopus.com/authid/detail.uri?authorId=55579667900",
    },
  ];

  return (
    <div className="bg-fixed bg-about">
      <div className=" bg-transparent py-24 sm:py-32">
        <div className="mx-auto  max-w-7xl px-6 lg:px-8">
          <div className="mx-auto px-8 py-12 opacity-95 rounded-xl bg-white max-w-2xl sm:text-center">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Pethuru Raj, PhD
            </h2>

            <p className="mt-6 text-xl font-medium leading-8 text-gray-600">
              Chief Architect and Vice President, Reliance Jio Platforms Ltd.
              (JPL), Bangalore, India.
            </p>
          </div>
          <div className="mx-auto bg-white mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-4xl font-medium tracking-wide  text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-yellow-500">
                Little About Me
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Presently, Working as the Chief Architect and Vice President at
                Edge AI Division of{" "}
                <span className="font-bold">Reliance Jio Platforms Ltd Bangalore, India.</span>,
                 Prior to this role, my professional journey
                encompassed significant positions at the{" "}
                <span className="font-bold">
                  IBM Global Cloud Center of Excellence,
                </span>{" "}
                <span className="font-bold">Wipro Consulting Services,</span>{" "}
                and <span className="font-bold">Robert Bosch Corporate Research</span>. With over two decades in
                the IT industry and eight years dedicated to research, my
                expertise spans a diverse range of areas. I have been honored
                with various international research fellowships, including from
                JSPS and JST, during my tenure as a research scientist at
                esteemed Japanese universities.
                <br />
                <br /> My primary focus lies in cutting-edge technologies,
                including the Internet of Things, optimization of artificial
                intelligence models, streaming analytics, blockchain, digital
                twins, cloud-native computing, edge and serverless computing,
                reliability engineering, microservices architecture, quantum
                computing, event-driven architecture, and 5G/6G.
                <br /> My Academic journey led me to complete a CSIR-sponsored
                PhD degree at Anna University, Chennai, and subsequently earn a
                UGC-sponsored postdoctoral research degree in the Department of
                Computer Science and Automation at the Indian Institute of
                Science (IISc), Bangalore.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-base font-semibold leading-6 text-cyan-500">
                  The Research Publications
                </h4>
                <div className="h-px flex-auto bg-gray-300" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {researchs.map((research) => (
                  <li key={research.id} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-cyan-600"
                      aria-hidden="true"
                    />
                    <Link href={research.href}> {research.name}</Link>
                  </li>
                ))}
              </ul>
              
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-800 py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
                <div className="mx-auto flex-wrap px-10">
                  <p className=" text-white text-base font-light tracking-wide text-start">
                    Authored and edited more than 45 technology books, published
                    more than 60 research papers, contributed more than 50 book
                    chapters, submitted a couple of international patents,
                    completed a few IT architecture certifications (TOGAF and
                    ITIL)
                  </p>
                  <br />
                  <p className="py-3 text-lg font-semibold text-sky-500 bg-slate-50 ps-4 border-t-2 border-b-2">
                    Follow Me
                  </p>
                  <div className="mt-1 py-4 bg-slate-50 ps-4 grid grid-cols-2 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    <Link
                      href="https://www.linkedin.com/in/sweetypeter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 block rounded-lg text-base px-3 py-2.5  font-semibold leading-7 text-gray-900"
                    >
                      <div className="flex flex-row justify-start">
                        <img
                          src="/LinkedIn.png"
                          width={30}
                          height={30}
                          className="me-2"
                        />
                        <span> LinkedIn</span>
                      </div>
                    </Link>
                    <Link
                      href="https://www.facebook.com/sweetypeter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900"
                    >
                      <div className="flex flex-row justify-start">
                        <img
                          src="/Facebook.png"
                          width={30}
                          height={30}
                          className="me-2"
                        />
                        <span> Facebook</span>
                      </div>
                    </Link>

                    <Link
                      href="https://twitter.com/peterindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900"
                    >
                      <div className="flex flex-row justify-start">
                        <img
                          src="/x-social-icon.png"
                          width={30}
                          height={30}
                          className="me-2"
                        />
                        <span> Twitter</span>
                      </div>
                    </Link>
                    <Link
                      href="https://scholar.google.co.in/citations?user=MgMlqAwAAAAJ&hl=en&authuser=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900"
                    >
                      <div className="flex flex-row justify-start">
                        <img
                          src="/google-scolar.png"
                          width={32}
                          height={32}
                          className="me-2"
                        />
                        <span> Scholar</span>
                      </div>
                    </Link>
                  </div>
                  <Link
                    href="mailto:peterindia@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 block tracking-wider w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Click To Send Mail
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1zxH2EXbYN1AvaAK9HdCe6jqYP23UnE54/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block tracking-wider w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Profile
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-400">
                    For Adding Links,and Advertisement <br /> Mail to :
                    peterindia@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
