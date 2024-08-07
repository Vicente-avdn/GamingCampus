const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
const btnSidebar = document.getElementById("btn-sidebar");
const navList = document.querySelector(".nav__list");

const toggleSidebar = () => {
  const isActive = sidebar.classList.toggle("active");
  navList.classList.toggle("active", isActive);
  btnSidebar.classList.toggle("active", isActive);

  if (isActive) {
    content.classList.add("blurred");
  } else {
    content.classList.remove("blurred");
  }
};

btnSidebar.addEventListener("click", toggleSidebar);

content.addEventListener("click", () => {
  if (sidebar.classList.contains("active")) {
    toggleSidebar();
  }
});

