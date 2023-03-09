let message = document.getElementById("message");
let sidebarwidth = $("#sidebar-inner").innerWidth();
$("#sidebar").css({ left: -sidebarwidth }, 500);

$(".side-control ").click(function () {
  if ($("#sidebar").css("left") == "0px") {
    $("#sidebar").animate({ left: -sidebarwidth }, 500);
  } else {
    $("#sidebar").animate({ left: "0px" }, 500);
  }
});
$("#close").click(function () {
  $("#sidebar").animate({ left: -sidebarwidth }, 500);
});
$("#singers h4").click(function () {
  $(this).next().slideToggle();
});

let countDownDate = new Date("Mar 23, 2023 00:00:00").getTime();

let countdownfunction = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `<p>${days} D</p>`;
  document.getElementById("hours").innerHTML = `<p>${hours} H</p>`;
  document.getElementById("minutes").innerHTML = `<p>${minutes} M</p>`;
  document.getElementById("seconds").innerHTML = `<p>${seconds} S</p>`;

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function count(text) {
  var writtenletters = text.value.length;
  counterspan.innerHTML = `<p class=text-black>${writtenletters} /250</p>`;
}

message.addEventListener("input", function () {
  count(message);
});
