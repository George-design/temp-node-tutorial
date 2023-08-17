// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" },
// );

// console.log(first, second);

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = first;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       },
//     );
//   });
// });
