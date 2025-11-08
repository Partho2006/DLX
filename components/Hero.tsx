"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = {
  bestseller: [
    { id: 1, name: "Bandhgala Formal Wine Jacquard Waistcoat", price: "₹7,200" },
    { id: 2, name: "Lilac High Neck Jacquard Sweater", price: "₹3,685" },
    { id: 3, name: "White Non Iron Solid Shirt", price: "₹2,610" },
    { id: 4, name: "White Crew Neck T-Shirt", price: "₹1,499" },
  ],
  new: [
    { id: 5, name: "Navy Textured Blazer", price: "₹9,990" },
    { id: 6, name: "Beige Slim Fit Trousers", price: "₹3,299" },
    { id: 7, name: "Rust Casual Shirt", price: "₹2,099" },
    { id: 8, name: "Black Polo Tee", price: "₹1,299" },
  ],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"bestseller" | "new">("bestseller");
  const list = products[activeTab];

  return (
    <div className="w-full pt-8 px-4 md:px-14">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Curated For You
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-1 tracking-wide">
          Refine Your Style
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="flex gap-10 text-2xl font-semibold">
          <button
            onClick={() => setActiveTab("bestseller")}
            className={`pb-1 border-b-[3px] transition-all duration-200 ${
              activeTab === "bestseller"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            BESTSELLER
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`pb-1 border-b-[3px] transition-all duration-200 ${
              activeTab === "new"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            THIS IS NEW
          </button>
        </div>
        <Button className="text-sm font-medium hover:opacity-90">
          View All
        </Button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-opacity duration-300">
        {list.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
              Image
            </div>
            <h3 className="font-medium text-lg mb-1">{p.name}</h3>
            <p className="text-sm font-semibold text-gray-700">{p.price}</p>
          </div>
        ))}
      </div>

      {/* Fashion Section Title */}
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-wide">
          Essentials for Every Mood
        </h2>
        <p className="text-sm text-gray-500 tracking-wide">
          Everyday pieces, elevated for modern living.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left */}
        <div className="relative h-[800px] w-full overflow-hidden rounded-xl group">
          <img src="/SHIRT.png" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
          <span className="absolute bottom-6 left-6 text-white font-semibold text-3xl">
            SHIRTS
          </span>
        </div>

        {/* Right */}
        <div className="grid grid-rows-2 gap-6">
          <div className="relative h-[500px] w-full overflow-hidden rounded-xl group">
            <img src="/tshirt.png" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            <span className="absolute bottom-6 left-6 text-white font-semibold text-2xl">
              T-SHIRTS
            </span>
          </div>

          <div className="relative h-[280px] w-full overflow-hidden rounded-xl group">
            <img src="/jeans.png" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            <span className="absolute bottom-6 left-6 text-black font-semibold text-2xl">
              JEANS
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
