const header = document.getElementById("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 104) {
    header.classList.remove("transparent")
    header.classList.add("solid")
  } else {
    header.classList.add("transparent")
    header.classList.remove("solid")
  }
})
