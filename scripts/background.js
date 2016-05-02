chrome.browserAction.setBadgeText({text: "YM"});
chrome.browserAction.onClicked.addListener(function(tab) {
    var mOption = 'width=450, height=370, location=no, '
        + 'menubar=no,toolbar=no, scrollbars=no, resizable=yes';
    window.open("popup.html", "myPopUp", mOption);
})
