const celulares = {
  Samsung: ["Galaxy A10","A20","A30","A50","A51","A52","A53","S20","S21","S22","S23"],
  Apple: ["iPhone 8","X","XR","11","12","13","14","15"],
  Xiaomi: ["Redmi 9","Redmi 10","Note 8","Note 9","Note 10","Note 11","Note 12"],
  Motorola: ["Moto G8","G9","G10","G20","G30","G40","Edge 20"],
  Realme: ["C11","C25","C35","8","9","GT"],
  Asus: ["ROG Phone 2","ROG Phone 3","ROG Phone 5"],
  Oppo: ["A15","A54","Reno 5"],
  Vivo: ["Y20","Y21","V25"],
  Infinix: ["Hot 10","Hot 11","Note 10"],
  Tecno: ["Spark 8","Spark 10"]
};

const brand = document.getElementById("brand");
const model = document.getElementById("model");

brand.innerHTML = `<option>Selecione</option>`;
model.innerHTML = `<option>Selecione</option>`;

for (let b in celulares) {
  brand.innerHTML += `<option>${b}</option>`;
}

brand.onchange = () => {
  model.innerHTML = `<option>Selecione</option>`;
  celulares[brand.value]?.forEach(m => {
    model.innerHTML += `<option>${m}</option>`;
  });
};

function gerar() {
  if (!brand.value || !model.value || brand.value === "Selecione") {
    document.getElementById("resultado").innerHTML = "⚠️ Selecione marca e modelo";
    return;
  }

  const base = 85 + Math.floor(Math.random() * 10);

  document.getElementById("resultado").innerHTML = `
  🎯 <b>Sensibilidade ideal</b><br>
  Geral: ${base}<br>
  Red Dot: ${base - 5}<br>
  2x: ${base - 15}<br>
  4x: ${base - 25}<br>
  AWM: ${base - 35}<br><br>
  📱 Otimizado para ${model.value}
  `;
}
