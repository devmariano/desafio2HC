let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Adicionando o produto na tabela

    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let marca = document.getElementById('marca').value;
    let quantidade = document.getElementById('quantidade').value;

    let dados = {
        nome,
        descricao,
        marca,
        quantidade
    };

    let valoresDados = Object.values(dados);

    let tbody = document.getElementById('tabela-produtos');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valoresDados.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });

    // Adicionando o produto no Local Storage

    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(dados);

    let produtosConvertidos = JSON.stringify(produtos);

    localStorage.setItem('produto', produtosConvertidos);

    window.location.reload();
});

// Carrega o Local storage no load da pagina
function carrega() {

    let dados = JSON.parse(localStorage.getItem('produto')) ?? [];

    let valoresDados = Object.values(dados);
    for (var i = 0; i < valoresDados.length; i++) {
        let valorLinha = [valoresDados[i].nome, valoresDados[i].descricao, valoresDados[i].marca, valoresDados[i].quantidade];
        let tbody = document.getElementById('tabela-produtos');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valorLinha.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        })
    }

}