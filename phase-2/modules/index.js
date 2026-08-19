// const {add , subtract} = require('./math');

// const sum = add(10 , 5);
// const diff = subtract(10 , 5);

// console.log(sum);
// console.log(diff);
 
// const fs = require('fs');
// fs.readFile('data.txt' , 'utf-8',(err,data) => {
//     if(err){
//         console.log("Error reading file:", err);
//         return;
//     }
//     console.log("this is my today task:\n" + data)
// })

// const fs = require('fs');
// fs.writeFile('output.txt','how are you bro','utf-8',(err) =>{
//     console.log("Success is granted himanshu")
// });

// const fs = require('fs');
// fs.appendFile('output.txt', ' learning backend is fun  and it also headache ' , 'utf-8',(err) =>{
//   if(err){
//     console.log("Error appending data" , err);
//     return;
//   }  
//   console.log("New Text Added Successfully")
// });

const fs = require('fs/promises');
async function readMyFile(){
    try{
       const data = await fs.readFile('data.txt','utf-8');
       console.log("next task:\n" + data);
    }catch(err){
console.log("Kuch gadbad hui hai:", err);
    }
}
readMyFile();