import Link from "next/link";
import React from "react";
import books from './books.json'

function page() {
  
  return (
    <>
      <div className="bg-fixed bg-books">
        <div className="mx-auto max-w-2xl py-24 sm:py-30 lg:py-35 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-sky-500">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center bg-white opacity-80 rounded-xl">
            <h1 className="mb-4 py-8  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl sm:text-5xl">
              <span className="text-transparent tracking-wide bg-clip-text bg-gradient-to-l to-emerald-500 from-sky-400">
                Publications <br />
              </span>{" "}
              <span className=" text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-l to-cyan-500 from-sky-800">
                Crafted by Me.
              </span>
            </h1>
          </div>
        </div>

        {/* Books */}
        <div className=" bg-white py-12 sm:py-10">
          <h1 className="text-2xl text-center mb-5 px-3 font-bold tracking-tight text-gray-700 sm:text-4xl ">
            Data to enrich your online business
          </h1>
          <p className="mx-6 pt-4 px-6 text-lg text-gray-900 text-center border-t-2">
            <span className=" tracking-wide">
              Aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
              cupidatat commodo.{" "}
            </span>
            <br />
            <span>
              Elit sunt amet Qui irure qui lorem cupidatat commodo. Elit sunt
              amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna
              aliqua ad ad non deserunt sunt. veniam occaecat fugia.
            </span>
          </p>
          {/* Books Section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8  bg-stone-300 rounded-lg">
            <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
              {books.map((book) => (
                <article
                  key={book.id}
                  className="flex max-w-xl flex-col items-start justify-between bg-white  p-4"
                >
                  <Link
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="object-cover my-auto mx-auto ">
                      <img
                        src={book.bookUrl}
                        width={150}
                        height={48}
                        className="mt-3 mb-2 border-4"
                      />
                    </div>
                  </Link>
                  {/* published date  */}
                  <div className="flex items-center gap-x-4 text-xs mt-2 ">
                    <time
                      dateTime={book.datetime}
                      className="text-gray-800 tracking-wide"
                    >
                      {book.date}
                    </time>
                    {/* category */}
                    <p className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-white hover:bg-gray-700">
                      {book.category}
                    </p>
                  </div>

                  {/* shop link */}
                  <div className="group relative">
                    <h3 className="mt-3 pb-2 text-lg line-clamp-2 font-semibold leading-6 text-cyan-600 border-b-2  border-neutral-400 ">
                      <a href={book.href}>
                        <span className="absolute inset-0  " />
                        {book.title}
                      </a>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-800">
                      {book.description}
                    </p>
                  </div>
                  <div className="relative mt-6 mb-3 flex items-center gap-x-4">
                    <Link
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button class="bg-sky-500 rounded-md font-medium text-sm tracking-widest text-white  py-2 px-4  hover:bg-neutral-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        Buy Online
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
