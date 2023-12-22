
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
    
const a=document.getElementById("numchange");
    function increaseQuantity(){
          let quantity = parseInt(a.innerText);
          if(quantity<8){
        a.innerText  = quantity + 1;
          }
          else{
            alert("you cant add more than 8 items");
          }
    }
    function dec(){
      let quantity = parseInt(a.innerText);
      if(quantity>1){
        a.innerText  = quantity - 1;
    }else{
            alert("you cant add more than 8 items");
          }
    }
function addtocard(){
    alert("Add to card successful")
}