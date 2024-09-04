// Function to set the volume of all audio elements on the page
function setVolume(volume) {
    const audioElements = document.querySelectorAll('audio, video');
    audioElements.forEach(element => {
        element.volume = volume;
    });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'setVolume') {
        setVolume(message.volume);
        sendResponse({status: 'success'});
    }
});