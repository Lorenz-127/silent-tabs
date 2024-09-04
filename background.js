chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'setVolume') {
        chrome.scripting.executeScript({
            target: {tabId: message.tabId},
            func: setVolume,
            args: [message.volume]
        }, () => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            } else {
                sendResponse({status: 'success'});
            }
        });
        return true; // Indicates that the response is asynchronous
    }
});

function setVolume(volume) {
    const audioElements = document.querySelectorAll('audio, video');
    audioElements.forEach(element => {
        element.volume = volume;
    });
}