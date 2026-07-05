"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const avatarColors = [
  "from-[#00C44F] to-[#009E40]",
  "from-violet-500 to-purple-600",
  "from-amber-400 to-orange-500",
  "from-blue-500 to-cyan-500",
];

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Tunde Alabi",
      role: "Retail Store Owner",
      location: "Lagos",
      content: "EammierHub has saved my business! We dispatch over 50 packages daily. The route optimization helps our riders deliver twice as fast, keeping customers happy.",
      rating: 5,
    },
    {
      id: 2,
      name: "Chioma Nnaji",
      role: "E-commerce Vendor",
      location: "Enugu",
      content: "The multi-vendor support is amazing. I can manage all my shop deliveries from one dashboard, track my riders, and pay them securely without stress.",
      rating: 5,
    },
    {
      id: 3,
      name: "Abubakar Garba",
      role: "Corporate Client",
      location: "Abuja",
      content: "I use EammierHub to send documents and packages across the city. Very reliable, instant tracking notifications, and transparent payment options.",
      rating: 5,
    },
    {
      id: 4,
      name: "Femi Adebayo",
      role: "Dispatch Rider",
      location: "Ibadan",
      content: "Being a rider on EammierHub is great. The navigation system gives me the fastest routes, and my earnings are credited to my wallet instantly.",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(slideTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 200);
  };

  const goToNext = () => goTo((activeIndex + 1) % reviews.length);
  const goToPrev = () => goTo((activeIndex - 1 + reviews.length) % reviews.length);

  const review = reviews[activeIndex];

  return (
    <section id="testimonials" className="py-24 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0fdf4] to-white dark:from-[#050f07] dark:via-[#071A0C] dark:to-[#050f07] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-divider" />

      {/* Large decorative quote mark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[#00C44F]/4 dark:text-[#00C44F]/3 select-none pointer-events-none">
        <Quote className="w-64 h-64" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#00D053] tracking-widest uppercase">
            User Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Real feedback from business owners, e-commerce vendors, and dispatch riders who rely on EammierHub every day.
          </p>
        </div>

        {/* All-cards layout (desktop) + single card (mobile) */}
        <div className="hidden lg:grid grid-cols-4 gap-5 mb-12">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              onClick={() => goTo(i)}
              className={`group text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "bg-white dark:bg-[#0d2c14] border-[#00C44F]/50 shadow-xl shadow-[#00C44F]/10 scale-[1.02]"
                  : "bg-white/60 dark:bg-[#0a1f0e]/50 border-green-100 dark:border-green-900/30 hover:border-[#00C44F]/30 hover:shadow-md"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed line-clamp-4 mb-4">
                &ldquo;{r.content}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-2.5 mt-auto">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-xs font-black`}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{r.name}</p>
                  <p className="text-[10px] text-slate-400">{r.role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Featured / Active Testimonial (all sizes) */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`relative glass-card p-8 md:p-12 rounded-3xl shadow-2xl shadow-[#00C44F]/5 border border-[#00C44F]/15 overflow-hidden transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}
          >
            {/* Decorative glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#00C44F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Author row */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[activeIndex]} flex items-center justify-center font-black text-lg text-white shadow-md`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">{review.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{review.role} &bull; {review.location}, Nigeria</p>
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={goToPrev}
                    className="p-2.5 rounded-xl glass-card hover:border-[#00D053]/40 text-slate-500 hover:text-[#00D053] transition-all duration-200 cursor-pointer active:scale-90"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="p-2.5 rounded-xl glass-card hover:border-[#00D053]/40 text-slate-500 hover:text-[#00D053] transition-all duration-200 cursor-pointer active:scale-90"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? "w-7 bg-[#00C44F]" : "w-2 bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
