// menu start
var menu = document.getElementById("menu");
var menuBtns = document.querySelectorAll(".burger");
var body = document.body;
menuBtns.forEach((menuBtn) => {
  menuBtn.onclick = function () {
    menuBtns.forEach((btn) => {
      btn.classList.toggle("active");
    });
    menu.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.onclick = function (event) {
    if (event.target == menu) {
      menu.classList.remove("active");
      body.classList.remove("active");
      menuBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
    }
  };
});

// menu end
