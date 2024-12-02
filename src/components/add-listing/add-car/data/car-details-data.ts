export const carMakeOptions = [
    { label: "Select Car Make", value: "", disabled: true },
    { label: "Alfa Romeo", value: "Alfa Romeo" },
    { label: "Citroën", value: "Citroën" },
    { label: "Chevrolet", value: "Chevrolet" },
    { label: "Chrysler", value: "Chrysler" },
    { label: "Dodge", value: "Dodge" },
    { label: "Ferrari", value: "Ferrari" },
    { label: "Fiat", value: "Fiat" },
    { label: "Ford", value: "Ford" },
    { label: "Geely", value: "Geely" },
    { label: "General Motors", value: "General Motors" },
    { label: "GMC", value: "GMC" },
    { label: "Honda", value: "Honda" },
    { label: "Hyundai", value: "Hyundai" },
    { label: "Infiniti", value: "Infiniti" },
    { label: "Jaguar", value: "Jaguar" },
    { label: "Jeep", value: "Jeep" },
    { label: "Kia", value: "Kia" },
    { label: "Koenigsegg", value: "Koenigsegg" },
    { label: "Lamborghini", value: "Lamborghini" },
    { label: "Land Rover", value: "Land Rover" },
    { label: "Lexus", value: "Lexus" },
    { label: "Lotus", value: "Lotus" },
    { label: "Maserati", value: "Maserati" },
    { label: "Mazda", value: "Mazda" },
    { label: "McLaren", value: "McLaren" },
    { label: "Mercedes-Benz", value: "Mercedes-Benz" },
    { label: "Mini", value: "Mini" },
    { label: "Mitsubishi", value: "Mitsubishi" },
    { label: "Nissan", value: "Nissan" },
    { label: "Pagani", value: "Pagani" },
    { label: "Peugeot", value: "Peugeot" },
    { label: "Porsche", value: "Porsche" },
    { label: "Ram", value: "Ram" },
    { label: "Renault", value: "Renault" },
    { label: "Rolls Royce", value: "Rolls Royce" },
    { label: "Saab", value: "Saab" },
    { label: "Subaru", value: "Subaru" },
    { label: "Suzuki", value: "Suzuki" },
    { label: "Tesla", value: "Tesla" },
    { label: "Toyota", value: "Toyota" },
    { label: "Volkswagen", value: "Volkswagen" },
    { label: "Volvo", value: "Volvo" },
    { label: "Other", value: "Other" },
];

export const carTypeOptions = [
    { label: "Select Car Type", disabled: true },
    { label: "Sedan", value: "Sedan" },
    { label: "Coupe", value: "Coupe" },
    { label: "Convertible", value: "Convertible" },
    { label: "SUV", value: "SUV" },
    { label: "Truck", value: "Truck" },
    { label: "Van", value: "Van" },
    { label: "Wagon", value: "Wagon" },
    { label: "Hatchback", value: "Hatchback" },
    { label: "Minivan", value: "Minivan" },
    { label: "Crossover", value: "Crossover" },
    { label: "Other", value: "Other" },
];

export const carConditionOptions = [
    { label: "Select Car Condition", disabled: true },
    { label: "New", value: "New" },
    { label: "Used", value: "Used" },
];

export const carDriveOptions = [
    { label: "Select Drive", disabled: true },
    { label: "Left", value: "Left" },
    { label: "Right", value: "Right" },
];

export const carDriveTrainOptions = [
    { label: "Select Drive", disabled: true },
    { label: "2WD", value: "2WD" },
    { label: "4WD", value: "4WD" },
    { label: "AWD", value: "AWD" },
    { label: "FWD", value: "FWD" },
    { label: "RWD", value: "RWD" },
];

export const carEngineOptions = [
    { label: "Select Engine", disabled: true },
    { label: "3 Cylinder", value: "3 Cylinder" },
    { label: "4 Cylinder", value: "4 Cylinder" },
    { label: "5 Cylinder", value: "5 Cylinder" },
    { label: "6 Cylinder", value: "6 Cylinder" },
    { label: "8 Cylinder", value: "8 Cylinder" },
    { label: "10 Cylinder", value: "10 Cylinder" },
    { label: "12 Cylinder", value: "12 Cylinder" },
    { label: "Rotary Engine", value: "Rotary Engine" },
    { label: "Electric", value: "Electric" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Other", value: "Other" },
];

export const carFuelTypeOptions = [
    { label: "Select Fuel Type", disabled: true },
    { label: "Diesel", value: "Diesel" },
    { label: "Electric", value: "Electric" },
    { label: "Ethanol", value: "Ethanol" },
    { label: "Gasoline", value: "Gasoline" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Other", value: "Other" },
];

export const carGearBoxOptions = [
    { label: "Select Gear Box", disabled: true },
    { label: "Automatic", value: "Automatic" },
    { label: "Manual", value: "Manual" },
    { label: "Semi-Automatic", value: "Semi-Automatic" },
    { label: "CTV", value: "CTV" },
    { label: "Dual Clutch", value: "Dual Clutch" },
    { label: "E Gear", value: "E Gear" },
    { label: "F1", value: "F1" },
    { label: "Other", value: "Other" },
    { label: "Unknown", value: "Unknown" },
];

export const carMileageTypeOptions = [
    { label: "Mileage Type", disabled: true },
    { label: "Kilometers", value: "Kilometers" },
    { label: "Miles", value: "Miles" },
];

export const carPowerTypeOptions = [
    { label: "Power Type", disabled: true },
    { label: "BHP", value: "BHP" },
    { label: "KW", value: "KW" },
];

const colors = [
    "Beige",
    "Black",
    "Blue",
    "Brown",
    "Custom",
    "Gold",
    "Green",
    "Grey",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Silver",
    "Turquoise",
    "Two Tone",
    "White",
    "Yellow",
];

export const carColorOptions = [
    { label: "Select Car Color", disabled: true },
    ...colors.map((color) => ({ label: color, value: color, disabled: false })),
    { label: "Other", value: "Other" },
];

export const carInteriorColorOptions = [
    { label: "Select Interior Color", disabled: true },
    ...colors.map((color) => ({ label: color, value: color, disabled: false })),
    { label: "Other", value: "Other" },
];

type CarModelOptionsType = {
    [key: string]: string[];
};

export const carModelOptions: CarModelOptionsType = {
    Seat: ["Alhambra", "Altea", "Altea XL", "Arosa", "Cordoba", "Cordoba Vario", "Exeo", "Ibiza", "Ibiza ST", "Exeo ST", "Leon", "Leon ST", "Inca", "Mii", "Toledo"],
    Renault: ["Captur", "Clio", "Clio Grandtour", "Espace", "Express", "Fluence", "Grand Espace", "Grand Modus", "Grand Scenic", "Kadjar", "Kangoo", "Kangoo Express", "Koleos", "Laguna", "Laguna Grandtour", "Latitude", "Mascott", "Mégane", "Mégane CC", "Mégane Combi", "Mégane Grandtour", "Mégane Coupé", "Mégane Scénic", "Scénic", "Talisman", "Talisman Grandtour", "Thalia", "Twingo", "Wind", "Zoé"],
    Dacia: ["Dokker", "Duster", "Lodgy", "Logan", "Logan MCV", "Logan Van", "Sandero", "Solenza"],
    "Citroën": ["Berlingo", "C-Crosser", "C-Elissée", "C-Zero", "C1", "C2", "C3", "C3 Picasso", "C4", "C4 Aircross", "C4 Cactus", "C4 Coupé", "C4 Grand Picasso", "C4 Sedan", "C5", "C5 Break", "C5 Tourer", "C6", "C8", "DS3", "DS4", "DS5", "Evasion", "Jumper", "Jumpy", "Saxo", "Nemo", "Xantia", "Xsara"],
    "Alfa Romeo": ["145", "146", "147", "155", "156", "156 Sportwagon", "159", "159 Sportwagon", "164", "166", "4C", "Brera", "GTV", "MiTo", "Crosswagon", "Spider", "GT", "Giulietta", "Giulia"],
    "Škoda": ["Favorit", "Felicia", "Citigo", "Fabia", "Fabia Combi", "Fabia Sedan", "Felicia Combi", "Octavia", "Octavia Combi", "Roomster", "Yeti", "Rapid", "Rapid Spaceback", "Superb", "Superb Combi"],
    Chevrolet: ["Alero", "Aveo", "Camaro", "Captiva", "Corvette", "Cruze", "Cruze SW", "Epica", "Equinox", "Evanda", "HHR", "Kalos", "Lacetti", "Lacetti SW", "Lumina", "Malibu", "Matiz", "Monte Carlo", "Nubira", "Orlando", "Spark", "Suburban", "Tacuma", "Tahoe", "Trax"],
    Chrysler: ["300 C", "300 C Touring", "300 M", "Crossfire", "Grand Voyager", "LHS", "Neon", "Pacifica", "Plymouth", "PT Cruiser", "Sebring", "Sebring Convertible", "Stratus", "Stratus Cabrio", "Town & Country", "Voyager"],
    Jeep: ["Cherokee", "Commander", "Compass", "Grand Cherokee", "Patriot", "Renegade", "Wrangler"],
    Jaguar: ["Daimler", "F-Type", "S-Type", "X-Type", "X-Type Estate", "XE", "XF", "XJ", "XJ12", "XJ6", "XJ8", "XJR", "XJS", "XK", "XK8 Convertible", "XKR", "XKR Convertible"],
    "Land Rover": ["Defender", "Discovery", "Discovery Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport"],
    Lexus: ["CT", "GS", "GS 300", "GX", "IS", "IS 200", "LS", "LX", "NX", "RX", "RX 300", "SC"],
    Mazda: ["121", "2", "3", "323", "323 C", "323 F", "5", "6", "6 Combi", "626", "626 Combi", "B-Fighter", "B2500", "BT", "CX-5", "CX-7", "CX-9", "Demio", "MPV", "MX-3", "MX-5", "MX-6", "Premacy", "RX-7", "RX-8", "Xedos"],
    "Mercedes-Benz": ["190", "200 - 300", "200 - 500", "A", "A 140", "A 150", "A 160", "A 170", "A 180", "A 190", "A 200", "A 210", "B", "B 150", "B 160", "B 170", "B 180", "B 200", "C", "C 160", "C 180", "C 200", "C 220", "C 230", "C 240", "C 250", "C 270", "C 280", "C 30", "C 300", "C 32", "C 320", "C 350", "C 36", "C 43", "C 55", "C 63", "Citan", "CL", "CL 180", "CL 200", "CL 220", "CL 230", "CL 420", "CL 500", "CL 55", "CL 600", "CL 63", "CL 65", "CLA", "CLA 180", "CLA 200", "CLA 220", "CLA 250", "CLA 45", "CLC", "CLC 180", "CLC 200", "CLC 220", "CLC 230", "CLC 250", "CLK", "CLK 200", "CLK 220", "CLK 230", "CLK 240", "CLK 270", "CLK 280", "CLK 320", "CLK 350", "CLK 430", "CLK 500", "CLK 55", "CLK 63", "CLS", "CLS 220", "CLS 250", "CLS 280", "CLS 320", "CLS 350", "CLS 400", "CLS 500", "CLS 55", "CLS 63", "E", "E 200", "E 220", "E 230", "E 240", "E 250", "E 260", "E 270", "E 280", "E 290", "E 300", "E 320", "E 350", "E 36", "E 400", "E 420", "E 430", "E 50"],
    Mini: ["Cooper", "Cooper Cabrio", "Cooper Clubman", "Cooper D", "Cooper D Clubman", "Cooper S", "Cooper S Cabrio", "Cooper S Clubman", "Countryman", "Mini One", "One D"],
    Mitsubishi: ["3000 GT", "ASX", "Carisma", "Colt", "Colt CC", "Eclipse", "Fuso canter", "Galant", "Galant Combi", "Grandis", "L200", "L200 Pick up", "L200 Pick up Double Cab", "L200 Pick up Extended Cab", "L200 Pick up Single Cab", "L300", "Lancer", "Lancer Combi", "Lancer Evo", "Lancer Sportback", "Outlander", "Pajero", "Pajeto Pinin", "Pajero Pinin Wagon", "Pajero Sport", "Pajero Wagon", "Space Star"],
    Nissan: ["100 NX", "200 SX", "350 Z", "350 Z Roadster", "Almera", "Almera Tino", "Cabstar E", "Cabstar TL2", "Cabstar TL3", "Cube", "Interstar", "Juke", "King Cab", "Kubistar", "Leaf", "Maxima", "Maxima QX", "Micra", "Murano", "Navara", "Note", "NP300", "NV200", "NV400", "Pathfinder", "Patrol", "Patrol GR", "Pickup", "Pixo", "Primastar", "Primastar Combi", "Primera", "Primera Combi", "Pulsar", "Qashqai", "Serena", "Sunny", "Terrano", "Tiida", "Trade", "Vanette Cargo", "X-Trail"],
    Opel: ["Agila", "Ampera", "Antara", "Astra", "Astra cabrio", "Astra caravan", "Astra coupé", "Calibra", "Campo", "Cascada", "Corsa", "Frontera", "Insignia", "Insignia kombi", "Kadett", "Meriva", "Mokka", "Movano", "Omega", "Signum", "Vectra", "Vectra Caravan", "Vivaro", "Vivaro Kombi", "Zafira"],
    Peugeot: ["1007", "107", "106", "108", "2008", "205", "205 Cabrio", "206", "206 CC", "206 SW", "207", "207 CC", "207 SW", "306", "307", "307 CC", "307 SW", "308", "308 CC", "308 SW", "309", "4007", "4008", "405", "406", "407", "407 SW", "5008", "508", "508 SW", "605", "806", "607", "807", "Bipper", "RCZ"],
    Porsche: ["911 Carrera", "911 Carrera Cabrio", "911 Targa", "924", "944", "997", "Boxster", "Cayenne", "Cayman", "Macan", "Panamera"],
    Saab: ["9-3", "9-3 Cabriolet", "9-3 Coupé", "9-3 SportCombi", "9-5", "9-5 SportCombi", "900", "900 C", "900 C Turbo", "9000", "9000 C", "9000 CD", "9000 CS"],
    Skoda: ["Favorit", "Felicia", "Citigo", "Fabia", "Fabia Combi", "Fabia Sedan", "Felicia Combi", "Octavia", "Octavia Combi", "Roomster", "Yeti", "Rapid", "Rapid Spaceback", "Superb", "Superb Combi"],
    Smart: ["Cabrio", "City-Coupé", "Compact Pulse", "Forfour", "Fortwo", "Roadster"],
    Subaru: ["BRZ", "Forester", "Impreza", "Impreza Wagon", "Justy", "Legacy", "Legacy Wagon", "Levorg", "Outback", "SVX", "Tribeca", "Tribeca B9", "XV"],
    Suzuki: ["Alto", "Baleno", "Baleno kombi", "Grand Vitara", "Grand Vitara XL-7", "Ignis", "Jimny", "Kizashi", "Liana", "Samurai", "Splash", "Swift", "SX4", "SX4 Sedan", "Vitara", "Wagon R+"],
    Tesla: ["Model 3", "Model S", "Model X", "Roadster"],
    Toyota: ["4-Runner", "Auris", "Avensis", "Avensis Combi", "Avensis Van", "Aygo", "Camry", "Carina", "Celica", "Corolla", "Corolla Combi", "Corolla sedan", "Corolla Verso", "FJ Cruiser", "GT86", "Hiace", "Highlander", "Hilux", "IQ", "Land Cruiser", "MR2", "Paseo", "Picnic", "Prius", "RAV4", "Sequoia", "Starlet", "Supra", "Tundra", "Urban Cruiser", "Verso", "Yaris", "Yaris Verso"],
    Volvo: ["240", "340", "360", "460", "850", "940", "960", "C30", "C70", "C70 Cabrio", "S40", "S60", "S70", "S80", "S90", "V40", "V50", "V60", "V70", "V90", "XC60", "XC70", "XC90"],
    VW: ["Amarok", "Beetle", "Bora", "Bora Variant", "Caddy", "Caddy Van", "Life", "California", "Caravelle", "CC", "Crafter", "Crafter Van", "Crafter Kombi", "CrossTouran", "Eos", "Fox", "Golf", "Golf Cabrio", "Golf Plus", "Golf Sportvan", "Golf Variant", "Jetta", "LT", "Lupo", "Multivan", "New Beetle", "Passat", "Passat Alltrack", "Passat CC", "Passat Variant", "Passat Variant Van", "Phaeton", "Polo", "Polo Van", "Sharan", "T4", "T4 Caravelle", "T4 Multivan", "T5", "T5 Caravelle", "T5 Multivan", "T5 Transporter Shuttle", "Tiguan", "Touareg", "Touran", "up!", "Vento"],
    "Other": ["Other"],
};
