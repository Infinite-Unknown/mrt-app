"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function MorePage() {
  const [lang, setLang] = useState<"en" | "bm">("en");

  return (
    <div className="flex flex-col">
      <Header title="More" />

      <div className="p-4 flex flex-col gap-2">
        {/* Language Toggle */}
        <div className="bg-white rounded-xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-text-dark">Language</p>
              <p className="text-[10px] text-text-light mt-0.5">
                Switch between English and Bahasa Melayu
              </p>
            </div>
            <div className="flex rounded-lg overflow-hidden border border-border">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-1.5 text-xs font-medium border-none cursor-pointer transition-all ${
                  lang === "en" ? "bg-navy text-white" : "bg-white text-text-light"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("bm")}
                className={`px-4 py-1.5 text-xs font-medium border-none cursor-pointer transition-all ${
                  lang === "bm" ? "bg-navy text-white" : "bg-white text-text-light"
                }`}
              >
                BM
              </button>
            </div>
          </div>
        </div>

        {/* Settings Items */}
        <SettingsItem label="Notifications" />
        <SettingsItem label="Accessibility Settings" />
        <SettingsItem label="Download Offline Map" />
        <SettingsItem label="About MyMRT" />
        <SettingsItem label="Terms & Privacy" />
        <SettingsItem label="Help & Feedback" />

        {/* MRT Corp Banner */}
        <div className="mt-4 bg-white rounded-xl overflow-hidden">
          <div className="h-[140px] bg-gradient-to-br from-[#1e3a5f] to-[#2a5580] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-1 mb-2">
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
                  <path d="M20 2C14 2 8 6 6 10C4 14 6 18 10 20" stroke="#e53935" strokeWidth="2.5" fill="none" />
                  <path d="M20 2C26 2 32 6 34 10C36 14 34 18 30 20" stroke="white" strokeWidth="2.5" fill="none" />
                  <path d="M10 20C14 22 18 22 20 20C22 22 26 22 30 20" stroke="#01873e" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
              <p className="text-lg font-bold">MRT Corp</p>
              <p className="text-xs opacity-70 mt-1">Mass Rapid Transit Corporation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsItem({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer">
      <span className="text-sm text-text-dark">{label}</span>
      <span className="text-text-muted text-base">›</span>
    </div>
  );
}
