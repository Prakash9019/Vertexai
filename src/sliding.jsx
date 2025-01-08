import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Corrected import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlidingFeatureCards = ({ features, images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full" aria-label="Feature cards">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2.8}
        spaceBetween={25}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay the assignment of navigation elements to ensure refs are available
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        className="slide-content"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
           <div
              key={index}
              className="flex flex-col flex-shrink-0 ml-4 w-full max-md:w-full"
            >
              <div
                className={`flex relative flex-col grow pt-6 pr-20 pb-56 pl-6 rounded-xl min-h-[514px] max-md:px-5 max-md:pb-24 max-md:mt-5 max-md:max-w-full ${feature.className}`}
              >
                <img
                  loading="lazy"
                  src={images[index]}
                  alt={`${feature.title} feature background`}
                  className="object-cover absolute inset-0 size-full"
                />
                <h3 className="relative self-start text-3xl font-bold tracking-tighter text-white">
                  {feature.title}
                </h3>
                <button
                  className="relative self-center px-8 py-2.5 mt-44 max-w-full text-2xl font-bold tracking-tighter text-black bg-white border-2 border-white border-solid rounded-[100px] w-[252px] max-md:px-5 max-md:mt-10 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  Learn more &gt;
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div ref={prevRef} className="swiper-button-prev"></div>
        <div ref={nextRef} className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default SlidingFeatureCards;
