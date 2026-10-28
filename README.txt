Cool Trade Academy (PWA) - air conditioning and refrigeration training

HOW TO DEPLOY
1. Upload ALL files in this folder together to any HTTPS host (GitHub Pages, Cloudflare Pages, Netlify or your own site).
2. Open index.html in a browser on that site. On a phone, use "Add to Home screen" / "Install app".
3. After the first visit it works offline.

FILES
index.html            app shell
app.js                app logic, quizzes, exams, drawing lab, job sheets, lesson figure placement
extra.js ... extra19.js   course content, diagrams and questions (loaded in order; keep all of them)
extra19.js            fuller answer explanations (matched by question text) and five extra diagrams
manifest.json, icon.svg, sw.js   PWA install and offline support

CONTENT SIZE (approximate): 29 modules, 664 questions, 27 drawing-lab diagrams.

UPDATING: when you change any file, change the cache name in sw.js (cta-vN -> cta-vN+1, currently cta-v33) so installed copies refresh. The service worker re-downloads files fresh when it installs, so a new cache name is all that is needed.
If you add a new extra file, add it to index.html (before app.js) and to the file list in sw.js.

STANDARDS
The course is organised around NVTI certificate levels plus international and advanced modules. It is aligned to those ideas, not accredited or approved by NVTI, COTVET or any other body. Regulations, pressures and limits change: confirm current local rules and the equipment maker's data before relying on any figure.

NOTE: do not open index.html directly from disk for install/offline; it needs https or localhost.
