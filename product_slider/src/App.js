import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' width={"50%"} height={"100%"} />
      </SwiperSlide>
      ...
    </Swiper>
  );
};