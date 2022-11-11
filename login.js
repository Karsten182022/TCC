async function login() {
    debugger
    const body = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    const requisicao = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const endpoint = "https://codifica-demo-api.herokuapp.com/api/v1/users/login"

    const resultadoApi = await fetch(endpoint, requisicao);

    alert("qualquercoisa")

}