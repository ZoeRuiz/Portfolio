import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation }          from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Carousel({ items, renderItem, slidesPerView = 1 }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={slidesPerView}
      spaceBetween={16}
      grabCursor={true}
      className="my-carousel"
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
