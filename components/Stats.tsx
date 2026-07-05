"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, Truck, Activity, Clock } from "lucide-react";

export default function Stats() {
  const [riders, setRiders] = useState(0);
  const [deliveries, setDeliveries] = useState(0);
  const [onTimeRate, setOnTimeRate] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setRiders(Math.floor((1200 / steps) * currentStep));
      setDeliveries(Math.floor((100000 / steps) * currentStep));
      setOnTimeRate(parseFloat(((99.2 / steps) * currentStep).toFixed(1)));
      if (currentStep >= steps) {
        setRiders(1200);
        setDeliveries(100000);
        setOnTimeRate(99.2);
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [started]);

  const statsItems = [
    {
      label: "Completed Deliveries",
      value: deliveries.toLocaleString() + "+",
      icon: Truck,
      description: "Packages safely dispatched and delivered",
    },
    {
      label: "Vetted Dispatch Riders",
      value: riders.toLocaleString() + "+",
      icon: Users,
      description: "Trained riders ready to take orders daily",
    },
    {
      label: "On-Time Delivery Rate",
      value: onTimeRate.toFixed(1) + "%",
      icon: Activity,
      description: "Routes optimized dynamically to bypass traffic",
    },
    {
      label: "Average Delivery Time",
      value: "< 45 Mins",
      icon: Clock,
      description: "Intra-city deliveries completed in record speed",
    },
  ];

  return (
    <section
      id="stats"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Bold dark green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007A30] via-[#00A83D] to-[#004d1f] dark:from-[#012e12] dark:via-[#044d1a] dark:to-[#011a09] -z-10" />

      {/* Noise/mesh texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.2),transparent_60%)] pointer-events-none" />

      {/* Top/bottom shimmer lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-8 py-10 gap-3 group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-white/25 transition-colors duration-300 mb-1">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-white leading-none">
                  {item.value}
                </span>

                <h4 className="text-sm font-bold text-white/80">
                  {item.label}
                </h4>

                <p className="text-xs text-white/50 max-w-[180px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
