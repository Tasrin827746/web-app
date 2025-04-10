import DropdownLanguage from '@/app/components/meetings/DropdownLanguage'
import React from 'react'

const MeetingsNavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold text-gray-900">
          Taskir&apos;s <span className="text-blue-600">View</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div>
        <DropdownLanguage/>
      </div>
    </nav>
  )
}

export default MeetingsNavBar