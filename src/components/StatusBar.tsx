import Image from "next/image";

export default function StatusBar() {
  return (
    <div className="bg-white h-11 flex items-center justify-center shrink-0">
      <Image
        src="/mrt-logo.png"
        alt="MRT Corp"
        width={80}
        height={36}
        priority
        className="object-contain"
      />
    </div>
  );
}
