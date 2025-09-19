const str = "A brown fox jumped over a lazy dog, the dog has 4 legs and there were 200 fox";

// RegEx => Regular Expressions (Pattern)
/**
 * \d => Digit (0-9) [0-9] => [0123456789]
 * \D => Not a digit [^0-9]
 * \w => A word (A-Z a-z 0-9) [A-Za-z0-9]
 * \W => Not a word [^A-Za-z0-9]
 * \s => Space (White space)
 * \S => Not a space [^\s]
 * 
 * ^ => Not when written inside []
 * ^ => Start of the string
 * $ => End of the string
 * 
 * {n} => n = Min length / no of characters
 * \b => Word boundary
 * 
 * g => Global
 * m => Multiline
 * i => Case insensitive
 */

// Find the index of the number appearing in the above string
const numberPattern = /\d/;

// Find the index of the first word appearing in the above string
const wordPattern = /\w/;

// Find the index of the first space appearing in the above string
const spacePattern = /\s/;

// Find the index of the 3 digit number appearing in the string
const threeDigitNumberPattern = /\b\d{3}\b/;

// Find the index of a 4 letter word in the string
const fourLetterWordPattern = /\b\w{6}\b/;

const result = str.search(fourLetterWordPattern); 
// console.log(result);

const result2 = fourLetterWordPattern.test(str)
// console.log(result2);

/**
 * Quantifiers
 * 
 * * => 0 or more occurances
 * + => 1 or more occurances
 * ? => 0 or 1 occurance
 */

const pattern1 = /xy*z/

// console.log(pattern1.test("abcz"))

// divyansh@gmail.com
// divyanhsh@xyz.in

// +abc@xyz.com

const emailRegex = /^[A-Za-z0-9.+%_]+@[A-Za-z0-9.-]+.[a-zA-Z]{2}$/
