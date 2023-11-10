import Image from "next/image";
import Link from "next/link";
import React from "react";


function page() {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book1.jpg",

      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book2.jpg",
      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book3.jpg",
      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
    },
    {
      id: 4,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book3.jpg",
      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
    },
    {
      id: 5,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book3.jpg",
      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
      
    },
    {
      id: 6,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book3.jpg",
      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
      
    },
    {
      id: 7,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      bookUrl: "/book3.jpg",
      imageUrl: "/author.jpg",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
      
    },
  ];

  return (
    <>
      <div className="bg-fixed bg-image1">
         <div className="mx-auto max-w-2xl py-24 sm:py-30 lg:py-35">
           
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-sky-500">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl sm:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Better Data <br />
              </span>{" "}
              Scalable AI.
            </h1>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data to enrich your online business
            </h1>
            <div className=' bg-white bg  bg-opacity-50 rounded-lg py-3 px-5'>
            <p className="mt-4 mb-3 text-lg leading-8 text-gray-900">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
        </div>

        

        {/* Books */}
        <div className=" bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className=" text-lg text-gray-900 text-center">
              <span className=" tracking-wide">Aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. </span> 
              <br/><span>Elit sunt amet Qui irure qui lorem
              cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
              aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. veniam
              occaecat fugia.</span>
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-8 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between bg-slate-200 p-4"
                >
                  <div className="object-cover my-auto mx-auto ">
                    <img
                      src={post.bookUrl}
                      width={200}
                      height={48}
                      className="mt-3 mb-2"
                    />
                  </div>
                  <div className="flex items-center gap-x-4 text-xs mt-2 ">
                    <time dateTime={post.datetime} className="text-gray-800 tracking-wide">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-white hover:bg-gray-700"
                    >
                      <span>{post.category.title}</span>
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 pb-2 text-lg font-semibold leading-6 text-cyan-600 border-b-2  border-neutral-400 ">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-800">
                      {post.description}
                    </p>
                    
                  </div>
                  <div className="relative mt-6 mb-3 flex items-center gap-x-4">
                    
                 <Link href='#' target="_blank" rel="noopener noreferrer"><button class="bg-sky-500 rounded-md font-medium text-sm tracking-widest  text-white  py-2 px-4  hover:bg-indigo-500 ">
  Buy Online
</button></Link> 
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
