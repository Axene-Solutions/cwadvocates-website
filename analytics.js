/* Cloudflare Web Analytics for cwadvocates.co.ke */
(function () {
    var token = '45f206c8c607482e829e6e435d1d06d0';
    if (!token) return;
    var s = document.createElement('script');
    s.type = 'module';
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: token }));
    document.head.appendChild(s);
})();