function isValidSalary() {
    document.querySelector('#salary').addEventListener('change', () => {
        const salary = document.getElementById('salary').value;
        let regex = /^[1-9]\d{0,1}(\.\d{3})*,\d{2}$/;
        let valid = regex.test(salary);
        if(!valid){
            document.getElementById('salaryResponse').innerHTML = '<span style="color:red">inválido</span>';
        }
        else {
            document.getElementById('salaryResponse').innerHTML = '<span style="color:green">válido</span>';
        }
    })
}


isValidSalary();