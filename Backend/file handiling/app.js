// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req == '/about'){
//         res.end("about page")
//     }
//     if(req == '/profile'){
//         res.end("profile page")
//     }
//     if(req == "/"){
//         res.end("home page")
//     }
    
// })

// server.listen(3000);






// write a file

// const { throws } = require('assert');
// const fs = require('fs');
// fs.writeFile("newf.txt","Hey this is a new file",function(err){
//     if(err) throw err
//     else console.log("Done")
// })


// // read a file
// fs.readFile('newf.txt',"utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // append a file
// fs.appendFile("newf.txt"," new data added", function(err){
//     if(err) throw err;
//     else console.log("successfully");
// });


// // rename the file name
// fs.rename("newf.txt","new.txt",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })


// // delete file
// fs.unlink("new.txt",function(err){
//     if(err) console.log(err)
//     console.log("deleted")
// })




const fs = require('fs');
// creating a folder
// fs.mkdir("lolo", function(err){
//     if(err) console.log(err)
//         else console.log("created");
        
// })



// read directory
// fs.readdir("lolo",function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
// })

// fs.readdir("lolo",{withFileTypes:true},function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
// })



// remove dir
// fs.rm("lolo",{recursive:true},function(err){
//     if(err) console.log(err);
//     else console.log("removed"); 
// })



// create sync file
let data = fs.writeFileSync("new.txt","kfjkjkdjk");
console.log("created");




