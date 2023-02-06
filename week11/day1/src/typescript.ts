let firstname = "Peter";
let age = 34;
let address = { street: "123 main" };

const height = "7ft";
// height = "6ft" cannot change a const in typescript

// explicitly type

let teacher: String = "Joe";
let cool: Boolean = false;
const skills: String[] = ["cooking", "coding", "judging"];
// cannot add a non-string to the above array

const numnbers: Number[] = [
  4, 5, 2, 1, 23, 123, 12312, 3, 4, 5, 1, 34, 23, 4, 24, 5, 6,
];
numnbers.map((number) => console.log(number.toString));

// interface
interface Student {
  name: String;
  city: String;
  zipcode?: String;
  address?: String;
  age?: Number;
  birthday?: Date;
}

const Peter: Student = {
  name: "Peter",
  city: "Knoxville",
};
