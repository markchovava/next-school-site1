"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';
import CalendarEvents from './CalendarEvents';

const Calendar = () => {
  return (
    <section className='w-[100%] h-auto bg-slate-50 pt-[1rem] pb-[5rem]'>
    {/* TOP STICKER */}
    <div className='mx-auto max-w-7xl'>
      <section className='flex items-center justify-start'>
        <hr className='border-slate-300 w-[20%]' />
        <p className='ml-3 text-cyan-900'>"Education is the key to success." <br />
          <i className='text-sm'>Nelson Mandela</i></p>
      </section>
    </div>
    {/* HEADING */}
    <h1 className='text-center font-black text-[3.5rem]'>WHAT'S HAPPENING</h1>
    <div className='flex justify-center'>
      <hr className='border-t-8 border-cyan-800 w-[20%] mt-4 mb-6' />
    </div>
    
    <CalendarEvents />

</section>
  )
}

export default Calendar