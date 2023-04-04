let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) { 
    document.querySelector(".menu_wrap").classList.remove("m-hide");
  } else {
   document.querySelector(".menu_wrap").classList.add("m-hide");
  }
  prevScrollpos = currentScrollPos;
};