const fs = require('fs');

fs.writeFileSync('Anant.txt', 'Hello, myself Anant Thakkur', 'utf8',);
console.log('File written successfully.');

fs.appendFileSync('Anant.txt', '\nI study in ABESEC', 'utf8');

const data = fs.readFileSync('Anant.txt', 'utf8');
console.log(data);

// fs.unlinkSync('Anant.txt');
// console.log('File deleted successfully.');

fs.mkdirSync('Folder');
console.log('Folder created successfully.');

// fs.rmdirSync('Folder');
// console.log('Folder deleted successfully.');

if (fs.existsSync('Anant.txt')) {
    console.log('File exists.');
} else {
    console.log('File not found, need to create it.');
}