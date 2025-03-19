window.addEventListener('load', function() {
    setTimeout(function() {

        document.getElementById('loading-screen').style.display = 'none';
    }, 3000); 
});

let body = document.body
function changeMode() {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
    }
    else {
        body.classList.add('dark');
    }
}

  
