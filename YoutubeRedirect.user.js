// ==UserScript==
// @name         Youtube Redirect
// @namespace    http://nikhilmwarrier.github.io/
// @version      0.1
// @description  Redirect Youtube links to Piped (https://git.voidnet.tech/kev/imgin) links
// @author       nikhilmwarrier
// @match        http://youtube.com/*
// @match        https://youtube.com/*
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

const imginInstance = "https://piped.kavin.rocks"
window.location.href = imginInstance + window.location.pathname