const fs = require('fs');

const parseDate = () => new Date().toLocaleString()

fs.writeFileSync('./out/current.txt', parseDate(), {
    encoding: 'utf-8'
});

console.log('')

fs.writeFileSync('./out/current.svg', '<svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">\n\t<text x="0" y="15">' + parseDate() + '</text>\n</svg>', {
    encoding: 'utf-8'
});
