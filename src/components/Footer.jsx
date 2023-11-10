"use client"
import Link from 'next/link'
import { ImLocation } from 'react-icons/im'
import { AiOutlineMail, AiFillFacebook, AiFillYoutube, AiFillInstagram, AiFillPhone } from 'react-icons/ai'


const Footer = () => {
  return (
    <div>
         {/* FOOTER */}
      <section className='w-[100%] h-auto bg-gradient-to-br from-cyan-800 to-blue-900 py-[5rem] text-white'>
        <div className='mx-auto max-w-7xl '>
          <div className='flex justify-between items-start'>
            <div>
              <h2 className='uppercase font-bold tracking-[3px] text-2xl'>The School Website</h2>
              <ul className='py-3'>
                <li className='flex items-center justify-start gap-1 pb-2'>
                  <AiFillPhone />+263 782 210021</li>
                <li className='flex items-center justify-start gap-1 pb-2'>
                  <ImLocation />04 - 85 Avenue, Mabelreign, Harare</li>  
                <li className='flex items-center justify-start gap-1 pb-2'>
                  <AiOutlineMail />schoolwebsite@gmail.com</li>  
              </ul>
            </div>
            <div>
            <ul className='flex items-start justify-end gap-4'>
                <li>
                  <Link href='/'>
                    <AiFillFacebook className='text-2xl ease-in-out duration-300 hover:scale-[110%] text-slate-100 hover:text-white' />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillYoutube className='text-2xl ease-in-out duration-300 hover:scale-[110%] text-slate-100 hover:text-white' />
                  </Link> 
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram className='text-2xl ease-in-out duration-300 hover:scale-[110%] text-slate-100 hover:text-white' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTNOTE */}
      <section className='w-[100%] h-auto bg-gradient-to-br from-cyan-950 to-blue-950 text-sm text-white'>
          <div className='mx-auto max-w-7xl flex justify-between items-center py-2'>
            <ul className='flex justify-start items-center gap-3'>
              <li className=''><Link href='#'>Contact Us</Link></li>
              <li><Link href='#'>About Us</Link></li>
              <li><Link href='#'>Employment Us</Link></li>
              <li><Link href='#'>Our Admissions</Link></li>
            </ul>
            <div>
              <p className='italic'>Made by <Link className='underline text-slate-100' href=''>Freelance Designers</Link></p>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Footer