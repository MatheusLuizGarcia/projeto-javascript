exibirLoad(true);

let produtos = [];

fetch('../json/produtos.json')
    .then(response => response.json)
    .then(data => {
        produtos = data;
        console.log(data);
    })
    .catch(error => { // para status de erro
        console.error('algo deu errado na requisição', error);
    }
    ).finally(() => {
        exibirLoad(false);
        console.warn('sempre cai aqui');
    });