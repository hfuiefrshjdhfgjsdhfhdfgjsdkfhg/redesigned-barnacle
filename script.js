
function explore() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

function showMessage() {
  alert("hello this is my website");
}

// Floating animated hearts and stars
function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  heart.textContent = ["][
    Math.floor(Math.random() * 4)
  ];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

  heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);
