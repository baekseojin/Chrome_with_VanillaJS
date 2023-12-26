const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
