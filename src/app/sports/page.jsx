"use client"
import EnrolNow from '@/components/EnrolNow'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SubmitContact from '@/components/SubmitContact'
import Services from './components/Services'


const page = () => {
  return (
    <div>
        <Header />
        <section className='w-[100%] h-auto bg-gradient-to-br from-cyan-500 to-blue-600 text-white'>
            <div className='mx-auto max-w-7xl py-[5rem] flex items-center justify-center'>
                <h1 className='font-black text-[4rem] drop-shadow-xl'>Sports</h1>
            </div>
        </section>
        <Services />
        <SubmitContact />
        <EnrolNow />
        <Footer />
    </div>
  )
}

export default page