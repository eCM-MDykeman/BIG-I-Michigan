$(function () {
    handleDiscussions();
});

function handleDiscussions() {
    $(".community-landing-page .HLLandingControl.HLDiscussions ul li").each(
        function () {
            var byline = $(this).find(".ByLine");
            var communityName = $(this).find("h5");

            $(byline).appendTo(this);
            $(communityName).appendTo(this);

            $(communityName)
                .contents()
                .filter(function () {
                    return this.nodeType === 3;
                })
                .remove();
        }
    );
}