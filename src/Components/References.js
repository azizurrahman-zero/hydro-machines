import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import useReferences from "../Hooks/useReferences";

const References = () => {
  const [references] = useReferences();

  return (
    <div className="bg-[#f7f7f799] 2xl:mx-20 mx-10 rounded-2xl 2xl:mt-[-10rem] xl:mt-[-7rem] mt-[-5rem] md:pb-10 2xl:pt-20 2xl:pb-16 pb-8 pt-10 2xl:px-16 px-5">
      <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center 2xl:text-3xl md:text-xl sm:text-lg font-bold text_raleway">
        Recommended by
      </p>
      <h1 className="2xl:text-6xl text-3xl sm:text-4xl font-bold text-primary text-center text_raleway">
        References
      </h1>
      <div className="2xl:pt-14 md:pt-10 pt-8">
        <Swiper
          slidesPerView={2.4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 6.3,
            },
            1536: {
              slidesPerView: 7.4,
            },
          }}
          modules={[FreeMode, Keyboard, Pagination, Autoplay]}
        >
          {references.map((reference) => (
            <SwiperSlide
              key={reference._id}
              className="2xl:pb-14 pb-12 flex flex-col items-center"
            >
              <Link className="flex justify-center w-20" to={reference.url}>
                <img src={reference.logo} alt={reference.name} />
              </Link>
              <p className="text-center font-bold 2xl:text-sm pt-2 sm:pt-2.5 text-xs text-primary text_raleway">
                {reference.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default References;
