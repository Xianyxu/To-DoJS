

/**
 * @type HTMLInputElement
 */


function input_taskHandler(key_down) {

    if (event.key === 'Enter') {
        var input = document.getElementById("input-task");
        console.log(key_down.value);

        var input_data = {
            "task_input:": input.value,
        }
        console.log(input_data);

        let data = JSON.stringify(input_data);
    }

}
   





