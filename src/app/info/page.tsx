"use client";

import { useState } from "react";
import Header from "@/components/Header";

const categories = [
  { title: "About MyMRT", description: "Overview, vision, corporate info" },
  { title: "Project Updates", description: "Latest construction & development news" },
  { title: "Tenders & Procurement", description: "Open tenders, vendor information" },
  { title: "Commuter Guide", description: "Fares, operating hours, accessibility" },
  { title: "Safety & Regulations", description: "Rules, emergency procedures" },
  { title: "Contact & Feedback", description: "Customer service, complaint channels" },
];

export default function InfoPage() {
  return (
    <div className="flex flex-col">
      <Header title="Information" />

      <div className="p-4">
        <h3 className="text-base font-semibold text-navy mb-3">Categories</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <InfoSection key={cat.title} title={cat.title} description={cat.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoSection({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-4 flex items-center justify-between bg-transparent border-none cursor-pointer text-left"
      >
        <div>
          <p className="text-[15px] font-semibold text-text-dark">{title}</p>
          <p className="text-xs text-text-light mt-0.5">{description}</p>
        </div>
        <span className={`text-text-muted text-base transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-text-light border-t border-gray-100 pt-3">
          Content for {title} would appear here. This is a demo placeholder.
        </div>
      )}
    </div>
  );
}
