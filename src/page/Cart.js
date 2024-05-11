import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total, 10),
    0
  );
  
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      try {
        
        
        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
        productCartItem.map(async (item)=>{
          console.log(user._id)
          console.log(item.name)
          console.log(item.image)
          const res = await fetch(`http://localhost:8080/orders/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user._id, // Assuming user ID is available in Redux state
            productName:item.name,
            productImage:item.image,
            price:item.price
            
              
          
          })
        });
        })
        
       
    


  //       if (!res.ok) {
  //         throw new Error("Failed to create order");
  //       }

  //       const data = await res.json();
  //       console.log("Order created:", data);

  //       const stripe = await stripePromise;
  //       const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });

  //       if (error) {
  //         toast.error("Failed to redirect to payment gateway");
  //       }
      } catch (error) {
        console.error("Payment error:", error);
        toast.error("Payment failed. Please try again later.");
      }
    } else {
      toast.error("You are not logged in!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      {productCartItem.length > 0 ? (
        <div className="my-4 flex gap-3">
          {/* Display cart items */}
          <div className="w-full max-w-3xl">
            {productCartItem.map((el) => (
              <CartProduct
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                category={el.category}
                qty={el.qty}
                total={el.total}
                price={el.price}
              />
            ))}
          </div>

          {/* Display cart summary */}
          <div className="w-full max-w-md ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price:</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <button
              className="bg-red-500 w-full text-lg font-bold py-2 text-white"
              onClick={handlePayment}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        // Display empty cart message
        <div className="flex w-full justify-center items-center flex-col">
          <img src={emptyCartImage} alt="Empty cart" className="w-full max-w-sm" />
          <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
