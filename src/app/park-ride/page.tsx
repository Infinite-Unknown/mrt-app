"use client";

import Header from "@/components/Header";

export default function ParkRidePage() {
  return (
    <div className="flex flex-col">
      <Header title="Park & Ride" showBack />

      <div className="p-4 flex flex-col gap-3">
        {/* Station Selector */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-[15px] font-semibold text-text-dark">Bandar Utama</span>
          <span className="text-text-muted">▾</span>
        </div>

        {/* Parking Image Placeholder */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="h-[180px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center text-text-light">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-sm mt-2">Parking facility photo</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <h3 className="text-base font-semibold text-navy">Details</h3>

        <DetailRow
          icon={<BuildingIcon />}
          label="OPERATED BY"
          value="Third Parties Operator Bandar Utama City Corporation Sdn Bhd, BUCC Hotline: +603-7726 3171"
        />
        <DetailRow
          icon={<CarIcon />}
          label="Car Parking Lots"
          value="500"
          isCount
        />
        <DetailRow
          icon={<MotorcycleIcon />}
          label="Motorcycle Parking Lots"
          value="-"
          isCount
        />
        <DetailRow
          icon={<MoneyIcon />}
          label="PARKING CHARGES"
          value="Determined by Park & Ride owner"
        />
        <DetailRow
          icon={<ClockIcon />}
          label="OPERATING HOURS"
          value="Determined by Park & Ride owner"
        />
      </div>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
  isCount = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isCount?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center gap-4">
      <div className="w-[52px] h-[52px] rounded-xl bg-bg flex items-center justify-center shrink-0 text-text-light">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        {isCount ? (
          <>
            <p className="text-base font-semibold text-text-dark">{value}</p>
            <p className="text-xs text-text-light">{label}</p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold text-text-light uppercase">{label}</p>
            <p className="text-xs text-text-dark mt-0.5 leading-relaxed">{value}</p>
          </>
        )}
      </div>
    </div>
  );
}

function BuildingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2M5 17l-1 2M19 17l1 2M7 13h.01M17 13h.01M7 7l1-3h8l1 3" />
    </svg>
  );
}

function MotorcycleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="5" cy="17" r="3" />
      <circle cx="19" cy="17" r="3" />
      <path d="M5 17h4l3-7h4l3 7" />
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
