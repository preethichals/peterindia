import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
   <div className="relative isolate overflow-hidden bg-gray-900 py-14 px-10 sm:py-12 backdrop-blur-sm bg-white/30">
      <img
        src="/header-bg.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
     <div className="mt-5 sm:flex sm:justify-center ">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next New Selease Books{" "}
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

            <h3 className="text-2xl font-bold tracking-wide  text-gray-900 sm:text-3xl mb-4">
              Data to enrich your online business
            </h3>
            <div className="bg-white bg  bg-opacity-50 rounded-lg py-3 px-5">
              <p className="mt-4 mb-3 text-lg leading-8 text-gray-900">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                href="/books"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
       

        
   
  )
}

export default Banner