// ==UserScript==
// @name         Twitter Redirect
// @namespace    http://nikhilmwarrier.github.io/
// @version      0.1
// @description  Redirect Twitter links to Nitter (nitter.net) links
// @author       nikhilmwarrier
// @match        http*://*.twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    const url = window.location.href
    window.location.href = url.replace(/https:\/\/?.+twitter.com/gi, "https://nitter.net")
})();