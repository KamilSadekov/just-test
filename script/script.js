document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
        modalButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    }); 
    closeButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
            overlay.remove('#vid');
        });
    });
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.querySelector('#vid').remove(this);
            document.querySelector('#vid').remove(this);
        }
    }, true);
    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});
const numberBlock = document.getElementById("numbers_");
const endPoint = 15;
const speed = 5;
var scores = {
    score1: { score: 0, end: 15 },
    score2: { score: 0, end: 5000 },
    score3: { score: 0, end: 80 },
    score4: { score: 0, end: 4050 },
};
window.addEventListener('scroll', function () {
    const numberBlockPos = numberBlock.offsetTop,
        winHeight = window.innerHeight;
    let winScrollTop = window.scrollY,
        scrollToElem = winScrollTop + winHeight,
        anamatedNumbers = false;
    if ((scrollToElem + 30 > numberBlockPos) && !anamatedNumbers) {
        TweenMax.to(scores.score1, speed, { score: scores.score1.end, onUpdate: updateHandler, onUpdateParams: [1] });
        TweenMax.to(scores.score2, speed, { score: scores.score2.end, onUpdate: updateHandler, onUpdateParams: [2] });
        TweenMax.to(scores.score3, speed, { score: scores.score3.end, onUpdate: updateHandler, onUpdateParams: [3] });
        TweenMax.to(scores.score4, speed, { score: scores.score4.end, onUpdate: updateHandler, onUpdateParams: [4] });
    }
});
function updateHandler(index) {
    let numberBlock = document.querySelector('.col[data-target="' + index + '"] div');
    numberBlock.innerHTML = scores[`score${index}`].score.toFixed(0);
}


    $(document).ready(function(){
        $("#menu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
});


 

$(document).ready(function () {
    $("#mob_menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});