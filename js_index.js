import fs from 'fs';


const table_body = document.querySelectorAll(".table-body");

function input_taskHandler(ele) {
    const input_task_value = document.getElementById("input-task").value;
    if (event.key === 'Enter') {
        event.preventDefault();
        table_body[0].innerHTML += `<div class="table-items">
            ${input_task_value}
        </div>`
    }
}

console.log(table_body[0].innerHTML);
console.log();