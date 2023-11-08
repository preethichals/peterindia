
import React from 'react'

function Footer() {
  return (
    
<footer className=" bg-neutral-900 container mx-auto max-w-full shadow dark:bg-gray-900">
  <div className="w-full max-w-screen-xl mx-auto p-4 text-slate-50">
    <div className="sm:flex sm:items-center sm:justify-between">
         <span className="block text-sm  sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">peterindia™</a>. All Rights Reserved.</span>

      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
        <li className='flex flex-row '>
            <img src='/LinkedIn.png' width={30} height={30} className="mx-2" /> <img src='/Facebook.png' width={30} height={30} />

        </li>
      </ul>
       
    </div>
  </div>
</footer>



  )
}


export default Footer