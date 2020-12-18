var readlineSync = require("readline-sync");
var chalk = require('chalk');
console.log(chalk.blue("*****************"))
var userName = readlineSync.question(chalk.blue("who wants to play ", chalk.red.underline("'know jay quiz'"), "?"));
console.log(chalk.blue("*****************"))
console.log(chalk.bgWhite.red( userName + " there are just 2 questions on this quize all you need is toanswer each one correctly. let the quize begin!!!!!!!!!!!!!!!!!"));
console.log(chalk.blue("*****************"))
var score = 0;
function game(question,answer){
var userAnser = readlineSync.question(chalk.green.bold(question));
if( userAnser === answer){
console.log(chalk.red.bold("correct answer " + chalk.white.bold(userName) + " well done "));
score = score + 1;
}
else
{
  console.log(chalk.red.bold("wrong answer " + chalk.white.bold(userName) + " you are out  "));
  score = score - 1;
} }
var questions = [ { question: "what is my sir name?", answer: "singh dhakad"},{ question : "what is my fav food ?", answer : "paratha"}]
for (i = 0; i < questions.length; i++)
{
  game(questions[i].question,questions[i].answer)
  console.log(chalk.blue("*****************"))
  if (score === -1){ break;}
}

console.log(chalk.red.bold("your final score is "+ score))
