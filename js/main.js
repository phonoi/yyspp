$(function () {
    var tab_title = $('.tab-title ul li');
    var tab_content = $('.tab-content section');
    var timeId = null;
    tab_title.mouseover(function () {
        var _this = $(this);
        timeId = setTimeout(function () {
            _this.addClass('Li-current').siblings().removeClass('Li-current');
            var index = _this.index();
            tab_content.eq(index).show().siblings().hide();
        }, 300);
    }).mouseout(function () {
        clearTimeout(timeId);
    });
});

$(function () {
    var gift_content = $('.gift-content');
    var pop =$('.pop');
    gift_content.click(function () {
        pop.removeClass('hide');
    });
});

$(function () {
    var back = $('.back');
    var pop = $('.pop');
    back.click(function () {
        pop.addClass('hide');
    });
});