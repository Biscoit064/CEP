document.addEventListener("DOMContentLoaded", function () {
    const BuscarBnt = document.getElementById("buscarbnt");
    const ResultDiv = document.getElementById("divdados");
    const CepInput = document.getElementById("cep");


    BuscarBnt.addEventListener("click", function () {
        
        const cep = CepInput.value;

        if (cep.length !== 8 || isNaN(cep)) {
            alert("CEP invalido!");
            return;
        }
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then((data) => {
                ResultDiv.innerHTML =
                    `<p><strong>CEP:</strong> ${data.cep}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>`;
            })
            .catch(err => {
                console.error("Erro ao buscar CEP:", err);
                ResultDiv.innerHTML = "<h2>CEP não encontrado.</h2>";

            })
    });
});
