# Erasmus Quiz · La sfida Erasmus+

Tre quiz da 10 domande per gli eventi con gli studenti. Il punteggio e la correzione vengono calcolati nel browser. La prima risposta data a ogni domanda è definitiva; a fine quiz lo studente mostra la schermata allo staff.

## Pubblicare con GitHub Pages

1. Accedi a GitHub e crea un nuovo repository **pubblico**, per esempio `erasmus-quiz`. Lascia vuote le opzioni per README e `.gitignore`: questi file sono già inclusi qui.
2. Estrai l'archivio ZIP. Nella pagina del repository scegli **Add file → Upload files**. Trascina **il contenuto** della cartella estratta, comprese le cartelle `docs`, `public` e `src` (non trascinare la cartella esterna). Conferma con **Commit changes**. Se l'interfaccia web non mantiene la struttura delle cartelle, usa Git sul computer con i comandi qui sotto.
3. Vai in **Settings → Pages**. In **Build and deployment**, scegli **Deploy from a branch**. Seleziona il branch `main` e la cartella `/docs`, quindi **Save**.
4. Attendi che GitHub Pages mostri il link. Sarà simile a `https://TUO-UTENTE.github.io/erasmus-quiz/`. Aprilo in una finestra anonima o su un altro computer per verificare che sia pubblico.

Il dominio personalizzato è facoltativo: l'indirizzo `github.io` non richiede l'acquisto di un dominio.

### Alternativa: caricamento con Git

Dentro la cartella estratta, dopo aver creato un repository vuoto su GitHub:

```bash
git init
git add .
git commit -m "Pubblica Erasmus Quiz"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/erasmus-quiz.git
git push -u origin main
```

Sostituisci `TUO-UTENTE` con il tuo username e completa l'accesso richiesto da GitHub. Poi esegui il passaggio 3 nelle impostazioni di Pages.

## Modificare i quiz

Le domande sono in `src/quiz-data.ts`; interfaccia in `src/quiz-app.tsx`; aspetto in `src/styles.css`. Serve Node.js 22.13 o successivo:

```bash
npm install
npm run dev
npm run build
```

`npm run build` aggiorna la cartella `docs`, che GitHub Pages pubblica. Carica anche i file aggiornati nel repository. Non caricare `node_modules`.

## Risultati e gadget

Il sito non richiede accesso, non invia risposte a un server e non salva le sessioni precedenti. Un aggiornamento della pagina azzera il quiz corrente. Le risposte corrette e il calcolo dei punti sono visibili nel codice scaricato dal browser: per assegnare i gadget, lo staff deve applicare le proprie regole e sapere che un punteggio mostrato su uno schermo non costituisce una prova sicura.
