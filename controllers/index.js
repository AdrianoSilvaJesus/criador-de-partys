const fileSystem = require('fs');

const rawData = fileSystem.readFileSync('./util/db.json');

module.exports = JSON.parse(rawData)
