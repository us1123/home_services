import React from "react";
import { Link } from "react-router-dom";
import user1 from "../assest/user1.png";
import user2 from "../assest/user2.png";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Aditi Gholap",
      img: user2,
      description: "frontend developer",
      info: "student",
      link: "/",
      github: "/",
    },
    {
      id: 2,
      title: "Santosh Fulgame",
      img: user1,
      description: "frontend developer",
      info: "student",
      link: "/",
      github: "/",
    },
    {
      id: 3,
      title: "Mrunal Raskar",
      img: user2,
      description: "backend developer",
      info: "student",
      link: "/",
      github: "/",
    },
    {
      id: 4,
      title: "Umarfarukh Shaikh",
      img: user1,
      description: "backend developer",
      info: "student",
      link: "/",
      github: "/",
    },
    {
      id: 5,
      title: "Hritu Chittal",
      img: user2,
      description: "frontend developer",
      info: "student",
      link: "/",
      github: "/",
    },
  ];

  return (
    <section id="portfolio" className="px-4 sm:px-0">
      <h2 className="py-6 text-center text-2xl font-bold mb-8">CREATORS</h2>

      <div className="grid grid-cols-5 gap-4 sm:gap-8">
        {soloProjects.map((pro) => (
          <article
            className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md transition duration-300 hover:border-primary hover:bg-transparent hover:translate-y-[-2px] hover:shadow-lg"
            key={pro.id}
          >
            <div className="rounded-full overflow-hidden h-32 w-32 mx-auto mb-4 sm:mb-6">
              <img
                src={pro.img}
                alt={pro.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{pro.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{pro.description}</p>
              <p className="text-sm text-gray-600">{pro.info}</p>
            </div>
            <div className="flex justify-center mt-3 sm:mt-4">
              <Link
                to={pro.github}
                target="_blank"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-full transition duration-300 hover:bg-green-600"
              >
                Visit Profile
              </Link>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
