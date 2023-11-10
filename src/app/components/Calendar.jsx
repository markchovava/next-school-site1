"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Calendar = () => {
  return (
    <section className='w-[100%] h-auto bg-slate-50 pt-[1rem] pb-[5rem]'>
    <div className='mx-auto max-w-7xl'>
      <section className='flex items-center justify-start'>
        <hr className='border-slate-300 w-[20%]' />
        <p className='ml-3 text-cyan-900'>"Education is the key to success." <br />
          <i className='text-sm'>Nelson Mandela</i></p>
      </section>
    </div>
    <h1 className='text-center font-black text-[3.5rem]'>WHAT'S HAPPENING</h1>
    <div className='flex justify-center'>
      <hr className='border-t-8 border-cyan-800 w-[20%] mt-4 mb-6' />
    </div>
  <div className='mx-auto max-w-7xl bg-slate-100 px-[4rem] py-[4rem] flex justify-center gap-8'>
    {/* CARD */}
    <div className='w-[30%] h-[25rem] border border-white'>
        <div className='w-[100%] h-[50%] bg-cyan-800 text-white flex flex-col items-center justify-center'>
            <h3 className='tracking-[10px]'>FRI-NOV</h3>
            <h1 className='font-black text-[5rem]'>01</h1>
        </div>
        <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
            <h3 className='font-black text-3xl'>Exhibition Day</h3>
            <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
            <p className='uppercase font-semibold'> All Day</p>
        </div>
    </div>
    {/* CARD */}
    <div className='w-[30%] h-[25rem] border border-white'>
        <div className='w-[100%] h-[50%] bg-cyan-800 text-white flex flex-col items-center justify-center'>
            <h3 className='tracking-[10px]'>FRI-NOV</h3>
            <h1 className='font-black text-[5rem]'>01</h1>
        </div>
        <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
            <h3 className='font-black text-3xl'>Exhibition Day</h3>
            <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
            <p className='uppercase font-semibold'> All Day</p>
        </div>
    </div>
    {/* CARD */}
    <div className='w-[30%] h-[25rem] border border-white'>
        <div className='w-[100%] h-[50%] bg-cyan-800 text-white flex flex-col items-center justify-center'>
            <h3 className='tracking-[10px]'>FRI-NOV</h3>
            <h1 className='font-black text-[5rem]'>01</h1>
        </div>
        <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
            <h3 className='font-black text-3xl'>Exhibition Day</h3>
            <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
            <p className='uppercase font-semibold'> All Day</p>
        </div>
    </div>
  </div>
</section>
  )
}

export default Calendar