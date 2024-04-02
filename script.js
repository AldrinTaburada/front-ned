document.addEventListener("DOMContentLoaded", function () {
  // Dropdown 1
  var dropdownToggle1 = document.getElementById("dropdown-toggle-1");
  var dropdownMenu1 = document.getElementById("dropdown-menu-1");

  dropdownToggle1.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu1.classList.toggle("show");
  });

  // Close dropdown 1 when clicking outside
  window.addEventListener("click", function (e) {
    if (!dropdownToggle1.contains(e.target) && !dropdownMenu1.contains(e.target)) {
      dropdownMenu1.classList.remove("show");
    }
  });



  // Dropdown 2
  var dropdownToggle2 = document.getElementById("dropdown-toggle-2");
  var dropdownMenu2 = document.getElementById("dropdown-menu-2");

  dropdownToggle2.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu2.classList.toggle("show");
  });

  // Close dropdown 2 when clicking outside
  window.addEventListener("click", function (e) {
    if (!dropdownToggle2.contains(e.target) && !dropdownMenu2.contains(e.target)) {
      dropdownMenu2.classList.remove("show");
    }
  });
  

  // Dropdown 3
  var dropdownToggle3 = document.getElementById("dropdown-toggle-3");
  var dropdownMenu3 = document.getElementById("dropdown-menu-3");

  dropdownToggle3.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu3.classList.toggle("show");
  });

  // Close dropdown 3 when clicking outside
  window.addEventListener("click", function (e) {
    if (!dropdownToggle3.contains(e.target) && !dropdownMenu3.contains(e.target)) {
      dropdownMenu3.classList.remove("show");
    }
  });
});

// Prevent dropdown menus from closing when clicking inside them
document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});





