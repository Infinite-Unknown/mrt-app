"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { allStations, kajangStations } from "@/data/stations";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredStations = query.length > 0
    ? allStations.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const matchingLines = query.length > 0
    ? [
        ...(kajangStations.some((s) => s.name.toLowerCase().includes(query.toLowerCase()))
          ? [{ name: "Kajang Line", color: "#01873e", count: 31, range: "Sungai Buloh ↔ Kajang" }]
          : []),
      ]
    : [];

  return (
    <div className="flex flex-col">
      <Header title="Search" showBack />

      <div className="p-4">
        {/* Search Input */}
        <div className="bg-white rounded-3xl h-12 flex items-center px-4 relative">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stations, lines..."
            className="flex-1 ml-3 text-sm text-text-dark bg-transparent border-none outline-none placeholder:text-text-muted"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center border-none cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Results */}
        {query.length > 0 && (
          <div className="mt-4">
            {/* Stations */}
            <p className="text-sm font-semibold text-text-muted mb-2">Stations</p>
            <div className="flex flex-col gap-2">
              {filteredStations.slice(0, 5).map((station) => {
                const lineColor = station.line === "kajang" ? "#01873e" : "#f7cd0c";
                const lineName = station.line === "kajang" ? "MRT Kajang Line" : "MRT Putrajaya Line";
                return (
                  <Link key={station.id} href={`/station/${station.id}`} className="no-underline">
                    <div className="bg-white rounded-xl px-4 py-3 flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3 shrink-0"
                        style={{ backgroundColor: lineColor }}
                      />
                      <div className="flex-1">
                        <p className="text-[15px] font-semibold text-text-dark">{station.name}</p>
                        <p className="text-xs text-text-light">{lineName}</p>
                      </div>
                      <span className="text-lg text-gray-300">›</span>
                    </div>
                  </Link>
                );
              })}
              {filteredStations.length === 0 && (
                <p className="text-sm text-text-light py-4 text-center">No stations found</p>
              )}
            </div>

            {/* Lines & Routes */}
            {matchingLines.length > 0 && (
              <>
                <p className="text-sm font-semibold text-text-muted mt-4 mb-2">Lines & Routes</p>
                {matchingLines.map((line) => (
                  <Link key={line.name} href="/map" className="no-underline">
                    <div className="bg-white rounded-xl px-4 py-3 flex items-center">
                      <div
                        className="w-3 h-9 rounded-md mr-3 shrink-0"
                        style={{ backgroundColor: line.color }}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-text-dark">
                          {line.name} (includes {filteredStations[0]?.name})
                        </p>
                        <p className="text-xs text-text-light">
                          {line.count} stations • {line.range}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
