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


/* === shared: blog === */
(function(){
if(document.documentElement.getAttribute("data-site-section")!=="blog")return;
window.astra={"break_point":"921","isRtl":"","is_scroll_to_id":"","is_scroll_to_top":"","is_header_footer_builder_active":"","responsive_cart_click":"flyout","is_dark_palette":""};

			(function(){var mq=window.matchMedia('(max-width:921.99px)');function apply(isMobile){var b=document.body.classList;if(isMobile){b.add('as-blog-theme-header-break-point');b.remove('as-blog-theme-desktop');}else{b.remove('as-blog-theme-header-break-point');b.add('as-blog-theme-desktop');}}apply(mq.matches);if(mq.addEventListener){mq.addEventListener('change',function(e){apply(e.matches);});}else if(mq.addListener){mq.addListener(function(e){apply(e.matches);});}})();
			
})();
