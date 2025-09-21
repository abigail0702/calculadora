function sumar() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = "Resultado: " + (a + b);
}

function restar() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = "Resultado: " + (a - b);
}

function multiplicar() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = "Resultado: " + (a * b);
}

function dividir() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);

  if (b === 0) {
    document.getElementById("resultado").textContent = "Error: división entre 0";
  } else {
    document.getElementById("resultado").textContent = "Resultado: " + (a / b);
  }
}
