const fs = require("fs");

const text =
  "Звільнений від усіх клопотів, соловей заспівав свою найкращу пісню серед вечірньої тиші. \r\nЙого мелодія линула в повітрі, нагадуючи про красу мить усередині спокійного літа.";

// write to file

// const pathToFile = "d02/n_1.txt";
// fs.writeFileSync(pathToFile, text, { encoding: "utf8", flag: "a" });

// write file from array

const text2 = [
  "- Привіт, Юрію! Як справи?",
  "- Все добре, Оленко. Як у тебе?",
  "- Теж чудово, дякую. Плануємо щось цікаве на вихідні?",
];

// fs.writeFileSync("d02/n_2.txt", text2.join("\r\n"), {
//   encoding: "utf8",
//   flag: "w",
// });
