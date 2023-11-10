"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsArrowRight } from 'react-icons/bs'
import { FaUserGraduate } from 'react-icons/fa'
import { GiFootTrip } from 'react-icons/gi'
import { MdEmojiTransportation, MdFastfood } from 'react-icons/md'



const About = () => {
  return (
    <div>
       <Header />
        {/* HERO */}
       <section className='w-[100%] h-auto bg-gradient-to-br from-cyan-500 to-blue-600 text-white'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex justify-between'>
          <div className='w-[50%]  flex justify-center items-start flex-col pl-[2.5rem]'>
            <p className='tracking-[10px] uppercase'>The School Website</p>
            <h1 className='font-bold text-[3rem] py-2'>Your Future Starts Here</h1>
            <p className='w-[80%] pb-4'>
              “If it is important to the child, it’s important to us”. In a nutshell, 
              this, more than anything else determines the path along which our educational 
              aim and philosophy, is based. 
            </p>
            <button className='group px-5 py-4 flex items-center justify-center gap-2 rounded-lg text-white bg-gradient-to-br from-cyan-800 to-blue-900 hover:from-cyan-900 hover:to-blue-950'>
              ENROL NOW <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className='rounded-xl overflow-hidden aspect-[3/4]'>
              <img src='./assets/img/services/class.jpg' className='object-cover' alt='' />
            </div>
          </div>
        </div>
       </section>
       {/*  */}
       <section className='w-[100%] h-auto bg-white'>
          <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex items-start justify-center gap-4'>
            <div className='flex-1'>
              <hr className='ml-[1.5rem] border-t-8 border-cyan-800 w-[20%]' />
              <h1 className='pl-[1.5rem] font-bold text-[4rem] py-[2rem] leading-tight'>Why Choose Us?</h1>
            </div>
            <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <FaUserGraduate className='text-[3rem] text-cyan-800' />
                <h2 className='font-semibold text-4xl'>World Class Curriculum</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
            <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <GiFootTrip className='text-[3rem] text-cyan-800' />
                <h2 className='font-semibold text-4xl'>International Trips</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
          </div>
          {/*  */}
          <div className='mx-auto max-w-7xl h-[100%] pb-[5rem]  flex items-start justify-center gap-4'>
            <div className='flex-1'>
              {/* Left Empty */}
            </div>
            <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <MdEmojiTransportation className='text-[3rem] text-cyan-800' />
                <h2 className='font-semibold text-4xl'>Transport Provided</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
            <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <MdFastfood className='text-[3rem] text-cyan-800' />
                <h2 className='font-semibold text-4xl'>Food Provided</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
          </div>
       </section>
       <section className='w-[100%] h-auto bg-gradient-to-br from-cyan-800 to-blue-900 text-white'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex flex-col gap-3 items-start justify-center'>
          <h4 className='w-[80%] mx-auto text-2xl pb-3'>Send us an email or your phone number will contact.</h4>
          <div className='w-[80%] mx-auto flex gap-6'>
            <input type='text' className='w-[80%] px-5 py-4 text-2xl rounded-xl border border-white bg-transparent outline-none' />
            <button className='bg-slate-50 text-black px-8 py-3 text-xl rounded-xl'>Submit</button>
          </div>
        </div>
       </section>
       {/* HERO */}
       <section className='w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex justify-between'>
          {/* IMAGE */}
          <div className='w-[50%] flex justify-center items-center'>
            <div className='rounded-xl overflow-hidden aspect-[3/4]'>
              <img src='./assets/img/services/class.jpg' className='object-cover' alt='' />
            </div>
          </div>
          {/* TEXT */}
          <div className='w-[50%]  flex justify-center items-start flex-col pl-[2.5rem]'>
            <p className='tracking-[10px] uppercase'>The School Website</p>
            <h1 className='font-bold text-[3rem] py-2'>Your Future Starts Here</h1>
            <p className='w-[80%] pb-4'>
              “If it is important to the child, it’s important to us”. In a nutshell, 
              this, more than anything else determines the path along which our educational 
              aim and philosophy, is based. 
            </p>
            <button className='group px-5 py-4 flex items-center justify-center gap-2 rounded-lg text-white bg-gradient-to-br from-cyan-800 to-blue-900 hover:from-cyan-900 hover:to-blue-950'>
              ENROL NOW <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
          </div>
        </div>
       </section>

       <Footer />
    </div>
  )
}

export default About