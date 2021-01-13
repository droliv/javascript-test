let weekHours = new Array();


function convert(horary) {
    let [hour, minute] = horary.split(':').map(v => parseInt(v));
    if (!minute) {
        minute = 0;
    }
    return minute + (hour * 60);
}

function duration(entrance, leave, rest) {
    return (convert(leave) - convert(entrance) - (rest*60)) / 60;
}




function criateTable() {
    dayName = new Array ("segunda", "terça", "quarta", "quinta", "sexta")
    head = new Array ("Dia sa semana","Hora início", "Hora fim", "Tempo de descanso (h)", "Carga horária (h)");
    ids = new Array ();
    let tabela = document.createElement("table");
    let thead = document.createElement("thead");
    let tr1 = document.createElement("tr");
    head.map(headItem => {
        let th = document.createElement("th");
        let text = document.createTextNode(headItem);
        th.appendChild(text);
        tr1.appendChild(th);

    })
    thead.appendChild(tr1);
    tabela.appendChild(thead);
    let tbody = document.createElement("tbody");
    dayName.map(day => {
        let tr2 = document.createElement("tr");
        let th = document.createElement("th");
        let text = document.createTextNode(day);
        th.appendChild(text);
        tr2.appendChild(th);
        for (let i = 0; i<=3; i++) {
            let td = document.createElement("td");
            let input = document.createElement("input");
            input.type = "text"; 
            if (i == 3) input.disabled = true;
            input.id = `${day.substring(0,3)}${i}`;
            ids.push(input.id);
            td.appendChild(input);
            tr2.appendChild(td);
        }
        tbody.appendChild(tr2);
    })
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("colspan", "4");
    let text = document.createTextNode("Carga horaria semanal");
    th.appendChild(text);
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.id = "chs";
    input.disabled = true;
    td.appendChild(input);
    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr)
    tabela.appendChild(tbody);
    document.getElementById("tabela").appendChild(tabela);
  }

  function makeCalc(){
    dayName.map(day => {
        let data = new Array ();
        ids.map(id => {
            const label = document.getElementById(id);
            for (let i = 0; i<=3; i++) {
                label.addEventListener('change', () => {
                    if (id === `${day.substring(0,3)}${i}` && i < 3) {
                        data.push(label.value)
                    }
                    if(data.length === 3 && i === 3){
                        let ch = document.getElementById(`${day.substring(0,3)}${i}`);
                        let result = duration(...data)
                        ch.value = result;
                        calcTotal(result)
                    }
                })
            }
        })
    })
  }

  function calcTotal(result) {
    let chs = document.getElementById('chs');
    weekHours.push(result)
    chs.value= weekHours.reduce((total, item) => {
        total += item;
        return total;
    }, 0) / weekHours.length;
  }
  criateTable();
  makeCalc();
 


