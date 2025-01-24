import { Instagram, MoreHorizontal, TrendingUp } from 'lucide-react'



export function SocialMediaCard({ platform, followers, growth, engagement }) {
  return (
    <div className="w-full rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Instagram className="h-5 w-5 text-[#0095F6]" />
          <span className="text-sm font-medium text-gray-600">{platform}</span>
        </div>
        <button className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900 sm:text-3xl">{followers}</span>
        <div className="flex items-center gap-1 text-sm text-green-600">
          <TrendingUp className="h-3 w-3" />
          <span>{growth}</span>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
        <span>{engagement.first}</span>
        <span>×</span>
        <span>{engagement.second}</span>
      </div>
    </div>
  )
}

