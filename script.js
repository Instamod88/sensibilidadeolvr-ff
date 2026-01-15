<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gerador Sensibilidade FF Pro</title>

<!-- Font Awesome para ícones -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
/* ===== GERAL ===== */
* {
  margin: 0; padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
body {
  background: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

/* ===== FUNDO ANIMADO ===== */
.bg {
  position: fixed; inset: 0;
  background:
    radial-gradient(circle at 25% 30%, rgba(0,150,255,0.18), transparent 50%),
    radial-gradient(circle at 75% 70%, rgba(0,255,255,0.12), transparent 50%);
  animation: bgMove 12s infinite alternate ease-in-out;
  z-index: -1;
}
@keyframes bgMove {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(45deg); }
}

/* ===== CONTAINER ===== */
.container {
  width: 95%;
  max-width: 600px;
  background: rgba(10,15,30,0.88);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 30px;
  border: 1px solid rgba(0,180,255,0.35);
  box-shadow: 0 0 50px rgba(0,120,255,0.3);
}

/* ===== TITULO ===== */
h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #7fd8ff;
}

/* ===== SELECT ===== */
select, button {
  width: 100%;
  padding: 16px;
  margin-top: 14px;
  border-radius: 14px;
  font-size: 1.1rem;
  border: none;
}

select {
  background: rgba(255,255,255,0.08);
  color: #fff;
}
button {
  background: linear-gradient(90deg, #00bfff, #005bff);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

/* ===== RESULTADO ===== */
#resultado {
  margin-top: 24px;
  font-size: 1.2rem;
  line-height: 1.7;
  text-align: center;
  background: rgba(0,0,0,0.7);
  border: 1px solid #00bfff;
  border-radius: 10px;
  padding: 14px;
}

/* ===== CÍRCULO SOCIAL ===== */
.social-wrapper {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
.social-circle {
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: rgba(0,0,0,0.65);
  border: 2px solid rgba(0,200,255,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.social-circle::before {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top: 3px solid #00d9ff;
  border-right: 3px solid #005bff;
  animation: spin 5s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.social-circle a {
  color: #7fd8ff;
  font-size: 2rem;
  margin: 6px;
  text-decoration: none;
}
.social-circle span {
  font-size: 1rem;
  margin-top: 6px;
  color: #cfefff;
}
</style>
</head>

<body>

<div class="bg"></div>

<div class="container">
  <h1>🔥 GERADOR DE SENSIBILIDADE FF</h1>

  <select id="brand">
    <option value="">Selecione a marca</option>
  </select>

  <select id="model">
    <option value="">Selecione o modelo</option>
  </select>

  <button onclick="gerar()">GERAR SENSIBILIDADE</button>

  <div id="resultado">Selecione marca e modelo acima</div>

  <div class="social-wrapper">
    <div class="social-circle">
      <a href="https://www.instagram.com/_oliveira.2ss?igsh=MXIxaHRybzFmbDV2Nw%3D%3D&utm_source=qr" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.tiktok.com/@oliveira.2ss?_r=1&_t=ZS-935zldNRMJT" target="_blank">
        <i class="fab fa-tiktok"></i>
      </a>
      <span>@oliveira.2ss</span>
    </div>
  </div>
</div>

<script>
// =================================================================
// 📱 BASE EXTREMAMENTE AMPLIADA DE DISPOSITIVOS (ANDROID + IPHONE)
// =================================================================

const celulares = {

  Apple: [
    "iPhone 6","iPhone 6s","iPhone 7","iPhone 8","iPhone X","iPhone XR","iPhone XS","iPhone XS Max",
    "iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
    "iPhone 12","iPhone 12 Mini","iPhone 12 Pro","iPhone 12 Pro Max",
    "iPhone 13","iPhone 13 Mini","iPhone 13 Pro","iPhone 13 Pro Max",
    "iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max",
    "iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max",
    "iPhone 16","iPhone 16 Plus","iPhone 16 Pro","iPhone 16 Pro Max"
  ],

  Samsung: [
    "Galaxy A01","Galaxy A02","Galaxy A03","Galaxy A04","Galaxy A05","Galaxy A06","Galaxy A07",
    "Galaxy A10","Galaxy A11","Galaxy A12","Galaxy A13","Galaxy A14","Galaxy A15",
    "Galaxy A20","Galaxy A21","Galaxy A22","Galaxy A23","Galaxy A24","Galaxy A25",
    "Galaxy A30","Galaxy A31","Galaxy A32","Galaxy A33","Galaxy A34","Galaxy A35",
    "Galaxy A40","Galaxy A41","Galaxy A42","Galaxy A42 5G",
    "Galaxy A50","Galaxy A51","Galaxy A52","Galaxy A53","Galaxy A54","Galaxy A55",
    "Galaxy M01","Galaxy M02","Galaxy M03","Galaxy M12","Galaxy M13","Galaxy M14",
    "Galaxy M21","Galaxy M22","Galaxy M23","Galaxy M31","Galaxy M32","Galaxy M33","Galaxy M34","Galaxy M53","Galaxy M54",
    "Galaxy F02","Galaxy F12","Galaxy F13","Galaxy F22","Galaxy F23","Galaxy F42",
    "Galaxy S8","Galaxy S9","Galaxy S10",
    "Galaxy S20","Galaxy S21","Galaxy S22","Galaxy S23","Galaxy S24",
    "Galaxy S20 Ultra","Galaxy S21 Ultra","Galaxy S22 Ultra","Galaxy S23 Ultra","Galaxy S24 Ultra",
    "Galaxy Z Flip3","Galaxy Z Flip4","Galaxy Z Flip5",
    "Galaxy Z Fold3","Galaxy Z Fold4","Galaxy Z Fold5"
  ],

  Xiaomi: [
    "Xiaomi Mi 8","Xiaomi Mi 9","Xiaomi Mi 9T","Xiaomi Mi 10","Xiaomi Mi 10T","Xiaomi Mi 11",
    "Xiaomi 12","Xiaomi 12 Pro","Xiaomi 12T","Xiaomi 12T Pro","Xiaomi 13","Xiaomi 13 Pro",
    "Xiaomi 14","Xiaomi 14 Pro","Xiaomi 14 Ultra","Xiaomi 15","Xiaomi 15 Pro","Xiaomi 15 Ultra",
    "Redmi 7","Redmi 8","Redmi 9","Redmi 10","Redmi 11","Redmi 12","Redmi 13",
    "Redmi Note 8","Redmi Note 9","Redmi Note 10","Redmi Note 10S","Redmi Note 11",
    "Redmi Note 12","Redmi Note 12 Pro","Redmi Note 13","Redmi Note 13 Pro",
    "Poco X3","Poco X3 Pro","Poco X4","Poco X4 Pro","Poco X5","Poco X5 Pro",
    "Poco F3","Poco F4","Poco F5","Poco F5 Pro"
  ],

  Motorola: [
    "Moto E6","Moto E7","Moto E13","Moto E22","Moto E32",
    "Moto G7","Moto G8","Moto G9","Moto G10","Moto G20","Moto G30","Moto G40",
    "Moto G50","Moto G60","Moto G71","Moto G73","Moto G84",
    "Motorola Edge","Motorola Edge 20","Motorola Edge 30","Motorola Edge 40","Motorola Edge 50"
  ],

  LG: [
    "LG K8","LG K10","LG K11","LG K12","LG K22",
    "LG G6","LG G7","LG G8","LG V30","LG V40","LG V50"
  ]
};
  
// =================================================================
// 📌 POPULAR SELECTS
// =================================================================
const brandEl = document.getElementById("brand");
const modelEl = document.getElementById("model");
const resultadoEl = document.getElementById("resultado");

Object.keys(celulares).forEach(b => {
  brandEl.innerHTML += `<option value="${b}">${b}</option>`;
});

brandEl.onchange = () => {
  modelEl.innerHTML = `<option value="">Selecione o modelo</option>`;
  celulares[brandEl.value].forEach(m => {
    modelEl.innerHTML += `<option value="${m}">${m}</option>`;
  });
};

// =================================================================
// 📌 GERAR FUNÇÃO
// =================================================================
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function gerar() {
  if (!brandEl.value || !modelEl.value) {
    resultadoEl.innerHTML = "⚠️ Selecione marca e modelo";
    return;
  }

  const base = 160 + (hash(modelEl.value) % 25);
  const dpi = brandEl.value === "Apple" ? null : 400 + (hash(modelEl.value) % 80);

  resultadoEl.innerHTML = `
    🎯 <b>${modelEl.value}</b><br><br>
    Geral: ${base}<br>
    Red Dot: ${base - 8}<br>
    2x: ${base - 20}<br>
    4x: ${base - 35}<br>
    AWM: ${base - 55}<br><br>
    ${dpi ? `📐 DPI: ${dpi}` : "🍎 iPhone não usa DPI"}
  `;
}
</script>
</body>
</html>