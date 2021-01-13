function isvalidCep() {
    document.querySelector('#cep').addEventListener('change', () => {
        const cep = document.getElementById('cep').value;
        let regex = /^\d{5}-\d{3}$/;
        let valid = regex.test(cep);
        if(!valid){
            document.getElementById('cepResponse').innerHTML = '<span style="color:red">inválido</span>';
        }
        else {
            document.getElementById('cepResponse').innerHTML = '<span style="color:green">válido</span>';
            getAddressData(cep);
        }
    })
}

function getAddressData(cep){
    let cepNumber = cep.replace(/\.|\-/g, '');
    fetch(`http://viacep.com.br/ws/${cepNumber}/json`)
    .then(res => res.json())
    .then(data => {
        const logradouro = document.getElementById('logradouro');
        const number = document.getElementById('number');
        const complement = document.getElementById('complement');
        logradouro.removeAttribute('disabled');
        number.removeAttribute('disabled');
        complement.removeAttribute('disabled');
        logradouro.value = data.logradouro;
        console.log(logradouro);
    })
}

isvalidCep();