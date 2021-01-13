const fs = require('fs')
const path = require('path')

module.exports = {
    page : "" + fs.readFileSync(path(__dirname, './build/todo2.txt')) + ""
};