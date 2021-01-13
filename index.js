const fs = require('fs')

module.exports = {
    page : "" + fs.readFileSync('./build/todo.txt') + ""
};