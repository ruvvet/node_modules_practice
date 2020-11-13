# Node Modules Practice

[Full notes here](https://github.com/ruvvet/node-express)

## Libraries used:
 - [Path](https://www.npmjs.com/package/path)
 - [Colors](https://www.npmjs.com/package/colors)
 - [Chalk](https://www.npmjs.com/package/chalk)
 - [Figlet](https://www.npmjs.com/package/figlet)

## Screenshots

![path](https://github.com/ruvvet/node_modules_practice/blob/main/img/path.png)
![colors](https://github.com/ruvvet/node_modules_practice/blob/main/img/colors.png)
![chalk](https://github.com/ruvvet/node_modules_practice/blob/main/img/chalk.png)
![figlet](https://github.com/ruvvet/node_modules_practice/blob/main/img/figlet.png)

## Module that exports an array of foods

![foods](https://github.com/ruvvet/node_modules_practice/blob/main/img/foods.png)

```javascript
//exporting the array from foods.js
// the array is the value
module.exports = [
    'watermelon',
    'peaches',
    'clementines',
//...
]
```

```javascript
// printing each element from the imported array
// imported foods array
const foods = require('./foods.js')

// printing the foods
for (let i=0; i<foods.length; i++){
    console.log(foods[i]);
}
```

# .gitignore
To ignore the module files, create a .gitignore file and add `node_modules` into the file.



