import React from 'react'
import { Users, Truck, Lock, Scissors } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Happy Customers */}
        <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4 text-center w-full">
          <div className="flex items-center justify-center w-full h-14 rounded-lg bg-gradient-br from-slate-50 to-slate-100 text-center">
            <Users className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-semibold">2 Million+ Happy Customers</h3>
          <p className="text-sm text-slate-700">Trusted by many — three decades of style for Indian men.</p>
        </div>

        {/* Express Delivery */}
        <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center w-full h-14 rounded-lg bg-gradient-br from-emerald-50 to-emerald-100">
            <Truck className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-semibold">Express Delivery</h3>
          <p className="text-sm text-slate-700">We’re committed to delivering your orders safely within <strong>3 days*</strong>.</p>
        </div>

        {/* Secure Payments */}
        <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center w-full h-14 rounded-lg bg-gradient-br from-amber-50 to-amber-100">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-semibold">Secure Payments</h3>
          <p className="text-sm text-slate-700">Your payments are <strong>100% secure</strong>, protected by <strong>128‑bit encryption</strong>.</p>
        </div>

        {/* Craftsmanship */}
        <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4 text-center w-full">
          <div className="flex items-center justify-center w-full h-14 rounded-lg bg-gradient-br from-pink-50 to-pink-100">
            <Scissors className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-semibold text-center">Craftsmanship</h3>
          <p className="text-sm text-slate-700">Excellence in every stitch. Quality in every product — made with love and precision.</p>
        </div>
      </div>



      <p className="mt-6 text-xs text-slate-600">*Delivery time applies to eligible pin codes and in-stock items. Terms & conditions apply.</p>
    </section>
  )
}
