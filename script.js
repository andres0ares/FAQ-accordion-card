var test
var tec = 0;

$('.hl').on('click', (test) => {

    $('h6').removeClass("test");
    $('.arrow').removeClass("arrow-up");

    if(this.test != test.currentTarget || this.tec > 1) {
        
        $(test.currentTarget.firstElementChild.firstElementChild).toggleClass("test");
        $(test.currentTarget.lastElementChild.firstElementChild).toggleClass("arrow-up");

        this.test = test.currentTarget;
        this.tec = 0;
    }
    this.tec++
});
