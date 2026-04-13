import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[110px] bg-gradient-to-r from-[#1a3355] via-[#2a5580] to-[#1a3355] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a1628_0%,#1e3a5f_50%,#2a5580_100%)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-xs opacity-80">Welcome to</p>
            <p className="text-xl font-bold">MyMRT</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 -mt-6 relative z-10">
        <Link href="/search" className="no-underline">
          <div className="bg-white rounded-3xl h-12 flex items-center px-4 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <span className="ml-3 text-sm text-text-muted">Search station, line, or route...</span>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mt-4">
        <h2 className="text-base font-semibold text-navy mb-3">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          <QuickAction href="/map" label="Lines Map" icon={<MapIcon />} />
          <QuickAction href="/planner" label="Trip Planner" icon={<PlannerIcon />} />
          <QuickAction href="/feeder-bus" label="Feeder Bus" icon={<BusIcon />} />
          <QuickAction href="/park-ride" label="Park & Ride" icon={<ParkIcon />} />
        </div>
      </div>

      {/* Live Status */}
      <div className="px-5 mt-5">
        <h2 className="text-base font-semibold text-navy mb-3">Live Status</h2>
        <div className="flex flex-col gap-2.5">
          <StatusCard
            line="Kajang Line"
            color="#01873e"
            status="Normal Service"
            next="Next: Kota Damansara → 3 min"
          />
          <StatusCard
            line="Putrajaya Line"
            color="#f7cd0c"
            status="Normal Service"
            next="Next: Kwasa Damansara → 5 min"
          />
        </div>
      </div>

      {/* Announcements */}
      <div className="px-5 mt-5 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-semibold text-navy">Announcements</h2>
          <span className="text-xs text-link">See all ›</span>
        </div>
        <div className="bg-announce-bg rounded-xl p-4">
          <p className="text-[13px] font-semibold text-text-dark">
            Weekend maintenance: Kajang Line
          </p>
          <p className="text-[11px] text-text-light mt-1">
            Apr 18-19, partial closure. Tap for details.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="no-underline">
      <div className="bg-white rounded-xl flex flex-col items-center justify-center py-3 px-1 aspect-square">
        <div className="text-text-medium mb-2">{icon}</div>
        <span className="text-[11px] text-text-medium text-center leading-tight">{label}</span>
      </div>
    </Link>
  );
}

function StatusCard({ line, color, status, next }: { line: string; color: string; status: string; next: string }) {
  return (
    <div className="bg-white rounded-xl p-3 flex">
      <div className="w-1 rounded-sm mr-3 self-stretch" style={{ backgroundColor: color }} />
      <div>
        <p className="text-sm font-semibold text-text-dark">{line}</p>
        <p className="text-xs text-status-green mt-0.5">{status}</p>
        <p className="text-xs text-text-light mt-1">{next}</p>
      </div>
    </div>
  );
}

function MapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
      <path d="M3 7l6-3 6 3 6-3v14l-6 3-6-3-6 3V7z" />
      <path d="M9 4v14M15 7v14" />
    </svg>
  );
}

function PlannerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="14" rx="3" />
      <path d="M3 10h18M7.5 20v-3M16.5 20v-3M7 14h.01M17 14h.01" />
    </svg>
  );
}

function ParkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 16V8h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}
