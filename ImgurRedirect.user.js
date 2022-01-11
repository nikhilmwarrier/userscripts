// ==UserScript==
// @name         Imgur Redirect
// @namespace    http://nikhilmwarrier.github.io/
// @version      0.1
// @description  Redirect Imgur links to Imgin (https://git.voidnet.tech/kev/imgin) links
// @author       nikhilmwarrier
// @match        http://imgur.com/*
// @match        https://imgur.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

const imginInstance = "https://imgin.voidnet.tech"
window.location.href = imginInstance + window.location.pathname