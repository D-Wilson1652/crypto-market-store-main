// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";

// Icons Import
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { DoubleQuoteSolid } from "@/components/icons";

// Icons Import

// ! Dummy Data
const carouselData = [
  {
    quote:
      "“This platform is revolutionizing the luxury goods market. The seamless experience, from browsing to purchase, allows customers to engage with exclusive products like never before. Their marketing strategy is truly next-level, connecting high-end consumers directly to the finest luxury cars, jets, and watches in a way that feels natural and effortless.”",
    name: "Tony Blake",
    designation: "Marketing Director, Prestige Autos",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "“We wanted to partner with a company that understands the essence of exclusivity, and they delivered. The way this platform curates high-end, hard-to-find luxury items is unmatched. The seamless interface and premium customer service set a new benchmark for luxury e-commerce. It’s a game-changer in how people acquire their dream jets, watches, and cars.”",
    name: "Naz Siddique",
    designation: "CEO, EliteJet",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "“In my years as CEO, I haven’t seen many platforms that cater to high-end markets with such precision. Their ability to capture the essence of luxury living, from rare watches to private jets, and deliver a user-friendly online experience is remarkable. This is the future of luxury e-commerce.”",
    name: "William Harper",
    designation: "CEO, Luxe Watch Co.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
];

const HomeTestimonialsCarousel = () => {
  return (
    <div className="w-full h-full relative">
      <div className="mb-6">
        <Text
          className="text-2xl md:text-3xl font-medium text-[#272343]"
          tag="h2"
        >
          What client says about us
        </Text>
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          1366: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          nextEl: ".testimonials-carousel-next",
          prevEl: ".testimonials-carousel-prev",
        }}
        loop={true}
        className="testimonials-carousel w-full h-full"
      >
        {carouselData.map((data, index) => (
          <SwiperSlide key={`testimonials-carousel-${index}`}>
            <div className="bg-white p-6 4xl:p-7 4xl:pr-20 rounded-lg shadow-md relative">
              <div className="absolute bottom-4 right-4 hidden md:block">
                <DoubleQuoteSolid />
              </div>

              <div className="border-l-2 border-[#029FAE] h-[200px]">
                <Text className="text-[#636270] text-sm pl-4" tag="p">
                  {data.quote}
                </Text>
              </div>

              <div className="mt-6 flex items-center">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-12 h-12 rounded-full object-cover object-center"
                />

                <div className="ml-4">
                  <Text
                    className="text-[#272343] font-medium !text-lg"
                    tag="h3"
                  >
                    {data.name}
                  </Text>
                  <Text className="text-[#9A9CAA] !text-sm" tag="span">
                    {data.designation}
                  </Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left and Right Nav Buttons */}
      <ActionIcon
        rounded="full"
        className="testimonials-carousel-prev group !bg-[#F0F2F3] hover:!bg-black hover:!scale-125 absolute z-10 shadow-md -top-8 sm:top-0 right-14"
      >
        <ArrowLeftIcon className="h-5 w-5 group-hover:!text-white" />
      </ActionIcon>
      <ActionIcon
        rounded="full"
        className="testimonials-carousel-next group !bg-[#F0F2F3] hover:!bg-black hover:!scale-125 absolute z-10 shadow-md -top-8 sm:top-0 right-0"
      >
        <ArrowRightIcon className="h-5 w-5 group-hover:!text-white" />
      </ActionIcon>
    </div>
  );
};

export default HomeTestimonialsCarousel;
