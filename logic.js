var array = [];

function load() {
    var ran = 0;
    for (var i = 1; i <= 20; i++) {
        var co = 0;
        while (co < 1) {
            ran = Math.floor(Math.random() * 10) + 1;
            if (validate(ran) < 2) {
                array[i] = ran;
                co++;
            }
        }
    }
}

function validate(ran) {
    var cont = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] == ran) {
            cont++;
        }
    }
    return cont;
}

var uno = 0;
var unosave = 0
var dos = 0;

async function changeImage(id) {
    if (uno == 0) {
        unosave = id;
        uno = array[id];
        document.getElementById(`${id}`).src = `image/${array[id]}.jpg`;
    } else {
        dos = array[id];
        document.getElementById(`${id}`).src = `image/${array[id]}.jpg`;
    }
    await sleep(500);
    if (uno != dos && dos != 0) {
        document.getElementById(`${unosave}`).src = `image/0.jpg`;
        document.getElementById(`${id}`).src = `image/0.jpg`;
        uno = 0;
        dos = 0;
    }
    if (uno == dos) {
        uno = 0;
        dos = 0;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}