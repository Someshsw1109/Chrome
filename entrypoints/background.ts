import { defineBackground } from "wxt/sandbox";
import browser from "webextension-polyfill";

const backgroundScript = () => {
    console.log('LinkedIn Connection Automation background script is running!', { id: browser.runtime.id });
};

export default defineBackground(backgroundScript);