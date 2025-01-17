
function isvalidCpf(c) {
      if((c = c.replace(/[^\d]/g,"")).length != 11)
        return false
      if (c == "00000000000")
        return false;
      var r;
      var s = 0;
      for (i=1; i<=9; i++)
        s = s + parseInt(c[i-1]) * (11 - i);
      r = (s * 10) % 11;
      if ((r == 10) || (r == 11))
        r = 0;
      if (r != parseInt(c[9]))
        return false;
      s = 0;
      for (i = 1; i <= 10; i++)
        s = s + parseInt(c[i-1]) * (12 - i);
      r = (s * 10) % 11;
      if ((r == 10) || (r == 11))
        r = 0;
      if (r != parseInt(c[10]))
        return false;
      return true;
}


function cpfCheck() {
  document.querySelector('#cpf').addEventListener('change', () => {
    const cpf = document.getElementById('cpf').value;
    document.getElementById('cpfResponse').innerHTML = isvalidCpf(cpf)? '<span style="color:green">válido</span>' : '<span style="color:red">inválido</span>';
    if(cpf == '') document.getElementById('cpfResponse').innerHTML = '';
  })
}

cpfCheck();