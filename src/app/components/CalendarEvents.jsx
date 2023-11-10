"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';


const CalendarEvents = () => {
  return (
    <section className='mx-auto max-w-7xl bg-slate-100 px-[5rem] py-[4rem] flex justify-center items-center'>
       
            <Swiper
                rewind={true}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                modules={[Pagination, Navigation]}
                pagination={{clickable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
                className='rounded-lg'>
                <SwiperSlide>
                  <div className='w-[100%] h-[25rem] rounded-xl border overflow-hidden border-white drop-shadow-lg'>
                      <div className='w-[100%] h-[50%] bg-gradient-to-br from-cyan-700 to-blue-900 text-white flex flex-col items-center justify-center'>
                          <h3 className='tracking-[10px]'>FRI-NOV</h3>
                          <h1 className='font-black text-[5rem]'>01</h1>
                      </div>
                      <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
                          <h3 className='font-black text-3xl'>Exhibition Day</h3>
                          <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
                          <p className='uppercase font-semibold'> All Day</p>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='w-[100%] h-[25rem] rounded-xl border overflow-hidden border-white drop-shadow-lg'>
                      <div className='w-[100%] h-[50%] bg-gradient-to-br from-cyan-700 to-blue-900 text-white flex flex-col items-center justify-center'>
                          <h3 className='tracking-[10px]'>FRI-NOV</h3>
                          <h1 className='font-black text-[5rem]'>02</h1>
                      </div>
                      <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
                          <h3 className='font-black text-3xl'>Exhibition Day</h3>
                          <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
                          <p className='uppercase font-semibold'> All Day</p>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='w-[100%] h-[25rem] rounded-xl border overflow-hidden border-white drop-shadow-lg'>
                      <div className='w-[100%] h-[50%] bg-gradient-to-br from-cyan-700 to-blue-900 text-white flex flex-col items-center justify-center'>
                          <h3 className='tracking-[10px]'>FRI-NOV</h3>
                          <h1 className='font-black text-[5rem]'>03</h1>
                      </div>
                      <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
                          <h3 className='font-black text-3xl'>Exhibition Day</h3>
                          <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
                          <p className='uppercase font-semibold'> All Day</p>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='w-[100%] h-[25rem] rounded-xl border overflow-hidden border-white drop-shadow-lg'>
                      <div className='w-[100%] h-[50%] bg-gradient-to-br from-cyan-700 to-blue-900 text-white flex flex-col items-center justify-center'>
                          <h3 className='tracking-[10px]'>FRI-NOV</h3>
                          <h1 className='font-black text-[5rem]'>04</h1>
                      </div>
                      <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
                          <h3 className='font-black text-3xl'>Exhibition Day</h3>
                          <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
                          <p className='uppercase font-semibold'> All Day</p>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='w-[100%] h-[25rem] rounded-xl border overflow-hidden border-white drop-shadow-lg'>
                      <div className='w-[100%] h-[50%] bg-gradient-to-br from-cyan-700 to-blue-900 text-white flex flex-col items-center justify-center'>
                          <h3 className='tracking-[10px]'>FRI-NOV</h3>
                          <h1 className='font-black text-[5rem]'>05</h1>
                      </div>
                      <div className='w-[100%] h-[50%] bg-white shadow-lg flex flex-col items-center justify-start pt-8'>
                          <h3 className='font-black text-3xl'>Exhibition Day</h3>
                          <hr className='border-t-8 border-cyan-800 w-[20%] mt-2 mb-4'/>
                          <p className='uppercase font-semibold'> All Day</p>
                      </div>
                  </div>
                </SwiperSlide>
                
            </Swiper>
       
    </section>
  )
}

export default CalendarEvents