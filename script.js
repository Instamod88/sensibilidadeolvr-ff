const celulares = {
  Samsung: ["Galaxy A10","A20","A30","A50","A51","A52","A53","A54","S20","S21","S22","S23","S24"],
  Apple: ["iPhone 8","X","XR","11","12","13","14","15"],
  Xiaomi: ["Redmi 8","9","10","12","Note 8","Note 9","Note 10","Note 11","Note 12","Poco X3","X5","F3","F5"],
  Motorola: ["Moto G7","G8","G9","G10","G20","G30","G40","G60","Edge 20","Edge 30"],
  Realme: ["C11","C25","C35","C55","8","9","GT","GT Neo"],
  Asus: ["ROG Phone 2","ROG Phone 3","ROG Phone 5","ROG Phone 6"],
  Oppo: ["A15","A54","A78","Reno 5","Reno 8"],
  Vivo: ["Y20","Y21","Y35","V25","V27"],
  Infinix: ["Hot 10","Hot 11","Hot 12","Note 10","Note 30"],
  Tecno: ["Spark 8","Spark 10","Pova 3","Pova 5"]
};

const brand = document.getElementById("brand");
const model = document.getElementById("model");

brand.innerHTML = "<option>Selecione</option>";
model.innerHTML = "<option>Selecione</option>";

for (let b in celulares) {
  brand.innerHTML += `<option>${b}</option>`;
}

brand.onchange = () => {
  model.innerHTML = "";
  celulares[brand.value]?.forEach(m => {
    model.innerHTML += `<option>${m}</option>`;
  });
};

function gerar() {
  if (!brand.value || !model.value) {
    resultado.innerHTML = "⚠️ Selecione marca e modelo";
    return;
  }

  const base = 157 + Math.floor(Math.random() * 20); // 157 a 176

  resultado.innerHTML = `
  🎯 <b>Sensibilidade avançada</b><br>
  Geral: ${base}<br>
  Red Dot: ${base - 8}<br>
  2x: ${base - 20}<br>
  4x: ${base - 35}<br>
  AWM: ${base - 50}<br><br>
  📱 Ajustado para ${model.value}
  `;
}
