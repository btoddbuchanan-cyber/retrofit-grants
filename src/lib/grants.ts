import type { Locale } from "./i18n";

export interface BilingualString {
  en: string;
  fr: string;
}

interface BilingualGrant {
  id: string;
  icon: string;
  maxAmount: number;
  title: BilingualString;
  shortTitle: BilingualString;
  category: BilingualString;
  description: BilingualString;
  details: { en: string[]; fr: string[] };
  eligibleWork: { en: string[]; fr: string[] };
}

export interface Grant {
  id: string;
  icon: string;
  maxAmount: number;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  details: string[];
  eligibleWork: string[];
}

const bilingualGrants: BilingualGrant[] = [
  {
    id: "heat-pumps",
    icon: "🌡️",
    maxAmount: 5000,
    title: {
      en: "Heat Pump Systems",
      fr: "Systèmes de thermopompes",
    },
    shortTitle: {
      en: "Heat Pumps",
      fr: "Thermopompes",
    },
    category: {
      en: "Heating & Cooling",
      fr: "Chauffage et climatisation",
    },
    description: {
      en: "Replace your existing heating system with an energy-efficient heat pump. Covers air-source, ground-source (geothermal), and ductless mini-split systems.",
      fr: "Remplacez votre système de chauffage actuel par une thermopompe écoénergétique. Couvre les systèmes aérothermiques, géothermiques et les systèmes biblocs sans conduits.",
    },
    details: {
      en: [
        "Air-source heat pumps can reduce heating costs by up to 50%",
        "Ground-source systems offer the highest efficiency ratings",
        "Eligible for both ducted and ductless installations",
        "Includes cold-climate rated models for all Canadian regions",
      ],
      fr: [
        "Les thermopompes aérothermiques peuvent réduire les coûts de chauffage jusqu'à 50 %",
        "Les systèmes géothermiques offrent les meilleurs indices d'efficacité",
        "Admissible pour les installations avec et sans conduits",
        "Inclut les modèles homologués pour climat froid pour toutes les régions canadiennes",
      ],
    },
    eligibleWork: {
      en: [
        "Air-source heat pump installation",
        "Ground-source (geothermal) heat pump installation",
        "Ductless mini-split heat pump installation",
        "Heat pump water heater conversion",
        "Required electrical upgrades for heat pump installation",
      ],
      fr: [
        "Installation de thermopompe aérothermique",
        "Installation de thermopompe géothermique",
        "Installation de thermopompe bibloc sans conduits",
        "Conversion de chauffe-eau à thermopompe",
        "Mises à niveau électriques requises pour l'installation de la thermopompe",
      ],
    },
  },
  {
    id: "solar-power",
    icon: "☀️",
    maxAmount: 5000,
    title: {
      en: "Solar Power Systems",
      fr: "Systèmes d'énergie solaire",
    },
    shortTitle: {
      en: "Solar Power",
      fr: "Énergie solaire",
    },
    category: {
      en: "Renewable Energy",
      fr: "Énergie renouvelable",
    },
    description: {
      en: "Install rooftop solar panels or solar water heating systems. Generate clean electricity and reduce your carbon footprint.",
      fr: "Installez des panneaux solaires sur votre toit ou des systèmes de chauffage solaire de l'eau. Produisez de l'électricité propre et réduisez votre empreinte carbone.",
    },
    details: {
      en: [
        "Solar PV panels can offset 50-100% of household electricity",
        "Solar water heating reduces hot water costs by up to 60%",
        "Net metering allows you to sell excess power back to the grid",
        "25+ year lifespan with minimal maintenance",
      ],
      fr: [
        "Les panneaux solaires photovoltaïques peuvent compenser de 50 à 100 % de l'électricité du ménage",
        "Le chauffage solaire de l'eau réduit les coûts d'eau chaude jusqu'à 60 %",
        "Le mesurage net vous permet de revendre l'excédent d'énergie au réseau",
        "Durée de vie de plus de 25 ans avec un entretien minimal",
      ],
    },
    eligibleWork: {
      en: [
        "Rooftop solar photovoltaic (PV) panel installation",
        "Solar water heating system installation",
        "Battery storage system (when paired with solar PV)",
        "Required electrical panel upgrades",
        "Inverter and monitoring system installation",
      ],
      fr: [
        "Installation de panneaux solaires photovoltaïques sur toit",
        "Installation de système de chauffage solaire de l'eau",
        "Système de stockage par batterie (jumelé au solaire PV)",
        "Mises à niveau du panneau électrique requises",
        "Installation d'onduleur et de système de surveillance",
      ],
    },
  },
  {
    id: "insulation",
    icon: "🏠",
    maxAmount: 5000,
    title: {
      en: "Insulation Upgrades",
      fr: "Améliorations de l'isolation",
    },
    shortTitle: {
      en: "Insulation",
      fr: "Isolation",
    },
    category: {
      en: "Building Envelope",
      fr: "Enveloppe du bâtiment",
    },
    description: {
      en: "Improve your home's insulation in attics, walls, basements, and crawl spaces to reduce heat loss and improve comfort year-round.",
      fr: "Améliorez l'isolation de votre maison dans les combles, les murs, les sous-sols et les vides sanitaires pour réduire les pertes de chaleur et améliorer le confort toute l'année.",
    },
    details: {
      en: [
        "Attic insulation alone can reduce heating bills by 10-50%",
        "Spray foam, blown-in, and batt insulation are all eligible",
        "Basement and crawl space insulation prevents moisture issues",
        "Improves indoor comfort and reduces drafts",
      ],
      fr: [
        "L'isolation des combles seule peut réduire les factures de chauffage de 10 à 50 %",
        "L'isolation par mousse pulvérisée, en vrac et en matelas sont toutes admissibles",
        "L'isolation du sous-sol et du vide sanitaire prévient les problèmes d'humidité",
        "Améliore le confort intérieur et réduit les courants d'air",
      ],
    },
    eligibleWork: {
      en: [
        "Attic insulation (blown-in, batt, or spray foam)",
        "Exterior wall insulation",
        "Basement wall and floor insulation",
        "Crawl space insulation",
        "Cathedral ceiling insulation",
        "Rim joist and header insulation",
      ],
      fr: [
        "Isolation des combles (en vrac, en matelas ou mousse pulvérisée)",
        "Isolation des murs extérieurs",
        "Isolation des murs et du plancher du sous-sol",
        "Isolation du vide sanitaire",
        "Isolation de plafond cathédrale",
        "Isolation de la lisse d'assise et de la poutre de rive",
      ],
    },
  },
  {
    id: "windows-doors",
    icon: "🪟",
    maxAmount: 5000,
    title: {
      en: "Windows & Doors",
      fr: "Fenêtres et portes",
    },
    shortTitle: {
      en: "Windows & Doors",
      fr: "Fenêtres et portes",
    },
    category: {
      en: "Building Envelope",
      fr: "Enveloppe du bâtiment",
    },
    description: {
      en: "Replace old, drafty windows and doors with ENERGY STAR certified models. Triple-pane and low-E coatings dramatically reduce energy loss.",
      fr: "Remplacez vos vieilles fenêtres et portes par des modèles certifiés ENERGY STAR. Le triple vitrage et les revêtements à faible émissivité réduisent considérablement les pertes d'énergie.",
    },
    details: {
      en: [
        "ENERGY STAR windows can save $125-$465 annually on energy bills",
        "Triple-pane glass provides superior insulation in cold climates",
        "Low-E coatings reflect heat while allowing light through",
        "Reduces outside noise and improves home comfort",
      ],
      fr: [
        "Les fenêtres ENERGY STAR peuvent économiser de 125 $ à 465 $ par année sur les factures d'énergie",
        "Le triple vitrage offre une isolation supérieure dans les climats froids",
        "Les revêtements à faible émissivité réfléchissent la chaleur tout en laissant passer la lumière",
        "Réduit le bruit extérieur et améliore le confort de la maison",
      ],
    },
    eligibleWork: {
      en: [
        "ENERGY STAR certified window replacement",
        "Triple-pane window installation",
        "Exterior door replacement with insulated models",
        "Patio door replacement",
        "Storm window installation",
        "Window frame sealing and flashing",
      ],
      fr: [
        "Remplacement de fenêtres certifiées ENERGY STAR",
        "Installation de fenêtres à triple vitrage",
        "Remplacement de portes extérieures par des modèles isolés",
        "Remplacement de portes-fenêtres",
        "Installation de contre-fenêtres",
        "Calfeutrage et solin de cadres de fenêtres",
      ],
    },
  },
  {
    id: "air-sealing",
    icon: "💨",
    maxAmount: 1000,
    title: {
      en: "Air Sealing & Weatherization",
      fr: "Étanchéité à l'air et calfeutrage",
    },
    shortTitle: {
      en: "Air Sealing",
      fr: "Étanchéité",
    },
    category: {
      en: "Building Envelope",
      fr: "Enveloppe du bâtiment",
    },
    description: {
      en: "Seal air leaks throughout your home to stop drafts, reduce energy waste, and improve indoor air quality.",
      fr: "Colmatez les fuites d'air dans toute votre maison pour éliminer les courants d'air, réduire le gaspillage d'énergie et améliorer la qualité de l'air intérieur.",
    },
    details: {
      en: [
        "Air leaks can account for 25-40% of heating and cooling costs",
        "Professional air sealing uses blower door testing for precision",
        "Addresses gaps around pipes, wiring, ducts, and fixtures",
        "Often the most cost-effective energy upgrade available",
      ],
      fr: [
        "Les fuites d'air peuvent représenter de 25 à 40 % des coûts de chauffage et de climatisation",
        "L'étanchéisation professionnelle utilise le test d'infiltrométrie pour la précision",
        "Traite les espaces autour des tuyaux, du câblage, des conduits et des appareils",
        "Souvent l'amélioration écoénergétique la plus rentable",
      ],
    },
    eligibleWork: {
      en: [
        "Professional air sealing with blower door testing",
        "Weatherstripping for doors and windows",
        "Caulking and sealing of penetrations",
        "Duct sealing and insulation",
        "Vapour barrier installation or repair",
        "Draft-proofing of attic hatches and recessed lights",
      ],
      fr: [
        "Étanchéisation professionnelle avec test d'infiltrométrie",
        "Coupe-froid pour portes et fenêtres",
        "Calfeutrage et scellement des pénétrations",
        "Scellement et isolation des conduits",
        "Installation ou réparation du pare-vapeur",
        "Calfeutrage des trappes de combles et des luminaires encastrés",
      ],
    },
  },
  {
    id: "smart-thermostats",
    icon: "🌐",
    maxAmount: 250,
    title: {
      en: "Smart Thermostats",
      fr: "Thermostats intelligents",
    },
    shortTitle: {
      en: "Smart Thermostats",
      fr: "Thermostats intelligents",
    },
    category: {
      en: "Smart Controls",
      fr: "Contrôles intelligents",
    },
    description: {
      en: "Install a smart thermostat to optimize heating and cooling schedules automatically, saving energy when you're away or asleep.",
      fr: "Installez un thermostat intelligent pour optimiser automatiquement les horaires de chauffage et de climatisation, économisant de l'énergie lorsque vous êtes absent ou dormez.",
    },
    details: {
      en: [
        "Can save 10-15% on heating and cooling costs",
        "Learns your schedule and adjusts automatically",
        "Remote control via smartphone app",
        "Provides energy usage reports and recommendations",
      ],
      fr: [
        "Peut économiser de 10 à 15 % sur les coûts de chauffage et de climatisation",
        "Apprend votre horaire et s'ajuste automatiquement",
        "Contrôle à distance via application pour téléphone intelligent",
        "Fournit des rapports de consommation d'énergie et des recommandations",
      ],
    },
    eligibleWork: {
      en: [
        "ENERGY STAR certified smart thermostat installation",
        "Zoned heating/cooling thermostat systems",
        "Required wiring upgrades for smart thermostat compatibility",
      ],
      fr: [
        "Installation de thermostat intelligent certifié ENERGY STAR",
        "Systèmes de thermostat de chauffage/climatisation par zone",
        "Mises à niveau du câblage requises pour la compatibilité du thermostat intelligent",
      ],
    },
  },
  {
    id: "water-heaters",
    icon: "🚿",
    maxAmount: 1000,
    title: {
      en: "Energy-Efficient Water Heaters",
      fr: "Chauffe-eau écoénergétiques",
    },
    shortTitle: {
      en: "Water Heaters",
      fr: "Chauffe-eau",
    },
    category: {
      en: "Hot Water",
      fr: "Eau chaude",
    },
    description: {
      en: "Upgrade to a high-efficiency or heat pump water heater. Reduce hot water energy costs by up to 65% compared to conventional tanks.",
      fr: "Passez à un chauffe-eau à haute efficacité ou à thermopompe. Réduisez les coûts d'énergie pour l'eau chaude jusqu'à 65 % par rapport aux réservoirs conventionnels.",
    },
    details: {
      en: [
        "Heat pump water heaters are 2-3x more efficient than conventional",
        "Tankless (on-demand) models eliminate standby heat loss",
        "Condensing gas water heaters recover waste heat",
        "Drain water heat recovery captures energy from used hot water",
      ],
      fr: [
        "Les chauffe-eau à thermopompe sont 2 à 3 fois plus efficaces que les conventionnels",
        "Les modèles sans réservoir (à la demande) éliminent les pertes de chaleur en attente",
        "Les chauffe-eau au gaz à condensation récupèrent la chaleur perdue",
        "La récupération de chaleur des eaux usées capte l'énergie de l'eau chaude utilisée",
      ],
    },
    eligibleWork: {
      en: [
        "Heat pump water heater installation",
        "Tankless/on-demand water heater installation",
        "Condensing gas water heater installation",
        "Drain water heat recovery system",
        "Solar water heater pre-heat system",
      ],
      fr: [
        "Installation de chauffe-eau à thermopompe",
        "Installation de chauffe-eau sans réservoir/à la demande",
        "Installation de chauffe-eau au gaz à condensation",
        "Système de récupération de chaleur des eaux usées",
        "Système de préchauffage solaire de l'eau",
      ],
    },
  },
  {
    id: "ventilation",
    icon: "🌬️",
    maxAmount: 1000,
    title: {
      en: "Ventilation Systems (HRV/ERV)",
      fr: "Systèmes de ventilation (VRC/VRE)",
    },
    shortTitle: {
      en: "Ventilation",
      fr: "Ventilation",
    },
    category: {
      en: "Indoor Air Quality",
      fr: "Qualité de l'air intérieur",
    },
    description: {
      en: "Install a Heat Recovery Ventilator (HRV) or Energy Recovery Ventilator (ERV) to maintain fresh air while recovering energy from exhaust air.",
      fr: "Installez un ventilateur récupérateur de chaleur (VRC) ou un ventilateur récupérateur d'énergie (VRE) pour maintenir l'air frais tout en récupérant l'énergie de l'air évacué.",
    },
    details: {
      en: [
        "Recovers 70-80% of energy from outgoing stale air",
        "Essential companion to air sealing for healthy indoor air",
        "Reduces humidity, odours, and indoor pollutants",
        "Provides continuous fresh air without opening windows",
      ],
      fr: [
        "Récupère de 70 à 80 % de l'énergie de l'air vicié sortant",
        "Complément essentiel à l'étanchéité pour un air intérieur sain",
        "Réduit l'humidité, les odeurs et les polluants intérieurs",
        "Fournit un air frais continu sans ouvrir les fenêtres",
      ],
    },
    eligibleWork: {
      en: [
        "Heat Recovery Ventilator (HRV) installation",
        "Energy Recovery Ventilator (ERV) installation",
        "Ductwork for ventilation distribution",
        "Bathroom and kitchen exhaust fan upgrades (ENERGY STAR)",
        "Ventilation controls and sensors",
      ],
      fr: [
        "Installation de ventilateur récupérateur de chaleur (VRC)",
        "Installation de ventilateur récupérateur d'énergie (VRE)",
        "Conduits pour la distribution de la ventilation",
        "Mise à niveau des ventilateurs d'extraction de salle de bain et de cuisine (ENERGY STAR)",
        "Contrôles et capteurs de ventilation",
      ],
    },
  },
  {
    id: "ev-charging",
    icon: "🔌",
    maxAmount: 5000,
    title: {
      en: "EV Charging Infrastructure",
      fr: "Infrastructure de recharge pour VÉ",
    },
    shortTitle: {
      en: "EV Charging",
      fr: "Recharge VÉ",
    },
    category: {
      en: "Transportation",
      fr: "Transport",
    },
    description: {
      en: "Install a Level 2 electric vehicle charger at your home. Supports Canada's transition to zero-emission transportation.",
      fr: "Installez une borne de recharge de niveau 2 pour véhicule électrique à votre domicile. Soutient la transition du Canada vers le transport à zéro émission.",
    },
    details: {
      en: [
        "Level 2 chargers are 5-7x faster than standard outlets",
        "Can fully charge most EVs overnight",
        "Smart chargers can schedule charging during off-peak hours",
        "Increases home value and future-proofs your property",
      ],
      fr: [
        "Les bornes de niveau 2 sont 5 à 7 fois plus rapides que les prises standard",
        "Peut recharger complètement la plupart des VÉ pendant la nuit",
        "Les bornes intelligentes peuvent planifier la recharge pendant les heures creuses",
        "Augmente la valeur de la maison et prépare votre propriété pour l'avenir",
      ],
    },
    eligibleWork: {
      en: [
        "Level 2 (240V) EV charger purchase and installation",
        "Required electrical panel upgrade",
        "Dedicated circuit installation",
        "Smart/networked charger with load management",
      ],
      fr: [
        "Achat et installation d'une borne de recharge de niveau 2 (240 V)",
        "Mise à niveau du panneau électrique requise",
        "Installation d'un circuit dédié",
        "Borne de recharge intelligente/en réseau avec gestion de la charge",
      ],
    },
  },
  {
    id: "roofing",
    icon: "🏗️",
    maxAmount: 250,
    title: {
      en: "Energy-Efficient Roofing",
      fr: "Toiture écoénergétique",
    },
    shortTitle: {
      en: "Roofing",
      fr: "Toiture",
    },
    category: {
      en: "Building Envelope",
      fr: "Enveloppe du bâtiment",
    },
    description: {
      en: "Install cool roofing materials or metal roofing that reflects solar heat, reducing cooling costs and extending roof lifespan.",
      fr: "Installez des matériaux de toiture réfléchissants ou une toiture métallique qui réfléchit la chaleur solaire, réduisant les coûts de climatisation et prolongeant la durée de vie de la toiture.",
    },
    details: {
      en: [
        "Cool roofs can reduce surface temperature by up to 30°C",
        "Metal roofing lasts 40-70 years vs 15-20 for asphalt",
        "Reflective coatings reduce air conditioning costs",
        "Can be combined with improved attic insulation for maximum benefit",
      ],
      fr: [
        "Les toits réfléchissants peuvent réduire la température de surface jusqu'à 30 °C",
        "La toiture métallique dure de 40 à 70 ans contre 15 à 20 pour l'asphalte",
        "Les revêtements réfléchissants réduisent les coûts de climatisation",
        "Peut être combiné avec une meilleure isolation des combles pour un bénéfice maximal",
      ],
    },
    eligibleWork: {
      en: [
        "ENERGY STAR rated cool roofing installation",
        "Metal roofing with reflective coating",
        "Roof underlayment and radiant barrier installation",
        "Green roof / vegetated roof system (partial coverage)",
      ],
      fr: [
        "Installation de toiture réfléchissante certifiée ENERGY STAR",
        "Toiture métallique avec revêtement réfléchissant",
        "Installation de sous-couche de toit et de barrière radiante",
        "Toit vert / système de toiture végétalisée (couverture partielle)",
      ],
    },
  },
];

function resolveGrant(grant: BilingualGrant, locale: Locale): Grant {
  return {
    id: grant.id,
    icon: grant.icon,
    maxAmount: grant.maxAmount,
    title: grant.title[locale],
    shortTitle: grant.shortTitle[locale],
    category: grant.category[locale],
    description: grant.description[locale],
    details: grant.details[locale],
    eligibleWork: grant.eligibleWork[locale],
  };
}

export function getGrants(locale: Locale): Grant[] {
  return bilingualGrants.map((grant) => resolveGrant(grant, locale));
}

export function getGrantById(id: string, locale: Locale): Grant | undefined {
  const grant = bilingualGrants.find((g) => g.id === id);
  if (!grant) return undefined;
  return resolveGrant(grant, locale);
}

export function getMaxTotalGrant(): number {
  return bilingualGrants.reduce((total, grant) => total + grant.maxAmount, 0);
}
