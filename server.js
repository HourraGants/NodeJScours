// server.js
import "dotenv/config"; // this line is mandatory when you want to read variables from the '.env' file
console.log(`My name is ${process.env.MY_NAME}.`);
console.log(`I live in ${process.env.MY_CITY}.`);
console.log(`I speak ${process.env.MY_LANGUAGE}.`);
