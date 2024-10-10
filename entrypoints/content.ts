import { defineContentScript } from "wxt/sandbox";

export default defineContentScript({
    matches: ['https://www.linkedin.com/*'], 
    main() {
        console.log('LinkedIn Automation content script loaded.');

        chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
            if (request.action === 'connectAll') {
                console.log('Connecting to all visible buttons...');
                const connectButtons = document.querySelectorAll('button[data-control-name="people_connect"]');
                let connectedCount = 0;

                connectButtons.forEach(button => {
                    if (button instanceof HTMLButtonElement && button.offsetParent !== null) {
                        button.click();
                        connectedCount++;
                    }
                });

                sendResponse({ status: 'done', connectedCount });
            }
        });
    },
});
