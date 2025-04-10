import React from 'react'
import LinkComponent from '../common/LinkComponent'
import Link from 'next/link'

const MeetingsCard = () => {
  return (
    <div className='bg-white shadow-md w-full mx-3 flex flex-col items-center justify-center gap-5 py-20 px-1 md:px-6 md:w-2/3 lg:w-1/2'>
            <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6 mt-6">Smooth, collaborative meetings</h1>
            <div className="flex flex-col gap-1 ">
            <LinkComponent
              hrefText="#"
              linkLabel="Start a meeting"
            />
            <Link
              href="/contactsales"
              className="mt-6 text-sm  text-center   px-4 py-1    text-blue-600 border flex whitespace-nowrap items-center border-blue-600 font-semibold  rounded-full shadow hover:bg-blue-50"
            >
              Join a meeting
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <p className='border border-gray-200 w-20'></p>
            <p>or</p>
            <p className='border border-gray-200 w-20'></p>
          </div>
          <p>Already have Lark installed? <Link href="#" className=' text-blue-600'>Open</Link></p>
    </div>
  )
}

export default MeetingsCard