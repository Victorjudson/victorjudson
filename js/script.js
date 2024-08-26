// essa parte do projeto foi um a mais feito por mim//
// não fazia parte da atividade mas eu quis testar um pouco do que tava pra fazer//

//Aqui é pra poder mudar a cor de fundo do projeto//

// selecionar o butão//
const toggleThemeBtn = document.getElementById("mudancaDeTema");
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  //salvar preferencia, pra não ficar recarregnado toda vez//
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", toggleTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
});

// o foco foi apenas a parte black mesmo do sistema,
//a versão clara não está perfeita porque foi apenas um teste//
