let currentIndex = 0;
const tables = document.querySelectorAll(".modal-content");
const buttons = document.querySelectorAll(".page-btn");
const currentPageSpan = document.getElementById("currentPage");

function showTable(index) {
  tables.forEach((table, i) => {
    table.classList.toggle("active", i === index);
  });
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
  currentIndex = index;
  currentPageSpan.textContent = index + 1;
}
