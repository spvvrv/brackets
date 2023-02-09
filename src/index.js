module.exports = function check(str, bracketsConfig) {
  const bracketsDictionary = Object.fromEntries(bracketsConfig);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let lastElInStack = stack[stack.length - 1];

    if (
      currentChar in bracketsDictionary &&
      currentChar !== bracketsDictionary[lastElInStack]
    ) {
      stack.push(currentChar);
    } else {
      if (currentChar !== bracketsDictionary[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
