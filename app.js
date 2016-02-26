console.log("Javascript is alive!");

var greeting = document.querySelector('#greeting');

var imgFood = document.querySelector('img');

greeting.innerText = "Hello, World!";

var allLists = document.getElementsByTagName('li');

for (i = 0;i < allLists.length; i++){
  allLists[i].style.backgroundColor = "yellow";
}

var divGreeting = document.querySelector('#greeting');
var imgTumblr = document.createElement('img');
imgTumblr.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
divGreeting.appendChild(imgTumblr);

document.getElementById('essentials').addEventListener("click", function(){
  for (i = 0;i < allLists.length; i++){
    allLists[i].className = "";
  }
  event.target.className = "selected";
  var imagePath = "images/" + event.target.innerText + ".jpeg";
  imgFood.src = imagePath;
});

var divGhost=document.getElementById("ghosting");
function hide(e) {
  e.target.style.visibility = 'hidden';
}
divGhost.addEventListener('mouseenter', hide);

var divSize=document.getElementById("resize");
function resize(e) {
  var divWidth = e.target.offsetWidth;
  e.target.style.width = (divWidth * 2)+"px";
}
divSize.addEventListener('mouseenter', resize);

function origSize(e) {
  var divWidth = e.target.offsetWidth;
  e.target.style.width = (divWidth / 2)+"px";
}
divSize.addEventListener('mouseleave', origSize);

function panic(e) {
  for (i = 0;i < allLists.length; i++){
    allLists[i].className = "";
  }
  imgFood.src = "images/panic.jpeg";
}
divSize.addEventListener('mouseenter', resize);
document.querySelector('input').addEventListener('click', panic);

function numbers(charCode, e) {
  if (charCode > 47 && charCode < 58){
    alert("I HATE NUMBERZZZ!");
  }
}

function konamiCode(charCode, e) {
  console.log(charCode);
}

document.addEventListener('keydown', function(e){ var charCode = event.keyCode;
      numbers(charCode);
      konamiCode(charCode);
    });