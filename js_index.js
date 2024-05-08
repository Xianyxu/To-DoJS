import fs from 'node:fs';
// const json_file = require('./task_list.json')


const table_body = document.querySelectorAll(".table-body");
const input = document.getElementById("input-task")
const new_table_button = document.getElementById("new-table-btn")
const tableItems = document.getElementsByClassName("table-items")
const new_func = document.querySelector(".div-table-grid")


let i = 0

input.addEventListener("keypress", function (event) {
    // 
    if (event.key === 'Enter') {
        // console.log(event.target.value);
        event.preventDefault();
        table_body[0].innerHTML += /* html */ `
        <div class="table-items">
            <p>${event.target.value}</p>
        </div>
        `





        const json_object = {
            "tasks": event.target.value
        }

        console.log(tableItems[i].innerHTML);

        ++i


        const data = JSON.stringify(json_object)
        localStorage.setItem("task-list2", data)

        // fs.writeFileSync(json_file, data)
        // console.log(data);


    }

})


i += i


new_table_button.addEventListener("click", () => {

    new_func.innerHTML += /*html*/ `
            <div class="task-table">
                <div class="table-head">
                    <div>
                        <p>Tasks</p>
                    </div>

                    <button>
                        <img src="../resources/icons/SVG/trashbin.svg" height="30">
                    </button>
                </div>
                <div class="table-body">
                </div>
            </div>
    `
})





table_body[0].addEventListener('mouseover', () => {


    let i = 0
    i++

    if (table_body[0].children[0].childElementCount <= 1) {
        table_body[0].children[0].innerHTML += /* html */ `
        <div class="table-items-onhover">
            <button >
                <img src="/resources/icons/SVG/trash-can-solid.svg" height=15>
            </button>
        </div>
    `
    }
    
    console.log(table_body[0].children[0].innerHTML)

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

// console.log(table_body[0].innerHTML);
