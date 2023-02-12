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

const cards = [
  {
    id: 1,
    name: "PT. Cemerlang Samudera Kontrindo",
    explain: "Menggunakan epoxy lantai (SL), dengan ketebalan 500 micron",
    image1: "/assets/images/PT_CEMERLANG_SAMUDRA_KONTRINDO/File_004.png",
    image2: "/assets/images/PT_CEMERLANG_SAMUDRA_KONTRINDO/File_002.png",
    image3: "/assets/images/PT_CEMERLANG_SAMUDRA_KONTRINDO/File_005.png",
    image4: "/assets/images//PT_CEMERLANG_SAMUDRA_KONTRINDO/File_006.png",
    image5: "/assets/images//PT_CEMERLANG_SAMUDRA_KONTRINDO/File_008.png",
    image6: "/assets/images//PT_CEMERLANG_SAMUDRA_KONTRINDO/File_013.png",
  },
  {
    id: 2,
    name: "PT. Ceppa Indonesia",
    explain: "Menggunakan epoxy lantai (SL), dengan ketebalan 2000 micron",
    image1: "/assets/images/PT_CEPPA_INDONESIA_(PABRIK_WALET)/File_000.png",
    image2: "/assets/images/PT_CEPPA_INDONESIA_(PABRIK_WALET)/File_000.png",
    image3: "/assets/images/PT_CEPPA_INDONESIA_(PABRIK_WALET)/File_000.png",
    image4: "/assets/images/PT_CEPPA_INDONESIA_(PABRIK_WALET)/File_000.png",
    image5: "/assets/images/PT_CEPPA_INDONESIA_(PABRIK_WALET)/File_000.png",
    image6: "/assets/images/PT_CEPPA_INDONESIA_(PABRIK_WALET)/File_000.png",
  },
  {
    id: 3,
    name: "PT. SPA SIBOLGA",
    explain:
      "Menggunakan material ucrete (yang kerasnya sudah seperti k350 dan sudah memenuhi standart foodgrade), dengan ketebalan 6mm",
    image1: "/assets/images/PT_SPA_SIBOLGA_(PABRIK_IKAN_TUNA)/File_000.png",
    image2: "/assets/images/PT_SPA_SIBOLGA_(PABRIK_IKAN_TUNA)/File_001.png",
    image3: "/assets/images/PT_SPA_SIBOLGA_(PABRIK_IKAN_TUNA)/File_000.png",
    image4: "/assets/images/PT_SPA_SIBOLGA_(PABRIK_IKAN_TUNA)/File_001.png",
    image5: "/assets/images/PT_SPA_SIBOLGA_(PABRIK_IKAN_TUNA)/File_000.png",
    image6: "/assets/images/PT_SPA_SIBOLGA_(PABRIK_IKAN_TUNA)/File_001.png",
  },
  {
    id: 4,
    name: "PT. SPA SIBOLGA (Cold Storage)",
    explain: "Menggunakan epoxy mortar, dengan ketebalan 9mm",
    image1: "/assets/images/PT_SPA_SIBOLGA_(COLD_STORAGE)/File_002.png",
    image2: "/assets/images/PT_SPA_SIBOLGA_(COLD_STORAGE)/File_003.png",
    image3: "/assets/images/PT_SPA_SIBOLGA_(COLD_STORAGE)/File_002.png",
    image4: "/assets/images/PT_SPA_SIBOLGA_(COLD_STORAGE)/File_003.png",
    image5: "/assets/images/PT_SPA_SIBOLGA_(COLD_STORAGE)/File_002.png",
    image6: "/assets/images/PT_SPA_SIBOLGA_(COLD_STORAGE)/File_003.png",
  },
  {
    id: 5,
    name: "PT. Sri Makmur Abadi",
    explain:
      "Menggunakan material ucrete (yang kerasnya sudah seperti k350 dan sudah memenuhi standary foodfgrade), dengan ketebalan 3mm.",
    image1: "/assets/images/PT_SRI_MAKMUR_ABADI_(PABRIK_SANTAN)/File_000.png",
    image2: "/assets/images/PT_SRI_MAKMUR_ABADI_(PABRIK_SANTAN)/File_001.png",
    image3: "/assets/images/PT_SRI_MAKMUR_ABADI_(PABRIK_SANTAN)/File_002.png",
    image4: "/assets/images/PT_SRI_MAKMUR_ABADI_(PABRIK_SANTAN)/File_003.png",
    image5: "/assets/images/PT_SRI_MAKMUR_ABADI_(PABRIK_SANTAN)/File_004.png",
    image6: "/assets/images/PT_SRI_MAKMUR_ABADI_(PABRIK_SANTAN)/File_005.png",
  },
  {
    id: 6,
    name: "SMKN 1 TANJUNG MORAWA",
    explain:
      "Menggunakan epoxy lantai jenis PU (material khusus untuk lantai lapangan) dengan ketahanan warna hingga 10 tahun.",
    image1: "/assets/images/SMKN1_TANJUNG_MORAWA/File_000.png",
    image2: "/assets/images/SMKN1_TANJUNG_MORAWA/File_002.png",
    image3: "/assets/images/SMKN1_TANJUNG_MORAWA/File_003.png",
    image4: "/assets/images/SMKN1_TANJUNG_MORAWA/File_004.png",
    image5: "/assets/images/SMKN1_TANJUNG_MORAWA/File_000.png",
    image6: "/assets/images/SMKN1_TANJUNG_MORAWA/File_002.png",
  },
  {
    id: 7,
    name: "Yayasan Pesantren Raudhatul Hasanah",
    explain:
      "Menggunakan epoxy lantai jenis PU (material khusus untuk lantai lapangan) dengan ketahanan warna hingga 10 tahun.",
    image1:
      "/assets/images/YAYASAN_PESANTREN_RAUDHATUL_HASANAH_(LAPANGAN_BASKET)/File_000.png",
    image2:
      "/assets/images/YAYASAN_PESANTREN_RAUDHATUL_HASANAH_(LAPANGAN_BASKET)/File_001.png",
    image3:
      "/assets/images/YAYASAN_PESANTREN_RAUDHATUL_HASANAH_(LAPANGAN_BADMINTON)/File_001.png",
    image4:
      "/assets/images/YAYASAN_PESANTREN_RAUDHATUL_HASANAH_(LAPANGAN_BADMINTON)/File_003.png",
    image5:
      "/assets/images/YAYASAN_PESANTREN_RAUDHATUL_HASANAH_(LAPANGAN_VOLI)/File_001.png",
    image6:
      "/assets/images/YAYASAN_PESANTREN_RAUDHATUL_HASANAH_(LAPANGAN_VOLI)/File_003.png",
  },
];

const Card = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-4xl font-bold uppercase">GALERI KAMI</h1>

      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>

      <div className=" mt-16 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card) => (
          <div
            className=" grid grid-cols-1 rounded-lg bg-gray-300 sm:grid-cols-1 lg:grid-cols-1"
            key={card.id}
          >
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
                <img
                  src={card.image1}
                  className="slide-img object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={card.image2}
                  className="slide-img object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={card.image3}
                  className="slide-img object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={card.image4}
                  className="slide-img object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={card.image5}
                  className="slide-img object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={card.image6}
                  className="slide-img object-cover"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>

            <div className="my-6 mx-4">
              <h3 className="mb-3 text-2xl font-bold">{card.name}</h3>
              <p>{card.explain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
