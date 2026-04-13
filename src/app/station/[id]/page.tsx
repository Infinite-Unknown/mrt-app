"use client";

import { use } from "react";
import Header from "@/components/Header";
import { getStation } from "@/data/stations";

export default function StationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const station = getStation(id);

  if (!station) {
    return (
      <div className="flex flex-col">
        <Header title="Station" showBack backHref="/map" />
        <div className="p-5 text-center text-text-light">Station not found</div>
      </div>
    );
  }

  const lineColor = station.line === "kajang" ? "#01873e" : "#f7cd0c";
  const lineName = station.line === "kajang" ? "MRT Kajang Line" : "MRT Putrajaya Line";

  return (
    <div className="flex flex-col">
      <Header title={station.name} showBack backHref="/map" />

      <div className="p-4 flex flex-col gap-4">
        {/* Station Header Card */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-md mt-1.5 shrink-0" style={{ backgroundColor: lineColor }} />
            <div>
              <h2 className="text-lg font-semibold text-navy">{station.name} Station</h2>
              <p className="text-[13px] text-text-light mt-1">{lineName}</p>
              <p className="text-xs text-status-green mt-1">Open • Next train: 7:00 AM</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2">
          <ActionButton label="Exits" icon={<ExitsIcon />} />
          <ActionButton label="Facilities" icon={<FacilitiesIcon />} />
          <ActionButton label="Timetable" icon={<TimetableIcon />} />
          <ActionButton label="Feeder Bus" icon={<FeederIcon />} />
        </div>

        {/* Transit Map */}
        <div>
          <h3 className="text-base font-semibold text-navy mb-2">Transit Map</h3>
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="h-[180px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
              {/* Simplified transit map visualization */}
              <div className="absolute inset-4">
                <svg width="100%" height="100%" viewBox="0 0 300 140" fill="none">
                  {/* Horizontal lines */}
                  <line x1="20" y1="40" x2="280" y2="40" stroke="#01873e" strokeWidth="3" />
                  <line x1="20" y1="70" x2="280" y2="70" stroke="#e53935" strokeWidth="3" />
                  <line x1="20" y1="100" x2="280" y2="100" stroke="#f7cd0c" strokeWidth="3" />
                  {/* Station dots */}
                  <circle cx="80" cy="40" r="5" fill="white" stroke="#01873e" strokeWidth="2" />
                  <circle cx="150" cy="40" r="5" fill="white" stroke="#01873e" strokeWidth="2" />
                  <circle cx="220" cy="40" r="5" fill="white" stroke="#01873e" strokeWidth="2" />
                  <circle cx="150" cy="70" r="5" fill="white" stroke="#e53935" strokeWidth="2" />
                  <circle cx="150" cy="100" r="5" fill="white" stroke="#f7cd0c" strokeWidth="2" />
                  {/* Interchange */}
                  <circle cx="150" cy="40" r="8" fill="none" stroke="#333" strokeWidth="1.5" />
                  <line x1="150" y1="40" x2="150" y2="100" stroke="#333" strokeWidth="1" strokeDasharray="3 2" />
                  {/* Labels */}
                  <text x="150" y="130" textAnchor="middle" fontSize="10" fill="#777">{station.name}</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby */}
        <div>
          <h3 className="text-base font-semibold text-navy mb-2">Nearby</h3>
          <div className="grid grid-cols-2 gap-2">
            <NearbyCard
              label="Park & Ride"
              available={station.hasParking}
              icon={<ParkNearbyIcon />}
            />
            <NearbyCard
              label="Feeder Bus"
              available={station.hasFeederBus}
              icon={<BusNearbyIcon />}
            />
          </div>
        </div>

        {/* More Info */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-text-dark">More Station Info</span>
          <span className="text-text-muted text-sm">▾</span>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-3 cursor-pointer">
      <div className="text-text-medium mb-1.5">{icon}</div>
      <span className="text-[10px] text-text-medium text-center">{label}</span>
    </div>
  );
}

function NearbyCard({ label, available, icon }: { label: string; available: boolean; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[10px] p-3 flex items-center gap-2">
      <div className="text-text-light">{icon}</div>
      <div>
        <p className="text-[13px] font-semibold text-text-dark">{label}</p>
        <p className="text-[11px] text-text-light">
          {available ? "Available" : "Not available"}
        </p>
      </div>
    </div>
  );
}

function ExitsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

function FacilitiesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function TimetableIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M12 14v4M8 14v4" />
    </svg>
  );
}

function FeederIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="14" rx="3" />
      <path d="M3 10h18M7.5 20v-3M16.5 20v-3" />
    </svg>
  );
}

function ParkNearbyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 16V8h4a3 3 0 010 6H9" />
    </svg>
  );
}

function BusNearbyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#01873e" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="14" rx="3" />
      <path d="M3 10h18M7.5 20v-3M16.5 20v-3" />
    </svg>
  );
}
