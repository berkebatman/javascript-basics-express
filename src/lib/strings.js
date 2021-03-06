const sayHello = string => {
  return `Hello, ${string}!`;
};

const uppercase = string => {
  const x = string.toUpperCase();
  return x;
};

const lowercase = string => {
  const x = string.toLowerCase();
  return x;
};

const countCharacters = string => {
  const x = string.length;
  return x;
};

const firstCharacter = string => {
  const x = string.charAt(0);
  return x;
};

const firstCharacters = (string, n) => {
  const x = string.substring(0, n);
  return x;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
