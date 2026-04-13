export interface BusRoute {
  code: string;
  from: string;
  to: string;
  nextBusMin: number;
  frequencyMin: number;
}

export const feederBuses: BusRoute[] = [
  { code: "T400", from: "Cochrane", to: "Bandar Tun Razak", nextBusMin: 3, frequencyMin: 30 },
  { code: "T401", from: "Cochrane", to: "Bandar Sri Permaisuri", nextBusMin: 8, frequencyMin: 30 },
  { code: "T352", from: "Cochrane", to: "Taman Shamelin", nextBusMin: 14, frequencyMin: 30 },
];
