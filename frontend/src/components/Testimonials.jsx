import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="py-6 md:py-16">
      {/* Title */}
      <h1 className="h1">Customer Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md max-w-lg mx-auto hover:scale-105 transition-all duration-500"
            >
              <p className="text-4xl text-gray-600">❞</p>
              <p className="text-sm text-gray-500">{item.text}</p>
              <div className="flex items-center gap-3 mt-5">
                <img src={item.image} alt="" className="w-9 rounded-full" />
                <div>
                  <p className="">{item.author}</p>
                  <p className="text-sm text-gray-600">{item.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
