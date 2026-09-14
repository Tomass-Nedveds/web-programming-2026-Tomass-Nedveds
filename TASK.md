# 1. nedēļas praktiskais uzdevums — pāreja no CSS uz Tailwind CSS

## Mērķis

Pārveidot doto **CampusFlow** tīmekļa vietni no tradicionālā CSS uz **Tailwind CSS**, saglabājot tās vizuālo noformējumu, responsīvo uzvedību un JavaScript funkcionalitāti.

Mācīšanās un praktiskā darba laikā ir atļauts izmantot:

- oficiālo dokumentāciju;
- meklētājprogrammas;
- pamācības;
- mākslīgā intelekta rīkus.

Noslēguma tests un individuālā refleksija jāizpilda **patstāvīgi, neizmantojot mākslīgā intelekta rīkus**.

---

## 1. Izstrādes vide

Darbam izmantojiet:

- Visual Studio Code;
- Node.js un npm;
- Git;
- GitHub;
- Vite;
- Tailwind CSS;
- Visual Studio Code paplašinājumu **Tailwind CSS IntelliSense**.

Šajā uzdevumā **nedrīkst izmantot Tailwind CSS caur CDN**.

---

## 2. Vite projekta izveide

Izveidojiet jaunu Vite projektu un izvēlieties:

- **Framework:** Vanilla
- **Variant:** JavaScript

Pēc tam instalējiet nepieciešamās atkarības.

Instalējiet Tailwind CSS un Vite spraudni:

```bash
npm install tailwindcss @tailwindcss/vite
```

Konfigurējiet Tailwind CSS atbilstoši oficiālajai Tailwind dokumentācijai darbam ar Vite.

Palaidiet projektu:

```bash
npm run dev
```

Pirms turpināt darbu, pārliecinieties, ka Tailwind CSS utilītklases projektā darbojas korekti.

---

## 3. Git repozitorijs

Izveidojiet Git repozitoriju semestra darbam.

Ieteicamais repozitorija nosaukums:

```text
web-programming-2026-vards-uzvards
```

Izveidojiet šīs nodarbības mapi:

```text
week01-tailwind
```

Darba laikā regulāri veiciet izmaiņu saglabāšanu Git vēsturē un augšupielādējiet tās GitHub.

### Obligātie minimālie kontrolpunkti

1. `Set up Vite and Tailwind`
2. `Migrate header and hero`
3. `Migrate dashboard and project cards`
4. `Add responsive Tailwind layout`
5. `Finish Tailwind migration`

Commit ziņojumiem nav obligāti precīzi jāsakrīt ar šiem piemēriem, taču katram kontrolpunktam jāatspoguļo būtisks paveiktā darba posms.

Nav pieļaujams viss darbs vienā noslēguma commit.

---

## 4. Esošās CSS vietnes izpēte

Pirms sākat pārveidi:

- atveriet un pārbaudiet sākotnējo tīmekļa vietni;
- izpētiet `index.html`;
- izpētiet `styles.css`;
- pārbaudiet vietni datora, planšetdatora un mobilā ekrāna platumā;
- pārbaudiet mobilās navigācijas darbību;
- pārbaudiet projektu filtrēšanu.

Atrodiet un saprotiet piemērus, kuros tiek izmantoti:

- atstatumi;
- tipogrāfija;
- krāsas;
- Flexbox;
- Grid;
- apmales;
- ēnas;
- `hover` stāvokļi;
- responsīvie media queries.

Pirms CSS koda aizstāšanas ir svarīgi saprast, kā darbojas esošais noformējums.

---

## 5. Obligātā pāreja uz Tailwind CSS

Pārveidojiet šīs vietnes daļas, izmantojot Tailwind CSS utilītklases:

- galveni un navigāciju;
- hero sadaļu;
- pogas;
- statistikas kartītes;
- projektu kartītes;
- projektu filtru vadības elementus;
- termiņu sadaļu;
- resursu sadaļu;
- kājeni;
- responsīvo izkārtojumu.

Gala rezultātam vizuāli jābūt pēc iespējas līdzīgam sākotnējai tīmekļa vietnes versijai.

Lielākā daļa vizuālā noformējuma jārealizē ar Tailwind CSS utilītklasēm, nevis ar sākotnējo `styles.css`.

Neliels daudzums individuāli rakstīta CSS ir pieļaujams, ja tā izmantošana ir pamatota.

---

## 6. Obligātie uzlabojumi

Kad pamata migrācija ir pabeigta, veiciet šādus uzlabojumus.

### 6.1. Projektu kartīšu responsīvais izkārtojums

Projektu kartītēm jābūt:

- 1 kolonnā mazos ekrānos;
- 2 kolonnās vidēja izmēra ekrānos;
- 3 kolonnās lielos ekrānos.

### 6.2. Hover efekts

Pievienojiet skaidri pamanāmu `hover` efektu projektu kartītēm.

### 6.3. Tastatūras fokuss

Pievienojiet skaidri redzamus `focus` stilus:

- pogām;
- navigācijas saitēm.

### 6.4. Individuāls dizaina uzlabojums

Veiciet vismaz vienu vizuālu uzlabojumu pēc saviem ieskatiem.

### 6.5. Jauns Tailwind komponents

Izveidojiet vismaz vienu jaunu lietotāja saskarnes komponentu, izmantojot tikai Tailwind CSS.

Piemēri:

- paziņojums;
- brīdinājums;
- statusa josla;
- informatīvs bloks;
- tukša stāvokļa paziņojums.

---

## 7. Mākslīgā intelekta izmantošana

Mācīšanās un praktiskā darba laikā mākslīgā intelekta izmantošana ir atļauta.

Izveidojiet failu:

```text
AI_USAGE.md
```

un aizpildiet to pirms darba iesniegšanas.

Nav nepieciešams pievienot pilnas sarakstes ar mākslīgā intelekta rīkiem.

---

## 8. Darba iesniegšana

Gala versiju augšupielādējiet GitHub.

Iesniedziet:

- GitHub repozitorija saiti;
- pilnu projekta pirmkodu;
- Git izmaiņu vēsturi;
- aizpildītu `AI_USAGE.md`;
- aizpildītu `REFLECTION.md`.

Pirms iesniegšanas pārbaudiet, ka:

- `npm install` izpildās bez kļūdām;
- `npm run dev` veiksmīgi palaiž projektu;
- Tailwind CSS darbojas;
- vietne ir responsīva;
- mobilā navigācija darbojas;
- projektu filtrēšana darbojas;
- pārlūkprogrammas konsolē nav būtisku kļūdu.
