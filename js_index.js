import fs from 'node:fs';
// const json_file = require('./task_list.json')


const table_body = document.querySelectorAll(".table-body");
const input = document.getElementById("input-task")
const new_table_button = document.getElementById("new-table-btn")



input.addEventListener("keypress", function (event) {
    // 
    if (event.key === 'Enter') {
        // console.log(event.target.value);
        event.preventDefault();
        table_body[0].innerHTML += `<div class="table-items">
            ${event.target.value}
        </div>`

        const json_object = {
            "tasks": event.target.value
        }

        const data = JSON.stringify(json_object)
        localStorage.setItem("task-list2", data)

        // fs.writeFileSync(json_file, data)
        // console.log(data);


    }

})

new_table_button.addEventListener("click", () => {
    const new_func = document.querySelector(".div-table")
    new_func.innerHTML += /*html*/ `
    <div class="task-table">
        <div class="table-head">
            Tasks
        </div>
        <div class="table-body">
            <div class="table-items">
                
            </div>
            <div class="table-items">
                
            </div>
            <div class="table-items">
                
            </div>
        </div>
    </div>`
    console.log(new_func)
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