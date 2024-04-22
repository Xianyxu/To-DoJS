import fs from 'node:fs'

/**
 * @type HTMLInputElement
 */


var htmlSet = document.querySelectorAll('.table-body');
// var table_set = document.querySelector(".task-table");


function add_data_to_list(task) {
    htmlSet[0].innerHTML += `<div class="table-items"> ${task} </div >`;
    console.log(htmlSet[0].innerHTML);
}

// function add_new_table(table_name) {
//     table_set.innerHTML += `<div class="table-head">
//                         Task
//                     </div>
//                     <div class="table-body">
//                         <div class="table-items">
//                             Lorem ipsum dolor sit amet.
//                         </div>
//                         <div class="table-items">
//                             Lorem ipsum dolor sit amet.
//                         </div>
//                         <div class="table-items">
//                             Lorem ipsum dolor sit amet.
//                         </div>
//                     </div>`
// }



function input_taskHandler(key_down) {


    if (event.key === 'Enter') {
        
        event.preventDefault();

        console.log(key_down.value);

        // let data = JSON.stringify(input_data);

        add_data_to_list(key_down.value);
        
        
    }
    
}

// function new_table(keydown) {
//     if (event.key === 'Enter') {

//         event.preventDefault();

//         console.log(key_down.value);

//         // let data = JSON.stringify(input_data);

//         add_data_to_list(key_down.value);


//     }
// }

console.log(htmlSet[0].innerHTML);



// var htmlGet = document.querySelectorAll('.table-body');

// console.log(htmlGet[0].innerHTML);



// function innerHTMLGet() {
    
//     var innerhtml = document.getElementsByClassName('table-body')

//     console.log(innerhtml.innerHTML)
// }

// innerHTMLGet();








