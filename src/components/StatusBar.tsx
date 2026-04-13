export default function StatusBar() {
  return (
    <div className="bg-white h-11 flex items-center justify-center shrink-0">
      {/* MRT Corp Logo */}
      <div className="flex items-center gap-0.5">
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
          {/* Simplified MRT Corp logo */}
          <path d="M20 2C14 2 8 6 6 10C4 14 6 18 10 20" stroke="#e53935" strokeWidth="2.5" fill="none" />
          <path d="M20 2C26 2 32 6 34 10C36 14 34 18 30 20" stroke="#1e3a5f" strokeWidth="2.5" fill="none" />
          <path d="M10 20C14 22 18 22 20 20C22 22 26 22 30 20" stroke="#01873e" strokeWidth="2.5" fill="none" />
        </svg>
        <div className="flex flex-col items-center leading-none">
          <span className="text-[11px] font-bold text-navy tracking-wide">MRT</span>
          <span className="text-[6px] text-text-light tracking-wider">CORP</span>
        </div>
      </div>
    </div>
  );
}
