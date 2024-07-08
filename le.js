//Globals: Variables that are accessed anywhere in the code

//__dirname  -path to current directory
//__filename -path to the file
//__require  - to import/use modules
//__module   -info about file/ a way to make function or code in a seprate file so we acesses it in any file 
//process    -info about program enviroment where the program is excuted

/* console.log(__dirname)
console.log(__filename)
console.log(process)
 */
// ********************************************

//***Module*** 
/* const names = require('./1-names');//always start with dot to acess third party modules
//const {name,name2} = require('./1-names') another way same result
const sayHi = require('./2-sayhi');
const bob = require('./3-alterflav');
require('./4-mindG') //when a function in invoked in another file you can acess it without the module.exports
// sayHi(names.name)
// sayHi(names.name2)
// console.log(names.name);
// console.log (bob.singlePerson.name);
 */
// ********************************************

//**Built in Module*** 

//***OS module***
/* const os = require('os') //notice here we don't use dot as this is a builit in module.
const user = os.userInfo();
console.log(user);
const sysUpTime = os.uptime();
console.log(`system up time is ${sysUpTime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS) */
// ********************************************

//***Path*** 
/* const path = require('path');

const sep = path.sep;
console.log(sep);

const join = path.join('/text','Mclarent.txt'); //if you addedd extra / it will be removed and we get the normalized path
console.log(join);

const base = path.basename(join)
console.log(base);

const abs = path.resolve(__dirname,'/text','Mclaren.txt'); //will always get you the abs path and may ignore some paths to get there

console.log(path.dirname(__filename)); //same as dir
 console.log(path.basename(__filename)); //just the file name
 console.log(path.extname(__filename)); //the file type

console.log(path.parse(__filename));  //object contating all of the 3 above, to get a specfic value just put .dir for example
console.log(abs); */
// ********************************************

//***Sync read/write*** 
/*  const fs = require('fs');

const M = fs.readFileSync('./text/Mclaren.txt','utf-8')
const M0 = fs.readFileSync('./text/Mclarenn.txt','utf-8')

const W = fs.writeFileSync('./text/BMW.txt', 'M3 2005',{flag: 'a'}) //if the the files doesn't exist it will create one but if it exists, it will overwrite it. flag a will append the file in other way it will repeat the written text i believe.
//const a = fs.appendFileSync('./text/BMW.txt','\n \n i am more into JM') //will update the file 
console.log(M)
console.log(M0)
  */
// ********************************************

//***Async read/write*** //async will use callbacks or promises
/*  const fs = require('fs');

fs.readFile('./text/Mclarenn.txt','utf-8',(err,data)=>{
if (err){
    console.log(`something went wrong: ${err}`);
}
    const first = data;

    fs.readFile('./text/Mclaren.txt','utf-8',(err,data)=>{
        if (err){
            console.log(`something went wrong: ${err}`);
        }
            const sec = data;
            console.log(sec)
            fs.writeFile('./text/result.txt', `this is the result of reading two files: ${first}, ${sec}`,(err)=>{
                if(err){
                    console.log (err);
                }
               fs.appendFile('./text/result.txt','\n we ball',(err)=>{
                if(err){
                    console.log(err);
                }
                fs.rename('./text/result.txt','rizresult.txt',(err)=>{
                    if(err){
                        console.log(err);
                    }
                   })   
               })
            })    
})
}) */

// ********************************************

//***Http*** 
/*  const http = require('http');

 const server = http.createServer((req,res)=>{
 if(req.url ==='/'){
    res.end('welcome to p and s');
 }
if(req.url==='/about'){
    res.end('here is a short history about us');
    }
   res.end(`
    <h1>wrong</h1>
    <p>We can't find the page </p>
    <a href="/">back home</a>
    `
   ) 
 })
 server.listen(5000) //the port the server will listen for */
// ********************************************

//***npm***
//local dependency
// npm install <packageName>

//global
// npm install -g <packageName>

//package.json
//npm init (step by step)
//npm init -y (will skip all the bs)

//how to use 

const _ = require('lodash') //this is an external module so you will always have to install it first before you use it.

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items); //this will turn this messed up array back to a normal one
console.log(newItems);

//gitignore specifiy which files are gonna get ignored

/* git remote add origin https://github.com/MAGV09/test.git
git branch -M main
git push -u origin main



echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MAGV09/test.git
git push -u origin main */