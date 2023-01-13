import React, { useRef, useState } from "react";
import { Carousel } from "flowbite-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Card = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-4xl font-bold uppercase">GALERI KAMI</h1>

      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>

      <div className="my-16 grid  grid-cols-1 gap-4 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-2 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide>
            <div className="slide">
              <img
                src="./src/assets/images/bg-hero.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="./src/assets/images/bg-hero.jpg"
                className="h-full w-full"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="./src/assets/images/bg-hero.jpg"
                className="h-full w-full"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="./src/assets/images/bg-hero.jpg"
                className="h-full w-full"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="./src/assets/images/bg-hero.jpg"
                className="h-full w-full"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img
                src="./src/assets/images/bg-hero.jpg"
                className="h-full w-full"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="p-6 sm:py-3">
          <h3 className="mb-4 text-3xl font-bold">
            Yayasan Pesantren Raudhatul Hasanah
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            doloremque. Nam, culpa in quis molestias provident alias recusandae
            eos corporis enim, tempore earum doloribus at. Quia corrupti id
            totam dolor voluptatibus aliquam, neque numquam praesentium
            molestiae aliquid odio ullam doloribus quod facilis laboriosam
            dolores quam, rerum sunt consequuntur omnis commodi vero ad.
            Reiciendis distinctio voluptatibus, tenetur sunt veniam cum
            veritatis rerum magni! Nemo aut excepturi, beatae, provident tenetur
            dolores quisquam numquam vitae laboriosam ex corporis ducimus modi,
            velit tempora explicabo minus facere. Esse dolorem quibusdam quia
            ducimus alias optio, aspernatur cupiditate in quaerat mollitia
            beatae at quam itaque eius minus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
