const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active"); //devolve o objeto com do seletor.
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active"); //devolve o objeto com do seletor.
  },
};

/* linta com as transações*/
const transaction = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
];

/* ___________________ */
/* Eu preciso somar as entradas
depois eu preciso somar as saídas e
resomer das entradas o valor das sáidas
assim, eu terei o total */
const Transaction = {
  incomes() {
    //somar as entradas
  },
  expenses() {
    //somar as saídas
  },
  total() {
    //entradas - saídas
  },
};

/* 
Substituir os dados do HTML com os dados do JS
*/
const DOM = {
    transactionConteiner: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionConteiner.appendChild(tr);

  },

  /* montador de uma nova transição */
  innerHTMLTransaction(transaction) {



    const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="remover transação"/>
            </td>

        `;

    return html;
  },
};
DOM.addTransaction(transaction[0]);
DOM.addTransaction(transaction[1]);
DOM.addTransaction(transaction[2]);
