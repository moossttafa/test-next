import { Navigation, Pagination } from 'swiper';  
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/Image"
// import {Image} from "../assets/2.PNG"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  

const About = () => {
  return (
    <div className='container'> 
    <h1>About</h1>  
    <Image src="/3.PNG" 
       alt="Picture of the author"
      width={500}
      height={500}
    />
    <button type="button" className="btn btn-primary">Primary</button>

    <div className='row'>
      <div className='col-6'>
          <Swiper
          navigation={true}
          modules={[Navigation , Pagination]} 
          className="mySwiper"   
          spaceBetween={50}
          slidesPerView={1} 
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')} 
        >
          <SwiperSlide> 
            <div className='img-wrapper'>
              <img src="3.PNG" alt="fs" />  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper'>
              <img src="2.PNG" alt="fs" />  
            </div>
          </SwiperSlide> 
        </Swiper>
      </div>
    </div>

  </div>
  )
}

export default About