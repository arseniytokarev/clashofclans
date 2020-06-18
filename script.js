function calcTotalG() {
    let profile = [];
    f = document.getElementById('form-g')
    let obj;
    f.querySelectorAll(".input-g").forEach((input = 0) => {
        if (!input.value) {
            profile.push(0)
        } else {
            profile.push(input.value)
        }
    }); 
    console.log(profile.length)
    
    var hours = document.getElementById('hours-g').value;
    if (hours < 1) {
        hours = 1;
    } else {
        hours = document.getElementById('hours-g').value;
    }

    let sum = [];
    for (i=0; i < profile.length; i++) {
        sum.push((parseInt(profile[i], 10) * parseInt(hours, 10)))
    }

    var realtot = sum.reduce((total, val) => {
        return total + val
    })
    
    realtot = parseInt(realtot, 10)
    document.getElementById('result-g').innerHTML = new Intl.NumberFormat().format(realtot);

}

function remove(el) {
    var element = el;
    element.remove();
}

function addInput() {
    var div = document.createElement('div');
    var input = document.createElement('input')
    var br = document.createElement('br')
    input.classList.add('input-g')
    var label = document.createElement('label')
    label.innerHTML = 'Gold Mine'
    div.appendChild(label)
    div.appendChild(br)
    div.appendChild(input)
    var form = document.getElementById('inputcont-g')
    form.appendChild(div)

}

function addInputE() {
    var div = document.createElement('div');
    var input = document.createElement('input')
    var br = document.createElement('br')
    input.classList.add('input-e')
    var label = document.createElement('label')
    label.innerHTML = 'Elixir Mine'
    div.appendChild(label)
    div.appendChild(br)
    div.appendChild(input)
    var form = document.getElementById('inputcont-e')
    form.appendChild(div)
}

function calcTotalE() {
    let profile = [];
    f = document.getElementById('form-e')
    let obj;
    f.querySelectorAll(".input-e").forEach((input = 0) => {
        if (!input.value) {
            profile.push(0)
        } else {
            profile.push(input.value)
        }
    });
    console.log(profile.length)

    var hours = document.getElementById('hours-e').value;
    if (hours < 1) {
        hours = 1;
    } else {
        hours = document.getElementById('hours-e').value;
    }

    let sum = [];
    for (i = 0; i < profile.length; i++) {
        sum.push((parseInt(profile[i], 10) * parseInt(hours, 10)))
    }

    var realtot = sum.reduce((total, val) => {
        return total + val
    })

    realtot = parseInt(realtot, 10)
    document.getElementById('result-e').innerHTML = new Intl.NumberFormat().format(realtot);

}
