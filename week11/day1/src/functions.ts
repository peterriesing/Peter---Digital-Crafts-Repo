const sayHi = () => {
  console.log("Hello");
};

const conv2Upper = (word: String): String => {
  return word.toUpperCase();
};

const upper = conv2Upper("Jello is not a suitable salad substrate");

console.log(upper);

// union type saying to expect one data type or another

const Rando = (num: Number): Number | String => {
  if (num) return num;
  const randomnum = Math.random();
  const stringnum = randomnum.toString();
  return stringnum;
};

type Name = {
  name: String;
};
type Age = {
  age: Number;
};
type Person = Name & Age;

interface FarmAnimal {
  name: String;
}
interface FarmAnimal {
  species: String;
}

const pig: FarmAnimal = {
  name: "Oinkerella",
  species: "pigglet",
};

const Joe: Person = {
  name: "Joe",
  age: 55,
};

const Group: Person[] = [
  {
    name: "Peter",
    age: 34,
  },
  {
    name: "Meg",
    age: 29,
  },
];

Group.push({
  name: "Ethan",
  age: 2,
});
