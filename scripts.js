var sideNav = document.getElementById("sidenav")

function openNav() {
  if(sideNav.style.display === "none") {
    sideNav.style.display= "block";
  } else {
    sideNav.style.display= "none"
  }
}