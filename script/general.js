

function handleDiscussionPosts() {
    $('.tabs .HLDiscussions ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('h5[id*="DiscussionList"]');
        var description = $(this).find('p[id*="DiscussionList"]');
        var col10 = $(this).find('.title-row > .col-sm-10.col-md-10');
        $(col10).append($(description));
        $(col10).append($(byline));
        $(col10).append($(postedIn));
    });

    $('.tabs .SearchResults.HLLandingControl ul li').each(function () {
        var byline = $(this).find('.ByLine');
        var postedIn = $(this).find('h5');
        var description = $(this).find('div[id*="pnlDescription"]');
        $(description).append($(byline));
        $(description).append($(postedIn));
    });
}


$(function () {

    handleDiscussionPosts();

});