function gerarCpf() {
  var cpf = "";
  digitoA = 0;
  digitoB = 0;

  for (i = 0, x = 10; i < 9; ++i, x--) {
    cpf += String(Math.floor(10 * Math.random()))
    digitoA += cpf[i] * x;
  }

  var somaA = ((digitoA % 11) < 2) ? 0 : 11 - (digitoA % 11)

  cpf += somaA;

  for (i = 0, x = 11; i < 10; ++i, x--) {
    digitoB += cpf[i] * x;
    if (cpf === Array(12).join(i)) {
      console.log("Padrão de CPF Inválido!");
      return;
    }
  }

  var somaB = ((digitoB % 11) < 2) ? 0 : 11 - (digitoB % 11)

  cpf += somaB;

  return cpf;


  if (somaA != cpf[9] || somaB != cpf[10]) {
    return false;
  } else {
    return true;
  }
}