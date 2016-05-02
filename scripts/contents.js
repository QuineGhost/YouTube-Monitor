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

//inline frame layer(popup)
var player = document.getElementById("player");
player.style = "height: 96%";

var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "repeat";
document.body.appendChild(checkbox);

var intervalObj = "";
checkbox.addEventListener("click", function(e) {
    var popupProgBar = document.getElementsByClassName("ytp-progress-bar")[0];

    if(checkbox.checked) {
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
});
