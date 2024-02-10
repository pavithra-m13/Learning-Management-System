// script.js
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("ul li");
    
    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const text = item.textContent;
            alert("You clicked: " + text);
        });
    });
});
