/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
// import FilterProduct from "../component/FilterProduct";
// import BackgroundImg from "../assest/Farmer_Image.webp"
import AllProduct from "../component/AllProduct";
import { BiBorderRadius } from "react-icons/bi";
import Sub from "../component/Subscription";
import HoverImage from "../component/HoverImage";
import Image1 from "../assest/RO purifier.webp";
import Image2 from "../assest/Message for men.webp";
import Image3 from "../assest/Laser reduction.webp";
import Image4 from "../assest/Security.webp";
import backgroundImage from '../assest/ServiceHome.png'; // Import the background image



const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListMen = productData.filter(
    (el) => el.category === "mensalon",
    []
  );
  const homeProductCartListWomen = productData.filter(
    (el) => el.category === "womensalon",
    []
  );
  const homeProductCartListRepair = productData.filter(
    (el) => el.category === "repair",
    []
  );
  const homeProductCartListCleaning = productData.filter(
    (el) => el.category === "cleaning",
    []
  );

  const homeProductCartListnewProduct = productData.filter(
    (el) => el.category === "New Product",
    []
  );
  const homeProductCartListmostBook = productData.filter(
    (el) => el.category === "Most book service",
    []
  );
  console.log(homeProductCartListnewProduct);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);


  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };




  return (
<div className='p-2 md:p-4'>
  <div className="md:w-screen relative">
    {/* Background image */}
    <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(10px)' }}></div>
    
    {/* Text container */}
    <div className="md:w-1/2 p-8 text-white relative">
      <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
        <p className="text-sm font-medium text-slate-900">Home Service</p>
        <img
          src="https://static.thenounproject.com/png/4958087-200.png"
          className="h-7"
        />
      </div>
      <h2 className="text-4xl md:text-7xl font-bold py-7">
        Home Service at{" "}
        <span className="text-red-600">Your Doorstep</span>
      </h2>
      <p className="py-5 text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries
      </p>
      <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
        Book Service Now
      </button>
    </div>



        {/* <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">

        
          <div className="flex w-full items-center px-12">
            <h2 className="font-bold text-3xl text-slate-800 mb-4">
            New launch service
            </h2>
          </div> 

          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })
            : loadingArray.map((el, index) => {
              return <HomeCard key={index + "loading"} loading={"Loading..."} />;
            })}
        </div> */}


      </div>

      <div className="
      my-5 p-3 ">
        <AllProduct heading={"Your Product"} />
      </div>




      <div className="">
        <div className="flex w-full items-center ">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            New and noteworthy
          </h2>
          <div className="ml-auto flex gap-4">
            {/* <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button> */}
          </div>
        </div>


        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all py-1"
          ref={slideProductRef}
        >
          {homeProductCartListnewProduct[0]
            ? homeProductCartListnewProduct.map((el) => {
              return (
                <CardFeature
                  key={el._id + "New Product"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div>
          <HoverImage imagePath={Image4} />
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center ">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Most book service
          </h2>
          <div className="ml-auto flex gap-4">
            {/* <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button> */}
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all py-4"
          ref={slideProductRef}
        >
          {homeProductCartListmostBook[0]
            ? homeProductCartListmostBook.map((el) => {
              return (
                <CardFeature
                  key={el._id + "Most book service"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div>
          <HoverImage imagePath={Image1} />
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Cleaning & pest control
          </h2>
          <div className="ml-auto flex gap-4">
            {/* <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button> */}
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all mb-12"
          ref={slideProductRef}
        >
          {homeProductCartListCleaning[0]
            ? homeProductCartListCleaning.map((el) => {
              return (
                <CardFeature
                  key={el._id + "cleaning"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center ">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Spa for women
          </h2>
          <div className="ml-auto flex gap-4">
            {/* <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button> */}
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all py-1"
          ref={slideProductRef}
        >
          {homeProductCartListWomen[0]
            ? homeProductCartListWomen.map((el) => {
              return (
                <CardFeature
                  key={el._id + "womensalon"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div>
          <HoverImage imagePath={Image3} />
        </div>
      </div>


      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Salon for kids & men
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all py-1"
          ref={slideProductRef}
        >
          {homeProductCartListMen[0]
            ? homeProductCartListMen.map((el) => {
              return (
                <CardFeature
                  key={el._id + "mensalon"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div>
          <HoverImage imagePath={Image2} />
        </div>
      </div>



      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            AC & application repair
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all mb-12"
          ref={slideProductRef}
        >
          {homeProductCartListRepair[0]
            ? homeProductCartListRepair.map((el) => {
              return (
                <CardFeature
                  key={el._id + "repair"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
            : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "cartLoading"} />
            ))}
        </div>
      </div>

      <div>
        <Sub />
      </div>



    </div>
  );
};

export default Home;
