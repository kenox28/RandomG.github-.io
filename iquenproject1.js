let dogsimage = document.getElementById("dogs");
let btn1 = document.getElementById("btn1");

let video = document.querySelector("video");
let vidgojouse = false;

function generate() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((datadogs) => {
      dogsimage.innerHTML = `<image class="imageshadow" src="${datadogs.message}"  height=300px width= 300px />`;
    });
  if (vidgojouse == false) {
    video.src = "codesnapPic/gojo.mp4";
    vidgojouse = true;
  }
  vidgetouse = false;
  vidsakunause = false;
}

let catsimage = document.getElementById("cats");
let btn2 = document.getElementById("btn2");
let vidsakunause = false;
function catsfunction() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((Response) => Response.json())
    .then((datacats) => {
      catsimage.innerHTML = `<image class="imageshadow" src="${datacats[0].url}"height=300px width= 300px/>`;
    });
  if (vidsakunause == false) {
    video.src = "codesnapPic/sakuna.mp4";
    vidsakunause = true;
  }
  vidgojouse = false;
  vidgojouse = false;
}

let quotess = document.getElementById("quotes");
let author = document.getElementById("author");
let btn3 = document.getElementById("btn3");
let vidgetouse = false;

function quotesgenerate() {
  fetch("https://api.quotable.io/random")
    .then((Response) => Response.json())
    .then((quoted) => {
      quotess.innerHTML = quoted.content;
      quotess.setAttribute("style", "width: 250px;", "font-size:1rem;");
      author.innerHTML = quoted.author;
      author.setAttribute(
        "style",
        "width: 250px;",
        "align-self: center;",
        "position: absolute;"
      );
    });
  if (vidgetouse == false) {
    video.src = "codesnapPic/geto.mp4";
    vidgetouse = true;
  }
}

let btnf1 = document.querySelector("#btnf1");
let btnf2 = document.querySelector("#btnf2");
let btnf3 = document.querySelector("#btnf3");
let displayname = document.querySelector("#displayname");

btnf1.addEventListener("click", one);
function one() {
  displayname.innerHTML =
    "Thank you sir, please subscribe to his channel and press the like and save button " +
    `<a id="pic" href="https://www.youtube.com/@FritzTV_Ormoc"><img id="profile" src="codesnapPic/sirfritz.jpg" height="40px"width="40px" /></a>`;
  setTimeout(function () {
    displayname.innerHTML = `SUBMITTED BY:IQUEN MARBA BSIT - 2D<a
    id="pic"
    href="https://www.facebook.com/iquen.marba.7/"
    ><img
      id="profile"
      src="codesnapPic/pp.jpg"
      height="40px"
      width="40px"
  /></a>`;
  }, 10000);
}
btnf2.addEventListener("click", two);

function two() {
  displayname.innerHTML =
    "Thank you sir, please subscribe to this channel" +
    `<a id="pic" href="https://www.youtube.com/@FritzTV_Ormoc"><img id="profile" src="codesnapPic/sirfritz.jpg" height="40px"width="40px" /></a>`;
  setTimeout(function () {
    displayname.innerHTML = `SUBMITTED BY:IQUEN MARBA BSIT - 2D<a
    id="pic"
    href="https://www.facebook.com/iquen.marba.7/"
    ><img
      id="profile"
      src="codesnapPic/pp.jpg"
      height="40px"
      width="40px"
  /></a>`;
  }, 10000);
}
let listrandom = ["25%", "35%", "45%", "55%", "65%", "75%", "85%"];
btnf3.addEventListener("mouseover", three);
btnf3.addEventListener("click", three);
function three() {
  let random = parseInt(Math.random() * listrandom.length);

  btnf3.style.position = "absolute";
  btnf3.style.marginLeft = listrandom[random];
  setTimeout(function () {
    btnf3.style.position = "absolute";
    btnf3.style.marginLeft = "255px";
  }, 3000);
}

window.addEventListener("load", function () {
  let boxcat = document.querySelector("#boxcat");
  let boxquote = document.querySelector("#boxquote");
  let boxdog = document.querySelector("#boxdog");
  boxcat.style.display = "block";
  boxquote.style.display = "block";
  boxdog.style.display = "block";

  // Set event listeners
  document.getElementById("btntitledog").addEventListener("click", godog);
  document.getElementById("btntitlecats").addEventListener("click", gocats);
  document.getElementById("btntitlequote").addEventListener("click", goquote);

  function godog() {
    alert("run");
    boxcat.style.display = "none";
    boxquote.style.display = "none";
    boxdog.style.display = "block";
    showboxs.style.display = "block";
  }

  function gocats() {
    boxcat.style.display = "block";
    boxquote.style.display = "none";
    boxdog.style.display = "none";
    showboxs.style.display = "block";
  }

  function goquote() {
    boxcat.style.display = "none";
    boxdog.style.display = "none";
    boxquote.style.display = "block";
    showboxs.style.display = "block";
    boxquote.setAttribute("style", "");
  }
});
let showboxs = document.getElementById("showboxs");
showboxs.style.display = "none";
showboxs.addEventListener("click", showall);
function showall() {
  boxdog.style.display = "block";
  boxcat.style.display = "block";
  boxquote.style.display = "block";
  showboxs.style.display = "none";
}
