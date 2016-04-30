var youtubeScreen = document.getElementById("screen");
var queryInfo = {
  title: "*YouTube*",
  audible:true
};

chrome.tabs.query(queryInfo, function(tabs) {
    try {
        var currentTab = tabs.shift();
        var min = "";
        var sec = "";
        var start = "";

        chrome.tabs.sendMessage(currentTab.id, {reqMsg: "request"}, function(response) {
            console.log(response.nowTime);
            min = response.nowTime.split(":")[0];
            sec = response.nowTime.split(":")[1];
            start = generateMinitsuInt(min, sec);

            var iframe = document.createElement("iframe");
            iframe.width = "420";
            iframe.height = "315";
            iframe.src = makeYoutubeEmbedUrl(currentTab.url, start);
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            document.body.insertBefore(iframe, youtubeScreen);
        })
    } catch(e) {
        youtubeScreen.textContent = "AUDIBLE YOUTUBE NOT FOUND."
        console.error(e.message);
    }
})

function generateMinitsuInt(min, sec) {
    var minSec = (parseInt(min) * 60) + parseInt(sec);
    return minSec;
}

function makeYoutubeEmbedUrl(url, start) {
    var movieId = url.split("=")[1].split(/&|#/)[0];
    return "https://www.youtube.com/embed/" + movieId + "?autoplay=1" + "&start=" + start.toString();
}
