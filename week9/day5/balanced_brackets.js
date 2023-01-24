// all brackets are matched

// default if == true
// stack is an array
// push/append then pop

const brak = "({[()]})";

const balancedBracket = (String) => {
  const stack = [];
  for (const iterator of String) {
    stack.push(iterator);
    // why is my push only pushing the first element?
    //   while (stack.length > 0) {
    //     // equals the opposite? equals "}","]",")"?
    //     if (stack[0] !== stack[-1]) {
    //       stack.pop([0], [-1]);
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
  }
};

console.log(balancedBracket(brak));

const word = "abcdefg";
const array = [];
const func = (thing) => {
  for (const iterator of thing) {
    array.push(iterator);
  }
  console.log(array);
};

func(word);

const head = [1, 2, 3, 4, 5];
const n = 2;

const headthing = (head, n) => {
  head.pop([-n]);
  console.log([-n]);
  return head;
};

console.log(headthing(head, n));

// true
const string = "()({})";
// false
const string2 = "{{}()";
// invalid character
const string3 = "(a())a";

// check for valid characters
const openBrackets = "([{";
const closeBrackets = "}])";
// hash solution
const hashBracks = {
  "}": "{",
  "]": "[",
  ")": "(",
};
const stack = [];

const newfunc = (string) => {
  // loop through string
  for (const char of string) {
    // if (loop through openBrackets with includes(char))
    if (openBrackets.includes(char)) {
      // if char is in openBrackets the push char to stack
      stack.push(char);
      // else if (loop through closeBrackets with includes(char))
    } else if (closeBrackets.includes(char)) {
      // if the last element of stack is equal to the value of the key for the matching char
      if (stack[stack.length - 1] === hashBracks[char]) {
        // pop the last element from the stack
        stack.pop();
        // else the last element is not equal to the value of the key for the matching char
      } else {
        // false
        return false;
      }
    }
  }
  // return true if the stack length is 0 since the function successfully finished the comparisons
  return stack.length === 0;
};
