const formIniciarSessao = document.querySelector("#iniciar-sessao");

Array.from(formIniciarSessao).forEach((campo) => {
  campo.addEventListener("blur", () => validaCampos(campo))
})

function validaCampos(campo) {
  const span = campo.nextElementSibling;

  if(campo.validity.valid) {
    span.innerText = "";
    campo.classList.remove("campo-invalido");
  }
  else {
    const mensagem = valida(campo);
    span.innerText = mensagem;
    campo.title = mensagem;
    campo.classList.add("campo-invalido");
  }
}

function valida(campo) {
  if(campo.validity.valid) {
    return "Campo está inválido";
  }

  if(campo.validity.valueMissing) {
    return "Campo não pode ficar vazio";
  }

  if(campo.validity.patternMismatch) {
    return "Campo está preenchido errado";
  }
  
}