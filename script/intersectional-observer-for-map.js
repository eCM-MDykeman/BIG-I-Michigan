$(function () {

    const mapDiv = document.querySelectorAll('.map-bg');

    const options = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
    };
    let observer = new IntersectionObserver(function (mapDiv) {

        mapDiv.forEach(map => {

            if (map.isIntersecting) {
                handleMapAnimation(map.target);

            }

        });

    }, options);

    mapDiv.forEach(map => {
        observer.observe(map);
    });



    function handleMapAnimation(item) {
        $(item).addClass('play');
    }

});