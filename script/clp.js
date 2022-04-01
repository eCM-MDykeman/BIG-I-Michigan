$(function () {
    handleCommunityTabs();
});

function handleCommunityTabs() {

    $('#CommunityTabsContainer').removeClass('nav-tabs').addClass('nav-pills');

    $('#CommunityTabsContainer').wrap('<div class="community-nav-wrapper"></div>');
}