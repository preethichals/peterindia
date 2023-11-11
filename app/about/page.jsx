import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <h4>About Me</h4>
    <Link
            className=" text-lg letter-spacing2 text-center text-white hover:text-white
        leading-relaxed mb-4 border border-gray-400 py-2 px-3 rounded-md bg-neutral-600 hover:bg-black"
            href="mailto:peterindia@gmail.com"
          >
            Click to Send Email
          </Link>
    </>
  )
}

export default page