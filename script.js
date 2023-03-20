{
  const filterNameInput = document.getElementById("filter-name");
  const filterDepartmentSelect = document.getElementById("filter-department");
  const filterBatchSelect = document.getElementById("filter-batch");
  const tableRows = document.querySelectorAll("table tbody tr");

  function filterTable() {
    const filterName = filterNameInput.value.toLowerCase();
    const filterDepartment = filterDepartmentSelect.value.toLowerCase();
    const filterBatch = filterBatchSelect.value.toLowerCase();

    for (let i = 0; i < tableRows.length; i++) {
      const row = tableRows[i];
      const batch = row.children[0].textContent.toLowerCase();
      const department = row.children[7].textContent.toLowerCase();
      const name = row.children[3].textContent.toLowerCase();

      if (
        (filterName && !name.includes(filterName)) ||
        (filterDepartment && department !== filterDepartment) ||
        (filterBatch && !batch.includes(filterBatch))
      ) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    }
  }

  filterNameInput.addEventListener("input", filterTable);
  filterDepartmentSelect.addEventListener("change", filterTable);
  filterBatchSelect.addEventListener("change", filterTable);
}


var headers = document.querySelectorAll("#alumniTable th");
for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function() {
    var index = this.cellIndex;
    sortTable(index);
  });
}


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("alumniTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


window.addEventListener("load", function () {
  const elements = document.querySelectorAll(".fade-in");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("active");
  }
});


