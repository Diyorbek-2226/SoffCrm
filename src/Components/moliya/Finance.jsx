

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Finance() {
  const days = [
    { day: 'Du', date: '22' },
    { day: 'Se', date: '23' },
    { day: 'Cho', date: '24', isActive: true },
    { day: 'Pa', date: '25' },
    { day: 'Ju', date: '26' },
    { day: 'Sha', date: '27' },
  ]

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Moliya</h2>
        
        {/* Calendar Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium">Fevral 2023</span>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-6 gap-2 text-center">
            {days.map((day) => (
              <div key={day.date}>
                <div className="text-xs text-gray-500 mb-1">{day.day}</div>
                <div
                  className={`
                    py-1 px-2 rounded-full text-sm
                    ${day.isActive 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {day.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amount Section */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 mb-1">24-Fevral, 2023</div>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-2xl font-bold text-gray-900">
              8 520 000
            </span>
            <span className="flex items-center text-sm text-green-600">
              <svg 
                className="w-3 h-3 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
              +22%
            </span>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-600">Talabalar</span>
            </div>
            <span className="text-sm font-medium text-gray-900">5 760 000</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-sm text-gray-600">Darsliklar sotuvi</span>
            </div>
            <span className="text-sm font-medium text-gray-900">2 180 000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

