import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assest/blog4.png";
import IMG2 from "../assest/blog5.png";


const Updates = () => {
  const soloPros = [
    {
      id: 1,
      img: IMG1,
      link: "/",
    },
    {
      id: 2,
      img: IMG2,
      link: "/",
    },
  ];

  return (
    <section id="portfolio">
     <h2 className=" py-6 text-center text-2xl font-bold mb-8">NEW UPDATES</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {soloPros.map((pro) => (
          <article
            className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 hover:border-primary hover:bg-transparent hover:translate-y-[-5px] hover:shadow-lg"
            key={pro.id}
          >
            <div className="overflow-hidden h-96">
              <img
                src={pro.img}
                alt="Update Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">New Update</p>
                <p className="text-sm text-gray-600 mb-2">
                  Here goes the description of the update.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  to={pro.link}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-full transition duration-300 hover:bg-green-600"
                >
                  Click to know more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Updates;
