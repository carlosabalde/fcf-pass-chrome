**Tiny Google Chrome extension demonstrating how to bypass paywalls implementing the [Google's First Click Free Program for Web Search](http://googlewebmastercentral.blogspot.com.es/2008/10/first-click-free-for-web-search.html).** 

This extension is meant for educational and research purposes ONLY. Do NOT attempt to violate the law with it. Using this extension, you accept that you are going to use it for educational and research purposes ONLY.

QuickStart
==========

1. [Download & unpack the extension files](https://github.com/carlosabalde/fcf-pass-chrome/archive/master.zip) somewhere in your computer.

3. Replace occurrences of `example.com` in `manifest.json` and `background.js` files by the domain name of the paywalled site implementing Google's FCF policy (e.g. `ft.com`, `nytimes.com`, etc.).

4. Visit chrome://extensions in your browser.

5. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.

6. Click **Load unpacked extension...** to pop up a file-selection dialog.

7. Navigate to the directory where the extension files live, and select it.

7. Start browsing the paywalled site.

Alternatively, you can simply drag and drop the directory where the extension files live onto chrome://extensions in your browser to load it.

How it works?
=============

The extension simply (1) intercepts every outgoing HTTP request to ft.com; (2) removes `Referrer` and `Cookie` HTTP headers; and (3) sets a fake HTTP referrer that will bypass the access control layer at ft.com thanks to the Google's First Click Free Program for Web Search.

Please, check the source code for extra information and alternative implementations.

Conclusions
===========

This extension is a trivial PoC of how any paywalling logic based on client side state (including slightly more sophisticated anonymous access control solutions based on browser fingerprinting or persistent cookies) are easily breakable with a browser extension intercepting HTTP requests.

Want to know more about high performance paywalls? Please, contact [Allenta Consulting](http://www.allenta.com), the [Varnish Software integration partner for Spain and Portugal](https://www.varnish-software.com/partner/allenta-consulting).
