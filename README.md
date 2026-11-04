# PST

**PST** este o aplicație personală de fitness, cu interfață în limba română și **temă albastră (dark blue)**. Poate fi folosită direct din browserul Android și adăugată pe ecranul principal ca aplicație web (PWA).

**Aplicație:** https://1kingposto.github.io/PF/  
**Cod sursă:** https://github.com/1kingposto/PF

> Numele afișat al aplicației este **PST**. Adresa de GitHub rămâne `/PF/` deoarece acesta este numele repository-ului existent; nu trebuie să-l redenumești.

## Ce include

- **Acasă:** rezumatul zilei și obiectivele personale.
- **Antrenamente:** creare manuală, serii, repetări, greutăți și istoric.
- **Generator local de antrenamente:** propuneri care funcționează fără Gemini.
- **Mese:** jurnal alimentar, calorii și macronutrienți estimați.
- **Apă:** înregistrarea hidratării zilnice.
- **Progres:** greutate, calendar și statistici.
- **PST Coach:** chat cu Gemini și generare de antrenamente și meniuri, după conectarea serviciului AI.
- **Backup:** export și import de date în format JSON.

## Instalare pe Android (fără calculator)

1. Deschide https://1kingposto.github.io/PF/ în **Google Chrome**.
2. Atinge meniul **⋮**.
3. Selectează **Instalează aplicația** sau **Adaugă pe ecranul de pornire** (opțiunea poate avea alt nume pe unele telefoane).
4. Confirmă și deschide **PST** de pe ecranul principal.

Nu ai nevoie de Node.js sau Android Studio pentru această versiune web. Un fișier `.apk` este un pachet Android separat; publicarea pe GitHub Pages nu creează automat un APK.

## Cum actualizezi aplicația pe GitHub, de pe telefon

1. Descarcă și **dezarhivează** pachetul cu fișierele PST.
2. În Chrome, deschide https://github.com/1kingposto/PF .
3. Asigură-te că ești pe ramura **`main`**.
4. Încarcă fișierele direct în rădăcina repository-ului (nu într-un subfolder și nu ZIP-ul):

   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon.svg`
   - `icon-192.png`
   - `icon-512.png`
   - `README.md` (acest document)

5. Confirmă prin **Commit changes**. Dacă GitHub nu permite suprascrierea unui fișier existent din interfața mobilă, deschide fișierul, folosește opțiunea de editare și salvează modificările. Pentru imaginile existente poate fi necesară înlocuirea prin interfața de încărcare.
6. În **Settings → Pages**, verifică `Deploy from a branch`, ramura `main`, folderul `/(root)`.
7. Deschide din nou site-ul. Dacă apare aspectul vechi, reîncarcă pagina; evită să ștergi *datele site-ului*, deoarece acolo este păstrat jurnalul.

## Gemini AI – conectare opțională

**PST Coach nu este conectat automat doar prin încărcarea fișierelor pe GitHub.** Pentru răspunsuri AI, aplicația are nevoie de o conexiune către un Cloudflare Worker. Cheia Gemini nu se introduce niciodată în `index.html` sau într-un fișier public din GitHub.

1. Accesează https://aistudio.google.com/apikey și creează o cheie Gemini API într-un proiect eligibil.
2. Accesează https://dash.cloudflare.com/ și creează un **Worker** (de exemplu `pst-coach`).
3. În editorul Worker-ului, adaugă codul din fișierul **`PST-Worker-Gemini.js`** primit separat, apoi publică Worker-ul.
4. În **Worker → Settings → Variables and Secrets**, configurează **două secrete**:
   - `GEMINI_API_KEY`: cheia creată în Google AI Studio;
   - `PST_ACCESS_PIN`: un cod privat lung, recomandat de minimum 16 caractere.
5. Publică din nou Worker-ul dacă ți se cere.
6. Copiază adresa HTTPS a Worker-ului (de forma `https://...workers.dev`).
7. În aplicația **PST → AI / PST Coach → Conectare Gemini**, introdu URL-ul Worker-ului și același cod `PST_ACCESS_PIN`.
8. Salvează și testează mai întâi o întrebare simplă în chat.

**Atenție:** nu publica nici cheia API, nici codul PIN în GitHub, capturi de ecran sau conversații. Configurația AI are nevoie de internet. Accesul gratuit la Gemini și Cloudflare este supus limitelor și condițiilor curente ale conturilor; nu este nelimitat. Dacă primești erori privind modelul, verifică modelul configurat în Worker și modelele disponibile pentru cheia ta Gemini.

## Date și confidențialitate

- Jurnalul cu antrenamente, mese, apă și greutate se salvează **local în browserul telefonului**.
- Actualizarea fișierelor site-ului nu ar trebui să șteargă jurnalul, dacă folosești aceeași adresă și nu ștergi datele browserului; totuși **exportă un backup înainte de actualizare**.
- Pentru backup, deschide **Profil → Exportă backup (.json)** și păstrează fișierul într-un loc sigur. Restaurarea se face prin **Importă backup**.
- Pentru cererile AI, o parte din profilul de fitness și textul introdus sunt transmise către Cloudflare Worker și Google Gemini, pentru procesarea răspunsului.
- Un PIN simplu nu înlocuiește autentificarea robustă sau limitarea cererilor; păstrează Worker-ul doar pentru uz personal.
- Planurile generate de AI și estimările nutriționale sunt orientative, nu indicații medicale.

## Fișiere și arhitectură

| Fișier | Rol |
| --- | --- |
| `index.html` | Interfața PST și logica jurnalului local |
| `manifest.webmanifest` | Numele PST, tema și configurarea instalării PWA |
| `sw.js` | Service worker pentru resursele aplicației |
| `icon.svg` | Pictogramă vectorială |
| `icon-192.png`, `icon-512.png` | Pictograme Android / PWA |
| `README.md` | Documentația proiectului |
| `PST-Worker-Gemini.js` | Codul backend separat, publicat în Cloudflare, nu necesar în folderul GitHub Pages |

**Stare:** aplicația web poate funcționa fără Gemini; funcțiile PST Coach necesită configurarea Worker-ului și pot fi afectate de limitele API.
