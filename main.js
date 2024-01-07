// import inquirer from "inquirer";
// import { todo } from "node:test";
// let todos: string[] = [];
// let loop = true;
// while(loop){
//     const answers: {
//         TODO: string,
//         addMore: boolean
//     } =await inquirer.prompt([
//         {
//             type:"input",
//             name:"TODO",
//             message:"What do you want to add in your todo?"
//         },
//         {
//             type:"confirm",
//             name:"TODO",
//             message:"Do you want to add more todo?"
//         },
//     ]);
//     const {TODO, addMore} = answers;
//     loop = addMore;
//     if (TODO){
//         todos.push(TODO);
//     }else{
//         console.log("kindly enter valid input");
//     }
// }
// if (todos.length > 0){
//     console.log("your to do list is:");
//     todos.forEach(todo =>{
//         console.log(todo);
//     });
// }
// else{
//     console.log("no todo list");
// }
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Do you want to add in your Todo ?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more ?"
        },
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add vaild input");
    }
}
if (todos.length > 0) {
    console.log("your todo list is :");
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("no todos found");
}
