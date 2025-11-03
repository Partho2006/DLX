"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = {
  bestseller: [
    { id: 1, name: "Bandhgala Formal Wine Jacquard Waistcoat", price: "₹7,200" },
    { id: 2, name: "Lilac High Neck Jacquard Sweater", price: "₹3,685" },
    { id: 3, name: "White Non Iron Solid Shirt", price: "₹2,610" },
    { id: 4, name: "White Crew Neck T‑Shirt", price: "₹1,499" },
  ],
  new: [
    { id: 5, name: "Navy Textured Blazer", price: "₹9,990" },
    { id: 6, name: "Beige Slim Fit Trousers", price: "₹3,299" },
    { id: 7, name: "Rust Casual Shirt", price: "₹2,099" },
    { id: 8, name: "Black Polo Tee", price: "₹1,299" },
  ],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'bestseller' | 'new'>("bestseller");

  const list = products[activeTab];

  return (
    <div className="w-full py-5 px-4 md:px-12">
      {<div className="text-sm text-center mb-6 tracking-wider font-medium">FOR YOU..</div>
      /* Hero Tabs */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="flex gap-10 text-2xl font-semibold">
          <button
            onClick={() => setActiveTab("bestseller")}
            className={`pb-1 border-b-4 transition-all hover:text-black ${
              activeTab === "bestseller" ? "border-black" : "border-transparent text-gray-500"
            }`}
          >
            BESTSELLER
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`pb-1 border-b-4 transition-all hover:text-black ${
              activeTab === "new" ? "border-black" : "border-transparent text-gray-500"
            }`}
          >
            THIS IS NEW
          </button>
        </div>
        <Button className="text-sm font-medium hover:opacity-80 transition-all">
          View All 
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-opacity duration-300 ${activeTab === 'bestseller' ? 'opacity-100' : 'opacity-100'}">
        {list.map((p) => (
          <div key={p.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
            <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
              Image
            </div>
            <h3 className="font-medium text-lg mb-1">{p.name}</h3>
            <p className="text-sm font-semibold">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
