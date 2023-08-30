var query_selector_class = document.querySelector('.classes')
var button_class = document.querySelector('.button_class')
button_class.addEventListener('click', function () {
    query_selector_class.textContent = query_selector_class.textContent + "yahia"
})
var counter;
var s = 0;
var start_interval = document.querySelector('.start_interval')
var stop = document.querySelector('.stop_interval')
var reset = document.querySelector('.reset_interval')
var seconds = document.querySelector('.seconds')
var timer = document.querySelector('.Timeer')
// var susu = window.prompt("Enter Hour")

function datetime() {

    const d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    timer.textContent = hours + ":" + minutes + ":" + seconds
    setTimeout(datetime,1000)
}
datetime();
start_interval.addEventListener('click', function () {
    if (!counter) {
        counter = setInterval(run_seconds, 100)
    }

    function run_seconds() {
        seconds.textContent = s + 1;
        s++

    }
})
stop.addEventListener('click', function () {
    clearInterval(counter);
    counter = false;
    
})
reset.addEventListener('click', function () {
    seconds.textContent = 0;
    s = 0;

})