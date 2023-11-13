import Link from "next/link";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

function Books() {
  
  const titles = [
    {
      id: 1,
      name: "5G/6G Communication",
    },
     {
      id: 2,
      name: "Artificial Intelligence",
    },
     {
      id: 3,
      name: "Blockchain Technology",
    },
     {
      id: 4,
      name: "Cloud-native Computing",
    },
     {
      id: 5,
      name: "Knowledge Engineering",
    },
    {
      id: 6,
      name: "Internet of Things & More",
    },
  ]
  return (
    <div className="relative overflow-hidden bg-slate-100 ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Published Works
            </h1>
            <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {titles.map((title) => (
                  <li key={title.id} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-cyan-600"
                      aria-hidden="true"
                    />
                     {title.name}
                  </li>
                ))}
              </ul>
            
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                 <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-slate-200">
                        <img
                          src="/b2.jpg"
                          alt="Streaming Analytics"
                          className="h-full w-full object-cover object-center p-2"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-slate-200">
                        <img
                          src="/b3.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center p-2"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-slate-200">
                        <img
                          src="/Cognitive Internet.png"
                          alt=""
                          className="h-full w-full object-cover object-center p-2"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="b5.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/b1.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/Book-Blockchain.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/b6.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/books"
                className="inline-block rounded-md   bg-sky-500 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500 tracking-wide border-2 border-zinc-400"
              >
                View More Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
