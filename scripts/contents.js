chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("on message from " + request.reqMsg);

        var playButton = document.getElementsByClassName("ytp-play-button");
        playButton[0].click();

        var playerTime = document.getElementsByClassName("ytp-progress-bar")[0];
        var ariaValue = playerTime.getAttribute("aria-valuetext").substring(0, 4);

        sendResponse({nowTime: ariaValue});
    }
);
