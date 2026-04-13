export interface Station {
  id: string;
  code: string;
  name: string;
  line: "kajang" | "putrajaya";
  hasParking: boolean;
  hasFeederBus: boolean;
  isInterchange: boolean;
  interchangeLines?: string[];
}

export const kajangStations: Station[] = [
  { id: "sbk01", code: "SBK01", name: "Sungai Buloh", line: "kajang", hasParking: false, hasFeederBus: true, isInterchange: true, interchangeLines: ["KTM"] },
  { id: "sbk02", code: "SBK02", name: "Kampung Selamat", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk03", code: "SBK03", name: "Kwasa Damansara", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Putrajaya Line"] },
  { id: "sbk04", code: "SBK04", name: "Kwasa Sentral", line: "kajang", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "sbk05", code: "SBK05", name: "Kota Damansara", line: "kajang", hasParking: true, hasFeederBus: true, isInterchange: false },
  { id: "sbk06", code: "SBK06", name: "Surian", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk07", code: "SBK07", name: "Mutiara Damansara", line: "kajang", hasParking: false, hasFeederBus: true, isInterchange: false },
  { id: "sbk08", code: "SBK08", name: "Bandar Utama", line: "kajang", hasParking: true, hasFeederBus: true, isInterchange: false },
  { id: "sbk09", code: "SBK09", name: "Taman Tun Dr Ismail", line: "kajang", hasParking: false, hasFeederBus: true, isInterchange: false },
  { id: "sbk10", code: "SBK10", name: "Phileo Damansara", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk11", code: "SBK11", name: "Pusat Bandar Damansara", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk12", code: "SBK12", name: "Semantan", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Kelana Jaya Line"] },
  { id: "sbk13", code: "SBK13", name: "Muzium Negara", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["KTM", "KL Monorail"] },
  { id: "sbk14", code: "SBK14", name: "Pasar Seni", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Kelana Jaya Line"] },
  { id: "sbk15", code: "SBK15", name: "Merdeka", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Putrajaya Line"] },
  { id: "sbk16", code: "SBK16", name: "Bukit Bintang", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["KL Monorail"] },
  { id: "sbk17", code: "SBK17", name: "Tun Razak Exchange", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk18", code: "SBK18", name: "Cochrane", line: "kajang", hasParking: false, hasFeederBus: true, isInterchange: false },
  { id: "sbk19", code: "SBK19", name: "Maluri", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Ampang/Sri Petaling Line"] },
  { id: "sbk20", code: "SBK20", name: "Taman Pertama", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk21", code: "SBK21", name: "Taman Midah", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk22", code: "SBK22", name: "Taman Mutiara", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk23", code: "SBK23", name: "Taman Connaught", line: "kajang", hasParking: false, hasFeederBus: true, isInterchange: false },
  { id: "sbk24", code: "SBK24", name: "Taman Suntex", line: "kajang", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "sbk25", code: "SBK25", name: "Sri Raya", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk26", code: "SBK26", name: "Bandar Tun Hussein Onn", line: "kajang", hasParking: true, hasFeederBus: true, isInterchange: false },
  { id: "sbk27", code: "SBK27", name: "Batu 11 Cheras", line: "kajang", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "sbk28", code: "SBK28", name: "Bukit Dukung", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk29", code: "SBK29", name: "Sungai Jernih", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk30", code: "SBK30", name: "Stadium Kajang", line: "kajang", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "sbk31", code: "SBK31", name: "Kajang", line: "kajang", hasParking: true, hasFeederBus: true, isInterchange: true, interchangeLines: ["KTM"] },
];

export const putrajayaStations: Station[] = [
  { id: "pyl01", code: "PY01", name: "Kwasa Damansara", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Kajang Line"] },
  { id: "pyl02", code: "PY02", name: "Kampung Selamat", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl03", code: "PY03", name: "Sungai Buloh", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["KTM"] },
  { id: "pyl04", code: "PY04", name: "Damansara Damai", line: "putrajaya", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "pyl05", code: "PY05", name: "Sri Damansara Barat", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl06", code: "PY06", name: "Sri Damansara Sentral", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["KTM"] },
  { id: "pyl07", code: "PY07", name: "Sri Damansara Timur", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl08", code: "PY08", name: "Metro Prima", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl09", code: "PY09", name: "Kepong Baru", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl10", code: "PY10", name: "Jinjang", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl11", code: "PY11", name: "Sri Delima", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl12", code: "PY12", name: "Kampung Batu", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["KTM"] },
  { id: "pyl13", code: "PY13", name: "Kentonmen", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl14", code: "PY14", name: "Jalan Ipoh", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl15", code: "PY15", name: "Sentul", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl16", code: "PY16", name: "Titiwangsa", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Ampang Line", "KL Monorail"] },
  { id: "pyl17", code: "PY17", name: "Hospital Kuala Lumpur", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl18", code: "PY18", name: "Raja Uda", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl19", code: "PY19", name: "Ampang Park", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Kelana Jaya Line"] },
  { id: "pyl20", code: "PY20", name: "Persiaran KLCC", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl21", code: "PY21", name: "Conlay", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl22", code: "PY22", name: "Tun Razak Exchange", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Kajang Line"] },
  { id: "pyl23", code: "PY23", name: "Chan Sow Lin", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: true, interchangeLines: ["Ampang/Sri Petaling Line"] },
  { id: "pyl24", code: "PY24", name: "Kuchai", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl25", code: "PY25", name: "Taman Naga Emas", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl26", code: "PY26", name: "Sungai Besi", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl27", code: "PY27", name: "Serdang Raya Utara", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl28", code: "PY28", name: "Serdang Raya Selatan", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl29", code: "PY29", name: "Serdang Jaya", line: "putrajaya", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "pyl30", code: "PY30", name: "UPM", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl31", code: "PY31", name: "Taman Equine", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl32", code: "PY32", name: "Putra Permai", line: "putrajaya", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "pyl33", code: "PY33", name: "16 Sierra", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl34", code: "PY34", name: "Cyberjaya Utara", line: "putrajaya", hasParking: true, hasFeederBus: false, isInterchange: false },
  { id: "pyl35", code: "PY35", name: "Cyberjaya City Centre", line: "putrajaya", hasParking: false, hasFeederBus: false, isInterchange: false },
  { id: "pyl36", code: "PY36", name: "Putrajaya Sentral", line: "putrajaya", hasParking: true, hasFeederBus: true, isInterchange: true, interchangeLines: ["ERL"] },
];

export const allStations = [...kajangStations, ...putrajayaStations];

export function getStation(id: string): Station | undefined {
  return allStations.find((s) => s.id === id);
}
