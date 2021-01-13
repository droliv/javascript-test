function isvalidEmail() {
    document.querySelector('#email').addEventListener('change', () => {
        const email = document.getElementById('email').value;
        let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        let valid = regex.test(email);
        if(!valid){
            document.getElementById('mailResponse').innerHTML = '<span style="color:red">inválido</span>';
        }
        else {
            document.getElementById('mailResponse').innerHTML = '<span style="color:green">válido</span>';
        }
    })
}


isvalidEmail();