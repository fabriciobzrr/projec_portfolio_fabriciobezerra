const openMenuMobile = document.getElementById("btn-menu-mobile")
const menuMobile = document.getElementById("header-menu-mobile")

openMenuMobile.addEventListener("click", () => {
  menuMobile.classList.add("open-menu")
})

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("open-menu")
})
