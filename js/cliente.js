let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Adicionando o cliente na tabela

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;

    let dados = {
        nome,
        cpf,
        email,
        telefone,
        cep,
        endereco
    };

    //Validando CPF e Telefone

  
        let valoresDados = Object.values(dados);

        let tbody = document.getElementById('tabela-clientes');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        });

        // Adicionando o cliente no Local Storage

        let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

        clientes.push(dados);

        let clientesConvertidos = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesConvertidos);

        window.location.reload();
    
});

// Carrega o Local storage no load da pagina
function carrega() {

    let dados = JSON.parse(localStorage.getItem('cliente')) ?? [];

    let valoresDados = Object.values(dados);
    for (var i = 0; i < valoresDados.length; i++) {
        let valorLinha = [valoresDados[i].nome, valoresDados[i].cpf, valoresDados[i].email, valoresDados[i].telefone, valoresDados[i].cep, valoresDados[i].endereco];
        let tbody = document.getElementById('tabela-clientes');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valorLinha.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        })
    }
}