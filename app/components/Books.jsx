import Link from "next/link";
import React from "react";

function Books() {
  return (
    <div className="relative overflow-hidden bg-slate-100 ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Authored publications here
            </h1>
            <p className="mt-4 text-base text-gray-500">
              The Latest Literary Endeavors — a collection of books spanning the
              realms of 5G Communication, AI, Blockchain
              Technology, Cybersecurity, and Data Engineering. 
              <br/>Journey through
              the landscapes of DevOps, the Internet of Things (IoT) Paradigm in my
              recent releases.
            </p>
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
                className="inline-block rounded-md   bg-sky-500 px-8 py-3 text-center font-medium text-white hover:bg-neutral-800 tracking-wide border-2 border-zinc-400"
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
