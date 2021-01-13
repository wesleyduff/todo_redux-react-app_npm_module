const fs = require('fs')
const path = require('path')

module.exports = {
    page : "" + fs.readFileSync(path.join(__dirname, './build/todo.txt')) + ""
};