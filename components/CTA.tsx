"use client";

import React from "react";
import { Download, UserPlus, Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 overflow-hidden relative">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Dark green gradient card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#006628] via-[#009E40] to-[#004d1f]" />

          {/* Mesh overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(57,255,136,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.3),transparent_60%)]" />

          {/* Top shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full border border-white/5" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 text-center flex flex-col items-center gap-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-white backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#39FF88]" />
              Smart Dispatch System Active
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight tracking-tight text-white max-w-2xl">
              Ready to Streamline Your Deliveries?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
              Join thousands of smart businesses and vendors who use EammierHub to optimize routes, automate dispatch, and coordinate riders. Download the app or create your merchant account online.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <a
                href="#signup"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Sign-up flow: Redirecting to registration, which is automated in EammierHub Dashboard!");
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#004d1f] bg-white hover:bg-[#edfff3] rounded-2xl transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 gap-2 cursor-pointer group"
              >
                <UserPlus className="w-5 h-5" />
                Create Free Account
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Download App: EammierHub Mobile App is currently being prepared for Google Play and iOS App Store!");
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-2xl border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5 text-[#39FF88]" />
                Download Mobile App
              </a>
            </div>

            {/* Fine print */}
            <p className="text-xs text-white/40 mt-1">
              Instantly active &bull; Vetted dispatch network
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
