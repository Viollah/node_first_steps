const chalk = require('chalk');

const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);

// const greet = require('./greet');

// console.log(greet('Bob'))