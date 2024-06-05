interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "John", lastName: "Doe", age: 18, location: "West Virginia" };
const student2: Student = { firstName: "Jane", lastName: "Doe", age: 17, location: "West Himalayas"  };

const students: Student[] = [student1, student2]

const table = document.createElement('table');

for (let i of students) {
    const row = document.createElement('tr') as HTMLTableRowElement;
    row.innerText = `${i.firstName} is at ${i.location}`;
    table.append(row);
}
