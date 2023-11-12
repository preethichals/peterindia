import Link from 'next/link'
import React from 'react'

function BookCard() {
  return (
    <div className="bg-fixed bg-technology">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next New Book Release{" "}
              <Link href="/books" className="font-semibold text-sky-500">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          <div className="text-center mt-10">
             
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl sm:text-5xl">
              <span className="text-transparent leading-relaxed bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Digital Technologies <br />
              </span>{" "}
              and Tools
            </h1>
            <h1 className="text-2xl  font-bold tracking-tight text-gray-900 sm:text-4xl">
              are diverse and dynamic
            </h1>
            <div className=" bg-white mt-4 bg-opacity-70 rounded-lg py-3 px-5">
              <p className="mt-4 mb-3 text-lg leading-8 text-gray-900">
                Digital technology and tools play a crucial role in the IT
                (Information Technology) industry, driving innovation,
                efficiency, and transformative changes across various sectors.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        </div>
  )
}

export default BookCard