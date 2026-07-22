const fs = require('fs');
let data = fs.readFileSync('src/curriculumData.js', 'utf8');
data = data.replace(/'\/images\//g, "'./images/");
data = data.replace(/"\/images\//g, '"./images/');
fs.writeFileSync('src/curriculumData.js', data, 'utf8');
console.log('done single quotes');
