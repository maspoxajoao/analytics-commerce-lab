(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    form.reset();
    const box = document.querySelector("[data-form-success]");
    if (box) box.hidden = false;
  });
})();
