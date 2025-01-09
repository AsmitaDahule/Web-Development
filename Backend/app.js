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
const { error } = require('console');
const fs = require('fs');

fs.writeFile("newf.html","Thisi is new file",function(e){
    if(e) console.log(e);
    else console.log("file created");
})


// read a file
fs.readFile('newf.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// append a file
fs.appendFile("newf.txt"," new data added", function(err){
    if(err) throw err;
    else console.log("successfully");
})