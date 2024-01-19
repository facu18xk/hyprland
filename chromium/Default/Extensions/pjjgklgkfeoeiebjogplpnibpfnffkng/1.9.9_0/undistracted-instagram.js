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
    ['instagramSettings', 'generalSettings'],
    ({ instagramSettings, generalSettings }) => {
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
      if (instagramSettings.feed.value) {
        css += `div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1 {
              display: none !important;
            }
            `;
      }

      // Hide Likes Comments
      if (instagramSettings.likesComments.value) {
        css += `div._ae1h._ae1i._ae1l {
              display: none !important;
            }
            `;
      }

      // Hide Stories
      if (instagramSettings.stories.value) {
        css += `div._aac4._aac5._aac6._aj3f {
              display: none !important;
            }
            `;
      }

      // Block Reels
      if (instagramSettings.reels.value) {
        css += `a[href="/reels/"] {
              display: none !important;
            }
            `;
      }

      // Block Explore
      if (instagramSettings.explore.value) {
        css += `a[href="/explore/"] {
              display: none !important;
            }
            `;
      }

      // Hide Suggested for you
      if (instagramSettings.suggestedForYou.value) {
        css += `div._aak3._agh4, div._ab6k._ab6m._aggc._ackh {
              display: none !important;
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
