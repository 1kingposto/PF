PF — Posto Fitness · Varianta web mobile-first (PWA)
==================================================

CE PRIMEȘTI
- Dashboard cu rezumat zilnic: calorii, proteine, apă, antrenamente și greutate.
- Jurnal de mese: calorii și proteine/carbohidrați/grăsimi; alimente rapide exemplificative.
- Tracker de apă: +250 ml, +500 ml sau orice cantitate, cu anularea ultimei intrări.
- Antrenamente: generare locală după obiectiv, nivel și echipament, plan split,
  creare manuală, serii, repetări, greutăți și istoricul antrenamentelor.
- Calendar, evoluția greutății, statistici săptămânale și streak.
- Obiective personalizate, export și import backup JSON.

INSTALARE FĂRĂ NODE.JS SAU CALCULATOR

1. Pentru probă rapidă: descarcă fișierul separat PF-Posto-Fitness.html și
   încearcă să-l deschizi în browserul telefonului. Suportul pentru fișiere
   HTML locale diferă între iOS și Android; pe iPhone poate apărea doar o
   previzualizare, nu o aplicație utilizabilă.

2. Pentru instalare pe ecranul principal (recomandat): publică fișierele din
   acest folder pe un site HTTPS, de exemplu GitHub Pages, folosind doar
   browserul telefonului. Încarcă în rădăcina repository-ului: index.html,
   manifest.webmanifest, sw.js, icon.svg, icon-192.png, icon-512.png.
   Pe GitHub: Settings > Pages > Deploy from a branch > main / (root).
   După publicare, deschide adresa HTTPS pe telefon.

   iPhone: Safari > Partajare > Adaugă la ecranul principal.
   Android: Chrome > meniu ⋮ > Adaugă pe ecranul de pornire / Instalează.

DATE ȘI LIMITĂRI
- Datele sunt salvate local în browserul/dispozitivul pe care îl folosești.
- Exportă periodic un backup din Profil. Dezinstalarea aplicației sau
  curățarea datelor browserului poate șterge jurnalul.
- Nu există cont, sincronizare cloud sau backup automat.
- Generatorul de antrenamente este bazat pe reguli offline, nu pe AI extern.
- Nu include notificări programate, scanare de coduri de bare sau baze de
  date nutriționale. Valorile alimentelor rapide sunt estimări orientative.
- Nu este un APK/IPA nativ; este o aplicație web instalabilă (PWA).

Fișierul index.html este complet autonom (CSS/JS inline) și poate fi
verificat și în browserul desktop fără Node.js. PWA offline necesită HTTPS.
