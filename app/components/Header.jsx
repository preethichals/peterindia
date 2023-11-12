'use client';
import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'My Books', href: '/books' },
  { name: 'Technology', href: '/technology' },
  { name: 'About Me', href: '/about' },
]

function Header() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
   <>
   <div className=" bg-neutral-900 container mx-auto max-w-full shadow dark:bg-gray-900">
  <div className="w-full max-w-screen-xl mx-auto p-1 text-slate-50">
    <div className="sm:flex sm:justify-between text-sm flex font-light">
      <Link href="mailto:peterindia@gmail.com" target="_blank" rel="noopener noreferrer">
        <h5 className='tracking-widest px-2'> For Adding Links, Advertisement (Mail : peterindia@gmail.com)</h5>
        </Link>
</div></div></div>
      <header className="inset-x-0 top-0 z-50 sticky opacity-90 bg-white">
        <nav className="flex items-center justify-between px-8 py-5 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
           
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="uppercase text-base font-medium tracking-widest leading-6 text-gray-900 hover:underline">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="text-sm font-semibold leading-6 text-gray-900">
              <span className='flex flex-row justify-around'>
            <Link href='https://www.linkedin.com/in/sweetypeter' target="_blank" rel="noopener noreferrer"><img src='/LinkedIn.png' width={30} height={30} className="me-2" /> </Link>
            <Link href='https://www.facebook.com/sweetypeter' target="_blank" rel="noopener noreferrer"><img src='/Facebook.png' width={30} height={30} className="me-2"/></Link>
            <Link href='https://scholar.google.co.in/citations?user=MgMlqAwAAAAJ&hl=en&authuser=1' target="_blank" rel="noopener noreferrer"><img src='/google-scolar.png' width={30} height={30} className="me-2" /></Link>
            <Link href='https://twitter.com/peterindia' target="_blank" rel="noopener noreferrer"><img src='/x-social-icon.png' width={30} height={30} /></Link></span><span aria-hidden="true"></span>
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 font-semibold tracking-wide text-cyan-600 bg-white rounded-md">
                <span className="sr-only">Logo</span>
                Welcome to Peter India
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium tracking-wide leading-7 text-gray-900 hover:bg-gray-50 hover:font-semibold hover:underline"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 bg-sky-100 px-5">
                  <p className='my-3 tracking-widest text-sky-600 font-bold'>Follow Me</p>
                  <Link
                    href="https://www.linkedin.com/in/sweetypeter" target="_blank" rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    LinkedIn
                  </Link> 
                  <Link
                    href='https://www.facebook.com/sweetypeter' target="_blank" rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    FaceBook
                  </Link> 
                  <Link
                    href='https://twitter.com/peterindia' target="_blank" rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Twitter
                  </Link> 
                  <Link
                    href="https://scholar.google.co.in/citations?user=MgMlqAwAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                   Google Scholar
                  </Link>
                  
                </div>
                                  
              </div>
                <Link href="mailto:peterindia@gmail.com" target="_blank" rel="noopener noreferrer">
                  <p className='mt-12 tracking-widest text-gray-800 font-medium'>For Adding Links, Advertisement (Mail : peterindia@gmail.com)</p>
                  </Link>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header> 
   </>
  )
}

export default Header