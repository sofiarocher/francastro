import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import "../styles/Reels.css"
import Reel1 from "../assets/reel1.mp4"
import Reel2 from "../assets/reel2.mp4"
import Reel3 from "../assets/reel3.mp4"

function Reels()  {
    return (
        <div className="reels_container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            initialSlide={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 6,
            }} 
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
                <video controls autoPlay muted loop>
                  <source src={Reel1} />
                </video>
                <p className='views-p'><a target='_blank' rel='noreferrer' href="https://www.instagram.com/reel/Cyw8Q42tEQH/">1.2M de vistas</a></p>
            </SwiperSlide>
            <SwiperSlide>
                  <video controls autoPlay muted loop>
                  <source src={Reel2} />
                </video>
              <p className='views-p'><a target='_blank' rel='noreferrer' href="https://www.instagram.com/reel/CzSQuWatV-z/">131K de vistas</a></p>
            </SwiperSlide>
            <SwiperSlide>
                <video controls autoPlay muted loop>
                  <source src={Reel3} />
                </video>
                <p className='views-p'><a target='_blank' rel='noreferrer' href="https://www.instagram.com/reel/Cwd9_dJNmdT/">340K de vistas</a></p>
            </SwiperSlide>   
          </Swiper>
        </div>
      );
    }

  export default Reels