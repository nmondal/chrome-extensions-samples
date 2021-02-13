// (c) - BrowserNative <https://browsernative.com/screenshot-extension/>

function format_date() {
  // code from http://tylerfrankenstein.com/
  now = new Date();
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
  return year + "-" + month + "-" + day + "-" + hour + "-" + minute + "-" + second;
}

chrome.browserAction.onClicked.addListener(function() {

  var format = localStorage.getItem('format');
  if (!format) format = "png";

  chrome.tabs.captureVisibleTab({format: format, quality: 100}, function(image) {
    var action = localStorage.getItem('action');
    if (!action) action = "save";

    if(action === "show")  chrome.tabs.create({url: image});
    if(action === "save")    chrome.downloads.download({url: image, filename: "screenshot-"+format_date()+"."+format});

  });
});


// first run
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        chrome.tabs.create({
            url: "https://nmondal.github.io"
        });
    }
});
