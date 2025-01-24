
import Person from '../../../public/analitika-1.svg'
import Plus from '../../../public/analitika-2.svg'
import Student from '../../../public/student.svg'

function Analitika() {
  const cards = [
    { title: 'Talabalar', count: 285 },
    { title: 'Mentorlar', count: 285 },
    { title: 'Filialar', count: 285 },
  ]

  return (
    <section className='flex flex-wrap justify-center gap-4 sm:justify-between'>
      {cards.map((card, index) => (
        <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[350px] h-[180px] rounded-lg bg-[#F6FFED] p-4 mb-4 sm:mb-0">
          <div className='flex items-center justify-between'>
            <span className='flex items-center gap-2'>
              <img src={Person || "/placeholder.svg"} alt=""  />
              <h2 className='text-lg sm:text-xl font-bold text-[#253E5F]'>{card.title}</h2>
            </span>
            <img src={Plus || "/placeholder.svg"} alt=""  />
          </div>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl sm:text-4xl text-[#253E5F]'>
              {card.count}
            </h1>
            <img src={Student || "/placeholder.svg"} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Analitika;

