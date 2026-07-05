"use client";

import React from "react";
import { ArrowRight, UserPlus, Truck, MapPin, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-28 md:pt-52 md:pb-40 bg-white overflow-hidden">

      {/* Subtle top green radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00C44F]/8 rounded-full blur-3xl -z-10" />
      
      {/* Very light green dot-grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #00C44F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF7EE] border border-[#00C44F]/30 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C44F] animate-pulse" />
          <span className="text-xs font-semibold text-[#00C44F] tracking-wider uppercase">
            All-in-One Delivery Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black font-heading leading-[1.1] text-gray-900 tracking-tight mb-6">
          Smart Logistics &amp;{" "}
          <span className="text-[#00C44F]">Rider Management</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          EammierHub connects businesses, dispatch riders, and customers for fast, optimized, and secure intra-city deliveries across Nigeria.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#cta"
            className="green-glow-btn inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#00C44F] hover:bg-[#009E40] rounded-xl transition-colors duration-200 gap-2 cursor-pointer group"
          >
            <UserPlus className="w-5 h-5" />
            Create Free Account
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#00C44F] bg-white border-2 border-[#00C44F]/40 hover:border-[#00C44F] hover:bg-[#EAF7EE] rounded-xl transition-all duration-200 gap-2 cursor-pointer"
          >
            See How It Works
          </a>
        </div>

        {/* Trust stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EAF7EE] flex items-center justify-center">
              <Truck className="w-4 h-4 text-[#00C44F]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-gray-900">100,000+</p>
              <p className="text-xs text-gray-400">Deliveries Done</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-100" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EAF7EE] flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#00C44F]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-gray-900">1,200+</p>
              <p className="text-xs text-gray-400">Vetted Riders</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-100" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EAF7EE] flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#00C44F]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-gray-900">99.2%</p>
              <p className="text-xs text-gray-400">On-Time Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
