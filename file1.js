var timer = document.querySelector(".extend")
var list = document.querySelector('.list2')
const lister = document.querySelector('.list-items')
list.style.display = "none";
var rows = document.querySelector(".row")
timer.addEventListener('click', function () {
    if (list.style.display == "none") {

        list.style.display = "list-item";
    }
    else {
        list.style.display = "none";
    }
    
})
window.onresize = function () {
    list.style.display = "none";
    setTimeout(10);
}
let o = rows.childElementCount;
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < o; i++) {
        var text = rows.children.item(i);
        if (text.textContent.toUpperCase().includes(filter) == false) {
            text.style.display = "none";
        }
        else {
            text.style.display = "";
        }
    }
}