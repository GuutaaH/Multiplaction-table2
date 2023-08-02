function createTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);
  
    let table = document.getElementById("multiplicationTable");
    table.innerHTML = "";
  
    for (let g = 1; g <= rows; g++) {
      
      let row = document.createElement("tr")
      for (let h = 1; h <= columns; h++) {
        
        let cell = document.createElement("td")
        cell.textContent = g * h;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }
  
  
  
  