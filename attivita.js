// Elenco delle attività del sito.
// Per aggiungerne una: carica il file .html nel repository e copia un blocco qui sotto.
//   titolo:   nome dell'attività
//   file:     nome del file .html
//   sezione:  "escape" (Escape room) oppure "attivita" (Attività)
//   gruppo:   solo per le Attività: il sottogruppo (vedi GRUPPI in fondo)
//   livello:  "A1", "A2", "A1–A2", "B1"...
//   info:     una riga di descrizione
//   icona:    un'emoji
//   nuovo:    true per mostrare l'etichetta NUOVO
const ATTIVITA = [
  // ESCAPE ROOM
  { titolo: "Delitto al Forno", file: "forno.html", sezione: "escape",
    livello: "A1–A2", icona: "🥖", info: "Bari Vecchia · 6 sospettati · con traduzioni in inglese" },
  { titolo: "Delitto a Villa Rufina", file: "rufina.html", sezione: "escape",
    livello: "A1–A2", icona: "🍷", info: "Chianti · 9 sospettati · con traduzioni in inglese" },
  { titolo: "Il mistero di Palazzo Rosa", file: "palazzo-rosa.html", sezione: "escape",
    livello: "A1–A2", icona: "🏰", info: "10 sospettati · si gioca su ogni telefono" },

  // ATTIVITÀ
  { titolo: "L'olio misterioso", file: "olio-misterioso.html", sezione: "attivita", gruppo: "oro-verde",
    livello: "A1–A2", icona: "🫒", info: "Osservare, annusare, assaggiare: le parole della degustazione", nuovo: true },
  { titolo: "Il gioco dell'olio pugliese", file: "gioco-olio-pugliese.html", sezione: "attivita", gruppo: "oro-verde",
    livello: "A2", icona: "🎲", info: "Gioco a squadre per la classe", nuovo: true },
];

// Sezioni principali della pagina, nell'ordine in cui compaiono.
const SEZIONI = {
  escape:   { nome: "Escape room", icona: "🔐", descrizione: "Gialli da risolvere: interroga i sospettati e trova il colpevole." },
  attivita: { nome: "Attività",    icona: "🧩", descrizione: "Lezioni e giochi per la classe, divisi per tema." },
};

// Sottogruppi delle Attività. Per crearne uno nuovo, aggiungi una riga qui.
const GRUPPI = {
  "oro-verde": { nome: "Oro verde di Puglia", icona: "🫒", descrizione: "Un viaggio tra gli ulivi e l'olio extravergine pugliese" },
};
