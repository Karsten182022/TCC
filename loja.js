async function carregaritens() {
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
function setConfig(){
	var produtos = {
		"produto": ""
	};
	document.title = texts.title;
	document.getElementById("").innerHTML = produtos.produto;
}
