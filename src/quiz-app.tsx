import { useEffect, useRef, useState } from 'react';
import { quizzes } from './quiz-data';
import type { QuizDefinition } from './quiz-data';
import { gradeQuiz } from './quiz-logic';
import type { Detail } from './quiz-logic';

type View = 'home' | 'quiz' | 'result';
type Draft = { id: string; quizId: string; nickname: string; answers: number[]; position: number };
type Result = { title: string; nickname: string; createdAt: string; score: number; total: number; details: Detail[] };

function TowerArt() {
  return <svg viewBox="0 0 360 220" fill="none" aria-hidden="true">
    <circle cx="272" cy="56" r="31" fill="currentColor" opacity=".13" />
    <g stroke="currentColor" strokeWidth="2">
      <path d="M30 192H335" />
      <g transform="translate(128 12) rotate(9 46 100)">
        <path d="M9 185V53Q9 42 46 42Q83 42 83 53V185Z" fill="var(--paper)" />
        <path d="M22 42V23Q46 8 70 23V42" fill="var(--paper)" />
        {[60, 84, 108, 132, 156, 180].map(y => <g key={y}>
          <path d={`M8 ${y} Q46 ${y + 9} 84 ${y}`} />
          {[17, 31, 46, 61, 75].map(x => <path key={x} d={`M${x} ${y - 2}v-10q5-9 9 0v12`} />)}
        </g>)}
        <path d="M39 185v-16q7-13 14 0v16M32 39V26M46 39V22M60 39V26" />
      </g>
      <path d="M45 190v-51h72v51M39 139h84L81 104Z" />
      <path d="M70 190v-28q12-15 23 0v28M51 148h60" />
    </g>
  </svg>;
}

function QuizCard({ quiz, index, onStart }: { quiz: QuizDefinition; index: number; onStart: () => void }) {
  return <article className={`card card-${index}`}>
    <div className={`card-art${index > 0 ? ' card-art-reference' : ''}`}>
      <span className="card-number">0{index + 1}</span>
      {index === 0 ? <TowerArt /> : <img
        className="quiz-reference"
        src={index === 1 ? './pisa-bandiera.jpeg' : './erasmus-citta-fine-line.jpeg'}
        alt={index === 1 ? 'Croce della Repubblica marinara di Pisa illustrata su fondo corallo' : 'Monumenti europei disegnati a linee sottili su fondo verde con la scritta Erasmus+'}
        width={index === 1 ? 1448 : 1376}
        height={index === 1 ? 720 : 768}
        loading="lazy"
      />}
    </div>
    <div className="card-body">
      <p className="eyebrow">{quiz.category}</p>
      <h3 className="card-title"><span>Quanto conosci</span>{' '}<span>{quiz.title.replace(/^Quanto conosci /, '')}</span></h3>
      <p>{quiz.description}</p>
      <div className="card-meta"><span>{quiz.questions.length} domande</span><span>≈ 3 minuti</span></div>
      <button className="start" onClick={onStart}>Inizia il quiz<span aria-hidden="true">↗</span></button>
    </div>
  </article>;
}

export default function QuizApp() {
  const [view, setView] = useState<View>('home');
  const [draft, setDraft] = useState<Draft | null>(null);
  const [nickname, setNickname] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const answerLock = useRef(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [view]);
  const quiz = quizzes.find(q => q.id === draft?.quizId);
  const question = quiz && draft ? quiz.questions[draft.position] : null;
  const selectedAnswer = draft ? draft.answers[draft.position] : -1;
  const answered = selectedAnswer >= 0;
  const correct = answered && question ? selectedAnswer === question.correct : false;

  function home() {
    answerLock.current = false;
    setDraft(null);
    setResult(null);
    setView('home');
  }
  function start(selectedQuiz: QuizDefinition) {
    answerLock.current = false;
    setResult(null);
    setDraft({
      id: crypto.randomUUID(), quizId: selectedQuiz.id,
      nickname: nickname.trim() || 'Partecipante',
      answers: selectedQuiz.questions.map(() => -1), position: 0,
    });
    setView('quiz');
  }
  function chooseAnswer(answer: number) {
    if (!draft || !question || answered || answerLock.current) return;
    answerLock.current = true;
    setDraft(current => current?.id === draft.id ? {
      ...current,
      answers: current.answers.map((value, index) => index === current.position ? answer : value),
    } : current);
  }
  function move(position: number) {
    answerLock.current = false;
    setDraft(current => current ? { ...current, position } : current);
  }
  function finish() {
    if (!draft || !quiz) return;
    try {
      const graded = gradeQuiz(quiz, draft.answers);
      setResult({ ...graded, title: quiz.title, nickname: draft.nickname, createdAt: new Date().toISOString() });
      setDraft(null);
      answerLock.current = false;
      setView('result');
    } catch { /* The submit button stays disabled until every answer is present. */ }
  }

  return <>
    <div className="institution"><img src="./unipi-logo.png" alt="Università di Pisa" width="1237" height="420"/><span>Scopri l’Europa. Inizia da qui.</span></div>
    <header className="top"><button className="brand" onClick={home} aria-label="Erasmus Quiz, pagina iniziale"><span className="brandmark">E<span>+</span></span><span>Erasmus <i>Quiz</i></span></button><nav><button className="nav active" onClick={home}>I quiz</button></nav></header>
    <main>
      {view === 'home' && <>
        <section className="hero"><div>
          <p className="eyebrow"><span/> LA SFIDA ERASMUS+</p>
          <h1>Metti in gioco<br/><em>quello che sai.</em></h1>
          <p className="intro">Pisa o Erasmus+? Scegli la tua sfida, rispondi alle domande e mostra il punteggio allo staff per il gadget dell’evento.</p>
          <div className="hero-meta"><span><b>3</b> quiz</span><span><b>10</b> domande ciascuno</span><span>1 risposta corretta = 1 punto</span></div>
        </div><div className="hero-art hero-art-image">
          <span className="stamp">Pronto a metterti in gioco?</span>
          <img className="hero-reference" src="./erasmus-globo-fine-line.png" alt="Globo e aeroplanino di carta disegnati con sottili linee blu" width="1536" height="1024"/>
          <span className="handnote">La curiosità ti premia.</span>
        </div></section>
        <section className="selection">
          <div className="section-heading"><div><p className="eyebrow">SCEGLI LA TUA SFIDA</p><h2>Tre quiz. Un’occasione per vincere.</h2></div>
            <label className="nickname">Il tuo nome o la tua squadra <span>(facoltativo)</span><input maxLength={50} value={nickname} onChange={event => setNickname(event.target.value)} placeholder="Come ti chiami?"/></label>
          </div>
          <div className="cards">{quizzes.map((item, index) => <QuizCard quiz={item} index={index} key={item.id} onStart={() => start(item)}/>)}</div>
        </section>
        <section className="how"><span className="small-star" aria-hidden="true">✳</span><div><h3>Rispondi. Fai punti. Passa dallo staff.</h3><p>Scegli il quiz indicato durante l’evento. Ogni risposta corretta vale un punto, fino a 10. Alla fine mostra il risultato allo staff: l’assegnazione del gadget segue le regole comunicate all’evento.</p></div><span className="pill">Punteggio massimo: 10</span></section>
      </>}
      {view === 'quiz' && draft && quiz && question && <section className="quiz-wrap">
        <button className="back" onClick={home}>← Torna ai quiz</button>
        <div className="quiz-heading"><p className="eyebrow">{quiz.category}</p><h1>{quiz.title}</h1><p>Stai giocando come <b>{draft.nickname}</b></p></div>
        <div className="progress-label"><span>Domanda {draft.position + 1} di {quiz.questions.length}</span><span>{draft.answers.filter(value => value >= 0).length} risposte date</span></div>
        <progress value={draft.answers.filter(value => value >= 0).length} max={quiz.questions.length}/>
        <div className="question-card"><fieldset><legend><span className="question-no">{String(draft.position + 1).padStart(2, '0')}</span>{question.text}</legend>
          <div className="options">{question.options.map((option, index) => {
            const selected = selectedAnswer === index;
            return <label className={['option', selected ? 'selected' : '', selected ? (correct ? 'answer-correct' : 'answer-wrong') : '', answered ? 'locked' : ''].filter(Boolean).join(' ')} key={index}>
              <input type="radio" name={`question-${question.id}`} checked={selected} disabled={answered} onChange={() => chooseAnswer(index)}/>
              <span className="letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>
              <span className="option-status" aria-hidden="true">{selected ? (correct ? '✓' : '×') : <span className="radio-dot"/>}</span>
            </label>;
          })}</div>
        </fieldset>
          <div className="answer-feedback-area" aria-live="polite" aria-atomic="true">{answered ? <div className={`answer-feedback ${correct ? 'is-correct' : 'is-wrong'}`}>
            <strong>{correct ? '✓ Risposta corretta! +1 punto' : '× Risposta errata.'}</strong>
            {!correct && <p>La risposta corretta è: <b>{question.options[question.correct]}</b>.</p>}
            {question.explanation && <p>{question.explanation}</p>}
          </div> : <p className="answer-hint">Scegli una risposta: scoprirai subito se è quella giusta.</p>}</div>
          <div className="quiz-buttons"><button className="secondary" disabled={draft.position === 0} onClick={() => move(draft.position - 1)}>← Indietro</button>
            {draft.position < quiz.questions.length - 1 ? <button className="primary" disabled={!answered} onClick={() => move(draft.position + 1)}>Prossima domanda →</button> :
              <button className="primary" disabled={draft.answers.some(value => value < 0)} onClick={finish}>Concludi e mostra →</button>}
          </div>
        </div>
        <p className="save-note">Conta la prima risposta: dopo la correzione non puoi modificarla. Il risultato resta visibile finché lasci aperta questa pagina.</p>
      </section>}
      {view === 'result' && result && <section className="result-wrap">
        <button className="back" onClick={home}>← Torna ai quiz</button>
        <div className="result-hero"><p className="eyebrow">QUIZ COMPLETATO · {result.nickname}</p><h1>Il tuo punteggio per l’evento.</h1>
          <div className="score">{result.score}<span> / {result.total}</span></div><p>{result.title}</p>
          <div className="event-receipt"><p className="receipt-instruction">Mostra questa schermata allo staff.</p>
            <p>Il gadget viene assegnato secondo il punteggio e le regole dell’evento. Il risultato non viene salvato: tieni aperta questa pagina finché lo staff non l’ha visto.</p>
            <div className="receipt-meta"><span>{new Date(result.createdAt).toLocaleString('it-IT', {dateStyle: 'short', timeStyle: 'short'})}</span></div>
          </div><div className="result-actions"><button className="primary" onClick={home}>Torna ai quiz →</button></div>
        </div>
        <div className="erasmus-invite"><span aria-hidden="true">✦</span><div><h2>Ti aspettiamo in Erasmus!</h2><p>Il quiz finisce qui, la tua avventura può cominciare adesso. Passa dal nostro stand e scopri dove ti porterà Erasmus+.</p></div></div>
        <h2>Le tue risposte</h2><div className="review">{result.details.map((detail, index) => <article key={index} className={detail.correct ? 'correct' : 'incorrect'}>
          <span className="review-marker">{detail.correct ? '✓' : '×'}</span><div><p className="eyebrow">DOMANDA {index + 1} · {detail.correct ? 'CORRETTA' : 'DA SCOPRIRE'}</p><h3>{detail.question}</h3>
          <p>La tua risposta: <b>{detail.answer}</b></p>{!detail.correct && <p className="solution">Risposta corretta: <b>{detail.correctAnswer}</b></p>}
          {detail.explanation && <p className="explanation">{detail.explanation}</p>}{detail.sourceUrl && <a className="source-link" href={detail.sourceUrl} target="_blank" rel="noopener noreferrer">Approfondisci la risposta ↗</a>}</div>
        </article>)}</div>
      </section>}
    </main>
    <footer><span className="footer-brand">Erasmus <i>Quiz</i></span><span>La sfida Erasmus+ · Università di Pisa</span><span>3 quiz · 10 domande ciascuno</span></footer>
  </>;
}
