import MeetingsCard from '@/app/components/meetings/MeetingsCard'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient-to-b  from-blue-100 to-blue-50 min-h-screen ">

      <div className='py-20 w-full min-h-screen flex items-center justify-center '>

        <MeetingsCard/>
      </div>

    </div>
  )
}

export default page