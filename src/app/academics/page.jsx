"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsArrowRight } from 'react-icons/bs'
import Services from './components/Services'
import SubmitContact from '@/components/SubmitContact'
import EnrolNow from '@/components/EnrolNow'



const Academics = () => {
  return (
    <div>
       <Header />
        {/* HERO */}
       <section className='w-[100%] h-auto bg-gradient-to-br from-green-500 to-cyan-600 text-white'>
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
       <Services />
       <SubmitContact />
       
       <EnrolNow />

       <Footer />
    </div>
  )
}

export default Academics