import fs from 'node:fs';
// const json_file = require('./task_list.json')


const table_body = document.querySelector(".table-body");
const input = document.getElementById("input-task")
const new_table_button = document.getElementById("new-table-btn")
const tableItems = document.getElementsByClassName("table-items")
const new_func = document.querySelector(".div-table-grid")
const task_delete_button = document.querySelector(".task-delete-button")


input.addEventListener("keypress", function (event) {
    // 
    if (event.key === 'Enter') {
        // console.log(event.target.value);
        event.preventDefault();
        table_body.innerHTML += /* html */ `
        <div class="table-items">
            <p>${event.target.value}</p>
        </div>
        `

    }

})


new_table_button.addEventListener("click", () => {

    new_func.innerHTML += /*html*/ `
            <div class="task-table">
                <div class="table-head">
                    <div>
                        <p>Tasks</p>
                    </div>

                    <button class="task-delete-button">
                        <img src="../resources/icons/SVG/trashbin.svg" height="30">
                    </button>
                </div>
                <div class="table-body">
                </div>
            </div>
    `
})


table_body.addEventListener('mouseover', () => {

    if (table_body.children[0].childElementCount <= 1) {
        table_body.children[0].innerHTML += /* html */ `
        <div class="table-items-onhover">
            <button >
                <img src="/resources/icons/SVG/trash-can-solid.svg" height=15>
            </button>
        </div>
    `
        
        console.log(table_body.children[0].innerHTML)
    }
    
    

})


table_body.addEventListener("mouseout", () => {
    const remove_candidate = document.getElementsByClassName("table-items-onhover")

    if (table_body.children[0].childElementCount > 1) {

        remove_candidate[0].remove()
    }

})

task_delete_button.addEventListener("click", () => {
    console.log(task_delete_button.parentElement)
})



