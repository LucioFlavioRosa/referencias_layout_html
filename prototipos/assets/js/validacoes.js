// Validações de formulário e máscaras - padrão jQuery
$(document).ready(function() {
  // Máscara para telefone fixo (XX) XXXX-XXXX
  $(document).on('input', 'input[type="tel"].telefone', function() {
    var v = $(this).val().replace(/\D/g, '');
    if (v.length > 10) v = v.slice(0, 10);
    v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, function(_, a, b, c){ return '('+a+') '+b+(c?'-'+c:''); });
    $(this).val(v);
  });

  // Máscara para celular (XX) XXXXX-XXXX
  $(document).on('input', 'input[type="tel"].celular', function() {
    var v = $(this).val().replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, function(_, a, b, c){ return '('+a+') '+b+(c?'-'+c:''); });
    $(this).val(v);
  });

  // Máscara para peso (apenas números)
  $(document).on('input', 'input.peso', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // Validação de campos obrigatórios e formatos
  $(document).on('submit', 'form', function(e) {
    var valid = true;
    var form = $(this);
    // Campos obrigatórios
    form.find('[required]').each(function() {
      if (!$(this).val().trim()) {
        $(this).addClass('is-invalid');
        valid = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // E-mail
    form.find('input[type="email"]').each(function() {
      var email = $(this).val();
      var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (email && !re.test(email)) {
        $(this).addClass('is-invalid');
        valid = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // Telefone fixo
    form.find('input.telefone').each(function() {
      var tel = $(this).val().replace(/\D/g, '');
      if (tel.length !== 10) {
        $(this).addClass('is-invalid');
        valid = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // Celular
    form.find('input.celular').each(function() {
      var cel = $(this).val().replace(/\D/g, '');
      if (cel.length !== 11) {
        $(this).addClass('is-invalid');
        valid = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    // Data (não permitir datas passadas)
    form.find('input[type="date"]').each(function() {
      var data = $(this).val();
      if (data) {
        var hoje = new Date();
        hoje.setHours(0,0,0,0);
        var dataInput = new Date(data);
        if (dataInput < hoje) {
          $(this).addClass('is-invalid');
          valid = false;
        } else {
          $(this).removeClass('is-invalid');
        }
      }
    });
    // Peso (apenas números)
    form.find('input.peso').each(function() {
      var peso = $(this).val();
      if (peso && !/^\d+$/.test(peso)) {
        $(this).addClass('is-invalid');
        valid = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    if (!valid) {
      e.preventDefault();
      form.find('.is-invalid').first().focus();
    }
  });
});