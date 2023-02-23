$(document).ready(function () {

    // functions go here

    var coll = document.getElementsByClassName("collapsible");
    var menu = document.getElementById("menu");
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

    for (i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", function () {
            this.getElementById.toggle("active");
            var content = this.firstElementChild;
            if (content.style.display === "block") {
            } else {
                content.style.display = "none";
            }
        });
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menu").style.top = "-6.0vh";
        } else {
            document.getElementById("menu").style.top = "5.2vh";
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

var vid = document.getElementById("myVideo");

function enableMute() {
    vid.muted = true;
}

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');

        for (var i = 0; i < videoEl.length; i++) {

            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }

        }
    }

}

