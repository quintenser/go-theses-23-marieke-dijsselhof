$(document).ready(function () {

    // functions go here

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menu").style.top = "-6.0vh";
        } else {
            document.getElementById("menu").style.top = "0vh";
        }
        prevScrollpos = currentScrollPos;
    }

});

function show() {

    /* Access image by id and change
    the display property to block*/
    document.getElementById('toypopup')
        .style.display = "block";

    document.getElementById('image')
        .style.display = "none";
}

new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    computed: {},
    methods: {}
});

