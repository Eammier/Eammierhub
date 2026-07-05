"use client";

import React, { useState, useEffect } from "react";
import {
  Wifi,
  Battery,
  Bell,
  Plus,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  MapPin,
  Search,
  Truck,
  Wallet2,
  History,
  CheckCircle2,
} from "lucide-react";

export default function SmartphoneMockup() {
  // Simulator States
  const [balance, setBalance] = useState(12450.0);
  const [transactions, setTransactions] = useState([
    {
      id: "txn-1",
      title: "Delivery Fee: Order #EH-309",
      amount: -1200.00,
      type: "debit",
      time: "Just now",
      status: "Delivered",
    },
    {
      id: "txn-2",
      title: "Wallet Funded via Bank Transfer",
      amount: 15000.00,
      type: "credit",
      time: "2 hours ago",
      status: "Success",
    },
    {
      id: "txn-3",
      title: "Delivery Fee: Order #EH-298",
      amount: -850.00,
      type: "debit",
      time: "Yesterday",
      status: "Delivered",
    },
  ]);

  // Simulation controls
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [pickup, setPickup] = useState("Lekki Phase 1, Lagos");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("Bike");
  const [isProcessing, setIsProcessing] = useState(false);
  const [assigningRider, setAssigningRider] = useState(false);
  const [successAnimation, setSuccessAnimation] = useState(false);

  // Price mapping for simulation
  const prices: { [key: string]: number } = {
    Bike: 1200,
    Car: 2500,
    Van: 5000,
  };

  // Simulate wallet deposits
  useEffect(() => {
    const timer = setTimeout(() => {
      setBalance((prev) => prev + 2500.00);
      setTransactions((prev) => [
        {
          id: `txn-${Date.now()}`,
          title: "Merchant Payout Received",
          amount: 2500.00,
          type: "credit",
          time: "1m ago",
          status: "Success",
        },
        ...prev,
      ]);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dropoff.trim()) return;

    setIsProcessing(true);

    // Step 1: Process Payment
    setTimeout(() => {
      setIsProcessing(false);
      setAssigningRider(true);

      // Step 2: Assign Rider
      setTimeout(() => {
        setAssigningRider(false);
        setSuccessAnimation(true);
        const cost = prices[vehicle];
        setBalance((prev) => prev - cost);
        setTransactions((prev) => [
          {
            id: `txn-${Date.now()}`,
            title: `Delivery Dispatch: ${vehicle}`,
            amount: -cost,
            type: "debit",
            time: "Just now",
            status: "En Route",
          },
          ...prev,
        ]);

        // Step 3: Success Completion
        setTimeout(() => {
          setSuccessAnimation(false);
          setShowBookingModal(false);
          setDropoff("");
        }, 2200);
      }, 2000);
    }, 1200);
  };

  return (
    <div className="relative mx-auto w-[310px] h-[640px] bg-slate-900 rounded-[45px] p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[8px] border-slate-800 dark:border-slate-700/60 ring-1 ring-white/10 overflow-hidden hover:scale-[1.02] transition-transform duration-500 animate-float">
      {/* Speaker Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-36 bg-slate-900 rounded-b-2xl z-50 flex items-center justify-center gap-1.5">
        <div className="w-12 h-1 bg-slate-700 rounded-full" />
        <div className="w-2.5 h-2.5 bg-slate-800 rounded-full" />
      </div>

      {/* Screen Container */}
      <div className="w-full h-full bg-slate-50 dark:bg-[#070e1b] rounded-[36px] overflow-hidden flex flex-col relative text-slate-800 dark:text-slate-100 select-none">
        
        {/* Device Status Bar */}
        <div className="h-9 px-6 pt-1 flex justify-between items-center bg-white/50 dark:bg-slate-900/40 backdrop-blur-md text-xs font-semibold text-slate-600 dark:text-slate-400 z-10">
          <span>13:20</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto px-4 pt-3 pb-6 no-scrollbar flex flex-col gap-4">
          
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#00C44F]/15 flex items-center justify-center text-sm font-bold text-[#00C44F] border border-[#00C44F]/20">
                EH
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Merchant Account</p>
                <h5 className="text-xs font-bold font-heading">Mustapha Kola</h5>
              </div>
            </div>
            <button className="relative w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
          </div>

          {/* Wallet Balance Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00D053] to-[#00A340] p-4 text-white shadow-lg shadow-[#00D053]/10">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            <span className="text-[10px] font-medium text-white/80 tracking-wide uppercase">Delivery Wallet</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-lg font-black font-heading">₦</span>
              <span className="text-2xl font-black font-heading tracking-tight">
                {balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className="flex gap-2.5 mt-4">
              <button
                onClick={() => setShowBookingModal(true)}
                className="flex-1 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 active:scale-95 transition-all text-[11px] font-bold flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Book Delivery
              </button>
              <button className="flex-1 py-1.5 rounded-lg bg-black/15 hover:bg-black/25 text-[11px] font-bold flex items-center justify-center gap-1 cursor-pointer">
                <ArrowUpRight className="w-3.5 h-3.5" /> Withdraw
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h6 className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Quick Actions</h6>
            <div className="grid grid-cols-3 gap-2">
              
              {/* New Booking */}
              <button
                onClick={() => setShowBookingModal(true)}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 hover:border-[#00D053]/40 transition-colors cursor-pointer text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00D053]/10 flex items-center justify-center text-[#00D053]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-semibold tracking-tight leading-tight">New Order</span>
              </button>

              {/* Track Order */}
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 text-center cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Search className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-semibold tracking-tight leading-tight">Track Package</span>
              </button>

              {/* Riders */}
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 text-center cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-semibold tracking-tight leading-tight">Manage Riders</span>
              </button>

            </div>
          </div>

          {/* Transactions List */}
          <div className="flex-1 flex flex-col min-h-[160px]">
            <div className="flex justify-between items-center mb-2">
              <h6 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Deliveries</h6>
              <span className="text-[9px] font-semibold text-[#00D053] flex items-center gap-0.5 cursor-pointer">
                <History className="w-3 h-3" /> History
              </span>
            </div>
            
            <div className="flex flex-col gap-2 flex-1">
              {transactions.map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-900/80"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        txn.type === "credit"
                          ? "bg-[#00D053]/10 text-[#00D053]"
                          : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {txn.type === "credit" ? (
                        <TrendingUp className="w-3.5 h-3.5" />
                      ) : (
                        <TrendingDown className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold leading-tight line-clamp-1">{txn.title}</p>
                      <p className="text-[8px] text-slate-400 mt-0.5">{txn.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-[10px] font-black font-heading ${
                        txn.type === "credit" ? "text-[#00D053]" : "text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {txn.type === "credit" ? "+" : "-"}₦{Math.abs(txn.amount).toFixed(2)}
                    </p>
                    <span className="text-[7px] text-[#00C44F] bg-[#EAF7EE] dark:bg-emerald-950/20 px-1 rounded-sm font-semibold">
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- Interactive Booking Modal Simulator --- */}
        {showBookingModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex items-end">
            <div className="w-full bg-white dark:bg-[#0b1528] rounded-t-3xl p-4 border-t border-slate-100 dark:border-slate-800 text-left transition-transform duration-300">
              
              {/* Modal Success & Dispatch States */}
              {successAnimation ? (
                <div className="h-56 flex flex-col items-center justify-center text-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-[#00D053] animate-bounce" />
                  <div>
                    <h6 className="text-sm font-bold text-slate-900 dark:text-slate-100">Rider Dispatched!</h6>
                    <p className="text-[10px] text-slate-450 mt-1">Bike rider on the way to pickup</p>
                  </div>
                </div>
              ) : assigningRider ? (
                <div className="h-56 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-10 h-10 border-4 border-[#00D053] border-t-transparent rounded-full animate-spin" />
                  <div>
                    <h6 className="text-sm font-bold text-slate-900 dark:text-slate-100 animate-pulse">Finding Nearby Riders...</h6>
                    <p className="text-[10px] text-slate-400 mt-1">Optimizing route details</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookDelivery} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h6 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-heading">Book Delivery</h6>
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>

                  {/* Pickup Address */}
                  <div>
                    <label className="text-[9px] text-slate-400 block mb-1">Pickup Address</label>
                    <input
                      type="text"
                      required
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#00D053]"
                    />
                  </div>

                  {/* Dropoff Address */}
                  <div>
                    <label className="text-[9px] text-slate-400 block mb-1">Dropoff Address</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter dropoff location"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#00D053]"
                    />
                  </div>

                  {/* Vehicle Selector */}
                  <div>
                    <span className="text-[9px] text-slate-400">Vehicle Type</span>
                    <div className="grid grid-cols-3 gap-1.5 mt-1">
                      {["Bike", "Car", "Van"].map((veh) => (
                        <button
                          key={veh}
                          type="button"
                          onClick={() => setVehicle(veh)}
                          className={`py-1.5 text-[9px] font-bold rounded-md border transition-all cursor-pointer ${
                            vehicle === veh
                              ? "bg-[#00D053] border-[#00D053] text-white"
                              : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {veh}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pay button */}
                  <button
                    type="submit"
                    disabled={isProcessing || !dropoff.trim()}
                    className="w-full py-2.5 bg-[#00D053] hover:bg-[#00A340] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? "Processing..." : `Pay ₦${prices[vehicle].toLocaleString()}.00`}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Virtual Home Indicator Bar */}
        <div className="h-6 w-full flex items-center justify-center bg-white/20 dark:bg-slate-900/10 backdrop-blur-md">
          <div className="w-24 h-1 bg-slate-400 dark:bg-slate-700 rounded-full" />
        </div>

      </div>
    </div>
  );
}
