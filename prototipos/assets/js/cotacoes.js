// Simulação de cotações de ações em tempo real
const cotacoesMock = [
  { nome: 'Petrobras', ticker: 'PETR4', valor: 32.50, variacao: 2.5 },
  { nome: 'Vale', ticker: 'VALE3', valor: 68.10, variacao: -1.2 },
  { nome: 'Itaú', ticker: 'ITUB4', valor: 28.75, variacao: 0.8 },
  { nome: 'Magazine Luiza', ticker: 'MGLU3', valor: 4.95, variacao: -0.5 }
];

function formatarValor(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function formatarVariacao(variacao) {
  const sinal = variacao > 0 ? '+' : '';
  return sinal + variacao.toFixed(2) + '%';
}

function carregarCotacoes() {
  const container = document.getElementById('cotacoes-container');
  if (!container) return;
  container.innerHTML = '';
  cotacoesMock.forEach((acao, idx) => {
    // Clona o template do card
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = document.getElementById('card-cotacao-template').innerHTML;
    const card = tempDiv.firstElementChild;
    // Preenche os dados
    card.querySelector('#nome-acao').textContent = acao.ticker;
    card.querySelector('#valor-acao').textContent = formatarValor(acao.valor);
    const variacaoSpan = card.querySelector('#variacao-acao span');
    variacaoSpan.textContent = formatarVariacao(acao.variacao);
    if (acao.variacao >= 0) {
      variacaoSpan.classList.remove('text-danger');
      variacaoSpan.classList.add('text-success');
    } else {
      variacaoSpan.classList.remove('text-success');
      variacaoSpan.classList.add('text-danger');
    }
    // Gráfico: pode ser estático ou placeholder
    card.querySelector('.cotacao-grafico img').setAttribute('src', './assets/images/grafico-placeholder.png');
    card.querySelector('.cotacao-grafico img').setAttribute('alt', 'Gráfico de cotação de ' + acao.ticker);
    container.appendChild(card);
  });
}

function atualizarCotacoes() {
  setInterval(() => {
    cotacoesMock.forEach(acao => {
      // Simula variação aleatória
      const variacao = (Math.random() * 2 - 1).toFixed(2); // -1.00 a +1.00
      acao.variacao = parseFloat(variacao);
      // Atualiza valor
      const delta = acao.valor * (acao.variacao / 100);
      acao.valor = Math.max(0.01, acao.valor + delta);
    });
    carregarCotacoes();
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  carregarCotacoes();
  atualizarCotacoes();
});