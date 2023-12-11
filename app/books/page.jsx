import Link from "next/link";
import React from "react";
import books from "./books.json";

export const metadata = {
  title: "Books",
  description: "Collection of books that cover a spectrum of cutting-edge technologies",
  keywords:
    "Cloud Technology, Internet of Things, Blockchain, Digital Technology, Books,Computing, Artificial intelligence, models, streaming analytics, digital twins, cloud-native computing, edge and serverless computing, reliability engineering, microservices architecture, quantum computing, event-driven architecture,5G/6G",
};

function page() {
  return (
    <>
      <div className="bg-fixed bg-books">
        <div className="mx-auto max-w-2xl py-24 sm:py-30 lg:py-35 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
            <div className="relative bg-white opacity-70 rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next New Book Release
            </div>
          </div>
          <div className="text-center bg-white opacity-80 rounded-xl">
            <h1 className="mb-4 py-4  text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl sm:text-5xl">
              <span className="text-transparent tracking-wide bg-clip-text bg-gradient-to-l to-emerald-500 from-sky-400">
                Publications <br />
              </span>{" "}
              <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-l to-cyan-500 from-sky-800">
                Crafted by Me.
              </span>
            </h1>
            <h1 className="mb-4 pb-5 text-xl text-center font-medium text-gray-900 dark:text-white md:text-xl lg:text-xl sm:text-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span>{" "}
              Authored/Edited Collection of books <br />
              that cover a spectrum of cutting-edge technologies
            </h1>
          </div>
        </div>

        {/* Books */}
        <div className=" bg-white py-12 sm:py-10">
          <h1 className="text-2xl text-center mb-5 px-3 font-bold tracking-tight text-gray-700 sm:text-4xl ">
            Books On Emerging Technologies
          </h1>
          <p className="mx-6 pt-4 px-6 text-xl text-gray-900 text-center border-t-2">
            <span className="text-sm text-emerald-700">
              Explore the Internet of Things (IoT), delve into the intricacies
              of Blockchain, <br />
              navigate the vast realm of Cloud Computing, and gain insights into
              the world of Artificial Intelligence. <br />
              Each book is crafted to provide comprehensive knowledge and
              practical understanding of these transformative technologies."
            </span>
          </p>
          {/* Books Section */}
          <div
            id="#top"
            className="mx-auto max-w-7xl px-6 lg:px-8  bg-stone-300 rounded-lg"
          >
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
                      <Link href={book.href} target="_blank"
                      rel="noopener noreferrer" >
                        <span className="absolute inset-0  " />
                        {book.title}
                      </Link>
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
            <div className=" mt-6 mb-8 flex items-center gap-x-4 flex-row-reverse">
              <Link href="#top">
                <button className="bg-sky-500 mb-8 rounded-md font-medium text-sm tracking-widest text-white  py-2 px-4  hover:bg-neutral-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  Scroll to Top
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
