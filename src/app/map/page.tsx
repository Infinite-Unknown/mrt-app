"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { kajangStations, putrajayaStations, type Station } from "@/data/stations";

export default function MapPage() {
  const [activeLine, setActiveLine] = useState<"kajang" | "putrajaya">("kajang");
  const stations = activeLine === "kajang" ? kajangStations : putrajayaStations;
  const lineColor = activeLine === "kajang" ? "#01873e" : "#f7cd0c";

  return (
    <div className="flex flex-col">
      <Header title="MRT Line Map" />

      {/* Hero area */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src="/map_train.jpg"
          alt="MRT Kajang Line"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-3xl font-bold leading-tight">MRT</p>
            <p className="text-3xl font-bold leading-tight">
              {activeLine === "kajang" ? "KAJANG" : "PUTRAJAYA"}
            </p>
          </div>
        </div>
      </div>

      {/* Line Toggle */}
      <div className="px-4 -mt-5 relative z-10">
        <div className="bg-white rounded-2xl p-1 flex shadow-md">
          <button
            onClick={() => setActiveLine("kajang")}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all border-none cursor-pointer ${
              activeLine === "kajang"
                ? "bg-kajang text-white shadow-sm"
                : "bg-transparent text-text-light"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="4" width="12" height="8" rx="2" />
            </svg>
            Kajang
          </button>
          <button
            onClick={() => setActiveLine("putrajaya")}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all border-none cursor-pointer ${
              activeLine === "putrajaya"
                ? "bg-putrajaya text-text-dark shadow-sm"
                : "bg-transparent text-text-light"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="4" width="12" height="8" rx="2" />
            </svg>
            Putrajaya
          </button>
        </div>
      </div>

      {/* Station List */}
      <div className="mt-4 px-4 pb-4">
        <div className="bg-white rounded-xl p-4">
          {stations.map((station, i) => (
            <StationRow
              key={station.id}
              station={station}
              lineColor={lineColor}
              isFirst={i === 0}
              isLast={i === stations.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StationRow({
  station,
  lineColor,
  isFirst,
  isLast,
}: {
  station: Station;
  lineColor: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <Link href={`/station/${station.id}`} className="no-underline">
      <div className="flex items-center py-2.5 relative">
        {/* Line and Circle */}
        <div className="w-8 flex flex-col items-center relative mr-3">
          {!isFirst && (
            <div
              className="absolute top-0 w-[3px] h-1/2 -translate-y-px"
              style={{ backgroundColor: lineColor }}
            />
          )}
          <div
            className="w-3 h-3 rounded-full border-[2.5px] bg-white relative z-10"
            style={{ borderColor: lineColor }}
          />
          {!isLast && (
            <div
              className="absolute bottom-0 w-[3px] h-1/2 translate-y-px"
              style={{ backgroundColor: lineColor }}
            />
          )}
        </div>

        {/* Station Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold" style={{ color: lineColor }}>
            {station.code}
          </p>
          <p className="text-sm text-text-dark font-medium">{station.name}</p>
        </div>

        {/* Icons */}
        <div className="flex gap-1.5 items-center ml-2">
          {station.isInterchange && (
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#1565c0" strokeWidth="1.5">
                <path d="M2 8l4-4 4 4" />
              </svg>
            </div>
          )}
          {station.hasParking && (
            <div className="w-5 h-5 rounded-full bg-link flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">P</span>
            </div>
          )}
          {station.hasFeederBus && (
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="#01873e">
                <rect x="1" y="2" width="8" height="6" rx="1.5" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
