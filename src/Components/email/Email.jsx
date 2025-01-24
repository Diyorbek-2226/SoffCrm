

const emails = [
  {
    id: 1,
    sender: {
      name: "Salima Fayziyeva",
      role: "Marketolog",
      avatar: "https://picsum.photos/200",
      initials: "SF"
    },
    subject: "Zoom uchrashuvlar",
    time: "12:56"
  },
  {
    id: 2,
    sender: {
      name: "Marat Allaberganov",
      role: "O'qituvchi",
      avatar: "https://picsum.photos/200",
      initials: "MA"
    },
    subject: "Yangi dars jadvali so'ovi?",
    time: "11:28",
    isSelected: true
  },
  {
    id: 3,
    sender: {
      name: "Djamshid Murodov",
      role: "Kurator",
      avatar: "https://picsum.photos/200",
      initials: "DM"
    },
    subject: "Yangi talabalar ro'yxati...",
    time: "Kecha 20:10"
  },
  {
    id: 4,
    sender: {
      name: "Elmira Yusupova",
      role: "HR",
      avatar: "https://picsum.photos/200",
      initials: "EY"
    },
    subject: "Yangi mentor bilan suhbat...",
    time: "Kecha 16:37"
  }
]

export default function Email() {
  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Email habarilari</h2>
            <span className="inline-flex items-center justify-center w-6 h-6 text-sm font-medium text-white bg-blue-500 rounded-full">
              12
            </span>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`flex gap-3 p-3 sm:p-4 hover:bg-gray-50 transition-colors ${
                email.isSelected ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              <input 
                type="checkbox" 
                checked={email.isSelected}
                className="mt-2 w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer flex-shrink-0"
                onChange={() => {}}
              />
              
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center flex-shrink-0">
                {email.sender.avatar ? (
                  <img 
                    src={email.sender.avatar || "/placeholder.svg"}
                    alt={email.sender.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs sm:text-sm font-medium text-gray-600">
                    {email.sender.initials}
                  </span>
                )}
              </div>
              
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {email.sender.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {email.sender.role}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 flex-shrink-0">
                    {email.time}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 truncate">
                  {email.subject}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

