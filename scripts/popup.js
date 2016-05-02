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
        var checkbox = "";

        chrome.tabs.sendMessage(currentTab.id, {reqMsg: "request"}, function(response) {
            console.log(response.ariaValueNow);
            start = response.ariaValueNow;

            var iframe = document.createElement("iframe");
            iframe.name = "inline";
            iframe.width = "420";
            iframe.height = "350";
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

function makeYoutubeEmbedUrl(url, start) {
    var movieId = url.split("=")[1].split(/&|#/)[0];
    return "https://www.youtube.com/embed/" + movieId + "?autoplay=1" + "&start=" + start.toString();
}
