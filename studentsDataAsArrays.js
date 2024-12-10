
let students = [
  ['male', 24, 'Ivan', 'Ivanov'],
  ['female', 22, 'Maria', 'Petrova'],
  ['male', 18, 'Georgi', 'Georgiev'],
  ['male', 21, 'Nikolai', 'Nikolov'],
];

let minAge = students[0][1];

let youngestStudent;

for (let i = 0; i < students.length; i++) {
  const studentAge = students[i][1];

  if (studentAge <= minAge) {
    minAge = studentAge;
    youngestStudent = students[i];
  }
}

console.log(
  `The youngest student is ${youngestStudent[2]} ${youngestStudent[3]}. He is ${youngestStudent[1]} years old.`,
);
