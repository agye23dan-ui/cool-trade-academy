Cool Trade Academy (PWA) - air conditioning and refrigeration training

HOW TO DEPLOY
1. Upload ALL files in this folder together to any HTTPS host (your own site, Cloudflare Pages, Netlify, GitHub Pages).
2. Open index.html in a browser on that site. On a phone, use "Add to Home screen" / "Install app".
3. After the first visit it works offline.

FILES
index.html      app shell, quizzes, exams, drawing lab, job sheets
extra.js ... extra11.js   course content (loaded in order; keep all of them)
manifest.json, icon.svg, sw.js   PWA install and offline support

UPDATING: when you change any file, change the cache name in sw.js (cta-vN -> cta-vN+1 (currently cta-v32)) so installed copies refresh.
NOTE: do not open index.html directly from disk for install/offline; it needs https or localhost.
