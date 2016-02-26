console.log("Javascript is alive!");

var greeting = document.querySelector('#greeting');

greeting.innerText = "Hello, World!";

var allLists = document.getElementsByTagName('li');

for (i = 0;i < allLists.length; i++){
  allLists[i].style.backgroundColor = "yellow";
}

var divGreeting = document.querySelector('#greeting');
var imgTumblr = document.createElement('img');
imgTumblr.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
divGreeting.appendChild(imgTumblr);

