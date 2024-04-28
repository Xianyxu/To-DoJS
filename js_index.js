import fs from 'fs';


const table_body = document.querySelectorAll(".table-body");
const input = document.getElementById("input-task")

input.addEventListener("keypress", function (event) {
    // 
    if (event.key === 'Enter') {
        console.log(event.target.value);
        event.preventDefault();
        table_body[0].innerHTML += `<div class="table-items">
            ${event.target.value}
        </div>`
    }

})

// function input_taskHandler(ele) {
//     // const input_task_value = input.value;
//     if (event.key === 'Enter') {
//         console.log()
//         event.preventDefault();
//         table_body[0].innerHTML += `<div class="table-items">
//             ${input_task_value}
//         </div>`
//     }
// }

console.log(table_body[0].innerHTML);
console.log();