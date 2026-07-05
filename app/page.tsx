import { ArrowRight, Bell, CheckCircle2, CreditCard, Globe, PhoneCall, Camera, Users, Feather, Music, Send, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";

const features = [
  {
    icon: CreditCard,
    title: "Fast Checkout",
    description: "Save your preferred payment methods and complete purchases in a single tap.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Bank-grade protection keeps every transaction safe and private.",
  },
  {
    icon: Sparkles,
    title: "Smart Bundles",
    description: "Curated data plans that match your everyday needs and budget.",
  },
  {
    icon: Globe,
    title: "Network Coverage",
    description: "Access MTN, Airtel, Glo and 9mobile with one unified app.",
  },
];

const stats = [
  { label: "Instant Delivery", value: "Seconds", icon: Send },
  { label: "Trusted Support", value: "24/7", icon: Bell },
  { label: "Success Rate", value: "99%", icon: CheckCircle2 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6FFF5] text-[#1F2937]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5 lg:px-6">
          <Logo className="h-10" showText />
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#0A1128] md:flex">
            <a href="#about" className="transition text-[#0A1128] hover:text-[#00A86B]">About</a>
            <a href="#features" className="transition text-[#0A1128] hover:text-[#00A86B]">Features</a>
            <a href="#networks" className="transition text-[#0A1128] hover:text-[#00A86B]">Networks</a>
            <a href="#contact" className="transition text-[#0A1128] hover:text-[#00A86B]">Support</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-[#00A86B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,168,107,0.18)] transition hover:bg-[#008b58] md:inline-flex">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section
          className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-[#0B3E24]/35" />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 pb-28 pt-40 text-center text-white sm:px-5 sm:pt-52 sm:pb-32 lg:gap-20">
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Fast, Secure & Affordable Data Subscription
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              This platform brings mobile data, airtime, bills and wallet payments into one delightful experience. Buy instantly, track delivery, and manage your balance with ease.
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-[18px] bg-white px-7 py-4 text-base font-semibold text-[#0F2D1B] shadow-[0_20px_50px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Get Started
                <ArrowRight className="ml-3 h-4 w-4 text-[#0F2D1B]" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-[18px] border border-white/80 bg-white/10 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6 mt-24">
          <div className="mx-auto grid max-w-3xl gap-10 rounded-[32px] bg-white p-8 shadow-[0_40px_100px_rgba(0,0,0,0.08)] text-center sm:p-10">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#047A48]">About the app</span>
              <h2 className="mx-auto text-3xl font-black tracking-tight text-[#0F2D1B] sm:text-4xl">Built for fast, reliable mobile recharge.</h2>
              <p className="mx-auto max-w-2xl text-base leading-8 text-[#475059]">
                A modern platform for buying data, airtime and paying bills in a few taps. It combines clear pricing, quick delivery and a simple wallet to keep your mobile spending smooth and secure.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Clear pricing",
                    detail: "See all available plans and fees upfront so you can choose with confidence.",
                  },
                  {
                    title: "Simple purchases",
                    detail: "Complete transactions quickly without confusing menus or extra steps.",
                  },
                  {
                    title: "Instant confirmation",
                    detail: "Receive delivery updates immediately after payment is processed.",
                  },
                  {
                    title: "Safe wallet",
                    detail: "Keep your balance secure and ready for the next recharge.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-[#E4F3E9] bg-[#F8FFF7] p-5">
                    <p className="text-sm font-semibold text-[#047A48]">{item.title}</p>
                    <p className="mt-2 text-sm text-[#475059]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto mt-24 max-w-7xl px-4 sm:px-5 lg:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#047A48]">Features</p>
            <h2 className="mt-4 text-3xl font-black text-[#0F2D1B] sm:text-4xl">Everything you need for mobile recharge.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[28px] border border-[#E4F3E9] bg-white p-8 text-center shadow-[0_24px_65px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#E8FFF2] text-[#047A48] shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F2D1B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475059]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl px-5 pb-20">
          <div className="rounded-[32px] bg-gradient-to-r from-[#E8FFF2] via-white to-[#F8FFF7] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
            <div className="grid gap-8 md:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[28px] bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#00A86B] text-white shadow-[0_18px_40px_rgba(0,168,107,0.18)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-6 text-5xl font-black text-[#0F2D1B]">{item.value}</p>
                    <h3 className="mt-4 text-lg font-bold text-[#0F2D1B]">{item.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#0F2D1B] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 md:grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B2B19] px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#8BF0AA]">
              Data app for modern users
            </div>
            <p className="max-w-sm text-base leading-7 text-[#E4EFE5]">
              The easiest way to buy data, airtime, and pay bills. Fast delivery, clear pricing, and built for users who want a smarter mobile recharge experience.
            </p>
            <p className="text-sm text-[#A8CBB0]">© 2026 EammierHub. All rights reserved.</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8BF0AA]">Explore</p>
            <ul className="mt-6 space-y-3 text-sm text-[#CAD9C0]">
              <li><a href="#about" className="transition hover:text-white">About</a></li>
              <li><a href="#features" className="transition hover:text-white">Features</a></li>
              <li><a href="#networks" className="transition hover:text-white">Networks</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8BF0AA]">Need help?</p>
            <ul className="mt-6 space-y-3 text-sm text-[#CAD9C0]">
              <li><a href="mailto:eammier@gmail.com" className="transition hover:text-white">eammier@gmail.com</a></li>
              <li><a href="tel:+2348133870032" className="transition hover:text-white">081 338 70032</a></li>
              <li className="text-sm text-[#A8CBB0]">Available 24/7</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8BF0AA]">Follow us</p>
            <div className="mt-6 flex items-center gap-4 text-[#CAD9C0]">
              <a href="https://wa.me/2348133870032" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="WhatsApp">
                <PhoneCall className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="Facebook">
                <Users className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="Twitter">
                <Feather className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="TikTok">
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
