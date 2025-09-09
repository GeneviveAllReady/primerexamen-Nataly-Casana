  const btnHamburguesa = document.querySelector(".hamburguesa");
  const menu = document.querySelector(".menu");

  btnHamburguesa.addEventListener("click", () => {
    const activo = menu.classList.toggle("activo");
    btnHamburguesa.setAttribute("aria-expanded", activo);
  });