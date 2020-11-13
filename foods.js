//exports = {}
//key foods inside the exports object

// export 1 thing  = default
// module.exports = [array]

// if i want to export multiple things then use the key:value pairing



module.exports = [
    'watermelon',
    'peaches',
    'clementines',
    'grapes',
    'cherries',
    'honeydew',
    'mangoes',
    'blackberries',
    'blueberries',
    'raspberries',
    'strawberries',
    'pomegranate'
]



// default export - when its imported its not destructed >> require
// const foods = required("./foods.js")
// module.exports = ['watermelon']
// destructured exports >>>>> {xyz:xyz();
// }