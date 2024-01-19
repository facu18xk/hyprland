'use strict';
/* global chrome */
chrome.runtime.onMessage.addListener(function(message) {
  runContentScript();
});

runContentScript();

function runContentScript() {
  var css = '';
  const currentTime =
    new Date()
      .getHours()
      .toString()
      .padStart(2, '0') +
    ':' +
    new Date()
      .getMinutes()
      .toString()
      .padStart(2, '0');

  chrome.storage.sync.get(
    ['facebookSettings', 'generalSettings'],
    ({ facebookSettings, generalSettings }) => {
      const fromTime = generalSettings.disableDuringHours.value.fromTime;
      const toTime = generalSettings.disableDuringHours.value.toTime;
      // Remove existing and add new
      var existingStyle = document.getElementById('undistracted-style');
      if (existingStyle) {
        existingStyle.remove();
      }

      if (
        generalSettings.disableFilters.value ||
        generalSettings.disableFiltersTemporary.value.active ||
        (generalSettings.disableDuringHours.value.active &&
          (fromTime < toTime
            ? fromTime <= currentTime && currentTime < toTime
            : (fromTime <= currentTime && currentTime <= '23:59') ||
              ('00:00' <= currentTime && currentTime < toTime)))
      ) {
        return;
      }
      // Hide Feed
      if (facebookSettings.feed.value) {
        css += `
      div.x1hc1fzr.x1unhpq9.x6o7n8i {
        display: none !important;
      }
      `;
      }

      // Hide Likes and Comments box
      if (facebookSettings.likesComments.value) {
        css += `
      div.x168nmei.x13lgxp2.x30kzoy.x9jhf4c.x6ikm8r.x10wlt62 {
        display: none !important;
      }
      `;
      }

      // Hide Chat Sidebar
      if (facebookSettings.chatSidebar.value) {
        css += `
      .fbChatSidebar, #BuddylistPagelet, [data-pagelet="ChatTab"], [aria-label="New Message"], [aria-label="New message"] {
        display: none !important;
      }
      `;
      }

      // Hide Marketplace
      if (facebookSettings.marketplace.value) {
        css += `
        [href*="/marketplace/"] {
          display: none !important;
        }
            `;
      }

      // Hide Stories
      if (facebookSettings.stories.value) {
        css += `
        [aria-label="Stories"] {
          display: none !important;
        }
            `;
      }

      // Remove Colors
      if (facebookSettings.color.value) {
        css += `
      * {
        filter: grayscale(100%);
      }
      `;
      }

      var style = document.createElement('style');
      style.setAttribute('id', 'undistracted-style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);
    }
  );
}
