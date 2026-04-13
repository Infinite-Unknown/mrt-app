"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function PlannerPage() {
  const [from, setFrom] = useState("Bukit Bintang");
  const [to, setTo] = useState("KLCC");

  const swapStations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="flex flex-col">
      <Header title="Trip Planner" />

      <div className="p-4 flex flex-col gap-3">
        {/* Input Card */}
        <div className="bg-white rounded-xl p-4 relative">
          <label className="text-[10px] font-semibold text-text-muted">FROM</label>
          <div className="bg-bg rounded-lg h-10 flex items-center px-4 mt-1">
            <span className="text-sm text-text-dark">{from}</span>
          </div>

          <div className="mt-3">
            <label className="text-[10px] font-semibold text-text-muted">TO</label>
            <div className="bg-bg rounded-lg h-10 flex items-center px-4 mt-1">
              <span className="text-sm text-text-dark">{to}</span>
            </div>
          </div>

          {/* Swap Button */}
          <button
            onClick={swapStations}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg flex items-center justify-center border-none cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
              <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" />
            </svg>
          </button>
        </div>

        {/* Departure Time */}
        <div className="bg-white rounded-xl px-4 py-3 flex justify-between items-center">
          <div>
            <p className="text-xs text-text-muted">Depart at</p>
            <p className="text-sm font-semibold text-text-dark mt-0.5">Today, 8:30 AM</p>
          </div>
          <span className="text-xs text-link">Change ›</span>
        </div>

        {/* Find Routes Button */}
        <button className="bg-navy text-white rounded-3xl h-12 text-base font-semibold border-none cursor-pointer w-full">
          Find Routes
        </button>

        {/* Recommended Routes */}
        <h3 className="text-base font-semibold text-navy mt-2">Recommended Routes</h3>

        {/* Route 1 - Fastest */}
        <div className="bg-white rounded-xl p-4">
          <span className="text-[10px] font-semibold text-status-green">Fastest</span>
          <p className="text-base font-semibold text-text-dark mt-1">12 min • Direct</p>
          <p className="text-[13px] text-text-light mt-1">
            {from} → Merdeka → {to}
          </p>
          <div className="mt-3 h-[3px] bg-kajang rounded-sm" />
        </div>

        {/* Route 2 - Alternative */}
        <div className="bg-white rounded-xl p-4">
          <span className="text-[10px] font-semibold text-alert-orange">Alternative</span>
          <p className="text-base font-semibold text-text-dark mt-1">18 min • 1 Transfer</p>
          <p className="text-[13px] text-text-light mt-1">
            {from} → Dang Wangi → {to}
          </p>
          <div className="mt-3 flex gap-0.5">
            <div className="flex-1 h-[3px] bg-kajang rounded-sm" />
            <div className="flex-1 h-[3px] bg-alert-red rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
