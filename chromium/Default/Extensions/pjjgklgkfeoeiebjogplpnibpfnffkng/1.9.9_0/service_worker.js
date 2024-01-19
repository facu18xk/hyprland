/* global chrome */

importScripts('ExtPay.js');
var extpay = ExtPay('undistracted');
extpay.startBackground();

// Avoid circular
const fallbackUrl = 'https://www.google.com';
var myTimer;

const relatedDomains = {
  facebook: ['facebook.com', 'fb.com'],
  youtube: ['youtube.com', 'youtu.be'],
  twitter: [
    'twitter.com',
    'twimg.com',
    'twttr.net',
    'twttr.com',
    'abs.twimg.com',
  ],
  reddit: ['reddit.com', 'old.reddit.com'],
  netflix: ['netflix.com'],
  linkedin: ['linkedin.com'],
  instagram: ['instagram.com'],
};

const allSettings = {
  facebookSettings: {
    blockSite: {
      value: false,
      description: 'Block Facebook',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    feed: {
      value: false,
      description: 'Hide Feed',
      order: 1,
      type: 'switch',
    },
    likesComments: {
      value: false,
      description: 'Hide Likes and Comments',
      order: 2,
      type: 'switch',
    },
    chatSidebar: {
      value: false,
      description: 'Hide Chat Sidebar',
      order: 3,
      type: 'switch',
    },
    watchFeed: {
      value: false,
      description: 'Hide Watch Feed',
      order: 4,
      type: 'switch',
      enabled: false,
    },
    marketplace: {
      value: false,
      description: 'Hide Marketplace',
      order: 5,
      type: 'switch',
    },
    stories: {
      value: false,
      description: 'Hide Stories',
      order: 6,
      type: 'switch',
    },
    color: {
      value: false,
      description: 'Remove colors',
      order: 7,
      type: 'switch',
      enabled: false,
    },
  },
  youtubeSettings: {
    blockSite: {
      value: false,
      description: 'Block YouTube',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    recommendations: {
      value: false,
      description: 'Hide Recommendations',
      order: 1,
      type: 'switch',
    },
    redirectToSubscriptions: {
      value: false,
      description: 'Force redirect to my subscriptions',
      order: 2,
      type: 'switch',
    },
    breakingNews: {
      value: false,
      description: 'Hide Breaking News',
      order: 3,
      type: 'switch',
    },
    sidebar: {
      value: false,
      description: 'Hide Sidebar',
      order: 4,
      type: 'switch',
    },
    comments: {
      value: false,
      description: 'Hide Comments',
      order: 5,
      type: 'switch',
    },
    thumbnail: {
      value: 0,
      description: 'Blur/Hide Thumbnails',
      order: 6,
      type: 'switch-multi',
    },
    upNext: {
      value: false,
      description: 'Hide Up Next Suggestions',
      order: 7,
      type: 'switch',
    },
    shorts: {
      value: false,
      description: 'Hide Shorts',
      order: 8,
      type: 'switch',
    },
  },
  twitterSettings: {
    blockSite: {
      value: false,
      description: 'Block Twitter',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    timeline: {
      value: false,
      description: 'Hide Timeline',
      order: 1,
      type: 'switch',
    },
    trends: {
      value: false,
      description: 'Hide Trends',
      order: 2,
      type: 'switch',
    },
    whoToFollow: {
      value: false,
      description: 'Hide Who to follow',
      order: 3,
      type: 'switch',
    },
    topics: {
      value: false,
      description: 'Hide Topics to follow',
      order: 4,
      type: 'switch',
      enabled: false,
    },
    media: {
      value: false,
      description: 'Hide all media',
      order: 5,
      type: 'switch',
    },
    color: {
      value: false,
      description: 'Remove colors',
      order: 6,
      type: 'switch',
      enabled: false, // Performance Issues
    },
  },
  redditSettings: {
    blockSite: {
      value: false,
      description: 'Block Reddit',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    hideComments: {
      value: false,
      description: 'Hide comments (old.reddit only)',
      order: 1,
      type: 'switch',
      // enabled: false
    },
    hideFrontPageFeed: {
      value: false,
      description: 'Hide Front page feed (old.reddit only)',
      order: 2,
      type: 'switch',
      // enabled: false
    },
    popular: {
      value: false,
      description: 'Block r/popular',
      type: 'switch',
      order: 3,
    },
    all: {
      value: false,
      description: 'Block r/all',
      type: 'switch',
      order: 4,
    },
  },
  netflixSettings: {
    blockSite: {
      value: false,
      description: 'Block Netflix',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    hideAllShowMyAndContinue: {
      value: false,
      description: 'Hide Recommendations',
      order: 1,
      type: 'switch',
    },
    hideContinueWatching: {
      value: false,
      description: 'Hide Continue Watching',
      type: 'switch',
      order: 2,
    },
    hideMyList: {
      value: false,
      description: 'Hide My List',
      type: 'switch',
      order: 3,
    },
  },
  linkedinSettings: {
    blockSite: {
      value: false,
      description: 'Block LinkedIn',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    feed: {
      value: false,
      description: 'Hide Feed',
      order: 1,
      type: 'switch',
    },
    messaging: {
      value: false,
      description: 'Hide Messaging popup',
      order: 2,
      type: 'switch',
    },
    news: {
      value: false,
      description: 'Hide LinkedIn News',
      order: 3,
      type: 'switch',
    },
    likesComments: {
      value: false,
      description: 'Hide Likes and Comments',
      order: 4,
      type: 'switch',
    },
  },
  instagramSettings: {
    blockSite: {
      value: false,
      description: 'Block Instagram',
      order: 0,
      type: 'switch',
      customClass: 'red-setting',
    },
    feed: {
      value: false,
      description: 'Hide Feed',
      order: 1,
      type: 'switch',
    },
    likesComments: {
      value: false,
      description: 'Hide Likes and Comments',
      order: 2,
      type: 'switch',
    },
    stories: {
      value: false,
      description: 'Hide Stories',
      order: 3,
      type: 'switch',
    },
    reels: {
      value: false,
      description: 'Block Reels',
      order: 4,
      type: 'switch',
    },
    explore: {
      value: false,
      description: 'Block Explore',
      order: 5,
      type: 'switch',
    },
    suggestedForYou: {
      value: false,
      description: 'Hide Suggested for you',
      order: 6,
      type: 'switch',
    },
  },
  generalSettings: {
    disableFilters: {
      value: false,
      description: 'Pause all filters',
      type: 'switch',
      enabled: false,
      order: 1,
    },
    disableFiltersTemporary: {
      value: { active: false, endTimestamp: '' },
      description: 'Pause for 5 minutes',
      type: 'switch-with-meta',
      order: 2,
    },
    disableDuringHours: {
      value: { active: false, fromTime: '', toTime: '' },
      description: 'Pause during',
      type: 'switch-with-time-period',
      order: 3,
    },
    customSitesToBlock: {
      value: { active: false, customURLList: [] },
      description: 'Block list',
      type: 'text-list',
      order: 4,
    },
    customRedirectURL: {
      value: 'www.google.com',
      description: 'Custom URL',
      type: 'text',
      order: 5,
    },
    password: {
      value: { active: false, password: '' },
      description: 'Lock Settings',
      type: 'text-switch',
      paid: true,
      order: 6,
    },
    communicateToDev: {
      buttonList: [
        {
          title: 'Rate & Review',
          action: 'redirect',
          iconColor: 'orange',
          to: 'https://chrome.google.com/webstore/detail/undistracted/pjjgklgkfeoeiebjogplpnibpfnffkng/reviews',
        },
        {
          title: 'Contact Developer',
          action: 'mail',
          iconColor: 'blue',
          to: 'undistracted.developer@gmail.com?subject=Feedback&body=Screenshot (if applicable): ',
        },
      ],
      type: 'button-list',
      order: 7,
    },
    payment: {
      type: 'payment',
      order: 8,
    },
  },
};

function setLaunchPages(reason, _previousVersion = '') {
  if (reason === 'install') {
    chrome.tabs.create({ url: 'https://www.undistracted.app/installed' });
  } else if (reason === 'update') {
    if (chrome.runtime.getManifest().version === '2.0') {
      chrome.tabs.create({ url: 'https://www.undistracted.app/updated' });
    }
  }
}

function loadStorageToLocal(callbackOnLoad) {
  chrome.storage.sync.get(
    [
      'twitterSettings',
      'youtubeSettings',
      'facebookSettings',
      'redditSettings',
      'netflixSettings',
      'linkedinSettings',
      'instagramSettings',
      'generalSettings',
    ],
    (storageData) => {
      if (storageData.twitterSettings) {
        Object.keys(storageData.twitterSettings).forEach((filterKey) => {
          allSettings.twitterSettings[filterKey].value =
            storageData.twitterSettings[filterKey].value;
        });
      }
      if (storageData.youtubeSettings) {
        Object.keys(storageData.youtubeSettings).forEach((filterKey) => {
          allSettings.youtubeSettings[filterKey].value =
            storageData.youtubeSettings[filterKey].value;
        });
      }
      if (storageData.facebookSettings) {
        Object.keys(storageData.facebookSettings).forEach((filterKey) => {
          allSettings.facebookSettings[filterKey].value =
            storageData.facebookSettings[filterKey].value;
        });
      }
      if (storageData.redditSettings) {
        Object.keys(storageData.redditSettings).forEach((filterKey) => {
          allSettings.redditSettings[filterKey].value =
            storageData.redditSettings[filterKey].value;
        });
      }
      if (storageData.netflixSettings) {
        Object.keys(storageData.netflixSettings).forEach((filterKey) => {
          allSettings.netflixSettings[filterKey].value =
            storageData.netflixSettings[filterKey].value;
        });
      }
      if (storageData.linkedinSettings) {
        Object.keys(storageData.linkedinSettings).forEach((filterKey) => {
          allSettings.linkedinSettings[filterKey].value =
            storageData.linkedinSettings[filterKey].value;
        });
      }
      if (storageData.instagramSettings) {
        Object.keys(storageData.instagramSettings).forEach((filterKey) => {
          allSettings.instagramSettings[filterKey].value =
            storageData.instagramSettings[filterKey].value;
        });
      }
      if (storageData.generalSettings) {
        Object.keys(storageData.generalSettings).forEach((filterKey) => {
          if (
            filterKey === 'customSitesToBlock' &&
            Array.isArray(allSettings.generalSettings.customSitesToBlock.value)
          ) {
            allSettings.generalSettings.customSitesToBlock.value = {
              active: false,
              customURLList: [],
            };
          } else {
            if (allSettings.generalSettings[filterKey])
              allSettings.generalSettings[filterKey].value =
                storageData.generalSettings[filterKey].value;
          }
        });
      }
      callbackOnLoad && callbackOnLoad();
    }
  );
}

function rootDomain(url) {
  return url
    .match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/gim)[0]
    .split('://')
    .reverse()[0]
    .split('www.')
    .reverse()[0];
}

function safeRedirectOnBlock(tabId, redirectUrl, fallbackUrl, safeCheckUrls) {
  const redirectUrlRootDomain = rootDomain(redirectUrl);
  const safeRedirectUrl = safeCheckUrls.some((i) =>
    redirectUrlRootDomain.includes(i)
  )
    ? fallbackUrl
    : redirectUrl;
  chrome.tabs.update(
    tabId,
    {
      url: safeRedirectUrl,
    },
    () => {
      return;
    }
  );
}

function startTimer() {
  const { active, endTimestamp } =
    allSettings.generalSettings.disableFiltersTemporary.value;
  const remainingTime = endTimestamp - Date.now();
  if (!active || remainingTime <= 0) {
    return endTimer();
  }
  if (remainingTime > 0) {
    myTimer = setTimeout(endTimer, remainingTime);
  }
}
function endTimer() {
  allSettings.generalSettings.disableFiltersTemporary.value.endTimestamp = '';
  allSettings.generalSettings.disableFiltersTemporary.value.active = false;
  chrome.storage.sync.set(
    {
      generalSettings: allSettings.generalSettings,
    },
    clearTimeout(myTimer)
  );
}

loadStorageToLocal(startTimer);

/* Set storage as empty on installing */
chrome.runtime.onInstalled.addListener((details) => {
  /* Launch welcome / install  */
  setLaunchPages(details && details.reason, details && details.previousVersion);

  // TODO One time - change true/false to show/blur/hide
  (() => {
    var updatedYoutubeSettings = allSettings.youtubeSettings;
    if (allSettings.youtubeSettings.thumbnail.value == false) {
      updatedYoutubeSettings.thumbnail.value = '0';
    } else if (allSettings.youtubeSettings.thumbnail.value == true) {
      updatedYoutubeSettings.thumbnail.value = '1';
    } else {
      updatedYoutubeSettings.thumbnail.value =
        allSettings.youtubeSettings.value;
    }
    chrome.storage.sync.set({
      youtubeSettings: updatedYoutubeSettings,
    });
  })();

  /* Get data from local if already there on updates */
  loadStorageToLocal(() => {
    chrome.storage.sync.set({
      twitterSettings: allSettings.twitterSettings,
      youtubeSettings: allSettings.youtubeSettings,
      facebookSettings: allSettings.facebookSettings,
      redditSettings: allSettings.redditSettings,
      netflixSettings: allSettings.netflixSettings,
      linkedinSettings: allSettings.linkedinSettings,
      instagramSettings: allSettings.instagramSettings,
      generalSettings: allSettings.generalSettings,
    });
  });
});

/* Load settings in script on chrome start */
chrome.runtime.onStartup.addListener(() => {
  loadStorageToLocal();
});

/* Listen to changes in settings and transmit to all open tabs for live update */
chrome.storage.onChanged.addListener((changes, _namespace) => {
  const [filterCategory, bothChanges] = Object.entries(changes)[0];
  const newSettings = bothChanges.newValue;
  const oldTimerActive =
    allSettings.generalSettings.disableFiltersTemporary.value.active;
  allSettings[filterCategory] = newSettings;

  // Handle disableFiltersTemporary toggle
  if (
    filterCategory === 'generalSettings' &&
    newSettings.disableFiltersTemporary.value.active !== oldTimerActive
  ) {
    if (allSettings.generalSettings.disableFiltersTemporary.value.active) {
      startTimer();
    } else {
      endTimer();
    }
  }
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, 'refresh');
    });
  });
});

// Blocking custom websites
chrome.webNavigation.onBeforeNavigate.addListener(({ frameId, tabId, url }) => {
  if (frameId === 0) {
    const {
      twitterSettings,
      youtubeSettings,
      facebookSettings,
      redditSettings,
      netflixSettings,
      linkedinSettings,
      instagramSettings,
      generalSettings,
    } = allSettings;
    const urlDomain = rootDomain(url);
    const redirectUrl =
      'https://' +
      generalSettings.customRedirectURL.value.trim().split('://').reverse()[0];
    const currentTime =
      new Date().getHours().toString().padStart(2, '0') +
      ':' +
      new Date().getMinutes().toString().padStart(2, '0');
    const fromTime = generalSettings.disableDuringHours.value.fromTime;
    const toTime = generalSettings.disableDuringHours.value.toTime;

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

    if (
      facebookSettings.blockSite.value &&
      relatedDomains.facebook.some((i) => urlDomain.includes(i))
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.facebook
      );
    } else if (
      youtubeSettings.blockSite.value &&
      relatedDomains.youtube.some((i) => urlDomain.includes(i)) &&
      !url.includes('music.') &&
      !url.includes('studio.')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.youtube
      );
    } else if (
      youtubeSettings.redirectToSubscriptions.value &&
      relatedDomains.youtube.some((i) => urlDomain.includes(i)) &&
      url.split('.com')[1] == '/' &&
      !url.includes('music.') &&
      !url.includes('studio.')
    ) {
      safeRedirectOnBlock(
        tabId,
        'https://www.youtube.com/feed/subscriptions',
        fallbackUrl,
        ['https://www.youtube.com/feed/subscriptions']
      );
    } else if (
      twitterSettings.blockSite.value &&
      relatedDomains.twitter.some((i) => urlDomain.includes(i))
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.twitter
      );
    } else if (
      redditSettings.blockSite.value &&
      relatedDomains.reddit.some((i) => urlDomain.includes(i))
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.reddit
      );
    } else if (
      netflixSettings.blockSite.value &&
      relatedDomains.netflix.some((i) => urlDomain.includes(i))
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.netflix
      );
    } else if (
      linkedinSettings.blockSite.value &&
      relatedDomains.linkedin.some((i) => urlDomain.includes(i))
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.linkedin
      );
    } else if (
      instagramSettings.blockSite.value &&
      relatedDomains.instagram.some((i) => urlDomain.includes(i))
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.instagram
      );
    } else if (generalSettings.customSitesToBlock.value.active) {
      const customURLListDomains =
        generalSettings.customSitesToBlock.value.customURLList.map(
          (customURL) => rootDomain(customURL)
        );
      if (customURLListDomains.some((i) => urlDomain.includes(i))) {
        safeRedirectOnBlock(
          tabId,
          redirectUrl,
          fallbackUrl,
          customURLListDomains
        );
      }
    }
    //  reddit all and popular
    else if (
      redditSettings.all.value &&
      relatedDomains.reddit.some((i) => urlDomain.includes(i)) &&
      url.includes('r/all')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.reddit
      );
    } else if (
      redditSettings.popular.value &&
      relatedDomains.reddit.some((i) => urlDomain.includes(i)) &&
      url.includes('r/popular')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.reddit
      );
    }
    // facebook marketplace
    else if (
      facebookSettings.marketplace.value &&
      url.includes('facebook.com/marketplace')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.reddit
      );
    }
    // youtube shorts
    else if (
      youtubeSettings.shorts.value &&
      url.includes('youtube.com/shorts')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.youtube
      );
    }
    // instagram reels
    else if (
      instagramSettings.reels.value &&
      url.includes('instagram.com/reels')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.instagram
      );
    }
    // instagram explore
    else if (
      instagramSettings.explore.value &&
      url.includes('instagram.com/explore')
    ) {
      safeRedirectOnBlock(
        tabId,
        redirectUrl,
        fallbackUrl,
        relatedDomains.instagram
      );
    }
  }
});

var injectInstagramScript = () => {
  chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    var allPerms = await chrome.permissions.getAll();
    var instagramPermission = allPerms.origins.some((str) =>
      str.includes('instagram')
    );
    if (
      instagramPermission &&
      changeInfo.status &&
      changeInfo.status == 'loading' &&
      tab.url &&
      tab.url.includes('instagram.com')
    ) {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ['undistracted-instagram.js'],
      });
    }
  });
};
injectInstagramScript();
