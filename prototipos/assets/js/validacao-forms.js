// Validação de formulários para login, cadastro e recuperação de senha
function mostrarErro(input, mensagem) {
  let erro = input.parentNode.querySelector('.invalid-feedback');
  if (!erro) {
    erro = document.createElement('div');
    erro.className = 'invalid-feedback';
    erro.style.color = '#d9534f';
    erro.style.fontSize = '0.9rem';
    erro.style.marginTop = '4px';
    input.parentNode.appendChild(erro);
  }
  erro.textContent = mensagem;
  input.classList.add('is-invalid');
}

function limparErro(input) {
  let erro = input.parentNode.querySelector('.invalid-feedback');
  if (erro) erro.textContent = '';
  input.classList.remove('is-invalid');
}

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validarSenha(senha) {
  return senha.length >= 8 && /[A-Za-z]/.test(senha) && /\d/.test(senha);
}

function validarCPF(cpf) {
  const re = /^\d{11}$/;
  return re.test(cpf);
}

function validarFormulario(form) {
  let valido = true;
  // Email
  const email = form.querySelector('input[type="email"]');
  if (email) {
    limparErro(email);
    if (!validarEmail(email.value)) {
      mostrarErro(email, 'E-mail inválido.');
      valido = false;
    }
  }
  // Senha
  const senha = form.querySelector('input[type="password"][name="senha"]');
  if (senha) {
    limparErro(senha);
    if (!validarSenha(senha.value)) {
      mostrarErro(senha, 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.');
      valido = false;
    }
  }
  // Confirmar Senha
  const confirmar = form.querySelector('input[type="password"][name="confirmar_senha"]');
  if (senha && confirmar) {
    limparErro(confirmar);
    if (senha.value !== confirmar.value) {
      mostrarErro(confirmar, 'As senhas não coincidem.');
      valido = false;
    }
  }
  // CPF
  const cpf = form.querySelector('input[name="cpf"]');
  if (cpf) {
    limparErro(cpf);
    if (!validarCPF(cpf.value)) {
      mostrarErro(cpf, 'CPF inválido. Digite apenas números, 11 dígitos.');
      valido = false;
    }
  }
  return valido;
}

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validarFormulario(form)) {
        e.preventDefault();
      }
    });
    // Remove erro ao digitar
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', function() {
        limparErro(input);
      });
    });
  });
});