const students = [
    { name: 'Alice', age: 20, isEnrolled: true },
    { name: 'Bob', age: 22, isEnrolled: false },
    { name: 'Charlie', age: 19, isEnrolled: true },
];

// Log all student names
students.forEach(s => console.log(s.name));

// Log only those who are enrolled
students
    .filter(s => s.isEnrolled)
    .forEach(s => console.log(s.name));

// Add a new student using .push()
students.push({ name: 'Dana', age: 21, isEnrolled: false });

// Remove one student using .pop()
const removedStudent = students.pop();
console.log('Removed student:', removedStudent);