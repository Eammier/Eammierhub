"use client";

import React from "react";
import { Route, Bell, Shield, History, Store, Truck } from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Route Optimization",
    description: "Smart routing helps riders find the fastest delivery paths across town.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "SMS alerts keep you updated on your delivery status.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and simple payment handling, including cash-on-delivery (COD).",
  },
  {
    icon: History,
    title: "Delivery History",
    description: "View your past deliveries and keep track of your orders.",
  },
  {
    icon: Store,
    title: "Multi-Vendor Support",
    description: "Handle orders from multiple shops in one place.",
  },
  {
    icon: Truck,
    title: "Rider Management",
    description: "Assign and manage riders efficiently for every delivery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#00C44F] tracking-widest uppercase mb-3">Core Features</p>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-gray-900 leading-tight">
            Powerful tools designed for businesses,<br className="hidden sm:block" /> riders, and customers alike.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-100 hover:border-[#00C44F]/40 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg hover:shadow-[#00C44F]/8 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#EAF7EE] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#00C44F]" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#00C44F] transition-colors duration-200">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
