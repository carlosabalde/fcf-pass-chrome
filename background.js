chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    // Drop 'Referrer' (it will be modified later) and 'Cookie' (it would be
    // enough to drop the cookie keeping track of FCF history, but this is
    // simpler :) HTTP headers.

    for (var i = 0; i < details.requestHeaders.length; i++) {
      if ((details.requestHeaders[i].name === 'Cookie') ||
          (details.requestHeaders[i].name === 'Referer')) {
        details.requestHeaders.splice(i, 1);
        i--;
      }
    }

    // Set a fake HTTP referrer in order to bypass the paywall access control
    // layer thanks to the Google's First Click Free Program for Web Search.
    //
    // Please, note that in some cases, setting a fake user agent header
    // (e.g. 'Mozilla/5.0 (compatible; Googlebot/2.1; http://www.google.com/bot.html)')
    // also allows bypassing the paywall. This works when the paywalled site
    // does not verify Googlebot doing a reverse DNS lookup [1] when delivering
    // paywalled contents to the crawler.
    //
    // [1] https://support.google.com/webmasters/answer/80553

    details.requestHeaders.push({
      name: 'Referer',
      value: 'https://www.google.com'
    });

    return {requestHeaders: details.requestHeaders};
  },
  {
    urls: ['*://*.example.com/*']
  },
  ['blocking', 'requestHeaders']
);
