
// importing 3rd party npms
const colors = require('colors');
const path = require('path');
const chalk = require('chalk');
var figlet = require('figlet');

// IMPORTED MODULE /////////////////////////
// imported foods array
const foods = require('./foods.js')

// printing the foods
for (let i=0; i<foods.length; i++){
    console.log(foods[i]);
}

// COLORS NPM //////////////////////////////
console.log('HELLO WORLD - COLORS NPM RAINBOW'.rainbow); // prints rainbow colors
console.log('HELLO WORLD - COLORS NPM TRAP'.trap); // prints it in gibberrish

// CHALK NPM ///////////////////////////////
// doesn't work in git bash, but works in windows powershell
console.log(chalk.green('HELLO') + 'CHALK' + chalk.red('!'));

// PATH NPM ////////////////////////////////
console.log(path.basename('node_modules_practice/foods.js', '.js')); // prints the filename without the extension
console.log(path.dirname('node_modules_practice/foods.js')); // returns the immediate parent directory name
console.log(path.extname('node_modules_practice/foods.js')); // returns extension name
console.log(path.parse('node_modules_practice/foods.js')); // returns the parsed path with dir, base, ext and filename as an object

// FIGLET NPM //////////////////////////////
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
