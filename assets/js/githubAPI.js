function renderizaFoto(foto) {
    const imgFoto = document.getElementById('foto');
    imgFoto.src = `${foto}`;

}

const capturaNome = (meuNome) => {
    document.getElementById('nome').innerText = meuNome;

}

const nomeRepos = (nomeRepos) => {


    for (itens of nomeRepos) {
        let dataPub = itens.created_at.substring(0, itens.created_at.length - 10);
        let dataAtt = itens.updated_at.substring(0, itens.updated_at.length - 10);

        if (itens.language == null) {
            itens.language = "Nenhuma"
        }
        let url = itens.svn_url

        document.getElementById('reposName').innerHTML +=
            `
            <div class="boxRep">
            <div class="titleRep"><b>Nome</b>: ${itens.name}</div>
            <div class="dataRep"><b>Data de criação</b>: ${dataPub}</div>
            <div class="data"><b>Ultima modificação</b>: ${dataAtt}</div>
            <div class="linguagem"><b>Linguagem</b>: ${itens.language}</div>
            <div class="link"><a href="${url}" target="_blank">Acesse aqui!</a></div>
        </div >
    `
    }
}

const fllw = (sdr) => {
    document.getElementById('seguidores').innerHTML = `Seguindo: <b>` + sdr.following + `</b> &emsp; Seguidores: <b>` + sdr.followers +`</b>`
}

const headers = new Headers();
headers.append('Authorization', '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');

fetch("https://api.github.com/users/matheusluizgarcia/repos", { headers: headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        nomeRepos(data)
    })




fetch("https://api.github.com/users/matheusluizgarcia", { headers: headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderizaFoto(data.avatar_url);
        capturaNome(data.name)
        fllw(data)

    })
    .catch(error => { // para status de erro
        console.error('algo deu errado na requisição', error);
    }
    ).finally(() => {
        console.warn('sempre cai aqui');
    });