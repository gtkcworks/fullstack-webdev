const students = [
    { name: 'Alice', age: 20, isEnrolled: true },
    { name: 'Bob', age: 22, isEnrolled: false },
    { name: 'Charlie', age: 19, isEnrolled: true },
];

// Log all student names
for (let i = 0; i < students.length; i++) {
   console.log(students[i].name);
}

// Log only those who are enrolled
for (let i = 0; i < students.length; i++) {
   if (students[i].isEnrolled) {
       console.log(students[i].name);
   }
}

// Add a new student using .push()
students.push({ name: 'Dana', age: 21, isEnrolled: false });

// Remove one student using .pop()
students.pop();

// Log the final list of students
console.log(students);