// Elenco delle attività del sito.
// Per aggiungerne una: carica il file .html nel repository e copia un blocco qui sotto.
//   titolo:    nome dell'attività
//   file:      nome del file .html
//   tipo:      "giallo", "gioco" o "lezione" (vedi TIPI in fondo)
//   tema:      argomento (es. "Cibo e cucina")
//   livello:   "A1", "A2", "A1–A2", "B1"...
//   info:      una riga di descrizione
//   icona:     un'emoji
//   nuovo:     true per mostrare l'etichetta NUOVO
const ATTIVITA = [
  { titolo: "Delitto al Forno", file: "forno.html", tipo: "giallo", tema: "Cibo e cucina",
    livello: "A1–A2", icona: "🥖", info: "Bari Vecchia · 6 sospettati · con traduzioni in inglese" },
  { titolo: "Delitto a Villa Rufina", file: "rufina.html", tipo: "giallo", tema: "Viaggi e luoghi",
    livello: "A1–A2", icona: "🍷", info: "Chianti · 9 sospettati · con traduzioni in inglese" },
  { titolo: "Il mistero di Palazzo Rosa", file: "palazzo-rosa.html", tipo: "giallo", tema: "Viaggi e luoghi",
    livello: "A1–A2", icona: "🏰", info: "10 sospettati · si gioca su ogni telefono" },
  { titolo: "L'olio misterioso", file: "olio-misterioso.html", tipo: "lezione", tema: "Cibo e cucina",
    livello: "A1–A2", icona: "🫒", info: "Assaggiare, descrivere, scegliere", nuovo: true },
  { titolo: "Il gioco dell'olio pugliese", file: "gioco-olio-pugliese.html", tipo: "gioco", tema: "Cibo e cucina",
    livello: "A2", icona: "🎲", info: "Gioco a squadre per la classe", nuovo: true },
];

const TIPI = {
  giallo:  { nome: "Gialli",          icona: "🔍" },
  gioco:   { nome: "Giochi a squadre", icona: "🎲" },
  lezione: { nome: "Lezioni",         icona: "📘" },
};
