import { SocialMediaCard } from './SocialMediaCard'

const socialMediaData = [
  {
    platform: 'Instagram',
    followers: '16k',
    growth: '+22%',
    engagement: {
      first: '173 Hug',
      second: '24 Hug'
    }
  },
  {
    platform: 'Instagram',
    followers: '32k',
    growth: '+15%',
    engagement: {
      first: '245 Hug',
      second: '35 Hug'
    }
  },
  {
    platform: 'Instagram',
    followers: '28k',
    growth: '+18%',
    engagement: {
      first: '198 Hug',
      second: '42 Hug'
    }
  },
  {
    platform: 'Instagram',
    followers: '21k',
    growth: '+25%',
    engagement: {
      first: '156 Hug',
      second: '31 Hug'
    }
  }
]

export default function SocialMedia() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socialMediaData.map((data, index) => (
          <SocialMediaCard key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

