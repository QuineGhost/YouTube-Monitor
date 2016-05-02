//contents page layer
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("on message from " + request.reqMsg);

        var playButton = document.getElementsByClassName("ytp-play-button");
        playButton[0].click();

        var playerTime = document.getElementsByClassName("ytp-progress-bar")[0];
        var ariaValueNow = playerTime.getAttribute("aria-valuenow");
        var ariaValueMax = playerTime.getAttribute("aria-valuemax");

        var responseObj = {
            ariaValueMax: ariaValueMax,
            ariaValueNow: ariaValueNow
        }
        sendResponse(responseObj);
    }
);

//inline frame layer
var player = document.getElementById("player");
player.style = "height: 95%";

var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "repeat";
document.body.insertBefore(checkbox, null);

var intervalObj = "";

checkbox.addEventListener("click", function(e) {
    console.log("click");
    var popupProgBar = document.getElementsByClassName("ytp-progress-bar")[0];

    if(checkbox.checked) {
        console.log("checked");

        intervalObj = setInterval(function() {
            var progMax = popupProgBar.getAttribute("aria-valuemax");
            var progNow = popupProgBar.getAttribute("aria-valuenow");
            if(parseInt(progMax) - parseInt(progNow) === 0) {
                var iframePlayButton = document.getElementsByClassName("ytp-play-button");
                iframePlayButton[0].click();
            }
        }, 1000);
    } else {
        clearInterval(intervalObj);
    }
})
