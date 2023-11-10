"use client"
import Link from 'next/link'
import { ImLocation } from 'react-icons/im'
import { AiOutlineClose, AiFillFacebook, AiFillYoutube, AiFillInstagram, AiFillPhone } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsChevronDown, BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='w-[100%] h-auto drop-shadow-lg'>
    {/* TOP INFO */}
    <section className='w-[100%] lg:h-[30px] h-auto bg-gradient-to-br from-cyan-700 to-blue-900 text-white'>
      <div className='max-w-7xl mx-auto h-[100%] lg:p-1 p-4 flex items-center justify-between'>
        {/* CONTACT DETAILS */}  
        <ul className=' h-[100%] lg:flex justify-start items-center gap-4'>
          <li className='flex items-center justify-start gap-1'>
            <AiFillPhone />+263 782 210021</li>
          <li className='flex items-center justify-start gap-1'>
            <ImLocation />04 -85 Avenue, Mabelreign, Harare</li>  
        </ul>
        <section className='flex items-center justify-start gap-3'>
          <Link href='/'><AiFillFacebook className='text-md ease-in-out duration-300 hover:scale-[110%] text-slate-100 hover:text-white' /></Link>
          <Link href='/'><AiFillYoutube className='text-md ease-in-out duration-300 hover:scale-[110%] text-slate-100 hover:text-white' /></Link>
          <Link href='/'><AiFillInstagram className='text-md ease-in-out duration-300 hover:scale-[110%] text-slate-100 hover:text-white' /></Link>
        </section>
      </div>
    </section>
    {/* NAVIGATION */}
    <section className='h-[100px] shadow-lg w-[100%]'>
      <section className='max-w-7xl h-[100%] mx-auto flex items-center justify-between'>
        <div className='lg:px-2 px-4'>
          <h2 className='uppercase text-xl font-semibold'>The School</h2>
        </div>
        <div>

          <section className='relative lg:hidden px-4'>
            <div className=''>
              <button onClick={() => setIsOpen(!isOpen)} className='text-xl'>
                { isOpen == false 
                  ? <GiHamburgerMenu /> 
                  : <AiOutlineClose /> }
              </button>
            </div>
          </section>

          <section className='hidden lg:flex justify-start gap-4 lg:px-1 px-4'>
            <ul className='flex items-center justify-start gap-5'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/academics'>Academics</Link></li>
              <li><Link href='/employment' className='flex justify-center gap-2 items-center'>
                Employment <BsChevronDown /></Link></li>
              <li><Link href='/sports'>Sports</Link></li>
              <li><Link href='/activities' className='flex justify-center gap-2 items-center'>
                Activities & Events <BsChevronDown /></Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
            </ul>

            <button className='group px-5 py-3 flex items-center justify-center gap-2 rounded-full text-white bg-gradient-to-br from-cyan-700 to-blue-700 hover:from-cyan-800 hover:to-blue-900'>
              Admission <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
            </button>
  
          </section>
        </div>
      </section>
    </section>

    {/* RESPONSIVE NAVIGATION */}
    { isOpen == true ? 
      <section className='w-[100%] h-auto px-4'>
        <ul className='flex flex-col items-center justify-start gap-5 py-8'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About Us</Link></li>
          <li><Link href='/academics'>Academics</Link></li>
          <li><Link href='/employment' className='flex justify-center gap-2 items-center'>
            Employment <BsChevronDown /></Link></li>
          <li><Link href='/sports'>Sports</Link></li>
          <li><Link href='/activities' className='flex justify-center gap-2 items-center'>
            Activities & Events <BsChevronDown /></Link></li>
          <li><Link href='/contact'>Contact Us</Link></li>
        </ul>

        <button className='mx-auto mb-8 group px-5 py-3 flex items-center justify-center gap-2 rounded-full text-white bg-gradient-to-br from-cyan-700 to-blue-700 hover:from-cyan-800 hover:to-blue-900'>
          Admission <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
        </button>

      </section>
    : ''}
    
    </div>
  )
}

export default Header