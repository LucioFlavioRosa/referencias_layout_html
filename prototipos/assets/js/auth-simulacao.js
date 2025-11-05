// Simulação de autenticação de usuários para protótipo de cotação de ações
(function() {
  // Credenciais mockadas
  const MOCK_EMAIL = 'usuario@teste.com';
  const MOCK_SENHA = '12345678';
  const SESSION_KEY = 'usuario_logado';

  // Armazena credenciais mockadas em localStorage se não existir
  if (!localStorage.getItem('credenciais_mock')) {
    localStorage.setItem('credenciais_mock', JSON.stringify({
      email: MOCK_EMAIL,
      senha: MOCK_SENHA
    }));
  }

  // Função de login
  window.login = function(email, senha) {
    const credenciais = JSON.parse(localStorage.getItem('credenciais_mock'));
    if (email === credenciais.email && senha === credenciais.senha) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: email }));
      window.location.href = 'dashboard.html';
    } else {
      exibirErroLogin('E-mail ou senha inválidos.');
    }
  };

  // Função para exibir mensagem de erro
  function exibirErroLogin(msg) {
    let erroEl = document.getElementById('erro-login');
    if (!erroEl) {
      erroEl = document.createElement('div');
      erroEl.id = 'erro-login';
      erroEl.className = 'erro-msg';
      const form = document.querySelector('form');
      if (form) form.parentNode.insertBefore(erroEl, form);
    }
    erroEl.textContent = msg;
    erroEl.style.display = 'block';
  }

  // Função de logout
  window.logout = function() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'login.html';
  };

  // Função para verificar sessão
  window.verificarSessao = function() {
    const sessao = localStorage.getItem(SESSION_KEY);
    if (!sessao) {
      window.location.href = 'login.html';
    }
  };

  // Função para simular recuperação de senha
  window.recuperarSenha = function(email) {
    const credenciais = JSON.parse(localStorage.getItem('credenciais_mock'));
    let erroEl = document.getElementById('erro-recuperacao');
    if (!erroEl) {
      erroEl = document.createElement('div');
      erroEl.id = 'erro-recuperacao';
      erroEl.className = 'erro-msg';
      const form = document.querySelector('form');
      if (form) form.parentNode.insertBefore(erroEl, form);
    }
    if (email === credenciais.email) {
      erroEl.textContent = 'Um link de redefinição de senha foi enviado para seu e-mail.';
      erroEl.style.color = '#007bff';
    } else {
      erroEl.textContent = 'E-mail não encontrado.';
      erroEl.style.color = '#d32f2f';
    }
    erroEl.style.display = 'block';
  };
})();
