"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How fast are deliveries completed?",
      answer: "Most intra-city deliveries on EammierHub are completed in under 45 minutes. Our route optimization matching system immediately pairs your order with the nearest available dispatch rider, ensuring rapid pickup and transit.",
    },
    {
      question: "How do I fund my EammierHub delivery wallet?",
      answer: "We support multiple instant funding channels. Upon registration, you are assigned dedicated virtual bank accounts (e.g., Wema Bank, Moniepoint). Transfers made to these accounts fund your wallet instantly, 24/7. You can also fund using debit cards.",
    },
    {
      question: "Is there support for Cash on Delivery (COD)?",
      answer: "Yes, our riders are trained to handle Cash on Delivery securely. Customers can pay via cash or bank transfer to the rider, and the funds are instantly reconciled and reflected in your merchant wallet.",
    },
    {
      question: "What happens if a package is damaged or lost?",
      answer: "Every delivery dispatched through EammierHub is covered by our transit safety guarantee. In the extremely rare event of damage or loss during transit, we conduct an immediate audit and compensate you up to the declared value of the goods.",
    },
    {
      question: "Can I manage multiple warehouse or shop locations?",
      answer: "Absolutely. EammierHub features Multi-Vendor and Multi-Outlet support. You can connect all your warehouse and shop locations to one dashboard and dispatch orders to the shared rider pool seamlessly.",
    },
    {
      question: "How are dispatch riders vetted on the platform?",
      answer: "We enforce strict safety standards. Every rider undergoes rigorous background checks, guarantor verification, and vehicle safety inspections before onboarding, followed by continuous customer ratings audits.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  const AccordionItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
    const isOpen = openIndex === index;
    return (
      <div
        className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
          isOpen
            ? "border-[#00C44F]/40 shadow-md shadow-[#00C44F]/5 bg-white dark:bg-[#0d2c14]"
            : "border-green-100 dark:border-green-900/30 bg-white/70 dark:bg-[#0a1f0e]/60 hover:border-[#00C44F]/25"
        }`}
      >
        <button
          onClick={() => toggle(index)}
          className="w-full flex items-start justify-between p-5 text-left focus:outline-none cursor-pointer group"
        >
          <div className="flex items-start gap-3 pr-4">
            <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-[#00C44F] text-white" : "bg-[#00C44F]/10 text-[#00C44F]"}`}>
              <MessageCircleQuestion className="w-3 h-3" />
            </div>
            <span className={`text-sm font-bold font-heading transition-colors duration-200 ${isOpen ? "text-[#00C44F]" : "text-slate-800 dark:text-slate-200 group-hover:text-[#00C44F]"}`}>
              {faq.question}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${isOpen ? "rotate-180 text-[#00C44F]" : "text-slate-400"}`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pl-[3.25rem] text-sm text-slate-550 dark:text-slate-400 leading-relaxed border-t border-green-50 dark:border-green-900/20 pt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden transition-colors duration-300">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4FEF7] via-white to-[#edfff3] dark:from-[#071A0C] dark:via-[#050f07] dark:to-[#071A0C] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px gradient-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#00D053] tracking-widest uppercase">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400">
            Find answers to common questions about delivery speeds, wallet funding, Cash on Delivery (COD), package safety, and rider vetting.
          </p>
        </div>

        {/* Two-column accordion grid (desktop), single column (mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq, i) => (
              <AccordionItem key={i} faq={faq} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq, i) => (
              <AccordionItem key={i + half} faq={faq} index={i + half} />
            ))}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-550 dark:text-slate-400">
            Still have questions?{" "}
            <a
              href="#cta"
              className="text-[#00C44F] font-bold hover:underline underline-offset-2"
            >
              Contact our support team &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
