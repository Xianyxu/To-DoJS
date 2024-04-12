function task_save(key_down) {

    if (event.key === 'Enter') {
        var input = document.getElementById("input-task");
        console.log(key_down);
        alert(key_down.value)
    }
    
}

console.log(task_save());