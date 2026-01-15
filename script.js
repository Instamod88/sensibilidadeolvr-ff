// ===================================================
// BASE PROFISSIONAL COMPLETA DE DISPOSITIVOS (2025)
// ===================================================

const celulares = {

  Apple: [
    "iPhone 3G","iPhone 3GS","iPhone 4","iPhone 4S",
    "iPhone 5","iPhone 5C","iPhone 5S",
    "iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone 6s Plus",
    "iPhone SE (1ª geração)",
    "iPhone 7","iPhone 7 Plus",
    "iPhone 8","iPhone 8 Plus",
    "iPhone X","iPhone XR","iPhone XS","iPhone XS Max",
    "iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
    "iPhone SE (2ª geração)",
    "iPhone 12 Mini","iPhone 12","iPhone 12 Pro","iPhone 12 Pro Max",
    "iPhone 13 Mini","iPhone 13","iPhone 13 Pro","iPhone 13 Pro Max",
    "iPhone SE (3ª geração)",
    "iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max",
    "iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max",
    "iPhone 16","iPhone 16 Plus","iPhone 16 Pro","iPhone 16 Pro Max"
  ],

  Samsung: [
    // Linha J
    "Galaxy J1","Galaxy J2","Galaxy J3","Galaxy J4","Galaxy J5","Galaxy J6","Galaxy J7","Galaxy J8",

    // Linha A
    "Galaxy A01","Galaxy A02","Galaxy A02s","Galaxy A03","Galaxy A03s",
    "Galaxy A04","Galaxy A05","Galaxy A05s","Galaxy A06",
    "Galaxy A10","Galaxy A10s","Galaxy A11","Galaxy A12","Galaxy A12s",
    "Galaxy A13","Galaxy A13 5G","Galaxy A14","Galaxy A14 5G",
    "Galaxy A15","Galaxy A15 5G",
    "Galaxy A20","Galaxy A20s","Galaxy A21","Galaxy A21s",
    "Galaxy A22","Galaxy A22 5G","Galaxy A23","Galaxy A23 5G",
    "Galaxy A24","Galaxy A25","Galaxy A25 5G",
    "Galaxy A30","Galaxy A30s","Galaxy A31","Galaxy A32","Galaxy A32 5G",
    "Galaxy A33","Galaxy A34","Galaxy A35",
    "Galaxy A40","Galaxy A41","Galaxy A42","Galaxy A42 5G",
    "Galaxy A50","Galaxy A50s","Galaxy A51","Galaxy A51 5G",
    "Galaxy A52","Galaxy A52 5G","Galaxy A53","Galaxy A54","Galaxy A55",
    "Galaxy A60","Galaxy A70","Galaxy A71","Galaxy A72","Galaxy A73",

    // Linha S
    "Galaxy S8","Galaxy S8+","Galaxy S9","Galaxy S9+",
    "Galaxy S10","Galaxy S10e","Galaxy S10+",
    "Galaxy S20","Galaxy S20+","Galaxy S20 Ultra",
    "Galaxy S21","Galaxy S21+","Galaxy S21 Ultra",
    "Galaxy S22","Galaxy S22+","Galaxy S22 Ultra",
    "Galaxy S23","Galaxy S23+","Galaxy S23 Ultra",
    "Galaxy S24","Galaxy S24+","Galaxy S24 Ultra",
    "Galaxy S25","Galaxy S25+","Galaxy S25 Ultra"
  ],

  Xiaomi: [
    // Xiaomi / Mi
    "Xiaomi Mi 8","Xiaomi Mi 9","Xiaomi Mi 9T",
    "Xiaomi Mi 10","Xiaomi Mi 10T",
    "Xiaomi Mi 11","Xiaomi Mi 11 Lite",
    "Xiaomi 12","Xiaomi 12 Pro",
    "Xiaomi 13","Xiaomi 13 Pro",
    "Xiaomi 14","Xiaomi 14 Pro","Xiaomi 14 Ultra",
    "Xiaomi 15","Xiaomi 15 Pro","Xiaomi 15 Ultra",

    // Redmi
    "Redmi 7","Redmi 8","Redmi 9","Redmi 9A","Redmi 9C","Redmi 9T",
    "Redmi 10","Redmi 10A","Redmi 10C",
    "Redmi 11","Redmi 12","Redmi 12C",
    "Redmi Note 7","Redmi Note 8","Redmi Note 9",
    "Redmi Note 10","Redmi Note 10S","Redmi Note 10 Pro",
    "Redmi Note 11","Redmi Note 11S","Redmi Note 11 Pro",
    "Redmi Note 12","Redmi Note 12 Pro","Redmi Note 12 Pro+",

    // POCO
    "Poco X3","Poco X3 Pro",
    "Poco X4","Poco X4 Pro",
    "Poco X5","Poco X5 Pro",
    "Poco F3","Poco F4","Poco F5","Poco F5 Pro"
  ],

  Motorola: [
    "Moto E5","Moto E6","Moto E7","Moto E13","Moto E22",
    "Moto G5","Moto G6","Moto G7","Moto G8","Moto G9",
    "Moto G10","Moto G20","Moto G30","Moto G40","Moto G50","Moto G60","Moto G73",
    "Motorola One","Motorola One Vision","Motorola One Action",
    "Edge 20","Edge 30","Edge 40","Edge 40 Pro"
  ],

  Realme: [
    "Realme C11","Realme C21","Realme C25","Realme C35","Realme C55","Realme 60x",
    "Realme 7","Realme 8","Realme 9","Realme 10","Realme 11",
    "Realme GT","Realme GT Neo","Realme GT Neo 2","Realme GT Neo 3"
  ],

  Oppo: [
    "Oppo A5 4G","Oppo A12","Oppo A15","Oppo A31","Oppo A54","Oppo A78",
    "Oppo Reno 5","Oppo Reno 6","Oppo Reno 7","Oppo Reno 8"
  ],

  Vivo: [
    "Vivo Y11","Vivo Y12","Vivo Y15","Vivo Y20","Vivo Y21","Vivo Y30","Vivo Y35",
    "Vivo V23","Vivo V25","Vivo V27","Vivo V29"
  ],

  Asus: [
    "Zenfone 5","Zenfone 6","Zenfone 7","Zenfone 8","Zenfone 9","Zenfone 10",
    "ROG Phone 2","ROG Phone 3","ROG Phone 5","ROG Phone 6","ROG Phone 7"
  ],

  LG: [
    "LG K10","LG K11","LG K12","LG K22",
    "LG G6","LG G7","LG G8",
    "LG V30","LG V40","LG V50"
  ],

  Nokia: [
    "Nokia 2","Nokia 3","Nokia 5","Nokia 6","Nokia 7",
    "Nokia G10","Nokia G20","Nokia G21","Nokia G22"
  ],

  Infinix: [
    "Infinix Hot 8","Infinix Hot 9","Infinix Hot 10","Infinix Hot 11","Infinix Hot 12",
    "Infinix Note 10","Infinix Note 11","Infinix Note 12","Infinix Note 30"
  ],

  Tecno: [
    "Tecno Spark 6","Tecno Spark 7","Tecno Spark 8","Tecno Spark 10",
    "Tecno Pova 2","Tecno Pova 3","Tecno Pova 5"
  ],

  Positivo: [
    "Positivo Twist","Positivo Twist 2","Positivo Twist 3",
    "Positivo S650","Positivo S670","Positivo S680"
  ],

  Multilaser: [
    "Multilaser E Lite","Multilaser E Pro","Multilaser F Pro"
  ]
};

// ===================================================
// FUNÇÕES (SEM BUG)
// ===================================================

function hash(texto) {
  let h = 0;
  for (let i = 0; i < texto.length; i++) {
    h = (h << 5) - h + texto.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function gerarSensibilidade(modelo) {
  return 160 + (hash(modelo) % 25);
}

function gerarDPI(modelo, marca) {
  if (marca === "Apple") return null;
  return 420 + (hash(modelo) % 80);
}