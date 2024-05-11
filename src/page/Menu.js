import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.find((el) => el._id === filterby);

  const handleAddCartProduct = () => {
    if (productDisplay) {
      dispatch(addCartItem(productDisplay));
    }
  };

  const handleBuy = () => {
    if (productDisplay) {
      dispatch(addCartItem(productDisplay));
      navigate("/cart");
    }
  };

  const formatDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>


      <div className="p-2 md:p-4">
        <div className="w-full max-w-4xl m-auto md:flex bg-white">
          {productDisplay && (
            <>
              <div className="max-w-sm  overflow-hidden w-full p-5">
                <img
                  src={productDisplay.image}
                  className="hover:scale-105 transition-all h-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
                  {productDisplay.name}
                </h3>
                <p className=" text-slate-500  font-medium text-2xl">
                  {productDisplay.category}
                </p>
                <p className=" font-bold md:text-2xl">
                  <span className="text-red-500 ">₹</span>
                  <span>{productDisplay.price}</span>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleBuy}
                    className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
                  >
                    Buy
                  </button>
                  <button
                    onClick={handleAddCartProduct}
                    className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
                  >
                    Add Cart
                  </button>
                </div>
                <div>

                </div>
              </div>
            </>
          )}
        </div>
      </div>


      <div className="p-2 md:p-4">
        <div className="w-full max-w-4xl m-auto md:flex bg-white">
          {productDisplay && (
            <>
              {productDisplay && (
                <div className="justify-center items-center">
                  <p className="text-slate-600 font-medium text-2xl my-6 mx-4">Description : </p>
                  <div className="font-medium max-w-m overflow-hidden w-full p-4">
                    <div className="text-slate-700 my-4">{formatDescription(productDisplay.description)}</div>
                  </div>

                </div>
              )}
              <div>
              </div>
            </>
          )}
        </div>
      </div>


      <AllProduct heading={"Related Product"} />

    </>
  );
};

export default Menu;
