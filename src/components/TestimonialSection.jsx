import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import { testimonials } from "@/data/testimonials"

const TestimonialSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Our Client Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >

        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl p-8 text-center space-y-4">

              <img
                src={item.image}
                className="w-16 h-16 rounded-full mx-auto object-cover"
                alt={item.name}
              />

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              <div>
                <h4 className="font-semibold text-black dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </p>
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}

export default TestimonialSection