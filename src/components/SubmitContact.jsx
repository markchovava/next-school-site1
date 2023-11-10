"use client"
import { BsArrowRight } from 'react-icons/bs'


const SubmitContact = () => {
  return (
    <div>
        {/* SUBMIT CONTACT */}
       <section className='w-[100%] h-auto bg-gradient-to-br from-cyan-800 to-blue-900 text-white'>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex flex-col gap-3 items-start justify-center'>
          <h4 className='w-[80%] mx-auto text-2xl pb-3'>Send us an email or your phone number will contact.</h4>
          <div className='w-[80%] mx-auto flex gap-6'>
            <input type='text' className='w-[80%] px-5 py-4 text-2xl rounded-xl border border-white bg-slate-100/20 outline-none' />
            <button className='group px-5 py-4 flex items-center justify-center gap-2 rounded-lg text-black hover:text-white bg-gradient-to-br from-white to-cyan-200 hover:from-cyan-200 hover:to-blue-700'>
              Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
          </div>
        </div>
        {/* APPLY NOW */}
       </section>
    </div>
  )
}

export default SubmitContact