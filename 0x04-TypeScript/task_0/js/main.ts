// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create a list of students
const studentsList: Student[] = [student1, student2];

// Create the table and header row
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";

const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Populate table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Optional basic styling
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.style.margin = "20px";
table.querySelectorAll("th, td").forEach(cell => {
  cell.style.border = "1px solid #ccc";
  cell.style.padding = "8px";
});

// Append the table to the body
document.body.appendChild(table);
