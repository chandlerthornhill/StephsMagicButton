for (var i = 0; i<document.querySelectorAll(".info-button").length; i++) {
  document.querySelectorAll(".info-button")[i].addEventListener("click", function() {
    alert("Press the button to randomly play one of seven unique phrases. Make sure your sound is on and keep pressing to hear all the phrases. Save the web address to your favorites and use as needed!");
  });
}

for (var i = 0; i<document.querySelectorAll(".content-button").length; i++) {
  document.querySelectorAll(".content-button")[i].addEventListener("click", myFunc);
}

function myFunc() {
  myRand = Math.floor(Math.random() * 8);

if (myRand == 1) {
  var audio = new Audio("Steph-app-1.m4a");
  audio.play();
}
else if (myRand ==2) {
  var audio = new Audio("Steph-app-2.m4a");
  audio.play();
}
else if (myRand ==3) {
  var audio = new Audio("Steph-app-3.m4a");
  audio.play();
}
else if (myRand ==4) {
  var audio = new Audio("Steph-app-4.m4a");
  audio.play();
}
else if (myRand ==5) {
  var audio = new Audio("Steph-app-5.m4a");
  audio.play();
}
else if (myRand ==6) {
  var audio = new Audio("Steph-app-6.m4a");
  audio.play();
}
else {
  var audio = new Audio("Steph-app-7.m4a");
  audio.play();
}
}
