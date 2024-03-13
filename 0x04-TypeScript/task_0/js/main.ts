interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Toon',
  age: 30,
  location: 'Mexico',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Toon',
  age: 25,
  location: 'Mexico',
};
const studentsList: Student[] = [student1, student2];

const table = document.getElementById('myTable');

function createTableRow(rowData: Student) {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = rowData.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = rowData.location;
  row.appendChild(locationCell);

  return row;
}

studentsList.forEach(student => {
  const row = createTableRow(student);
  table.appendChild(row);
});
