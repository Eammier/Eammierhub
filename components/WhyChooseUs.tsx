"use client";

import React from "react";
import { Zap, ShieldCheck, Tag, HeartHandshake, CloudLightning, MousePointerClick } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fast Deliveries",
      description: "Our smart route optimization guarantees that dispatch riders pick up and deliver packages in record time, avoiding heavy traffic.",
      icon: Zap,
      number: "01",
    },
    {
      title: "Secure Payments",
      description: "Protected by industry-leading security. Fund your delivery wallet or pay on delivery (COD) securely via verified card or transfer.",
      icon: ShieldCheck,
      number: "02",
    },
    {
      title: "Low Delivery Rates",
      description: "Get the most competitive delivery tariffs with no hidden charges. Save more with our bulk dispatch business rates.",
      icon: Tag,
      number: "03",
    },
    {
      title: "24/7 Logistics Support",
      description: "Need assistance? Our operations team is active round the clock via live chat, WhatsApp, and calls to support merchants and riders.",
      icon: HeartHandshake,
      number: "04",
    },
    {
      title: "Reliable Rider Fleet",
      description: "Fallback system active. If a matched rider encounters a vehicle breakdown, our system instantly assigns a nearby backup rider.",
      icon: CloudLightning,
      number: "05",
    },
    {
      title: "Simple Dashboard Control",
      description: "Designed for business owners, riders, and customers alike. Track active deliveries and coordinate dispatches in just 3 clicks.",
      icon: MousePointerClick,
      number: "06",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 overflow-hidden relative">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00D053]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#00D053] tracking-widest uppercase">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Why Choose EammierHub?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            EammierHub is engineered to beat the industry standards. Here is how we redefine the logistics and rider coordination experience in Nigeria.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white dark:bg-[#0d2c14] border border-green-100 dark:border-green-900/40 flex flex-col gap-5 hover:border-[#00C44F]/50 shadow-sm hover:shadow-lg hover:shadow-[#00C44F]/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default"
              >
                {/* Decorative background number */}
                <span className="absolute -bottom-2 -right-1 text-8xl font-black text-slate-100 dark:text-green-950/60 select-none pointer-events-none leading-none">
                  {feat.number}
                </span>

                {/* Icon with gradient border ring on hover */}
                <div className="relative w-fit">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D053] to-[#009E40] opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110 blur-sm" />
                  <div className="relative w-12 h-12 rounded-xl bg-[#00D053]/10 dark:bg-[#00D053]/5 border border-[#00D053]/20 group-hover:border-[#00D053]/60 flex items-center justify-center text-[#00D053] transition-all group-hover:scale-110 duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-[#00D053] transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
