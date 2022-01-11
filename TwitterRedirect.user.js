// ==UserScript==
// @name         Twitter Redirect
// @namespace    http://nikhilmwarrier.github.io/
// @version      0.3
// @description  Redirect Twitter links to Nitter (nitter.net) links
// @author       nikhilmwarrier
// @match        http://*.twitter.com/*
// @match        https://*.twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    const url = window.location.href
    window.location.href = url.replace(/https:\/\/?.+twitter.com/gi, "https://nitter.net")
})();
