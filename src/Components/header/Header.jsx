"use client"

import { Search, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header({ onMenuClick }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <header className="fixed z-20 w-full bg-white border-b">
      <div className='flex flex-wrap items-center justify-between px-4 py-2'>
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative hidden sm:block w-[240px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex min-xs:gap-4  items-end sm:flex-row sm:items-center sm:gap-4">
          <div className="flex  items-center gap-1">
            <span className="text-lg font-medium min-xs:text-sm">{formatTime(currentDateTime)}</span>
          </div>
          <div className="text-lg min-xs:text-sm ont-medium text-gray-600">
            {formatDate(currentDateTime)}
          </div>
        </div>

        {/* Language Selector */}
        <div className=" sm:w-auto mt-2 sm:mt-0 me-80">
    
        </div>
      </div>

      {/* Mobile Search - Visible only on mobile */}
      <div className='sm:hidden px-4 pb-2'>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search" 
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div> 
      </div>
    </header>
  )
}

