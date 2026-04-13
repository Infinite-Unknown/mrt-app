"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { feederBuses } from "@/data/buses";

export default function FeederBusPage() {
  const [view, setView] = useState<"list" | "map">("list");

  return (
    <div className="flex flex-col">
      <Header title="Feeder Bus" showBack />

      <div className="p-4 flex flex-col gap-3">
        {/* Connected Station */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-xs text-text-light">Connected to: Cochrane Station</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        {/* Bus Routes */}
        {view === "list" ? (
          <div className="flex flex-col gap-2">
            {feederBuses.map((bus) => (
              <div key={bus.code} className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-kajang text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {bus.code}
                  </span>
                  <span className="text-[13px] text-text-dark">
                    {bus.from} ↔ {bus.to}
                  </span>
                </div>
                <p className="text-xs text-text-dark">Next bus: {bus.nextBusMin} mins</p>
                <p className="text-[11px] text-text-light mt-0.5">
                  Frequency: every {bus.frequencyMin} mins
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl overflow-hidden">
            {/* Single route card for map view */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-kajang text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  T352
                </span>
                <span className="text-[13px] text-text-dark">
                  Cochrane ↔ Taman Shamelin
                </span>
              </div>
              <p className="text-xs text-text-dark">Next bus: 14 mins</p>
              <p className="text-[11px] text-text-light mt-0.5">Frequency: every 30 mins</p>
            </div>
            {/* Map placeholder */}
            <div className="h-[300px] bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
              <div className="text-center text-text-light">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm mt-2">Map view</p>
              </div>
            </div>
          </div>
        )}

        {/* View Toggle */}
        <div className="bg-white rounded-xl p-1 flex">
          <button
            onClick={() => setView("list")}
            className={`flex-1 py-2.5 rounded-lg text-[13px] font-medium border-none cursor-pointer transition-all ${
              view === "list" ? "bg-navy text-white" : "bg-transparent text-text-light"
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setView("map")}
            className={`flex-1 py-2.5 rounded-lg text-[13px] font-medium border-none cursor-pointer transition-all ${
              view === "map" ? "bg-navy text-white" : "bg-transparent text-text-light"
            }`}
          >
            Map View
          </button>
        </div>
      </div>
    </div>
  );
}
