"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

        {/* MRT Corp Copyright Footer */}
        <div className="mt-4 rounded-xl overflow-hidden">
          <div className="bg-[#1e3a8a] px-6 py-8 flex flex-col items-center text-center">
            <Image
              src="/mrt-logo.png"
              alt="MRT Corp"
              width={120}
              height={54}
              className="mb-3 brightness-0 invert"
            />
            <p className="text-white/70 text-[11px] mb-2">Copyright&copy;2023</p>
            <p className="text-white text-[11px] font-semibold leading-snug">
              Malaysia Rapid Transit Corporation Sdn Bhd (902884V)
            </p>
            <p className="text-white/70 text-[10px] italic mt-1">
              Formerly known as Mass Rapid Transit Corporation Sdn Bhd
            </p>
            <p className="text-white/70 text-[10px] mt-1.5">All Rights Reserved</p>
            <Link
              href="https://www.mymrt.com.my/privacy-notice-pdpa/"
              target="_blank"
              className="text-white text-[11px] underline mt-2"
            >
              Privacy Notice
            </Link>
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
