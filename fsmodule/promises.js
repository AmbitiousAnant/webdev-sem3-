const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('section1.txt', 'sabse accha baccha 😎', 'utf8');
        console.log('File written successfully.');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}
writeFile();
//read file
async function readFileFile(){
    try{
        const data=await fs.readFile('section1.txt','utf8');
        console.log('file content:');
        console.log(data);

    }catch(error){
        console.log('Error',error);
    }
}
readFileFile();
//update
async function appendFile(){
    try{
        await fs.appendFile("promise.txt" , "\nWelcome to FSD Training");
        console.log("Data appended successfully");
    }catch(error){
        console.log("Error",error);
    }
}
appendFile()
//rename
async function renameFile(){
    try{
        await fs.rename("promise.txt","promise_broken.txt");
        console.log("Renmaed");
    }catch(error){
        console.log("Eror",error);
    }
}
renameFile();
//delete
