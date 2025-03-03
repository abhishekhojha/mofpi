let menuBtns = document.getElementsByClassName("mofimenu");
for (let i = 0; i < menuBtns.length; i++) {
  const element = menuBtns[i];
}
function toggleSubmenu(id) {
  var submenu = document.getElementById(id);
  if (submenu.classList.contains("activemegaMenu")) {
    submenu.classList.remove("activemegaMenu");
  } else {
    document.querySelectorAll(".submenu").forEach((sub) => {
      if (sub.id !== id) {
        sub.classList.remove("activemegaMenu");
      }
    });
    submenu.classList.add("activemegaMenu");
  }
}
function toggleSubmenuhover(menu) {
  let submenu = document.querySelector(`[menu=${menu}]`);
  let megamenuUpper = document.querySelector(`.megamenuUpper`);
  megamenuUpper.classList.add("activemegaMenu");
  console.log(menu, submenu);
}
function updateEventListeners(e) {
  let aboutUsLink = document.querySelectorAll(".mofimenu");
  aboutUsLink = Array.from(aboutUsLink).filter(
    (link) => link.getAttribute("hasmenu") === "true"
  );
  console.log(aboutUsLink);
  if (window.innerWidth <= 767) {
    // For smaller screens, use click event
    aboutUsLink.forEach((link) => {
      link.onmouseover = null;
      link.onclick = function (e) {
        let menubar = e.target.getAttribute("menu");
        toggleSubmenuhover(menubar);
      };
    });
  } else {
    // For larger screens, use hover event
    aboutUsLink.forEach((link) => {
      link.onclick = null;
      link.onmouseover = function (e) {
        let menubar = e.target.getAttribute("menu");
        toggleSubmenuhover(menubar);
      };
    });
  }
}
document.addEventListener("mouseover", (event) => {
  let megamenuUpper = document.querySelector(".megamenuUpper");
  let mofpinavbar = document.querySelector(".mofpinavbar");

  if (
    !megamenuUpper.contains(event.target) &&
    !mofpinavbar.contains(event.target)
  ) {
    megamenuUpper.classList.remove("activemegaMenu");
  }
});
window.addEventListener("load", updateEventListeners);
window.addEventListener("resize", updateEventListeners);
