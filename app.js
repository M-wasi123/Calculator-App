



let simpleCalulator = document.getElementById('calcu')
let scientificCalulator = document.getElementById('s_calcu')


function simple() {
    simpleCalulator.style.display = 'block'
   scientificCalulator.style.display = 'none'
let colour = Math.floor(Math.random()*2569)
document.body.style.backgroundColor = '#' +colour
   
}
function scientific() {
    scientificCalulator.style.display = 'block'
    simpleCalulator.style.display = 'none'
   let colour = Math.floor(Math.random()*2569)
document.body.style.backgroundColor = '#' +colour

}
function display(val) {
    
    document.getElementById('result2').value += val;
    if (solv()) {
    document.getElementById('result2').value = '';
        
    }
    // document.getElementById('result1').value += val;

}

function solv() {
    var x = document.getElementById('result2').value;
        var y = eval(x);
        if (isNaN(y)) {
            document.getElementById('result1').value = '';
        } else {
            document.getElementById('result1').value = y;
        }

}
function sol() {
    var x = document.getElementById('result2').value;
        var y = eval(x);
        if (isNaN(y)) {
            document.getElementById('result1').value = '';
        } else {
            document.getElementById('result1').value = y;
        }
    document.getElementById('result2').value = '';

}

function clearScreen1() {
    document.getElementById('result1').value =''
    document.getElementById('result2').value =''

}

function clearScreen() {
    document.getElementById('result2').value =''
} 

function delet() {
    var x= document.getElementById('result2').value;
    document.getElementById('result2').value =x.substr(0,x.length-1);
    document.getElementById('result1').value =x.substr(0,x.length-1);

}
function sign() {
    var x = document.getElementById('screen').value;
    var y = Math.sign(x)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function cos() {
    var x = document.getElementById('screen').value;
    var y = Math.cos(x)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function tan() {
    var x = document.getElementById('screen').value;
    var y = Math.tan(x)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function log() {
    var x = document.getElementById('screen').value;
    var y = Math.log(x)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function pow1() {
    var x = document.getElementById('screen').value;
    var y = Math.pow(x, 2)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function pow() {
    var x = document.getElementById('screen').value;
    var y = Math.pow(x, 3)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function sqrt() {
    var x = document.getElementById('screen').value;
    var y = Math.sqrt(x, 1/2)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function cbrt() {
    var x = document.getElementById('screen').value;
    var y = Math.cbrt(x, 1/3)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}

function del() {
    var x= document.getElementById('screen').value;
    document.getElementById('screen').value =x.substr(0,x.length-1);
}
function solve() {
    var x = document.getElementById('screen').value;
    var y = eval(x)
    document.getElementById('screen1').value= y
    document.getElementById('screen').value = '';
}
