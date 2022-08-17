let elementoLogin = document.getElementById("login")
let elementoSenha = document.getElementById("senha")

const verificarLogin = (login, senha) => {
    if (login == "matheus" && senha == "123") {
        localStorage.setItem("usuarioLogado", login);
        localStorage.setItem("sobrenome", "Garcia")
        return true;
    }
    return false;

};

const apresentaMensagemErro = () => {
    document.getElementById('incorreto').style.display = "block";
    alert("Não foi possível logar");
}

const realizarLogin = () => {
    const login = elementoLogin.value;
    const senha = elementoSenha.value;
    if (verificarLogin(login, senha)) {
        // window.location.href = "./view/home.html"
        window.location.assign("./views/home.html")
    } else {
        apresentaMensagemErro();
    }
};