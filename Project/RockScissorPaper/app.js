var play = document.getElementById("play");
var result = document.getElementById("result");
var result1 = document.getElementById("result1");
var one = document.getElementById("photo1");
var two = document.getElementById("photo2");

var img1 = document.createElement("img");
img1.src = "https://firebasestorage.googleapis.com/v0/b/endproject-372414.appspot.com/o/aAaMon%20Jun%2020%202022%2012%3A06%3A39%20GMT%2B0200%20(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%20%D0%BB%D1%8F%D1%82%D0%BD%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5)?alt=media&token=4a323ada-7eee-425f-975b-d08c5d9cdaa5";

var img2 = document.createElement("img");
img2.src = "https://firebasestorage.googleapis.com/v0/b/endproject-372414.appspot.com/o/aAaMon%20Jun%2020%202022%2012%3A08%3A07%20GMT%2B0200%20(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%20%D0%BB%D1%8F%D1%82%D0%BD%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5)?alt=media&token=9c7012db-908a-41f0-8b1e-e3f4e56092f2";

var img3 = document.createElement("img");
img3.src = "https://firebasestorage.googleapis.com/v0/b/endproject-372414.appspot.com/o/aAaMon%20Jun%2020%202022%2012%3A07%3A42%20GMT%2B0200%20(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%20%D0%BB%D1%8F%D1%82%D0%BD%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5)?alt=media&token=89d809fe-711d-4244-bc8e-7e01d008b6a5";

var img4 = document.createElement("img");
img4.src = "https://firebasestorage.googleapis.com/v0/b/endproject-372414.appspot.com/o/aAaMon%20Jun%2020%202022%2012%3A06%3A39%20GMT%2B0200%20(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%20%D0%BB%D1%8F%D1%82%D0%BD%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5)?alt=media&token=4a323ada-7eee-425f-975b-d08c5d9cdaa5";
img4.setAttribute("style", "border-radius:20px");
var img5 = document.createElement("img");
img5.src = "https://firebasestorage.googleapis.com/v0/b/endproject-372414.appspot.com/o/aAaMon%20Jun%2020%202022%2012%3A08%3A07%20GMT%2B0200%20(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%20%D0%BB%D1%8F%D1%82%D0%BD%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5)?alt=media&token=9c7012db-908a-41f0-8b1e-e3f4e56092f2";
img5.setAttribute("style", "border-radius:20px");
var img6 = document.createElement("img");
img6.src = "https://firebasestorage.googleapis.com/v0/b/endproject-372414.appspot.com/o/aAaMon%20Jun%2020%202022%2012%3A07%3A42%20GMT%2B0200%20(%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%BD%D0%BE%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%20%D0%BB%D1%8F%D1%82%D0%BD%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5)?alt=media&token=89d809fe-711d-4244-bc8e-7e01d008b6a5";
img6.setAttribute("style", "border-radius:20px ");

function GetRandomNumberRange() {
  img1.setAttribute("style", "display:none");
  img2.setAttribute("style", "display:none");
  img3.setAttribute("style", "display:none");
  img4.setAttribute("style", "display:none");
  img5.setAttribute("style", "display:none");
  img6.setAttribute("style", "display:none");

  var num1 = Math.round(Math.random() * 2) + 1;
  // console.log(num1);
  var num2 = Math.round(Math.random() * 2) + 1;
  // console.log(num2);

  if (num1 == 1) {
    one.appendChild(img1), img1.setAttribute("style", "display:Block");
  } else if (num1 == 2) {
    one.appendChild(img2), img2.setAttribute("style", "display:Block");
  } else if (num1 == 3) {
    one.appendChild(img3), img3.setAttribute("style", "display:Block");
  }

  if (num2 == 1) {
    two.appendChild(img4), img4.setAttribute("style", "display:Block");
  } else if (num2 == 2) {
    two.appendChild(img5), img5.setAttribute("style", "display:Block");
  } else if (num2 == 3) {
    two.appendChild(img6), img6.setAttribute("style", "display:Block");
  }

  if (num1 == num2) {
    (result.innerText = "Equal"),
      (result1.innerText = "Equal"),
      result1.setAttribute("style", "background-color:rgb(255, 255, 0)"),
      result.setAttribute("style", "background-color: rgb(255, 255, 0)");
  } else {
    if (num1 == 1 && num2 == 2) {
      (result.innerText = "You Lose"),
        (result1.innerText = "I Win"),
        result.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result1.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 2 && num2 == 3) {
      (result.innerText = "You Lose"),
        (result1.innerText = "I Win"),
        result.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result1.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 3 && num2 == 1) {
      (result.innerText = "You Lose"),
        (result1.innerText = "I Win"),
        result.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result1.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 1 && num2 == 3) {
      (result.innerText = "You Win"),
        (result1.innerText = "I Lose"),
        result1.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 2 && num2 == 1) {
      (result.innerText = "You Win"),
        (result1.innerText = "I Lose"),
        result1.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 3 && num2 == 2) {
      (result.innerText = "You Win"),
        (result1.innerText = "I Lose"),
        result1.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
  }

  // let rock= 1
  // let paper = 2
  // let scissor = 3

  // 1 win again 3 lose again 2
  // 2 win again 1 and lose again 3
  // 3 win again 2 and lose again 1
}
play.addEventListener("click", GetRandomNumberRange);

//https://codepen.io/mushmuroka/pen/oNERYVx