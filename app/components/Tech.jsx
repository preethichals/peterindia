import Link from 'next/link';
import React from 'react'

function Tech() {
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

  return (
   

<div className="bg-white pt-4">
      <div className="mx-auto max-w-full py-6 sm:px-6 sm:py-2 lg:px-8">
        <div className="relative isolate overflow-hidden bg-tech px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.2" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl text-center font-bold tracking-wide text-neutral-800 sm:text-4xl">
              Digital Technologies and Tools
              <br />
             
            </h2>
            <p className='mt-4 bg-white p-4 rounded-lg opacity-80'><span className="mt-12 text-lg leading-8 text-black  p-1 ">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </span></p>
            <div className='mt-6 text-center'>
              <Link
                href="#"
                className="rounded-md bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 "
              >
                Learn More
                </Link>
             </div>
          </div>

  <div className="mx-auto my-6 p-6 bg-white rounded-lg">
          <h4 className="text-3xl text-right  font-semibold  text-gray-700 sm:text-3xl pt-3">
            Digital Technologies and Tools
          </h4>
          <p className="mt-6 pt-4 text-neutral-800 text-right leading-loose border-t border-gray-300">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8 bg-sky-50 py-4">
            {features.map((feature) => (
              <div key={feature.name} className="border-l-8 border-gray-400 pt-4 ml-4">
                <dt className="font-semibold text-base text-cyan-600 ms-3 tracking-wide uppercase hover:ml-4 hover:text-black hover:tracking-wider">
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
    </div>
  
  )
}

export default Tech