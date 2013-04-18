// run first counter refresh
getCountersFromHTTP();

// initialize button click event
chrome.browserAction.onClicked.addListener(function(tab) {
  openOurTab();
});

var default_folder = localStorage['old_reader_url'];

function updateSettings() {
  default_folder = localStorage['old_reader_url'];
}

