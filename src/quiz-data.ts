export type QuizQuestion = { id: number; text: string; options: string[]; correct: number; explanation?: string; sourceUrl?: string };
export type QuizDefinition = { id: string; title: string; category: string; description: string; questions: QuizQuestion[] };
export const quizzes: QuizDefinition[] = [
  {
    "id": "pisa-1",
    "title": "Quanto conosci Pisa? · 1",
    "category": "Quiz 1 · Pisa",
    "description": "Dalla Torre alle rive dell’Arno: scopri quanto conosci Pisa e trasforma la tua curiosità in punti!",
    "questions": [
      {
        "id": 1,
        "text": "Quale fiume attraversa Pisa?",
        "options": [
          "Tevere",
          "Arno",
          "Serchio",
          "Ombrone"
        ],
        "correct": 1
      },
      {
        "id": 3,
        "text": "Perché la Torre di Pisa è inclinata?",
        "options": [
          "Per il cedimento del terreno",
          "Per un terremoto",
          "Per una scelta degli architetti",
          "Per un bombardamento"
        ],
        "correct": 0
      },
      {
        "id": 4,
        "text": "In quale secolo iniziò la costruzione della Torre?",
        "options": [
          "X secolo",
          "XI secolo",
          "XII secolo (1173)",
          "XIV secolo"
        ],
        "correct": 2
      },
      {
        "id": 5,
        "text": "Quante sono le principali repubbliche marinare tradizionalmente ricordate insieme?",
        "options": [
          "Tre",
          "Quattro",
          "Cinque",
          "Sette"
        ],
        "correct": 1
      },
      {
        "id": 6,
        "text": "Quale scienziato nato a Pisa è considerato uno dei padri della scienza moderna?",
        "options": [
          "Isaac Newton",
          "Leonardo da Vinci",
          "Niccolò Copernico",
          "Galileo Galilei"
        ],
        "correct": 3
      },
      {
        "id": 7,
        "text": "A quale santo è dedicato il Battistero di Piazza dei Miracoli?",
        "options": [
          "San Giovanni Battista",
          "San Ranieri",
          "San Francesco",
          "San Pietro"
        ],
        "correct": 0
      },
      {
        "id": 9,
        "text": "Quale evento illumina i Lungarni con migliaia di lumini a giugno?",
        "options": [
          "Notte di San Lorenzo",
          "Luminara di San Ranieri",
          "Festa delle Lanterne",
          "Notte dei Cavalieri"
        ],
        "correct": 1
      },
      {
        "id": 12,
        "text": "Quali quartieri storici partecipano al Palio di San Ranieri?",
        "options": [
          "San Marco, San Polo, Santa Croce e Dorsoduro",
          "Santo Spirito, Santa Croce, Santa Maria Novella e San Giovanni",
          "San Martino, Santa Maria, San Francesco e Sant’Antonio",
          "San Giusto, San Marco, San Michele e San Piero"
        ],
        "correct": 2
      },
      {
        "id": 13,
        "text": "Quanto è alta circa la Torre, considerando anche il piano di fondazione?",
        "options": [
          "38 metri",
          "58 metri",
          "78 metri",
          "98 metri"
        ],
        "correct": 1
      },
      {
        "id": 18,
        "text": "Quale palazzo ospita la sede principale della Scuola Normale Superiore?",
        "options": [
          "Palazzo Blu",
          "Palazzo Gambacorti",
          "Palazzo della Carovana",
          "Palazzo della Sapienza"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "pisa-2",
    "title": "Quanto conosci Pisa? · 2",
    "category": "Quiz 2 · Pisa",
    "description": "Leggende, grandi nomi e tradizioni sorprendenti: lasciati sfidare dalla Pisa che non ti aspetti!",
    "questions": [
      {
        "id": 20,
        "text": "Quale battaglia navale del 1284 segnò l’inizio del declino della potenza pisana?",
        "options": [
          "Lepanto",
          "Salamina",
          "Trafalgar",
          "Meloria"
        ],
        "correct": 3
      },
      {
        "id": 21,
        "text": "In quale anno fu fondata ufficialmente l’Università di Pisa?",
        "options": [
          "1243",
          "1343",
          "1543",
          "1943"
        ],
        "correct": 1
      },
      {
        "id": 24,
        "text": "Quando si celebra il Capodanno Pisano?",
        "options": [
          "1° gennaio",
          "17 giugno",
          "25 dicembre",
          "25 marzo"
        ],
        "correct": 3
      },
      {
        "id": 25,
        "text": "Quali sono i colori della bandiera pisana?",
        "options": [
          "Bianco e blu",
          "Bianco e rosso",
          "Rosso e giallo",
          "Verde e bianco"
        ],
        "correct": 1
      },
      {
        "id": 28,
        "text": "Chi ha realizzato il murale “Tuttomondo”?",
        "options": [
          "Banksy",
          "Andy Warhol",
          "Jean-Michel Basquiat",
          "Keith Haring"
        ],
        "correct": 3
      },
      {
        "id": 29,
        "text": "Quale matematico pisano ha dato il nome a una celebre successione numerica?",
        "options": [
          "Luca Pacioli",
          "Leonardo Fibonacci",
          "Girolamo Cardano",
          "Niccolò Tartaglia"
        ],
        "correct": 1
      },
      {
        "id": 30,
        "text": "Secondo la leggenda, chi salvò Pisa da un attacco saraceno?",
        "options": [
          "Matilde di Canossa",
          "Caterina Sforza",
          "Kinzica de’ Sismondi",
          "Ginevra degli Ammannati"
        ],
        "correct": 2
      },
      {
        "id": 31,
        "text": "Quale tenore è nato in provincia di Pisa?",
        "options": [
          "Andrea Bocelli",
          "Luciano Pavarotti",
          "Enrico Caruso",
          "Beniamino Gigli"
        ],
        "correct": 0
      },
      {
        "id": 35,
        "text": "In quale piazza si trova la Torre?",
        "options": [
          "Piazza del Duomo, detta dei Miracoli",
          "Piazza dei Cavalieri",
          "Piazza Vittorio Emanuele II",
          "Piazza Santa Caterina"
        ],
        "correct": 0
      },
      {
        "id": 38,
        "text": "Come si chiama la sfida tra Mezzogiorno e Tramontana?",
        "options": [
          "Giostra del Saracino",
          "Calcio Storico",
          "Gioco del Ponte",
          "Bravìo delle Botti"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "erasmus",
    "title": "Quanto conosci Erasmus+? · 3",
    "category": "Quiz 3 · Erasmus+",
    "description": "La tua prossima avventura comincia qui: metti alla prova ciò che sai su Erasmus+ e preparati a partire!",
    "questions": [
      {
        "id": 39,
        "text": "Chi era Erasmo da Rotterdam, a cui il programma rende omaggio?",
        "options": [
          "Un esploratore portoghese",
          "Un umanista e filosofo olandese",
          "Un compositore austriaco",
          "Un astronomo italiano"
        ],
        "correct": 1,
        "explanation": "Erasmo fu un umanista olandese che viaggiò in Europa per studiare e conoscere culture diverse.",
        "sourceUrl": "https://www.erasmusplus.it/programma/cose-erasmus/"
      },
      {
        "id": 40,
        "text": "Quanto può durare al massimo un singolo periodo di mobilità Erasmus+ di lunga durata per studio?",
        "options": [
          "3 mesi",
          "6 mesi",
          "12 mesi",
          "24 mesi"
        ],
        "correct": 2,
        "explanation": "Un singolo periodo lungo per studio dura da 2 a 12 mesi. Il limite cumulativo per i corsi a ciclo unico può arrivare a 24 mesi.",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad"
      },
      {
        "id": 41,
        "text": "Quale Paese NON è uno Stato UE né un Paese associato al programma Erasmus+ nella Guida 2026?",
        "options": [
          "Norvegia",
          "Spagna",
          "Francia",
          "Canada"
        ],
        "correct": 3,
        "explanation": "Il Canada è un Paese terzo non associato: può comunque partecipare ad alcune azioni, a condizioni specifiche.",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries"
      },
      {
        "id": 42,
        "text": "Secondo il rapporto Erasmus+ 2024, qual è la destinazione più scelta dagli studenti italiani in mobilità?",
        "options": [
          "Spagna",
          "Germania",
          "Francia",
          "Portogallo"
        ],
        "correct": 0,
        "explanation": "La Spagna ha accolto il 31% degli studenti italiani in mobilità riportati nel rapporto 2024.",
        "sourceUrl": "https://www.erasmusplus.it/news/istruzione-superiore/rapporto-annuale-erasmus-2024-della-commissione-europea/"
      },
      {
        "id": 43,
        "text": "Come si chiama la pedagogista italiana conosciuta come “Mamma Erasmus”?",
        "options": [
          "Maria Montessori",
          "Giovanna Angiolini",
          "Sofia Corradi",
          "Rita Levi-Montalcini"
        ],
        "correct": 2,
        "explanation": "Sofia Corradi è conosciuta come “Mamma Erasmus” per il suo contributo alla nascita del programma.",
        "sourceUrl": "https://www.sofiacorradi.eu/Biography.html"
      },
      {
        "id": 44,
        "text": "In quale anno è nato il programma Erasmus?",
        "options": [
          "1977",
          "1987",
          "1997",
          "2007"
        ],
        "correct": 1,
        "explanation": "Il programma Erasmus è iniziato nel 1987.",
        "sourceUrl": "https://speech-repository.webcloud.ec.europa.eu/news/33rd-anniversary-erasmus-programme"
      },
      {
        "id": 46,
        "text": "Che cosa permette di svolgere Erasmus+ Traineeship?",
        "options": [
          "Un tirocinio formativo all’estero",
          "Una vacanza organizzata all’estero",
          "Un servizio militare all’estero",
          "Una tournée artistica obbligatoria"
        ],
        "correct": 0,
        "explanation": "Erasmus+ sostiene tirocini all’estero per studenti e, a determinate condizioni, neolaureati.",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/traineeships-abroad-for-students"
      },
      {
        "id": 47,
        "text": "Quale documento concorda le attività di studio all’estero e il loro riconoscimento?",
        "options": [
          "Il contratto di affitto",
          "La carta d’imbarco",
          "Il Learning Agreement",
          "Il certificato di residenza"
        ],
        "correct": 2,
        "explanation": "Il Learning Agreement viene concordato con gli atenei di partenza e di destinazione prima della mobilità.",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad"
      },
      {
        "id": 51,
        "text": "La borsa Erasmus+ è pensata per…",
        "options": [
          "Garantire il rimborso di ogni spesa",
          "Sostituire uno stipendio a tempo pieno",
          "Contribuire ai costi di viaggio e soggiorno",
          "Pagare soltanto i libri universitari"
        ],
        "correct": 2,
        "explanation": "La borsa è un contributo: non garantisce la copertura completa delle spese.",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad"
      },
      {
        "id": 53,
        "text": "Quale viaggio è un esempio di “green travel” Erasmus+?",
        "options": [
          "Andata e ritorno in aereo",
          "Andata e ritorno in auto da soli",
          "Andata e ritorno in jet privato",
          "Andata e ritorno in treno"
        ],
        "correct": 3,
        "explanation": "Il treno rientra nei mezzi a basse emissioni previsti per il green travel.",
        "sourceUrl": "https://erasmus-plus.ec.europa.eu/programme-guide/part-d/common-terms"
      }
    ]
  }
];
