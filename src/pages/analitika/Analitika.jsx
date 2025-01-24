

import SocialMedia from '../../Components/socialMedia/SocialMedia'

import Analytics from '../../Components/analitika/Analitika'
import Email from '../../Components/email/Email'
import Finance from '../../Components/moliya/Finance'
// import Finance from '../../Components/finance/Finance'

export default function Analitika() {
  return (
    <div className="p-4 max-w-full bg-gray-100 overflow-y-auto h-screen ">
    <h1 className="text-3xl font-bold mb-4 mt-4 text-gray-800">📊 Analitika Paneli</h1>
    <Analytics/>
    <h1 className="text-xl font-bold  text-gray-800 mb-4 mt-6 ">Ijtimoiy tarmoqlar</h1>
    <SocialMedia/>
    <div className="flex flex-col md:flex-row mt-8 gap-6">
    <Email/>
     <Finance/>
    </div>
  </div>
  )
}
