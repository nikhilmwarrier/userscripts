// ==UserScript==
// @name         Quora UnAnnoyer
// @namespace    http://nikhilmwarrier.github.io/
// @version      0.2
// @description  Stop Quora's annoying login popup
// @author       nikhilmwarrier
// @match        https://www.quora.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(!`${window.location.href}`.includes("?share=1")) window.location.href += "?share=1"
})();
