import Slider from "react-slick";

const slides = [
  {
    title: "Create a custom tribute for Doctors’ Day",
    color: "bg-cyan-200",
    image: "/doctors.png",
  },
  {
    title: "Get creative for back to school",
    color: "bg-yellow-200",
    image: "/school.png",
  },
  {
    title: "Design joy this Krishna Janmashtami",
    color: "bg-blue-200",
    image: "/krishna.png",
  },
  {
    title: "Create with gratitude this Guru Purnima",
    color: "bg-yellow-300",
    image: "/guru.png",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function WhatsNewSlider() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">What’s new</h2>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className={`p-4 rounded-xl ${slide.color}`}>
            <h3 className="font-bold text-lg mb-2">{slide.title}</h3>
            <img src={slide.image} alt={slide.title} className="rounded-md" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
