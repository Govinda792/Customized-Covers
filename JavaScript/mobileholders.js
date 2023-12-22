
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
function changeAirpod14(imageName) {
    const mainImage = document.getElementById('airpod-main-img4');
    mainImage.src = imageName
}
function changeAirpod15(imageName) {
    const mainImage = document.getElementById('airpod-main-img5');
    mainImage.src = imageName
}
function changeAirpod16(imageName) {
    const mainImage = document.getElementById('airpod-main-img6');
    mainImage.src = imageName
}
function changeAirpod17(imageName) {
    const mainImage = document.getElementById('airpod-main-img7');
    mainImage.src = imageName
}
function changeAirpod18(imageName) {
    const mainImage = document.getElementById('airpod-main-img8');
    mainImage.src = imageName
}
function changeAirpod19(imageName) {
    const mainImage = document.getElementById('airpod-main-img9');
    mainImage.src = imageName
}
function changeAirpod20(imageName) {
    const mainImage = document.getElementById('airpod-main-img10');
    mainImage.src = imageName
}
function changeAirpod21(imageName) {
    const mainImage = document.getElementById('airpod-main-img11');
    mainImage.src = imageName
}
function changeAirpod22(imageName) {
    const mainImage = document.getElementById('airpod-main-img12');
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
    const a = document.getElementById("numchange12")
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



function addtocard(){
    alert("Add to card successful")
}