let elLoggedUser = document.getElementById("usuario-logado");

const loggedUser = localStorage.getItem("usuarioLogado");

const loggedSurname = localStorage.getItem("sobrenome");

elLoggedUser.innerHTML = `Olá ${loggedUser} ${loggedSurname}, Seja muito bem vindo(a) `

const retornarLogin = () => {
    window.location.assign("/../index.html");
    localStorage.clear();
}