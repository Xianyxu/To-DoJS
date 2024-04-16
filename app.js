

/**
 * @type HTMLInputElement
 */

var htmlSet = document.querySelectorAll('.table-body');

function add_data_to_list() {
    htmlSet[0].innerHTML += `<div class="table-items">
                            Lorem ipsum dolor sit amet.
                        </div > `
    console.log(htmlSet[0].innerHTML);
}
function input_taskHandler(key_down) {

    if (event.key === 'Enter') {
        event.preventDefault();
        var input = document.getElementById("input-task");
        console.log(key_down.value);

        var input_data = {
            "task_input:": input.value,
        }
        console.log(input_data);

        // let data = JSON.stringify(input_data);

        add_data_to_list();
                
    }

}

console.log(htmlSet[0].innerHTML);


// var htmlGet = document.querySelectorAll('.table-body');

// console.log(htmlGet[0].innerHTML);



// function innerHTMLGet() {
    
//     var innerhtml = document.getElementsByClassName('table-body')

//     console.log(innerhtml.innerHTML)
// }

// innerHTMLGet();








