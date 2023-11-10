"use client"
import { BsArrowRight } from 'react-icons/bs'

const EnrolNow = () => {
  return (
    <div>
    {/* EMROL NOW */}
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
    </div>
  )
}

export default EnrolNow