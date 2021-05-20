const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const booleantest = core.getInput("boolean-test");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
  console.log(`Hello ${thirdGreeting}`);
}
if (booleantest == true) {
  console.log(`you did not input false`);
}