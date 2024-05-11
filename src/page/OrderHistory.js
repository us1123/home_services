import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import emptyOrdersImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (user._id) {
          const response = await fetch(`http://localhost:8080/${user._id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch orders");
          }
          const data = await response.json();
          setOrders(data);
        }
      } catch (error) {
        console.error("Fetch orders error:", error);
        toast.error("Failed to fetch orders. Please try again later.");
      }
    };

    fetchOrders();
  }, [user._id]);

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        My Orders
      </h2>

      {orders.length > 0 ? (
        <div className="my-4">
          {/* Display order items */}
          {orders.map((order) => (
            <div key={order._id} className="border p-4 mb-4">
              <img src={order.productImage} alt={order.productName} className="w-16 h-16 object-contain mr-4" />
              <div>
                <p className="font-bold">{order.productName}</p>
                <p>Order ID: {order._id}</p>
                <p>Price: ₹ {order.price}</p>
                <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Display empty orders message
        <div className="flex w-full justify-center items-center flex-col">
          <img src={emptyOrdersImage} alt="Empty orders" className="w-full max-w-sm" />
          <p className="text-slate-500 text-3xl font-bold">No Orders Found</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
