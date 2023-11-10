"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsArrowRight, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BiCaretRight } from 'react-icons/bi'
import SubmitContact from '@/components/SubmitContact'
import EnrolNow from '@/components/EnrolNow'





const Employment = () => {
  return (
    <div>
       <Header />
        {/* HERO */}
       <section className='w-[100%] h-auto bg-gradient-to-br from-green-500 to-cyan-600 text-white'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex justify-between'>
          <div className='w-[50%] flex justify-center items-start flex-col pl-[2.5rem]'>
            <p className='tracking-[10px] uppercase'>The School Website</p>
            <h1 className='font-bold text-[3rem] py-2'>Your Future Starts Here</h1>
            <p className='w-[80%] pb-4'>
              “If it is important to the child, it’s important to us”. In a nutshell, 
              this, more than anything else determines the path along which our educational 
              aim and philosophy, is based. 
            </p>
            <button className='group px-5 py-4 flex items-center justify-center gap-2 rounded-lg text-white bg-gradient-to-br from-cyan-700 to-blue-800 hover:from-cyan-800 hover:to-blue-900 hover:drop-shadow-lg'>
              ENROL NOW <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className='rounded-xl overflow-hidden aspect-[3/4]'>
              <img src='./assets/img/services/man.jpg' className='object-cover' alt='' />
            </div>
          </div>
        </div>
       </section>

       {/*  */}
       <section className='w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto max-w-7xl pt-[4rem] pb-[5rem] flex items-start justify-center gap-6'>
          <div className='flex-1'> 
            <hr className='border-t-8 border-cyan-800 w-[20%] pb-4' />
            <h1 className='font-black text-[3rem]'>Employment</h1>
          </div>
          <div className='flex-2'>
            <p className='pb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis qui asperiores modi eos laboriosam nostrum sed 
              fugiat aspernatur facilis eum.  Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Corporis qui asperiores modi 
              eos laboriosam nostrum sed  fugiat aspernatur facilis eum. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis qui asperiores modi eos laboriosam nostrum sed 
              fugiat aspernatur facilis eum. Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Corporis qui asperiores modi 
              eos laboriosam nostrum sed fugiat aspernatur facilis eum.
            </p>
            <h4 className='font-black text-2xl pb-2'>Heading</h4>
            <p className='pb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis qui asperiores modi eos laboriosam nostrum sed 
              fugiat aspernatur facilis eum.  Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Corporis qui asperiores modi 
              eos laboriosam nostrum sed  fugiat aspernatur facilis eum. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis qui asperiores modi eos laboriosam nostrum sed 
              fugiat aspernatur facilis eum. Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Corporis qui asperiores modi 
              eos laboriosam nostrum sed fugiat aspernatur facilis eum.
            </p>
            <h4 className='font-black text-2xl pb-2'>Heading</h4>
            <p className='pb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis qui asperiores modi eos laboriosam nostrum sed 
              fugiat aspernatur facilis eum.  Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Corporis qui asperiores modi 
              eos laboriosam nostrum sed  fugiat aspernatur facilis eum. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis qui asperiores modi eos laboriosam nostrum sed 
              fugiat aspernatur facilis eum. Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Corporis qui asperiores modi 
              eos laboriosam nostrum sed fugiat aspernatur facilis eum.
            </p>
            <h5 className='text-xl font-bold pb-2'>Available job</h5>
            <ul className='pb-[2rem] pl-6'>
              <li className='flex items-center justify-start gap-3 pb-1'>
                <BiCaretRight />Form 1 Teacher</li>
              <li className='flex items-center justify-start gap-3 pb-1'>
                <BiCaretRight />IT Technician</li>
              <li className='flex items-center justify-start gap-3 pb-1'>
                <BiCaretRight />Form 1 Teacher</li>
              <li className='flex items-center justify-start gap-3 pb-1'>
                <BiCaretRight />IT Technician</li>
            </ul>
            <button className='w-[100%] py-4 rounded-lg text-white bg-gradient-to-br from-cyan-700 to-blue-800 hover:from-cyan-800 hover:to-blue-900'>Apply Now</button>
          </div>
       
        </div>
       </section>

      <SubmitContact />
      <EnrolNow />
      <Footer />
    </div>
  )
}

export default Employment