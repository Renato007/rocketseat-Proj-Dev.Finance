const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active"); //devolve o objeto com do seletor.
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active"); //devolve o objeto com do seletor.
  },
};
