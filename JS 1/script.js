let todo = [];
let req = prompt("Please enter your request");
while(true) {
    if(req=="quit") {
        console.log("quit");
        break;
    }
    if(req == "list"){
        console.log("----------------");
        console.log("your list");
        for(let i = 0; i<todo.length;i++){
            console.log(i ,todo[i]);
        }
    }
    else if(req == "add") {
     let task = prompt("enter a task you want to add");
     todo.push(task);
     console.log("task added");     
    }

    else if(req == "delete"){
        let task = prompt("Enter index of a task which you want to delete");
        todo.splice(task,1);
        console.log("task deleted");
    }
    req = prompt("Enter your request");
}