import React from "react";
import { assets, plans } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const handlePurchase = async (priceId, getToken) => {
  try {
    const token = await getToken();
    console.log("Token retrieved:", token);
    const response = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/api/payment/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ priceId }),
      }
    );
    const session = await response.json();
    console.log("Checkout session created:", session);
    window.location.href = session.url;
  } catch (error) {
    console.log("Error at handlePurchase:", error.message);
  }
};
const BuyCredit = () => {
  const { getToken } = useContext(AppContext);

  return (
    <div className="min-h-[81vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 cursor-pointer font-semibold">
        Our Plans
      </button>
      <h1 className="h1 mb-6 sm:mb-10">Choose the plan that's right for you</h1>
      <div className="flex justify-center flex-wrap gap-6 text-left">
        {plans.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-sm px-8 py-12 rounded-lg text-gray-700 hover:scale-105 transition-all durartion-500"
            >
              <img src={assets.logo_icon} alt="" width={40} />
              <p className="mt-3 font-semibold">{item.name}</p>
              <p className="text-sm">{item.desc}</p>
              <p className="mt-6">
                <span className="text-3xl font-medium">${item.price}</span>/{" "}
                {item.credits} credits
              </p>
              <button
                className="w-full bg-gray-800 text-sm text-white mt-8 rounded-md py-2.5 min-w-52 cursor-pointer"
                onClick={() => handlePurchase(item.priceId, getToken)}
              >
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyCredit;
