"use client";

import React from "react";
import Logo from "./Logo";
import { Send } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Security Standards", href: "#" },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#020b04] pt-20 pb-10 border-t border-green-100 dark:border-green-900/20 transition-colors duration-300">

      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo and About */}
          <div className="flex flex-col gap-6">
            <Logo className="h-10" />
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Nigeria&apos;s trusted smart logistics and delivery management platform. Connecting businesses, dispatch riders, and customers for fast, secure, and optimized intra-city deliveries.
            </p>
            {/* Circular social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-green-50 dark:bg-[#0d2c14] border border-green-100 dark:border-green-900/40 text-slate-500 dark:text-green-400 hover:text-white hover:bg-[#00C44F] dark:hover:bg-[#00C44F] hover:border-[#00C44F] hover:scale-110 transition-all duration-200 flex items-center justify-center"
                    aria-label={`Follow EammierHub on ${social.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#00D053] dark:hover:text-[#00D053] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00D053] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="flex flex-col gap-3.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#00D053] dark:hover:text-[#00D053] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00D053] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1 uppercase tracking-wider">
                Subscribe to Updates
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Receive the latest platform optimizations, rider updates, and merchant features directly in your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full glass-card p-1.5 rounded-xl focus-within:border-[#00D053]/50 transition-all"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-transparent px-3 py-1.5 text-sm border-0 focus:outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="p-2.5 bg-[#00D053] hover:bg-[#00A340] text-white rounded-lg transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                aria-label="Submit newsletter form"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />
          <p className="text-sm text-slate-400 dark:text-slate-550">
            &copy; {new Date().getFullYear()} EammierHub. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-550">
            Designed for secure, reliable logistics and rider management in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
