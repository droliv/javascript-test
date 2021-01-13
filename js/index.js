
const state = document.querySelector('#uf');
const city = document.querySelector('#city');
const cnh = document.querySelector('#cnh');
const categoryLabel = document.querySelector('#categoryLabel');

function getStates(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
        states.map(stateItem => {
            let option = document.createElement('option');
            option.setAttribute('value', stateItem.sigla);
            option.textContent = stateItem.sigla;
            state.appendChild(option);
        });
    });
}

function getCities(){
    uf.addEventListener('change', () => {
        let selectedCities = city.childNodes;
        [...selectedCities].map(node => node.remove());
        let selectedState = state.options[state.selectedIndex].value;

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
        .then(res => res.json())
        .then(cities => {
            city.removeAttribute('disabled');
            cities.map(cityItem => {
                let option = document.createElement('option');
                option.setAttribute('value', cityItem.nome);
                option.textContent = cityItem.nome;
                city.appendChild(option);
            })
        })
    })
}

function displayCategory(){
    cnh.addEventListener('change', () => {
        categoryLabel.classList.remove('d-none');
    })
}

getStates()
getCities()
displayCategory()
