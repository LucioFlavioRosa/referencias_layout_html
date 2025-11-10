// scripts.js - Validações, máscaras e interações para formulários
// =====================================================================
// CONTEXTO: Utiliza jQuery, conforme padrão do template porto_seguros_layout.html

// =============================
// 1. MÁSCARAS DE CAMPOS
// =============================
$(document).ready(function() {
  // Máscara para telefone (formato brasileiro)
  $(document).on('input', 'input[type="tel"], input.telefone', function() {
    var val = $(this).val().replace(/\D/g, '');
    if(val.length > 11) val = val.slice(0,11);
    if(val.length > 10) {
      val = val.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if(val.length > 6) {
      val = val.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
    } else if(val.length > 2) {
      val = val.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    $(this).val(val);
  });

  // Máscara para placa de veículo (Mercosul e padrão antigo)
  $(document).on('input', 'input.placa', function() {
    var val = $(this).val().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if(val.length > 7) val = val.slice(0,7);
    $(this).val(val);
  });

  // Máscara para ano do veículo
  $(document).on('input', 'input.ano', function() {
    var val = $(this).val().replace(/\D/g, '');
    if(val.length > 4) val = val.slice(0,4);
    $(this).val(val);
  });

  // =============================
  // 2. VALIDAÇÕES DE FORMULÁRIO
  // =============================
  $(document).on('submit', 'form', function(e) {
    var ok = true;
    var form = $(this);
    // Validação de campos obrigatórios
    form.find('input[required], select[required]').each(function() {
      if(!$(this).val()) {
        $(this).addClass('is-invalid');
        ok = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // Validação de e-mail
    form.find('input[type="email"]').each(function() {
      var email = $(this).val();
      var regex = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
      if(email && !regex.test(email)) {
        $(this).addClass('is-invalid');
        ok = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // Validação de telefone (mínimo 10 dígitos)
    form.find('input[type="tel"], input.telefone').each(function() {
      var val = $(this).val().replace(/\D/g, '');
      if(val.length < 10) {
        $(this).addClass('is-invalid');
        ok = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // Validação de ano do veículo (entre 1900 e ano atual+1)
    form.find('input.ano').each(function() {
      var ano = parseInt($(this).val(), 10);
      var anoAtual = new Date().getFullYear() + 1;
      if(isNaN(ano) || ano < 1900 || ano > anoAtual) {
        $(this).addClass('is-invalid');
        ok = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    if(!ok) {
      e.preventDefault();
      form.find('.is-invalid').first().focus();
    }
  });

  // =============================
  // 3. INTERAÇÕES BÁSICAS
  // =============================
  // Feedback visual para campos inválidos
  $(document).on('input change', '.is-invalid', function() {
    if($(this).val()) {
      $(this).removeClass('is-invalid');
    }
  });

  // Botão de cookies (caso exista)
  $(document).on('click', '.cookies-save', function() {
    $('.cookies-container').fadeOut();
    window.localStorage.setItem('cookies-pref', JSON.stringify(['marketing','analytics']));
  });

  // Scroll suave para âncoras internas
  $(document).on('click', 'a[href^="#"]', function(e) {
    var target = $(this.getAttribute('href'));
    if(target.length) {
      e.preventDefault();
      $('html, body').animate({scrollTop: target.offset().top - 60}, 600);
    }
  });
});

// =====================================================================
// FIM DO ARQUIVO scripts.js
// =====================================================================
