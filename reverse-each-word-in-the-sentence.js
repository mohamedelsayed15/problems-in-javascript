/*
Given a string, reverse each word in the sentence

For example 
Welcome to this Javascript Guide!
should be 
emocleW ot siht tpircsavaJ !ediuG
*/

 /*
  notes :
  1) split(separator) splits a text by a certain character like space or nothing and returns an array of strings
    ["Welcome","to","this", "Javascript","Guide!"] 
  2) reverse() reverses an array order 
    ["Guide!","Javascript","this","to","Welcome"]
  3)join(separator)the opposite of split makes a string out of an array of strings
    "Guide! Javascript this to Welcome"
  */ 

let text = "Welcome to this Javascript Guide!"

const reverseBySeparator = (text, separator) => {
 
  return text.split(separator).reverse().join(separator)

}
/*
no separator is going to reverse the whole sentence first character will the last 
and the last will be the first and so on ...

Output will be !ediuG tpircsavaJ siht ot emocleW*/
var reverseTheSentence = reverseBySeparator(text, "")

/* 
there is a separator " " a space so split will take affect reverse words not characters

Output will be emocleW ot siht tpircsavaJ !ediuG
*/
var reverseTheWords = reverseBySeparator(reverseEntireSentence, " ")

console.log(reverseBySeparator(text," "),reverseEntireSentence,reverseEachWord)