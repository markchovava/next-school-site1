"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';


const page = () => {
  return (
    <section className='w-[100%] h-[100vh] bg-slate-800 text-white'>
        <div className='w-[80vw] h-[40rem] mx-auto py-[5rem] flex justify-center items-center'>
            <Swiper
                rewind={true}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                modules={[Pagination, Navigation]}
                pagination={{clickable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
                className='rounded-lg'>
                <SwiperSlide >Slide 1</SwiperSlide>
                <SwiperSlide >Slide 2</SwiperSlide>
                <SwiperSlide >Slide 3</SwiperSlide>
                <SwiperSlide >Slide 4</SwiperSlide>
                <SwiperSlide >Slide 5</SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default page