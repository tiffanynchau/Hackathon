var countDownDate = new Date("October 31, 2022 12:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  //days: total number of seconds in a day is 60 * 60 * 24, then to get millisecond, we multiply it by 1000 to get total number of milliseconds in a day
  //by diving the timeleft by this number, we get number of days (make sure it's rounded by using Math.floor)
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //hours: first operation use % (remainder) to discard the remainder of division, so days portion of difference is taken out
  //(1000 * 60 * 60) is total number of milliseconds in an hour
  //so dividing the remainder of the difference by this number will give us the number of hours
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //minutes: first operation takes out the hours portion
  //(1000 * 60) is total number of milliseconds in a minute
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  //seconds: first operation takes out the minutes portion
  //the 2nd operation returns number of seconds
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("days").innerHTML = days + "Days : ";
  document.getElementById("hours").innerHTML = hours + "Hrs : ";
  document.getElementById("mins").innerHTML = minutes + "Mins : ";
  document.getElementById("secs").innerHTML = seconds + "Sec ";

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = '"Happy Halloween"';
  }
}, 1000);

//changes images on click
var counter = 0;
var myPictures = [
  "images/ghost-white.gif",
  "images/gh1.gif",
  "images/gh2.gif",
  "images/gh3.gif",
  "images/gh4.gif",
  "images/gh5.gif",
  "images/gh6.gif",
  "images/gh7.gif",
  "images/gh8.gif",
  "images/gh9.gif",
  "images/gh10.gif",
];

function changeP() {
  var target = document.getElementById("pic");
  document.getElementById("change").addEventListener("click", changeP, true);
  counter += 1;
  if (counter > myPictures.length - 1) {
    counter = 0;
  }
  target.src = myPictures[counter];
}

window.onload = function () {
  changeP();
  document.getElementById("change").onclick = changeP();
};

//random quotes

const generateQuote = function () {
  const quotes = [
    {
      quote:
        "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
      author: "Albus Dumbledore",
    },
    {
      quote: "It is impossible to manufacture or imitate love",
      author: "Horace Slughorn",
    },
    {
      quote:
        "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
      author: "Luna Lovegood",
    },
    {
      quote:
        "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
      author: "Sirius Black",
    },
    {
      quote:
        "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
      author: "Arthur Weasley",
    },
    {
      quote: "Every human life is worth the same, and worth saving.",
      author: "Kingsley Shacklebolt",
    },
    {
      quote: "Have a biscuit, Potter.",
      author: "Minerva McGonagall",
    },
    {
      quote:
        "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
      author: "Albus Dumbledore",
    },
    {
      quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
      author: "Dobby",
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};
window.onload = function () {
  generateQuote();
  document.getElementById("generate").addEventListener("click", generateQuote);
};

// audio

var myAudio = new Audio(chrome.runtime.getURL("/sounds/harry.mp3"));
myAudio.play();
