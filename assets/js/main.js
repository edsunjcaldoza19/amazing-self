// Shared site behavior.

/* === page: home === */
(function () {
  document.body.addEventListener("click", function (event) {
    var toggle = event.target.closest(".as-menu-toggle");
    if (toggle) {
      var menu = toggle.parentElement;
      if (menu) menu.classList.toggle("as-nav-menu-open");
      document.body.classList.toggle("as-nav-menu-prevent-overflow");
      document.documentElement.classList.toggle("as-nav-menu-prevent-overflow");
      return;
    }
    var link = event.target.closest('.as-nav-menu-open .as-menu-item a[href*="#"]');
    if (link) {
      document.querySelectorAll(".as-nav-menu-open").forEach(function (menu) {
        menu.classList.remove("as-nav-menu-open");
      });
      document.body.classList.remove("as-nav-menu-prevent-overflow");
      document.documentElement.classList.remove("as-nav-menu-prevent-overflow");
    }
  });
})();

 
/* === page: contact === */
(function () {
  document.body.addEventListener("click", function (event) {
    var toggle = event.target.closest(".as-menu-toggle");
    if (toggle) {
      var menu = toggle.parentElement;
      if (menu) menu.classList.toggle("as-nav-menu-open");
      document.body.classList.toggle("as-nav-menu-prevent-overflow");
      document.documentElement.classList.toggle("as-nav-menu-prevent-overflow");
      return;
    }
    var link = event.target.closest('.as-nav-menu-open .as-menu-item a[href*="#"]');
    if (link) {
      document.querySelectorAll(".as-nav-menu-open").forEach(function (menu) {
        menu.classList.remove("as-nav-menu-open");
      });
      document.body.classList.remove("as-nav-menu-prevent-overflow");
      document.documentElement.classList.remove("as-nav-menu-prevent-overflow");
    }
  });
})();

/* === page: privacy === */
(function () {
  document.body.addEventListener("click", function (event) {
    var toggle = event.target.closest(".as-menu-toggle");
    if (toggle) {
      var menu = toggle.parentElement;
      if (menu) menu.classList.toggle("as-nav-menu-open");
      document.body.classList.toggle("as-nav-menu-prevent-overflow");
      document.documentElement.classList.toggle("as-nav-menu-prevent-overflow");
      return;
    }
    var link = event.target.closest('.as-nav-menu-open .as-menu-item a[href*="#"]');
    if (link) {
      document.querySelectorAll(".as-nav-menu-open").forEach(function (menu) {
        menu.classList.remove("as-nav-menu-open");
      });
      document.body.classList.remove("as-nav-menu-prevent-overflow");
      document.documentElement.classList.remove("as-nav-menu-prevent-overflow");
    }
  });
})();


/* === page: member === */
/* Native login forms require no page-specific JavaScript or vendor libraries. */
