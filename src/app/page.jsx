"use client"
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

import {AiFillStar } from 'react-icons/ai'
import Services from './components/Services';
import Calendar from './components/Calendar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SubmitContact from '@/components/SubmitContact';
import EnrolNow from '@/components/EnrolNow';


export default function Home() {
  return (
    <div>
      <Header />
      {/* HERO */}
      <section style={{backgroundImage: `url('./assets/img/students.jpg')`}} 
        className='w-[100%] h-[560px] relative bg-top'>
          <div className='w-[100%] h-[100%] bg-gradient-to-r from-cyan-950 to-transparent'>
            <div className='mx-auto max-w-7xl h-[100%] flex items-start justify-center flex-col'>
              <h6 className='tracking-[10px] uppercase text-white mb-0 pb-1 leading-normal'>The School Website</h6>
              <h2 className='text-[5rem] text-white mb-8'>
                Welcome to 
                <span className='font-bold leading-[4rem]'>
                  <Typewriter
                    options={{
                      strings: ['home of Excellence', 'access to Success'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h2>
              <button className='flex items-center justify-center  text-lg  py-6 px-10 text-white hover:text-black rounded-lg border border-slate-50 transition ease-in-out duration-300 hover:border-black hover:bg-white'>
                Enrol today</button>
            </div>
          </div>
      </section>
      {/* VALUES */}
      <section className='w-[100%] h-auto bg-slate-50'>
        <div className='max-w-7xl h-[100%] mx-auto py-[5rem]'>
          <section className='flex items-center justify-end'>
            <p className='text-cyan-900'>"Education is the key to success." <br />
            <i className='text-sm'>Nelson Mandela</i></p>
            <hr className='border-slate-300 w-[20%]' />
          </section>
          <section className='flex flex-col items-center justify-center pt-6'>
            <h2 className='p-0 m-0 w-[80%] text-center font-black uppercase lg:text-[3rem] text-[2rem]'>
              AN Excellent
              <span className='ml-4 text-cyan-900'>LEARNING ENVIRONMENT.</span>
            </h2>
            <hr className='border-t-8 border-cyan-800 w-[20%] mt-6 mb-8' />
            <div className='w-[70%] lg:flex lg:items-center lg:justify-center lg:gap-6 font-semibold text-3xl pb-4'>
              <span className='flex items-center'> 
                <AiFillStar className='mr-3  text-cyan-800' />
                  Inspires Curiosity</span>
              <span className='flex items-center'> 
                <AiFillStar className='mr-3  text-cyan-800' /> 
                  Success oriented </span>
              <span className='flex items-center'> 
                <AiFillStar className='mr-3  text-cyan-800' /> 
                  Innovative </span>
              
            </div>
          </section>
        </div>
      </section>
      <Services />
      <Calendar />
      <SubmitContact />
      <EnrolNow />
    <Footer />

    </div>
  )
}
