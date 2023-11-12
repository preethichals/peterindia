import Link from 'next/link'
import React from 'react'

function Banner() {
  return (<>
     <div className="bg-fixed bg-tech">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
     <div className="mt-5 sm:flex sm:justify-center ">
            <div className="relative text-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next New Book Release{" "}
              <Link href="/books" className="font-semibold text-sky-500">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
     
       <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:py-5">
          <div className="text-center px-3 py-1 mt-5">
            <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl sm:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Better Data <br />
              </span>{" "}
              Scalable AI.
            </h1>

            
            <div className="bg-white bg  bg-opacity-50 rounded-lg py-3 px-5">
              <p className="mt-4 mb-3 text-lg font-medium leading-8 text-gray-900">
               My Authored collection of books <br/>that cover a spectrum of cutting-edge technologies.

              </p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link
                href="/books"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                href="/technology"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
     
       
</>
        
   
  )
}

export default Banner