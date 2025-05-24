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

// Render a table using Vanilla JS
const table = document.createElement("table");
const headerRow = table.insertRow();
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";

// Populate the table rows
studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
