"use client";

import React from "react";
import { UserPlus, MapPin, Truck, CheckSquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create an Account",
      description: "Register a free account as a merchant, dispatcher, or customer in under a minute on our web or mobile apps.",
      icon: UserPlus,
    },
    {
      step: "02",
      title: "Set Locations",
      description: "Input pickup and dropoff coordinates, define package details, and choose your vehicle type.",
      icon: MapPin,
    },
    {
      step: "03",
      title: "Match with Rider",
      description: "Our smart route optimization matches the nearest optimal rider for immediate dispatch and collection.",
      icon: Truck,
    },
    {
      step: "04",
      title: "Track & Complete",
      description: "Follow your shipment live on the map. Confirm safe delivery and release payment instantly from your wallet.",
      icon: CheckSquare,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden transition-colors duration-300">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4FEF7] via-white to-[#edfff3] dark:from-[#071A0C] dark:via-[#050f07] dark:to-[#071A0C] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#00D053] tracking-widest uppercase">
            Process Outline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Get started with EammierHub in four simple, guided steps. No paperwork, no queues.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">

          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#00C44F]/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center gap-5 group"
                >
                  {/* Numbered circle icon */}
                  <div className="relative">
                    {/* Outer glow ring on hover */}
                    <div className="absolute inset-0 rounded-full bg-[#00C44F]/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                    {/* Circle */}
                    <div className="relative w-20 h-20 rounded-full bg-white dark:bg-[#0d2c14] border-2 border-green-100 dark:border-green-800/50 group-hover:border-[#00C44F] shadow-md group-hover:shadow-lg group-hover:shadow-[#00C44F]/15 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-7 h-7 text-slate-400 dark:text-green-700 group-hover:text-[#00C44F] transition-colors duration-300" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#00C44F] flex items-center justify-center shadow-md">
                      <span className="text-[9px] font-black text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="bg-white dark:bg-[#0d2c14] border border-green-100 dark:border-green-900/30 rounded-2xl p-5 w-full shadow-sm group-hover:shadow-md group-hover:border-[#00C44F]/30 transition-all duration-300">
                    <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100 mb-2 group-hover:text-[#00C44F] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
