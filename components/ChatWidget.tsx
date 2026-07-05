"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Send, X } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Show the widget after a slight delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    alert(`Message sent: "${message}"\nWe will get back to you via email or WhatsApp!`);
    setMessage("");
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Mini Chat Box */}
      {isOpen && (
        <div className="w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl p-4 animate-slide-up">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00C44F] animate-pulse" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">EammierHub Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-550 dark:text-slate-400 mb-4 leading-relaxed">
            Hello! How can we help you with your deliveries or rider management today? Leave us a message.
          </p>

          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-955 border border-slate-250 dark:border-slate-800 focus:outline-none focus:border-[#00C44F] text-slate-800 dark:text-slate-100"
            />
            <button
              type="submit"
              className="p-2 bg-[#00C44F] hover:bg-[#009E40] text-white rounded-xl transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#00C44F] hover:bg-[#009E40] text-white font-bold text-sm shadow-lg shadow-[#00C44F]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
      >
        <MessageSquare className="w-4 h-4 transition-transform group-hover:rotate-6" />
        <span>Chat with us</span>
      </button>
    </div>
  );
}
