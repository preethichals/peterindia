
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    
<footer className=" bg-neutral-900 container mx-auto max-w-full shadow dark:bg-gray-900">
  <div className="w-full max-w-screen-xl mx-auto p-4 text-slate-50">
    <div className="sm:flex sm:items-center sm:justify-between">
         <span className="block text-sm  sm:text-center dark:text-gray-400"><a href="mailto:preethi.lyn@gmail.com" className="hover:underline"> Created by Preethi-- © 2023 </a><a href="mailto:peterindia@gmail.com" className="hover:underline">PeterIndia™</a>. All Rights Reserved.</span>

      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium tracking-widest uppercase sm:mb-0 dark:text-gray-400">
         <li>
          <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
          <a href="/books" className="mr-4 hover:underline md:mr-6">Books</a>
        </li>
        <li>
          <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li> 
        <li>
          <a href="mailto:peterindia@gmail.com" className="hover:underline">Contact</a>
        </li>
        <li className='mx-4'>
       <div className="text-sm font-semibold leading-6 text-gray-900">
              <span className='flex flex-row justify-around'>
            <Link href='https://www.linkedin.com/in/sweetypeter' target="_blank" rel="noopener noreferrer"><img src='/LinkedIn.png' width={30} height={30} className="me-2" /> </Link>
            <Link href='https://www.facebook.com/sweetypeter' target="_blank" rel="noopener noreferrer"><img src='/Facebook.png' width={30} height={30} className="me-2" /></Link>
            <Link href='https://scholar.google.co.in/citations?user=MgMlqAwAAAAJ&hl=en&authuser=1' target="_blank" rel="noopener noreferrer"><img src='/google-scolar.png' width={30} height={30}  className="me-2" /></Link>
            <Link href='https://twitter.com/peterindia' target="_blank" rel="noopener noreferrer"><img src='/x-social-icon.png' width={30} height={30}  className="me-2" /></Link></span><span aria-hidden="true"></span>
            </div> 
        </li>
      </ul>
       
    </div>
  </div>
</footer>



  )
}


export default Footer
