"use client";

import React from "react";
import Logo from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-[#00C44F]/15 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo className="h-10" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-gray-600 hover:text-[#00C44F] transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00C44F] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#00C44F] hover:bg-[#009E40] rounded-xl transition-colors duration-200 gap-1.5 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#00C44F] hover:bg-[#EAF7EE] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-[68px]" />
        <div className="bg-white border-b border-[#00C44F]/15 shadow-lg px-6 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-sm font-semibold text-gray-700 hover:text-[#00C44F] border-b border-gray-50 last:border-0 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white bg-[#00C44F] hover:bg-[#009E40] rounded-xl transition-colors gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/10 md:hidden"
        />
      )}
    </>
  );
}
