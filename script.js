

let body = document.body
function changeMode() {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
    }
    else {
        body.classList.add('dark');
    }
}

 

function modalFn() {
    document.querySelector('.modal').style.display = "flex";
}

function closeModal(event) {
    let modal = document.querySelector('.modal');

    if (!event || event.target.classList.contains("modal")) {
        modal.style.display = "none";
    }
}


