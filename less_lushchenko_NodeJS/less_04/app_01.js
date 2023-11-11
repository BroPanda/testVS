const fs = require("fs");

// read file

const pathToFile = "d02/info.txt";
const data = fs.readFileSync(pathToFile, { encoding: "utf8", flag: "r" });
// console.log(data);
// console.log(typeof data);

//split text file line by line

let dataArr = data.split("\r\n");
dataArr = dataArr.filter((line) => line !== "");

console.log(dataArr);
