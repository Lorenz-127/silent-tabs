document.getElementById('muteButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let tab = tabs[0];
      chrome.tabs.update(tab.id, {muted: !tab.mutedInfo.muted});
    });
  });