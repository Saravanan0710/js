let count = 0;

function increaseCount() {
    count++;
    displatCount();
    checkCountValue();
}

function displatCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if(count==10){
        alert("you gained 10 followers");
    } else if(count==30){
        alert("you gained 30 followers");
    }
}