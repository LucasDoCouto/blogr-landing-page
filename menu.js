const menuButton = document.querySelector(".hamburguer-menu")

menuButton.addEventListener("click",function(){
  const isExpanded = JSON.parse(menuButton.getAttribute("aria-expanded"));
  console.log(isExpanded);
  menuButton.setAttribute("aria-expanded", !isExpanded)
})