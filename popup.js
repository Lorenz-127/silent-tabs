document.getElementById('muteButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tab = tabs[0];
        chrome.tabs.update(tab.id, {muted: !tab.mutedInfo.muted});
    });
});

document.getElementById('muteAllButton').addEventListener('click', function() {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.update(tab.id, {muted: true});
        });
    });
});

document.getElementById('unmuteAllButton').addEventListener('click', function() {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.update(tab.id, {muted: false});
        });
    });
});

document.getElementById('setVolumeButton').addEventListener('click', function() {
    const volume = parseFloat(document.getElementById('volumeInput').value);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tab = tabs[0];
        chrome.runtime.sendMessage({action: 'setVolume', tabId: tab.id, volume: volume});
    });
});