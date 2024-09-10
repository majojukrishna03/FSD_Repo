/*
Q1. Build a table
An HTML table is built with the following tag structure:
<table>
<tr>
<th>name</th>
<th>height</th>
<th>place</th>
</tr>
<tr>
<td>Kilimanjaro</td>
<td>5895</td>
<td>Tanzania</td>
</tr>
</table>
For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either
heading cells (<th>) or regular cells (<td>).
Given a dataset of mountains, an array of objects with name, height, and place properties, generate the DOM
structure for a table that enumerates the objects. It has one column per key and one row per object, plus a
header row with <th> elements at the top, listing the column names.
Write this so that the columns are automatically derived from the objects, by taking the property names of the
first object in the data.
Show the resulting table in the document by appending it to the element that has an id attribute of
"mountains".
Once you have this working, right-align cells that contain number values by setting their style.textAlign
property to "right".
<h1>Mountains</h1>
<div id="mountains"></div>
<script>
const MOUNTAINS = [
{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
{name: "Everest", height: 8848, place: "Nepal"},
{name: "Mount Fuji", height: 3776, place: "Japan"},
{name: "Vaalserberg", height: 323, place: "Netherlands"},
{name: "Denali", height: 6168, place: "United States"},
{name: "Popocatepetl", height: 5465, place: "Mexico"},
{name: "Mont Blanc", height: 4808, place: "Italy/France"}
];
// Your code here
</script>
*/


const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  
  function buildTable(data) {
    // Create a table element
    const table = document.createElement("table");
  
    // Create a header row
    const headerRow = document.createElement("tr");
  
    // Get the keys from the first object in the data array
    const keys = Object.keys(data[0]);
  
    // Loop over keys to create the header cells
    keys.forEach(key => {
      const th = document.createElement("th");
      const text = document.createTextNode(key.charAt(0).toUpperCase() + key.slice(1)); // Capitalize the header
      th.appendChild(text);
      headerRow.appendChild(th);
    });
  
    // Append the header row to the table
    table.appendChild(headerRow);
  
    // Loop over each object in the data to create rows
    data.forEach(item => {
      const row = document.createElement("tr");
  
      // Loop over the keys to create the data cells
      keys.forEach(key => {
        const td = document.createElement("td");
        const text = document.createTextNode(item[key]);
        td.appendChild(text);
  
        // Right-align cells with numeric values
        if (typeof item[key] === "number") {
          td.style.textAlign = "right";
        }
  
        row.appendChild(td);
      });
  
      // Append the row to the table
      table.appendChild(row);
    });
  
    // Append the table to the parent div with id "mountains"
    document.getElementById("mountains").appendChild(table);
  }
  
  // Build the table using the MOUNTAINS data
  buildTable(MOUNTAINS);
  