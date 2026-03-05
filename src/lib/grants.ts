export interface Grant {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  maxAmount: number;
  description: string;
  details: string[];
  eligibleWork: string[];
  icon: string;
}

export const grants: Grant[] = [
  {
    id: "heat-pumps",
    title: "Heat Pump Systems",
    shortTitle: "Heat Pumps",
    category: "Heating & Cooling",
    maxAmount: 5000,
    description:
      "Replace your existing heating system with an energy-efficient heat pump. Covers air-source, ground-source (geothermal), and ductless mini-split systems.",
    details: [
      "Air-source heat pumps can reduce heating costs by up to 50%",
      "Ground-source systems offer the highest efficiency ratings",
      "Eligible for both ducted and ductless installations",
      "Includes cold-climate rated models for all Canadian regions",
    ],
    eligibleWork: [
      "Air-source heat pump installation",
      "Ground-source (geothermal) heat pump installation",
      "Ductless mini-split heat pump installation",
      "Heat pump water heater conversion",
      "Required electrical upgrades for heat pump installation",
    ],
    icon: "🌡️",
  },
  {
    id: "solar-power",
    title: "Solar Power Systems",
    shortTitle: "Solar Power",
    category: "Renewable Energy",
    maxAmount: 5000,
    description:
      "Install rooftop solar panels or solar water heating systems. Generate clean electricity and reduce your carbon footprint.",
    details: [
      "Solar PV panels can offset 50-100% of household electricity",
      "Solar water heating reduces hot water costs by up to 60%",
      "Net metering allows you to sell excess power back to the grid",
      "25+ year lifespan with minimal maintenance",
    ],
    eligibleWork: [
      "Rooftop solar photovoltaic (PV) panel installation",
      "Solar water heating system installation",
      "Battery storage system (when paired with solar PV)",
      "Required electrical panel upgrades",
      "Inverter and monitoring system installation",
    ],
    icon: "☀️",
  },
  {
    id: "insulation",
    title: "Insulation Upgrades",
    shortTitle: "Insulation",
    category: "Building Envelope",
    maxAmount: 5000,
    description:
      "Improve your home's insulation in attics, walls, basements, and crawl spaces to reduce heat loss and improve comfort year-round.",
    details: [
      "Attic insulation alone can reduce heating bills by 10-50%",
      "Spray foam, blown-in, and batt insulation are all eligible",
      "Basement and crawl space insulation prevents moisture issues",
      "Improves indoor comfort and reduces drafts",
    ],
    eligibleWork: [
      "Attic insulation (blown-in, batt, or spray foam)",
      "Exterior wall insulation",
      "Basement wall and floor insulation",
      "Crawl space insulation",
      "Cathedral ceiling insulation",
      "Rim joist and header insulation",
    ],
    icon: "🏠",
  },
  {
    id: "windows-doors",
    title: "Windows & Doors",
    shortTitle: "Windows & Doors",
    category: "Building Envelope",
    maxAmount: 5000,
    description:
      "Replace old, drafty windows and doors with ENERGY STAR certified models. Triple-pane and low-E coatings dramatically reduce energy loss.",
    details: [
      "ENERGY STAR windows can save $125-$465 annually on energy bills",
      "Triple-pane glass provides superior insulation in cold climates",
      "Low-E coatings reflect heat while allowing light through",
      "Reduces outside noise and improves home comfort",
    ],
    eligibleWork: [
      "ENERGY STAR certified window replacement",
      "Triple-pane window installation",
      "Exterior door replacement with insulated models",
      "Patio door replacement",
      "Storm window installation",
      "Window frame sealing and flashing",
    ],
    icon: "🪟",
  },
  {
    id: "air-sealing",
    title: "Air Sealing & Weatherization",
    shortTitle: "Air Sealing",
    category: "Building Envelope",
    maxAmount: 1000,
    description:
      "Seal air leaks throughout your home to stop drafts, reduce energy waste, and improve indoor air quality.",
    details: [
      "Air leaks can account for 25-40% of heating and cooling costs",
      "Professional air sealing uses blower door testing for precision",
      "Addresses gaps around pipes, wiring, ducts, and fixtures",
      "Often the most cost-effective energy upgrade available",
    ],
    eligibleWork: [
      "Professional air sealing with blower door testing",
      "Weatherstripping for doors and windows",
      "Caulking and sealing of penetrations",
      "Duct sealing and insulation",
      "Vapour barrier installation or repair",
      "Draft-proofing of attic hatches and recessed lights",
    ],
    icon: "💨",
  },
  {
    id: "smart-thermostats",
    title: "Smart Thermostats",
    shortTitle: "Smart Thermostats",
    category: "Smart Controls",
    maxAmount: 250,
    description:
      "Install a smart thermostat to optimize heating and cooling schedules automatically, saving energy when you're away or asleep.",
    details: [
      "Can save 10-15% on heating and cooling costs",
      "Learns your schedule and adjusts automatically",
      "Remote control via smartphone app",
      "Provides energy usage reports and recommendations",
    ],
    eligibleWork: [
      "ENERGY STAR certified smart thermostat installation",
      "Zoned heating/cooling thermostat systems",
      "Required wiring upgrades for smart thermostat compatibility",
    ],
    icon: "🌐",
  },
  {
    id: "water-heaters",
    title: "Energy-Efficient Water Heaters",
    shortTitle: "Water Heaters",
    category: "Hot Water",
    maxAmount: 1000,
    description:
      "Upgrade to a high-efficiency or heat pump water heater. Reduce hot water energy costs by up to 65% compared to conventional tanks.",
    details: [
      "Heat pump water heaters are 2-3x more efficient than conventional",
      "Tankless (on-demand) models eliminate standby heat loss",
      "Condensing gas water heaters recover waste heat",
      "Drain water heat recovery captures energy from used hot water",
    ],
    eligibleWork: [
      "Heat pump water heater installation",
      "Tankless/on-demand water heater installation",
      "Condensing gas water heater installation",
      "Drain water heat recovery system",
      "Solar water heater pre-heat system",
    ],
    icon: "🚿",
  },
  {
    id: "ventilation",
    title: "Ventilation Systems (HRV/ERV)",
    shortTitle: "Ventilation",
    category: "Indoor Air Quality",
    maxAmount: 1000,
    description:
      "Install a Heat Recovery Ventilator (HRV) or Energy Recovery Ventilator (ERV) to maintain fresh air while recovering energy from exhaust air.",
    details: [
      "Recovers 70-80% of energy from outgoing stale air",
      "Essential companion to air sealing for healthy indoor air",
      "Reduces humidity, odours, and indoor pollutants",
      "Provides continuous fresh air without opening windows",
    ],
    eligibleWork: [
      "Heat Recovery Ventilator (HRV) installation",
      "Energy Recovery Ventilator (ERV) installation",
      "Ductwork for ventilation distribution",
      "Bathroom and kitchen exhaust fan upgrades (ENERGY STAR)",
      "Ventilation controls and sensors",
    ],
    icon: "🌬️",
  },
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure",
    shortTitle: "EV Charging",
    category: "Transportation",
    maxAmount: 5000,
    description:
      "Install a Level 2 electric vehicle charger at your home. Supports Canada's transition to zero-emission transportation.",
    details: [
      "Level 2 chargers are 5-7x faster than standard outlets",
      "Can fully charge most EVs overnight",
      "Smart chargers can schedule charging during off-peak hours",
      "Increases home value and future-proofs your property",
    ],
    eligibleWork: [
      "Level 2 (240V) EV charger purchase and installation",
      "Required electrical panel upgrade",
      "Dedicated circuit installation",
      "Smart/networked charger with load management",
    ],
    icon: "🔌",
  },
  {
    id: "roofing",
    title: "Energy-Efficient Roofing",
    shortTitle: "Roofing",
    category: "Building Envelope",
    maxAmount: 250,
    description:
      "Install cool roofing materials or metal roofing that reflects solar heat, reducing cooling costs and extending roof lifespan.",
    details: [
      "Cool roofs can reduce surface temperature by up to 30°C",
      "Metal roofing lasts 40-70 years vs 15-20 for asphalt",
      "Reflective coatings reduce air conditioning costs",
      "Can be combined with improved attic insulation for maximum benefit",
    ],
    eligibleWork: [
      "ENERGY STAR rated cool roofing installation",
      "Metal roofing with reflective coating",
      "Roof underlayment and radiant barrier installation",
      "Green roof / vegetated roof system (partial coverage)",
    ],
    icon: "🏗️",
  },
];

export function getGrantById(id: string): Grant | undefined {
  return grants.find((g) => g.id === id);
}

export function getMaxTotalGrant(): number {
  return grants.reduce((sum, g) => sum + g.maxAmount, 0);
}
