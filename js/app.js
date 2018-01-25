document.addEventListener('DOMContentLoaded', function () {
    var mainBanner = document.querySelector('#mainBanner');
    var prev = mainBanner.querySelector('.main-banner-btn-prev');
    var next = mainBanner.querySelector('.main-banner-btn-next');

    var allSliders = mainBanner.querySelector('.main-banner-slides-cnt').children;

    var numb = 0;


    prev.addEventListener('click', function () {

        allSliders[numb].classList.add('visuallyhidden');
        allSliders[numb].classList.remove('active');
        numb = numb - 1;
        if (numb < 0) {
            numb = allSliders.length -1;
            allSliders[numb].classList.remove('visuallyhidden');
            allSliders[numb].classList.add('active');
        };

        allSliders[numb].classList.add('active');
        allSliders[numb].classList.remove('visuallyhidden');
    })

    next.addEventListener('click', function () {

            allSliders[numb].classList.remove('active');
            allSliders[numb].classList.add('visuallyhidden');
            numb +=1;
            if (numb >= allSliders.length) {
                numb = 0;
            }
            allSliders[numb].classList.add('active');
            allSliders[numb].classList.remove('visuallyhidden');
    })

    var showLi = document.querySelectorAll('.dropDownList');

    for (var i=0; i < showLi.length; i++) {
        showLi[i].addEventListener('click', function () {
            var list = this.querySelector('.listPanel');
            if (list.classList.contains('showList')) {
                list.classList.remove("showList");
            } else {
                list.classList.add("showList");
            };
        });
    };

    var summaryPanel = document.querySelector('.summaryPanel');
    var panelLeft = summaryPanel.querySelector('.panelLeft');
    var panelRight = summaryPanel.querySelector('.panelRight');

    var choiceChair = document.querySelector('ul.listPanel.showList.chairName').children;
    var addChoiceChair = panelLeft.querySelector('.title');
    var addChoiceChairPrice = panelRight.querySelector('.title');
    var choiceChairLabel = document.querySelector('.listLabel.chairName');

    var choiceColor = document.querySelector('ul.listPanel.showList.chairColor').children;
    var addChoiceColor = panelLeft.querySelector('.color');
    var addChoiceColorPrice = panelRight.querySelector('.color');
    var choiceColorLabel = document.querySelector('.listLabel.chairColor');


    var choicePattern = document.querySelector('ul.listPanel.showList.chairPattern').children;
    var addChoicePattern = panelLeft.querySelector('.pattern');
    var addChoicePatternPrice = panelRight.querySelector('.pattern');
    var choiceColorLabel = document.querySelector('.listLabel.chairPattern');

    var transport = document.querySelector('#transport');
    var addTransport = panelLeft.querySelector('.transport');
    var addTransportPrice = panelRight.querySelector('.transport');

    var totalPrice = document.querySelector('.totalPrice');
    var priceChair = 0;
    var priceColor = 0;
    var pricePattern = 0;
    var priceTransport = 0;

    for (var i=0; i < choiceChair.length; i++) {
        choiceChair[i].addEventListener('click', function () {
            addChoiceChairPrice.innerText = this.dataset.chairPrice;
            addChoiceChair.innerText  = this.innerText;
            choiceChairLabel.innerText = this.innerText;
            priceChair = this.dataset.chairPrice;
            priceChair = parseInt(priceChair);
            totalPrice.innerText = priceChair + priceColor + pricePattern + priceTransport;
        });
    };

    for (var i=0; i < choiceColor.length; i++) {
        choiceColor[i].addEventListener('click', function () {
            addChoiceColorPrice.innerText = this.dataset.colorPrice;
            addChoiceColor.innerText  = this.innerText;
            choiceColorLabel.innerText = this.innerText;
            priceColor = this.dataset.colorPrice;
            priceColor = parseInt(priceColor);
            totalPrice.innerText = priceChair + priceColor + pricePattern + priceTransport;
        });
    };

    for (var i=0; i < choicePattern.length; i++) {
        choicePattern[i].addEventListener('click', function () {
            addChoicePatternPrice.innerText = this.dataset.patternPrice;
            addChoicePattern.innerText  = this.innerText;
            choiceColorLabel.innerText = this.innerText;
            pricePattern = this.dataset.patternPrice;
            pricePattern = parseInt(pricePattern);
            totalPrice.innerText = priceChair + priceColor + pricePattern + priceTransport;
        });
    };

    transport.addEventListener('click', function () {
        if (transport.checked) {
            addTransportPrice.innerText = this.dataset.transportPrice;
            addTransport.innerText = "Transport";
            priceTransport = this.dataset.transportPrice;
            priceTransport = parseInt(priceTransport);
            totalPrice.innerText = priceChair + priceColor + pricePattern + priceTransport;
        } else {
            addTransportPrice.innerText = '';
            addTransport.innerText = '';
            totalPrice.innerText = priceChair + priceColor + pricePattern;
        };
    });
})