
function isvalidPhone() {
    document.querySelector('#phone').addEventListener('change', () => {
        const phone = document.getElementById('phone').value;
        let regex = /(\(\d{2}\)\s)?(\d{4,5}\-\d{4})/g;
        let valid = regex.test(phone);
        if(!valid){
            document.getElementById('phoneResponse').innerHTML = '<span style="color:red">inválido</span>';
        }
        else {
            document.getElementById('phoneResponse').innerHTML = '<span style="color:green">válido</span>';
        }
    })
}


isvalidPhone();