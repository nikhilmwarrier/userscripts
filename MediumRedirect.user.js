// ==UserScript==
// @name         Medium Redirect
// @namespace    http://nikhilmwarrier.github.io/
// @version      0.1
// @description  Redirect Medium and its (sub)domains to scribe.rip links
// @author       nikhilmwarrier
// @match       http://*/*
// @match       https://*/*
// @run-at       document-start
// ==/UserScript==

// Credits: adapted from this gist: https://gist.github.com/samhenrigold/4a082dde823bc3cb62e43a2fc2b12b8e

// Note: This script will redirect ALL recognised medium domains and subdomains to scribe.rip. Functionality like medium.com/search, etc will be lost. 

const preferredScribeInstance = "https://scribe.rip"

const badHosts = [
    "android.jlelse.eu",
    "arcdigital.media",
    "betterhumans.coach.me",
    "blog.angularindepth.com",
    "blog.bitsrc.io",
    "blog.devartis.com",
    "blog.getambassador.io",
    "blog.hipolabs.com",
    "blog.maddevs.io",
    "blog.prototypr.io",
    "blog.qz.com",
    "blog.usejournal.com",
    "bullshit.ist",
    "byrslf.co",
    "calia.me",
    "ceoplaybook.io",
    "codeburst.io",
    "dayoneperspective.com",
    "democracyguardian.com",
    "eand.co",
    "engineering.opsgenie.com",
    "enlear.academy",
    "entrepreneurshandbook.co",
    "extranewsfeed.com",
    "femsplain.com",
    "fityourself.club",
    "gitconnected.com",
    "instagram-engineering.com",
    "issuevoter.org",
    "itnext.io",
    "levelup.gitconnected.com",
    "medium.com",
    "medium.muz.li",
    "medium.mybridge.co",
    "pramp.com",
    "proandroiddev.com",
    "productcoalition.com",
    "psiloveyou.xyz",
    "robinhood.engineering",
    "substance.media",
    "theascent.pub",
    "thebolditalic.com",
    "thecreative.cafe",
    "timeline.com",
    "towardsdatascience.com",
    "usejournal.com",
    "ux.shopify.co",
    "uxdesign.cc",
    "uxplanet.org",
    "writingcooperative.com"
];

if (badHosts.includes(window.location.host)) {
    window.location.href = preferredScribeInstance + window.location.pathname;
} else if (window.location.host.includes("medium.com")) {
           window.location.href = preferredScribeInstance + window.location.pathname
}