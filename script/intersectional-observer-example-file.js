$(function () {

    const aclLi = document.querySelectorAll('.SearchResults.HLLandingControl ul li');

    $(aclLi).prepend('<div class="img-container loading" />');

    const options = {
        rootMargin: '500px 0px 500px 0px',
        threshold: 0,
    };
    let observer = new IntersectionObserver(function (aclLi, self) {

        aclLi.forEach(li => {

            if (li.isIntersecting) {
                handleImgAjax(li.target);
                self.unobserve(li.target);
            }

        });

    }, options);

    aclLi.forEach(li => {
        observer.observe(li);
    });


    function handleImgAjax(item) {
        var href = $(item).find('h3 a').attr('href');
        $(item).wrap('<a href="' + href + '">');

        $.ajax({
            url: href,
            dataType: "html",
            success: success
        });

        function success(resp) {

            if ($(resp).find('.blogs-block').length) {
                var img = $(resp).find('.blogs-block img:first-of-type');
            }
            if ($(resp).find('div[id*="DetailPanel"]').length) {
                var img = $(resp).find(
                    'div[id*="DetailPanel"] .col-md-10.col-sm-10 .col-md-12 .media img:first-of-type'
                );
            }
            var src = $(img).attr('src'),
                url = 'url("' + src + '")';

            $(item).find('.img-container').css('background-image', url);
            setTimeout(function () {
                $(item).find('.img-container').removeClass('loading');
            }, 1000);
        }
    }

});