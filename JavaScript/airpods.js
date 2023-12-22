
function changeAirpod11(imageName) {
    const mainImage = document.getElementById('airpod-main-img1');
    mainImage.src = imageName
}
function changeAirpod12(imageName) {
    const mainImage = document.getElementById('airpod-main-img2');
    mainImage.src = imageName
}
function changeAirpod13(imageName) {
    const mainImage = document.getElementById('airpod-main-img3');
    mainImage.src = imageName
}

function inc() {
    const a = document.getElementById("numchange1")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 10) {
        alert("Maximum Quantity of product is 10")
    }
    else {
        a.innerHTML = qnt + 1;
    }

}

function dec() {
    const a = document.getElementById("numchange1")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 1) {
        alert("Minimum Quantity of product is 1")
    }
    else {
        a.innerHTML = qnt - 1;
    }

} 

function inc12() {
    const a = document.getElementById("numchange12")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 10) {
        alert("Maximum Quantity of product is 10")
    }
    else {
        a.innerHTML = qnt + 1;
    }

}

function dec12() {
    const a = document.getElementById("numchange12")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 1) {
        alert("Minimum Quantity of product is 1")
    }
    else {
        a.innerHTML = qnt - 1;
    }

}

function inc13() {
    const a = document.getElementById("numchange13")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 10) {
        alert("Maximum Quantity of product is 10")
    }
    else {
        a.innerHTML = qnt + 1;
    }

}

function dec13() {
    const a = document.getElementById("numchange13")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 1) {
        alert("Minimum Quantity of product is 1")
    }
    else {
        a.innerHTML = qnt - 1;
    }

}