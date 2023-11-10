"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import Hero from './components/Hero'
import EnrolNow from '@/components/EnrolNow'
import SubmitContact from '@/components/SubmitContact'



const Activities = () => {
  return (
    <div>
      <Header />
      {/* HERO */}
      <Hero />
      {/* MAIN */}
      <section className='w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem]'>
          <h6 className='font-black text-[3rem] pb-4'>Upcoming Events & Activities</h6>
          <div className='px-3 py-2 shadow-lg border border-slate-200'>
            <input type='text' className='w-[75%] text-lg outline-none border-l border-y border-slate-200 py-4 px-5' />
            <button className='text-lg py-4 px-10 text-white bg-gradient-to-br from-cyan-700 to-blue-800 hover:from-cyan-800 hover:to-blue-900'>
              Search</button>
          </div>
          <section className='bg-white px-4 pb-12 shadow-lg'>
            <div className='pt-6 pb-4 '>
              <h6 className='font-bold text-3xl'>Latest Past Events</h6>
            </div>
            <section className='border-t border-slate-200 pt-6'>
              {/*  */}
              <div className='flex justify-start items-start gap-8 pb-4'>
                <div className='flex flex-col justify-center items-center bg-gradient-to-br from-cyan-700 to-blue-800 text-white p-3'>
                  <div className='text-sm tracking-[10px] leading-none pb-4'>
                    NOV</div>
                  <div className='font-black text-[3rem] leading-none tracking-[4px] pb-4'>
                    23</div>
                  <div className=' tracking-[7px] leading-none'>
                    2023</div>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <p className='pb-2 font-bold text-sm'>March 22</p>
                  <div className='pb-2 font-bold text-[3rem] text-cyan-700'>U6 Contact Period</div>
                  <p className=''>U6 Contact Period: 7.05am (Hall)</p>
                </div>
              </div>
              {/*  */}
              <div className='flex justify-start items-start gap-8'>
                <div className='flex flex-col justify-center items-center bg-gradient-to-br from-cyan-700 to-blue-800 text-white p-3'>
                  <div className='text-sm tracking-[10px] leading-none pb-4'>
                    NOV</div>
                  <div className='font-black text-[3rem] leading-none tracking-[4px] pb-4'>
                    23</div>
                  <div className=' tracking-[7px] leading-none'>
                    2023</div>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <p className='pb-2 font-bold text-sm'>March 22</p>
                  <div className='pb-2 font-bold text-[3rem] text-cyan-700'>U6 Contact Period</div>
                  <p className=''>U6 Contact Period: 7.05am (Hall)</p>
                </div>
              </div>
            </section>
          </section>
        </div> 
      </section>
    
      <SubmitContact />
      <EnrolNow />
    <Footer />
 </div>
  )
}

export default Activities