"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import { ImLocation } from 'react-icons/im'
import { AiOutlineMail, AiFillFacebook, AiFillYoutube, AiFillInstagram, AiFillPhone } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import Hero from './components/Hero'



const Contact = () => {
  return (
    <div>
      <Header />
      {/* HERO */}
      <Hero />
      {/* MAIN */}
      <section className='w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex justify-start gap-6'>
          <div className='flex-1 bg-white drop-shadow-lg py-8 px-6'>
            <h1 className='font-black text-[3rem] pb-2'>Our Contact Details</h1>
            <hr className='border-t-8 border-cyan-700 w-[20%] pb-4' />
            <ul className='pl-[2rem] py-4 text-lg'>
              <li className='flex items-center justify-start gap-2 pb-3'>
                <AiFillPhone />+263 782 210021</li>
              <li className='flex items-center justify-start gap-2 pb-3'>
                <ImLocation />04 - 85 Avenue, Mabelreign, Harare</li>  
              <li className='flex items-center justify-start gap-2 pb-3'>
                <AiOutlineMail />schoolwebsite@gmail.com</li>  
            </ul>
          </div>
          <div className='flex-1 bg-white drop-shadow-lg py-8 px-6'>
            <h1 className='font-black text-[3rem] pb-2'>Write to us.</h1>
            <hr className='border-t-8 border-cyan-700 w-[20%] pb-4' />
            <div className='flex flex-col gap-1 justify-center items-start pb-4'>
              <label className='font-bold'>Full Name:</label>
              <input type='text' className='w-[100%] outline-none border border-slate-300 px-4 py-3 rounded-md' />
            </div>
            <div className='pb-4'>
              <label className='font-bold'>Email:</label>
              <input type='text' className='w-[100%] outline-none border border-slate-300 px-4 py-3 rounded-md' />
            </div>
            <div className='pb-4'>
              <label className='font-bold'>Your Message:</label>
              <textarea placeholder='Write your Message here...' className='w-[100%] outline-none border border-slate-300 px-4 py-3 rounded-md'></textarea>
            </div>
            <div className='pb-4'>
            <button className='group px-5 py-4 flex items-center justify-center gap-2 rounded-lg text-white bg-gradient-to-br from-cyan-700 to-blue-800 hover:from-cyan-800 hover:to-blue-900'>
              Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
          </div>
        </div> 
      </section>
      <section className='w-[100%] h-[460px] bg-slate-300 flex items-center justify-center'>
        <p>Google Maps</p>
      </section>
    <Footer />
 </div>
  )
}

export default Contact