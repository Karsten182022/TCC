async function carregarlivros() {
    console.log
    debugger
    var endpoint = "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/category/livro"

    var resposta = await fetch(endpoint);

    var arquivojson = await resposta.json();

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    for (var categoria of arquivojson) {
        var img = document.createElement("img")
        img.src = categoria.img
        resultado.append(img)
    }
}

async function carregarcamisetas() {
    console.log
    debugger
    var endpoint = "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/category/camiseta"

    var resposta = await fetch(endpoint);

    var arquivojson = await resposta.json();

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    for (var categoria of arquivojson) {
        var img = document.createElement("img")
        img.src = categoria.img
        resultado.append(img)
    }
}

async function carregarfilmes() {
    console.log
    debugger
    var endpoint = "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/category/filme"

    var resposta = await fetch(endpoint);

    var arquivojson = await resposta.json();

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    for (var categoria of arquivojson) {
        var img = document.createElement("img")
        img.src = categoria.img
        resultado.append(img)
    }
}

async function carregarextras() {
    console.log
    debugger
    var endpoint = "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/category/extra"

    var resposta = await fetch(endpoint);

    var arquivojson = await resposta.json();

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    for (var categoria of arquivojson) {
        var img = document.createElement("img")
        img.src = categoria.img
        resultado.append(img)
    }
}