// Підключення модуля для роботи з ФС (файловою системою)

const { log } = require("console");
const fs = require("fs");
const path = require("path");

// провірка існування папки

function f01() {
  const pathToDir = "./test";
  fs.existsSync(pathToDir) ? console.log(`yes`) : console.log("no");
}

// провірка інсування файлу
function f02() {
  const pathToFile = "./test/info.dat";
  fs.existsSync(pathToFile)
    ? console.log(`${pathToFile} yes`)
    : console.log(`${pathToFile} no`);
}

// Визначення розміру файлу
function f03() {
  const pathToFile = "./test/info.dat";
  let fileInfo = fs.statSync(pathToFile);
  console.log(fileInfo.size);
}

// Взнаємо імя та розширення файлу

function f04() {
  const pathToFile = "./test/info.dat";
  console.log(path.basename(pathToFile));
  console.log(path.dirname(pathToFile));
  console.log(path.extname(pathToFile));
  console.log(path.parse(pathToFile));
}

// отримання фали та папки в директорії

function f05() {
  const pathToDir = "./test";
  const allFiles = fs.readdirSync(pathToDir);
  //console.log(allFiles);
  let out = ``;
  allFiles.forEach((item) => (out += item + `\n`));
  console.log(out);
}

// отримання повний шлях

const fullPathDir = path.join(__dirname, `test`);
console.log(fullPathDir);
console.log(__dirname);
