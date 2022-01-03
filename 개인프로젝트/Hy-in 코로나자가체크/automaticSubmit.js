const radios = document.querySelectorAll(".ans>p>:nth-child(3)");
radios.forEach((node) => {
  if (!node.id.startsWith("vaccin") && !node.id.startsWith("c42")) {
    node.checked = true;
  }
});
document.querySelector("#btn_confirm").click();
