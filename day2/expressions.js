let a = 10;
let b = 5;
let score = 80;
let isLate = true;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a<b);
console.log(a>b);
console.log(a<b&&a>b);
console.log(a<b||a>b);
console.log((a+a)+b);

if (score >= 80) {
    console.log("Distinction");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (isLate) {
    console.log("Submit with penalty");
}