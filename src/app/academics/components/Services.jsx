"use client"



const Services = () => {

  return (
    <div>
      {/* SERVICES */}
      <section className='w-[100%] h-auto bg-slate-50'>
        <div className='max-w-7xl h-[100%] mx-auto py-[5rem]'>
          <h1 className='text-center font-black text-[3.5rem] leading-tight'>OUR CURRICULA</h1>
          <div className='flex justify-center pb-8'>
            <hr className='border-t-8 border-cyan-800 w-[20%] mt-4 mb-6' />
          </div>
          <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2'>
            {/* COL */}
            <div 
             className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/class.jpg')`}}>
              <div className='group-hover:opacity-0 transition-all duration-300 w-[100%] flex items-center justify-center py-4 bg-slate-900/100 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Academics</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Academics</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white py-3 px-4 hover:bg-white hover:text-black'>Learn More</button>
                </div>
            </div >
            {/* COL */}
            <div className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/boy.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Sports</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Sports</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white py-3 px-4 hover:bg-white hover:text-black'>Learn More</button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/man.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Employment</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Employment</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white py-3 px-4 hover:bg-white hover:text-black'>Learn More</button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/trip.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Activities</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Activities</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white hover:bg-white hover:text-black py-3 px-4'>Learn More</button>
                </div>
            </div>
            {/* COL */}
            <div 
             className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/class.jpg')`}}>
              <div className='group-hover:opacity-0 transition-all duration-300 w-[100%] flex items-center justify-center py-4 bg-slate-900/100 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Academics</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Academics</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white py-3 px-4 hover:bg-white hover:text-black'>Learn More</button>
                </div>
            </div >
            {/* COL */}
            <div className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/boy.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Sports</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Sports</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white py-3 px-4 hover:bg-white hover:text-black'>Learn More</button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/man.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Employment</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Employment</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white py-3 px-4 hover:bg-white hover:text-black'>Learn More</button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[25rem] border bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/services/trip.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Activities</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Activities</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>We offer Cambridge and Zimsec <br /> tuitions.</p>
                    <button className='text-xl border border-white hover:bg-white hover:text-black py-3 px-4'>Learn More</button>
                </div>
            </div>
            
          </section>
        </div>
      </section>
    </div>
  )
}

export default Services