import React from 'react'

function Banner() {
  return (
   <div className="relative isolate overflow-hidden bg-gray-900 py-14 px-10 sm:py-12 backdrop-blur-sm bg-white/30">
      <img
        src="/header-bg.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
    
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
       
      </div>

       <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:py-10">
          <div className="text-center px-3 py-1 mt-5">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl sm:text-5xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Better Data <br />
              </span>{" "}
              Scalable AI.
            </h1>

            <h3 className="text-lg font-bold tracking-wide  text-gray-900 sm:text-3xl mb-4">
              Data to enrich your online business
            </h3>
            <div className="bg-white bg  bg-opacity-50 rounded-lg py-3 px-5">
              <p className="mt-4 mb-3 text-lg leading-8 text-gray-900">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
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

export default Banner