console.log('My Portfolio');

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {

    if (document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}