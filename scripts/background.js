chrome.browserAction.setBadgeText({text: "YM"});
chrome.browserAction.onClicked.addListener(function(tab) {
    var mOption = 'width=450, height=355, location=no, '
        + 'menubar=no,toolbar=no, scrollbars=no, resizable=yes';
    window.open("popup.html", "myPopUp", mOption);
})

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.query({audible: true}, function(result) {
//         var currentTab = result.shift();
//         chrome.windows.create()
//
//         var moveProperties = {
//             windowId: chrome.windows.WINDOW_ID_CURRENT,
//             index: 0
//         }
//         chrome.tabs.move(currentTab.id, moveProperties, function() {})
//     })
// })
