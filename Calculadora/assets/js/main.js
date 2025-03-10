function Calculadora() {
  this.display = document.querySelector('.display');
}

Calculadora.prototype.inicia = function() {
  this.cliqueBotoes();
  this.pressionaBackSpace();
  this.pressionaEnter();
};

Calculadora.prototype.pressionaBackSpace = function() {
  this.display.addEventListener('keydown', e => {
    if (e.keyCode === 8) {
      e.preventDefault();
      this.clearDisplay();
    }
  });
};

Calculadora.prototype.pressionaEnter = function() {
  this.display.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      this.realizaConta();
    }
  });
};

Calculadora.prototype.realizaConta = function() {
  let conta = this.display.value;

  try {
    conta = eval(conta);

    if (!conta) {
      alert('Conta inválida');
      return;
    }

    this.display.value = String(conta);
  } catch (e) {
    alert('Conta inválida');
    return;
  }
};

Calculadora.prototype.clearDisplay = function() {
  this.display.value = '';
};

Calculadora.prototype.apagaUm = function() {
  this.display.value = this.display.value.slice(0, -1);
};

Calculadora.prototype.cliqueBotoes = function() {
  document.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('btn-num')) {
      this.btnParaDisplay(el.innerText);
    }

    if (el.classList.contains('btn-clear')) {
      this.clearDisplay();
    }

    if (el.classList.contains('btn-del')) {
      this.apagaUm();
    }

    if (el.classList.contains('btn-eq')) {
      this.realizaConta();
    }

    this.display.focus();
  });
};

Calculadora.prototype.btnParaDisplay = function(valor) {
  this.display.value += valor;
};

const calculadora = new Calculadora();
calculadora.inicia();
