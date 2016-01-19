function logCRP() {
    var t = window.performance.timing,
        e = t.domContentLoadedEventStart - t.domLoading,
        n = t.domComplete - t.domLoading,
        o = document.getElementById("crp-stats");
    o.textContent = "DCL: " + e + "ms, onload: " + n + "ms"
}
window.addEventListener("load", function(t) {
        logCRP()
    }), WebFontConfig = {
        google: {
            families: ["Open+Sans:400,700:latin"]
        }
    },
    function() {
        var t = document.createElement("script");
        t.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", t.type = "text/javascript", t.async = "true";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    }(),
    function(t, e) {
        t.GoogleAnalyticsObject = e, t[e] = t[e] || function() {
            (t[e].q = t[e].q || []).push(arguments)
        }, t[e].l = 1 * new Date
    }(window, "ga"), ga("create", "UA-XXXX-Y"), ga("send", "pageview");
