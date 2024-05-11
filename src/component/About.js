import React from 'react';
import IMG1 from "../assest/blog1.png";
import IMG2 from "../assest/blog2.png";
import IMG3 from "../assest/blog3.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const About = () => {
  const soloProjectss = [
    {
      id: 1,
      info: "WHO ARE WE?",
      img: IMG1,
      description:
      //   "SERVICE PROVIDER ........",
      "At Service Connect, we simplify your life with a wide range of essential services from cleaning to repairs. Our skilled professionals guarantee top-notch quality for tasks like deep cleaning, haircuts, and plumbing repairs. Trust us for convenient and reliable assistance, so you can focus on what matters most.",      
      link: "/",
     
    },
    {
      id: 2,
      info: "WHY US?",
      img: IMG2,
      description:
        // "SERVICES AT YOUR DOORSTEP.......",

        "Service Connect: Your commitment to excellence. With top-notch services, unbeatable satisfaction, and skilled professionals, we're your industry leader. Our priority is your convenience, from quality checks to seamless bookings. Trust us for efficiency, reliability, and professionalism. Join millions of satisfied customers today!",      
      link: "/",
    },
    {
      id: 3,
      info: "WHAT DO WE DO?",
      img: IMG3,
      description:
      "At Service Connect, we offer a wide range of essential services to simplify your life. From home cleaning to beauty services and repairs, we provide comprehensive solutions. Our skilled professionals ensure top-notch service quality for tasks like deep cleaning, haircuts, and plumbing repairs. Trust Service Connect for convenient and reliable assistance, so you can focus on what matters most to you.",
      
      link: "/",
     
    },
  ];

  return (
    <section id="portfolio">
      <h2 className="p-2 text-center text-2xl font-bold mb-8">ABOUT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {soloProjectss.map((pro) => (
          <article className="bg-white rounded-lg shadow-md transition duration-300 hover:border-primary hover:bg-transparent hover:translate-y-[-5px] hover:shadow-lg" key={pro.id}>
            <div className="overflow-hidden h-96">
              <img src={pro.img} alt={pro.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{pro.info}</h3>
              <p className="text-gray-600 mb-4">{pro.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
