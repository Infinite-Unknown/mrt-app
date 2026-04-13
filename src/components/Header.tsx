"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  backHref?: string;
}

export default function Header({ title, showBack = false, backHref }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-white h-14 flex items-center justify-center relative px-4 shrink-0">
      {showBack && (
        <button
          onClick={() => (backHref ? router.push(backHref) : router.back())}
          className="absolute left-4 text-link text-sm font-normal bg-transparent border-none cursor-pointer"
        >
          ‹ Back
        </button>
      )}
      <h1 className="text-lg font-semibold text-navy m-0">{title}</h1>
    </div>
  );
}
