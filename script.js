// 1) პრიმიტიულ მონაცემთა ტიპებს შეგვიძლია მივანიჭოთ მხოლოდ 1 მნიშვნელობა
// არაპრიმიტიულს კი ობიექტებისა და მასივების სახით ნებისმიერი სახის და რაოდენობის მონაცემის მინიჭება შეგვიძლია


// 2) Let ცვლადს შეგვიძლია გადავანიჭოთ მნიშვნელობა მაგალითად

let number = 50;
console.log (number); // აქ ნამბერს ექნება მნიშნელობა 50

number = 10;
console.log (number); // აქ კი უკვე 10


// Const ანუ კონსტანტა ერთხელ მინიჭების შემდეგ სხვა მნიშვნელობის მინიჭებისას ერორს ამოაგდებს

const num = 50;
console.log (num);

// num = 10;
// console.log (num);

// 3)

let project = 'JS';
var school = 'Re-Educate';
const Term = 10;

// 4)

let user = [
  {
    name: 'Luka',
    lastName: 'Sulakvelidze',
    age: 19,
    email: 'ragaca',
    address: 'Kutaisi',
    isStudent: true
  }
]

console.log (user);