const form = document.forms['formulario__fale-conosco'];

Array.from(form).forEach((campo) => {
  campo.addEventListener('blur', (event) => validaCampos(campo));
})

function validaCampos(campo) {

  if(campo.validity.valid) {

    removeMensagemSpan(campo.nextElementSibling);
    removeBorderError(campo);
  } else {

    const mensagem = valida(campo);
    campo.validity = mensagem;
    
    addMensagemSpan(campo.nextElementSibling, mensagem);
    addBorderError(campo);
  }
}

function addMensagemSpan(campo, mensagem) {
  campo.innerText = mensagem;
}

function removeMensagemSpan(campo) {
  campo.innerText = '';
}

function addBorderError(campo) {
  campo.classList.add("invalido");
}

function removeBorderError(campo) {
  campo.classList.remove("invalido");
}

function valida(campo) {
  // verifica se está vazio
  if(campo.validity.valueMissing) {
    return "Esse campo não pode ficar vazio";
  }

  // Fora do padrão
  if(campo.validity.patternMismatch) {
    return "Esse campo contém caractere(s) inválido(s)";
  }

  
  if(campo.validity.typeMismatch) {
    return "E-mail inválido";
  }

  // Caracteres em excesso
  if(campo.validity.tooLong) {
    return "Esse campo contém caracteres em excesso";
  }

  // Caracteres a menos
  if(campo.validity.tooShort) {
    return "Esse campo não contém caracteres o suficiente";
  }
  
  return '';
}
