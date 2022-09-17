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
  {
    id: 4,
    description: "App",
    amount: 200000,
    date: "23/01/2021",
  },
];

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

const DOM = {
    transactionConteiner: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionConteiner.appendChild(tr);

  },

  /* montador de uma nova transição */
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrecy(transaction.amount);

    const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="remover transação"/>
            </td>

        `;

    return html;
  },
};
/* Utilidades */
const Utils = {
    formatCurrecy(value){
        const signal = Number(value) < 0 ? "-" :""

        value = String(value).replace(/\D/g, "") /* pega todos que não for numero e Substitue por ""  */

        value = Number (value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value;
    }
}

transaction.forEach(function(transaction){
    DOM.addTransaction(transaction)
});
