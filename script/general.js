function handleDiscussionPosts() {
    $('.HLDiscussions ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('.content-row');
        var description = $(this).find('p[id*="DiscussionList"]').parent();
        $(description).append($(byline));
        $(description).append($(postedIn));
    });

    $('.tabs .SearchResults.HLLandingControl ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('div[id*="pnlFoundIn"]');
        var description = $(this).find('div[id*="pnlDescription"]');
        $(description).append($(byline));
        $(description).append($(postedIn));
    });
}

function handleTileLinks() {
    $('.tile').each(function () {
        var anchor = $(this).find('a');
        var anchorHref = $(anchor).attr('href');
        $(this).wrap('<a class="tile-anchor" href="' + anchorHref + '"></a>');
        $(anchor).hide();
        var BGImg = $(this).find('img');
        var BGImgSrc = $(BGImg).attr('src');
        $(BGImg).hide();
        $(this).css('background-image', 'url("' + BGImgSrc + '")');
    });

    $('.benefit-tile').each(function () {
        var anchor = $(this).find('a');
        var anchorHref = $(anchor).attr('href');
        $(this).wrap('<a class="benefit-tile-anchor" href="' + anchorHref + '"></a>');
        $(anchor).hide();
    });
}

function handleSliders() {

    $('.testimonial-slide').each(function () {
        var image = $(this).find('img');
        $(this).find('h4').wrap('<div class="name-title-wrap"></div>');
        var jobTitle = $(this).find('h5');
        var nameTitle = $(this).find('.name-title-wrap');
        $(nameTitle).append($(jobTitle));
        $(image).wrap('<div class="byline-wrap"></div>');
        var bylineWrap = $(this).find('.byline-wrap');
        $(bylineWrap).append($(nameTitle));
    });


    $('.testimonial-slide').wrapAll('<div class="testimonial-slider"></div>');

    // handle most active members
    $('.testimonial-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fas fa-chevron-right"></i></button',
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button'
    });

    $('.partner-slide').wrapAll('<div class="partner-slider" />');

    $('.partner-slide').each(function () {
        var href = $(this).find('a').attr('href');
        $(this).find('a').hide();
        $(this).wrap('<a class="partner-slide-anchor-wrap" href="' + href + '"/>');
    });

    $('.partner-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: 'calc(50% - 600px)',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1022,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px'
                }
            }
        ]
    });
}


function handleAdSpace() {
    // Ad Space 

    $('.ad-space').each(function () {
        var htmlContent = $(this).find('.HtmlContent');
        var img = $(this).find('img');
        var imgSrc = $(this).find($(img)).attr('src');
        $(htmlContent).css('background-image', 'url("' + imgSrc + '")');
        $(img).hide();
        var anchorHref = $(this).find('a').attr('href');
        $(htmlContent).wrap('<a href="' + anchorHref + '" target="_blank"></a>');
    });
}

function handlemapSection() {

    $('.map-bg img').css('visibility', 'hidden');
    $('.map-bg').append($('.top-left-img, .bottom-img, .top-right-img'));

    $('.map-bg').removeClass('map-bg').closest('.col-md-8').addClass('map-bg');

    $('.map-bg').append('<div class="light-grey-circle"/>');
    $('.map-bg').append('<div class="grey-outline-circle"/>');
    $('.map-bg').append('<div class="dark-blue-circle-72"/>');
    $('.map-bg').append('<div class="dark-blue-circle-49"/>');
    $('.map-bg').append('<div class="dark-blue-circle-72-second"/>');
}

function handleHero() {
    var heroMapBGImg = $('.hero-map img');

    var heroMapBGImgSrc = $(heroMapBGImg).attr('src');

    $('.hero-map').css('background-image', 'url("' + heroMapBGImgSrc + '")');

    $(heroMapBGImg).hide();

    var heroIconBGImg = $('.hero-icon img');

    var heroIconBGImgSrc = $(heroIconBGImg).attr('src');

    $('.hero-icon').css('background-image', 'url("' + heroIconBGImgSrc + '")');

    $(heroMapBGImg).hide();

}

function handleLoggedIn() {
    if ($('.HLWelcome .imgButton').length) {
        $('body').addClass('logged-in');
    }
}

function handleTopTile() {
    $('.top-tile').wrapAll('<div class="top-tile-wrapper"></div>');

    $('.top-tile').each(function () {
        var href = $(this).find('a').attr('href');
        var anchorText = $(this).find('a').text();
        $(this).wrap('<a class="top-tile-wrap" href="' + href + '"></a>');
        $(this).find('a').replaceWith('<span>' + anchorText + '</span>');
    });
}

function handlePartnerBox() {

    $('.partner-box').each(function () {
        var href = $(this).find('a').attr('href');
        var partnerText = $(this).find('a').text();
        $(this).wrap('<a class="partner-box-wrap" href="' + href + '"></a>');
        $(this).find('a').replaceWith('<span>' + partnerText + '</span>');
    });

}

$(function () {

    handleHero();

    $(window).scroll(function () {
        var value = window.scrollY;

        $('.hero-map').css('top', (value - 71) / 2 + 'px');

        $('.hero-icon').css('top', -(value + 50) / 4 + 'px');
    });

    handleDiscussionPosts();
    handlePartnerBox();
    handleTileLinks();
    handleSliders();
    handleAdSpace();
    handlemapSection();
    handleLoggedIn();
    handleTopTile();

});

$(function () {
    $('.HLLandingControl.HLEventList ul li').each(function () {
        var self = $(this),
            month = $(self).find('.date-block .calendar-month span').text();

        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);
    });
});