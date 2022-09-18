const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active"); //devolve o objeto com do seletor.
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active"); //devolve o objeto com do seletor.
  },
};

/* linta com as transações*/
const transactions = [
  {
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    description: "Website",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
  {
    description: "App",
    amount: 200000,
    date: "23/01/2021",
  },
];

const Transaction = {
  all: transactions,
  add(transaction) {
    Transaction.all.push(transaction);

    App.reload()
  },

  remove(index){
    Transaction.all.splice(index, 1)

    App.reload()


  },

  incomes() {
    let income = 0;
    //pegar todas as transações
    // para cada transação
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });

    return income;
  },
  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const DOM = {
  transactionConteiner: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionConteiner.appendChild(tr);
  },
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

  upDateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrecy(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrecy(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrecy(
      Transaction.total()
    );
  },

  clearTransactions(){
    DOM.transactionConteiner.innerHTML = ""
  }
};
/* Utilidades */
const Utils = {
  formatCurrecy(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(
      /\D/g,
      ""
    ); /* pega todos que não for numero e Substitue por ""  */

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

const App = {
  init(){
    Transaction.all.forEach((transaction) => {
      DOM.addTransaction(transaction);
    });
    
    DOM.upDateBalance();

  },
  reload(){
    DOM.clearTransactions()
    App.init()
  },
}

App.init();
    




