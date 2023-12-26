const h1 = document.querySelector(".hello h1");

function handleH1Click() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleH1Click);
