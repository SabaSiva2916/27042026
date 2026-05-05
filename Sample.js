let s = "Javascript";
//To find the length of String
console.log(s.length);

//TO find the position of character
console.log(s.charAt(3));
console.log(s.charAt(11)); //We get empty String
//In charAt() if we pass index Number greater than or equal to
//length of String --> We get empty String

//To convert the String into uppercase
console.log(s.toUpperCase());

//To convert the String into Lowercase
console.log(s.toLowerCase());

//Adding looping to print each character of String
for (let i = 0; i < s.length; i++) {
  console.log(s.charAt(i));
}

//Adding Trim() method to remove the extra spaces from the String
let s1 = "   Hello World   ";
console.log(s1);
console.log(s1.trim());

//To find the index of character
console.log(s.indexOf("a"));

//Returns the index of first occurrence of specified value in a string
console.log(s.indexOf("a", 3)); //Start searching from index 3

//Returns the index of last occurrence of specified value in a string
console.log(s.lastIndexOf("a")); //Start searching from end of the string

//Reverse of Strinng
let rev = "";
for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i);
}
