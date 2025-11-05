# README - Página de Pedido de Transporte

## 1. Descrição Geral da Funcionalidade
A página de Pedido de Transporte permite que o usuário solicite o serviço de uma transportadora para retirada de mercadoria diretamente no fornecedor. O formulário foi projetado para ser simples, responsivo e amigável, facilitando o preenchimento e a validação dos dados necessários para a operação logística.

## 2. Estrutura do Arquivo
O protótipo é composto por um único arquivo `.html` que inclui:
- **HTML:** Estrutura semântica da página, utilizando tags modernas como `<header>`, `<main>`, `<form>`, etc.
- **CSS:** Estilização feita com Tailwind CSS via CDN e complementos customizados no bloco `<style>`.
- **JavaScript:** Scripts inline para validação de formulário, feedback ao usuário e simulação de envio dos dados.

## 3. Campos do Formulário e Validações
O formulário de pedido de transporte contém os seguintes campos:
- **Nome da Transportadora** (obrigatório)
- **CNPJ da Transportadora** (obrigatório, formato válido)
- **Nome do Fornecedor** (obrigatório)
- **Endereço de Retirada** (obrigatório)
- **Cidade/UF** (obrigatório)
- **Data de Retirada** (obrigatório, não pode ser anterior à data atual)
- **Horário Preferencial** (opcional)
- **Contato no Fornecedor** (obrigatório)
- **Telefone do Contato** (obrigatório, formato válido)
- **Observações** (opcional)

Validações são feitas em tempo real e no envio, com mensagens de erro amigáveis.

## 4. Fluxo de Uso
1. **Usuário acessa a página** e visualiza o formulário de pedido de transporte.
2. **Preenche todos os campos obrigatórios**. Campos inválidos são destacados.
3. **Ao clicar em "Solicitar Transporte"**, o JavaScript valida os dados:
   - Se houver erros, exibe mensagens e impede o envio.
   - Se estiver tudo correto, exibe uma mensagem de confirmação e limpa o formulário.
4. **Os dados são apenas logados no console** (simulação de envio).

## 5. Tecnologias Utilizadas
- **HTML5** (estrutura semântica)
- **CSS3** com **Tailwind CSS** via CDN e customizações inline
- **JavaScript Vanilla** (sem frameworks)

## 6. Instruções para Abrir o Arquivo
Basta abrir o arquivo `.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari, etc.). Não é necessário servidor ou instalação de dependências.

## 7. Observações sobre a Simulação de Envio
- Não há backend real: ao enviar o formulário, os dados são apenas exibidos no console do navegador (pressione F12 para abrir o console e visualizar).
- Não há persistência, autenticação ou integração com sistemas externos.

## 8. Próximos Passos para Produção
- **Integração com backend:** Enviar os dados do formulário para uma API REST ou serviço de backend real.
- **Banco de dados:** Persistir os pedidos em um banco de dados relacional ou NoSQL.
- **Autenticação:** Restringir o acesso ao formulário para usuários autenticados.
- **Validação avançada:** Implementar validações de CNPJ e telefone via API.
- **Feedback transacional:** Exibir status de envio real, erros de rede, etc.
- **Aprimoramento de UX:** Adicionar carregamento, máscara de campos e acessibilidade avançada.

---

**Dúvidas ou sugestões? Entre em contato com o time de Frontend.**
