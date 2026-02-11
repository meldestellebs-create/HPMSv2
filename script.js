
// ==========================================
// 1. DATENBANK: BILDUNGSWEGE (WIZARD)
// ==========================================
const bildungswegeData = {
    kein: {
        deutsch: [
            { name: "VABO", full: "Vorqualifizierungsjahr Arbeit/Beruf mit Schwerpunkt Erwerb von Deutschkenntnissen", description: "Das VABO richtet sich an Jugendliche ohne ausreichende Deutschkenntnisse. Es vermittelt Sprachkenntnisse und berufliche Orientierung, um den Zugang zum deutschen Bildungssystem und Arbeitsmarkt zu erleichtern.", dauer: "1 Jahr" },
            { name: "Integrationskurs", full: "Integrationskurs", description: "Sprach- und Orientierungskurs für Neuzugewanderte.", dauer: "6-9 Monate" }
        ],
        hauptschul: [
            { name: "AVdual", full: "Ausbildungsvorbereitung dual", description: "AVdual ist ein Bildungsgang für Jugendliche ohne Ausbildungsplatz. Er kombiniert schulisches Lernen mit praktischen Erfahrungen in Betrieben und bereitet gezielt auf eine Berufsausbildung vor. Gleichzeitig kann der Hauptschulabschluss erworben oder verbessert werden.", dauer: "1 Jahr" },
            { name: "VAB", full: "Vorqualifizierungsjahr Arbeit/Beruf", description: "Allgemeine Berufsvorbereitung für Jugendliche ohne Hauptschulabschluss.", dauer: "1 Jahr" }
        ]
    },
    hauptschul: {
        mittlerer: [
            { name: "2BFS", full: "2-jährige Berufsfachschule (2BFS)", description: "Die 2BFS baut auf dem Hauptschulabschluss auf und führt zur Fachschulreife (mittlerer Bildungsabschluss). Sie vermittelt berufliche Grundbildung in drei Bereichen: kaufmännisch, gewerblich-technisch oder Ernährung und Gesundheit.", dauer: "2 Jahre" },
            { name: "BAS", full: "Berufsaufbauschule (BAS)", description: "Die Berufsaufbauschule ist die Mittelstufe der Berufsoberschule. Mit Hauptschulabschluss und abgeschlossener Berufsausbildung kann hier in einem Jahr der mittlere Bildungsabschluss (Fachschulreife) erworben werden.", dauer: "1 Jahr" },
            { name: "Modell 9+3", full: "Modell 9+3", description: "Ein besonderer Weg zum mittleren Bildungsabschluss: 9 Jahre Haupt-/Werkrealschule + 3 Jahre Berufsausbildung. Bei einem Notendurchschnitt von mindestens 2,5 wird ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt.", dauer: "3 Jahre" }
        ],
        ausbildung: [
            { name: "Duale Ausbildung", full: "Duale Ausbildung", description: "Die duale Ausbildung kombiniert praktische Arbeit im Betrieb mit theoretischem Unterricht in der Berufsschule. Sie dauert in der Regel 2-3,5 Jahre und führt zu einem anerkannten Berufsabschluss.", dauer: "2-3,5 Jahre" },
            { name: "1BFS", full: "1-jährige Berufsfachschule (1BFS)", description: "Die einjährige Berufsfachschule vermittelt berufliche Grundbildung in bestimmten Berufsfeldern wie Metalltechnik, Bautechnik oder Hauswirtschaft. Sie kann bei einer Ausbildungsplatzzusage als erstes Ausbildungsjahr angerechnet werden.", dauer: "1 Jahr" }
        ]
    },
    mittlerer: {
        fhr: [
            { name: "BK", full: "Berufskolleg", description: "Das Berufskolleg ist eine berufliche Vollzeitschule, die zur Fachhochschulreife führt und gleichzeitig berufliche Kenntnisse vermittelt. Es gibt verschiedene Fachrichtungen wie Wirtschaft, Technik oder Gesundheit.", dauer: "1-2 Jahre" },
            { name: "BOS", full: "Berufsoberschule (BOS)", description: "Die Berufsoberschule richtet sich an Personen mit abgeschlossener Berufsausbildung. Die zweijährige Oberstufe führt zur fachgebundenen Hochschulreife.", dauer: "2 Jahre" },
            { name: "Fachschule", full: "Fachschule", description: "Fachschulen sind Weiterbildungseinrichtungen für Personen mit abgeschlossener Berufsausbildung. An zweijährigen Fachschulen kann auch die Fachhochschulreife erworben werden.", dauer: "2 Jahre" }
        ],
        abitur: [
            { name: "BG", full: "Berufliches Gymnasium", description: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife (Abitur) und verbindet allgemeinbildende Fächer mit berufsbezogenen Schwerpunkten wie Wirtschaft, Technik oder Gesundheit.", dauer: "3 Jahre" },
            { name: "BOS (Allg. HS)", full: "Berufsoberschule (BOS)", description: "Bei Erwerb einer zweiten Fremdsprache führt die BOS zur allgemeinen Hochschulreife.", dauer: "2 Jahre" }
        ],
        ausbildung: [
             { name: "Duale Ausbildung", full: "Duale Ausbildung", description: "Verkürzung bei Mittlerer Reife oft möglich.", dauer: "2-3 Jahre" }
        ]
    }
};

// ==========================================
// 2. GLOSSAR DATEN (VOLLSTÄNDIG AUS DOCX)
// ==========================================
const glossarDaten = [
    { name: "Hauptschulabschluss", full: "Erster allgemeinbildender Schulabschluss", description: "Der Hauptschulabschluss ist der erste allgemeinbildende Schulabschluss in Deutschland. Er wird nach erfolgreichem Abschluss der 9. Klasse erworben und ermöglicht den Zugang zu einer Berufsausbildung oder weiteren schulischen Bildungswegen." },
    { name: "Mittlere Reife", full: "Mittlerer Bildungsabschluss", description: "Die Mittlere Reife (auch Realschulabschluss genannt) wird nach der 10. Klasse erworben. Dieser Abschluss qualifiziert für anspruchsvollere Berufsausbildungen und ermöglicht den Zugang zu weiterführenden Schulen wie Berufskolleg oder beruflichem Gymnasium." },
    { name: "Fachhochschulreife", full: "Fachabitur", description: "Die Fachhochschulreife berechtigt zum Studium an Fachhochschulen und manchen Universitäten. Sie kann an Berufskollegs, Fachoberschulen oder beruflichen Gymnasien erworben werden und kombiniert oft theoretisches Wissen mit praktischen Erfahrungen." },
    { name: "Abitur", full: "Allgemeine Hochschulreife", description: "Das Abitur ist der höchste Schulabschluss in Deutschland und berechtigt zum Studium an allen Universitäten und Hochschulen. Es kann an allgemeinbildenden oder beruflichen Gymnasien erworben werden." },
    { name: "AVdual", full: "Ausbildungsvorbereitung dual", description: "AVdual ist ein Bildungsgang für Jugendliche ohne Ausbildungsplatz. Er kombiniert schulisches Lernen mit praktischen Erfahrungen in Betrieben und bereitet gezielt auf eine Berufsausbildung vor. Gleichzeitig kann der Hauptschulabschluss erworben oder verbessert werden." },
    { name: "VABO", full: "Vorqualifizierungsjahr Arbeit/Beruf mit Schwerpunkt Erwerb von Deutschkenntnissen", description: "Das VABO richtet sich an Jugendliche ohne ausreichende Deutschkenntnisse. Es vermittelt Sprachkenntnisse und berufliche Orientierung, um den Zugang zum deutschen Bildungssystem und Arbeitsmarkt zu erleichtern." },
    { name: "Berufskolleg", full: "Berufliche Vollzeitschule", description: "Das Berufskolleg ist eine berufliche Vollzeitschule, die zur Fachhochschulreife führt und gleichzeitig berufliche Kenntnisse vermittelt. Es gibt verschiedene Fachrichtungen wie Wirtschaft, Technik oder Gesundheit." },
    { name: "Berufliches Gymnasium", full: "Weg zum Abitur mit Profil", description: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife (Abitur) und verbindet allgemeinbildende Fächer mit berufsbezogenen Schwerpunkten wie Wirtschaft, Technik oder Gesundheit." },
    { name: "Duale Ausbildung", full: "Betriebliche Ausbildung", description: "Die duale Ausbildung kombiniert praktische Arbeit im Betrieb mit theoretischem Unterricht in der Berufsschule. Sie dauert in der Regel 2-3,5 Jahre und führt zu einem anerkannten Berufsabschluss." },
    { name: "Meister/Techniker/Fachwirt", full: "Fortbildungsabschlüsse", description: "Diese Fortbildungsabschlüsse bauen auf einer abgeschlossenen Berufsausbildung auf und qualifizieren für Führungspositionen oder Selbstständigkeit. Sie sind dem Bachelor-Niveau gleichgestellt und ermöglichen auch ein Hochschulstudium." },
    { name: "1BFS", full: "1-jährige Berufsfachschule", description: "Die einjährige Berufsfachschule vermittelt berufliche Grundbildung in bestimmten Berufsfeldern wie Metalltechnik, Bautechnik oder Hauswirtschaft. Sie kann bei einer Ausbildungsplatzzusage als erstes Ausbildungsjahr angerechnet werden. Ohne Hauptschulabschluss wird mit erfolgreichem Abschluss ein gleichwertiger Bildungsstand erworben." },
    { name: "2BFS", full: "2-jährige Berufsfachschule", description: "Die 2BFS baut auf dem Hauptschulabschluss auf und führt zur Fachschulreife (mittlerer Bildungsabschluss). Sie vermittelt berufliche Grundbildung in drei Bereichen: kaufmännisch, gewerblich-technisch oder Ernährung und Gesundheit." },
    { name: "BAS", full: "Berufsaufbauschule", description: "Die Berufsaufbauschule ist die Mittelstufe der Berufsoberschule. Mit Hauptschulabschluss und abgeschlossener Berufsausbildung kann hier in einem Jahr der mittlere Bildungsabschluss (Fachschulreife) erworben werden." },
    { name: "BOS", full: "Berufsoberschule", description: "Die Berufsoberschule richtet sich an Personen mit abgeschlossener Berufsausbildung. Die zweijährige Oberstufe führt zur fachgebundenen Hochschulreife oder -- bei Erwerb einer zweiten Fremdsprache -- zur allgemeinen Hochschulreife." },
    { name: "Modell 9+3", full: "Mittlere Reife durch Ausbildung", description: "Ein besonderer Weg zum mittleren Bildungsabschluss: 9 Jahre Haupt-/Werkrealschule + 3 Jahre Berufsausbildung. Bei einem Notendurchschnitt von mindestens 2,5 (aus Hauptschulabschlussprüfung, Berufsschulabschluss und Prüfung im Ausbildungsberuf) wird ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt." },
    { name: "Fachschule", full: "Weiterbildung nach Ausbildung", description: "Fachschulen sind Weiterbildungseinrichtungen für Personen mit abgeschlossener Berufsausbildung. In ein- oder zweijährigen Bildungsgängen qualifizieren sie für Tätigkeiten im mittleren Management oder für die berufliche Selbstständigkeit. An zweijährigen Fachschulen kann auch die Fachhochschulreife erworben werden." }
];

// ==========================================
// 3. LOGIK: GLOSSAR (Begriffe)
// ==========================================
function initGlossary() {
    const container = document.getElementById('glossar-container');

    // Sortieren
    glossarDaten.sort((a, b) => a.name.localeCompare(b.name));

    glossarDaten.forEach((term) => {
        const item = document.createElement('div');
        item.className = 'accordion-item glossary-term'; 
        item.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(this)">
                ${term.name} <span style="font-size:0.8rem">▼</span>
            </div>
            <div class="accordion-content">
                <p><strong>${term.full}</strong></p>
                <p>${term.description}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function toggleAccordion(header) {
    const item = header.parentElement;
    item.classList.toggle('active');
    const arrow = header.querySelector('span');
    arrow.innerText = item.classList.contains('active') ? '▲' : '▼';
}

function filterGlossar() {
    const search = document.getElementById('glossar-search').value.toLowerCase();
    const items = document.querySelectorAll('.glossary-term');
    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(search) ? 'block' : 'none';
    });
}

// ==========================================
// 4. LOGIK: BILDUNGSWEGETOOL (WIZARD)
// ==========================================
let selectedBildungsstand = '';

function selectBildungsstand(stand) {
    selectedBildungsstand = stand;
    document.getElementById('wizard-step-1').style.display = 'none';
    document.getElementById('wizard-step-2').style.display = 'block';

    const zielContainer = document.getElementById('ziel-options');
    zielContainer.innerHTML = ''; 

    let options = [];
    if (stand === 'kein') {
        options = [{id:'deutsch', text:'Deutsch lernen'}, {id:'hauptschul', text:'Hauptschulabschluss nachholen'}];
    } else if (stand === 'hauptschul') {
        options = [{id:'mittlerer', text:'Mittleren Abschluss machen'}, {id:'ausbildung', text:'Ausbildung beginnen'}];
    } else {
        options = [{id:'fhr', text:'Fachhochschulreife (BK)'}, {id:'abitur', text:'Abitur (Gymnasium)'}, {id:'ausbildung', text:'Ausbildung beginnen'}];
    }

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerText = opt.text;
        btn.onclick = () => showWizardResults(opt.id);
        zielContainer.appendChild(btn);
    });
}

function showWizardResults(ziel) {
    document.getElementById('wizard-step-2').style.display = 'none';
    document.getElementById('wizard-results').style.display = 'block';
    const container = document.getElementById('results-container');
    container.innerHTML = '';

    const data = bildungswegeData[selectedBildungsstand][ziel];
    if (data && data.length > 0) {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'beruf-card';
            div.innerHTML = `<h4>${item.name}</h4><p><em>${item.full}</em></p><p>${item.description}</p><div class="beruf-tags"><span class="beruf-tag">⏱️ ${item.dauer}</span></div>`;
            container.appendChild(div);
        });
    } else {
        container.innerHTML = '<p>Für diese Kombination haben wir aktuell keine Standard-Empfehlung. Bitte melde dich direkt bei uns!</p>';
    }
}

function resetWizard() {
    selectedBildungsstand = '';
    document.getElementById('wizard-results').style.display = 'none';
    document.getElementById('wizard-step-2').style.display = 'none';
    document.getElementById('wizard-step-1').style.display = 'block';
}

// ==========================================
// 5. LOGIK: BERUFSWAHL-QUIZ (ERWEITERT AUS ORIGINAL)
// ==========================================
const quizQuestions = [
    {
        question: "Was machst du gerne in deiner Freizeit?",
        type: "multiple",
        options: [
            { text: "Mit dem Computer arbeiten", value: "it" },
            { text: "Sport treiben oder draußen sein", value: "outdoor" },
            { text: "Basteln oder etwas bauen", value: "handwerk" },
            { text: "Lesen oder schreiben", value: "kommunikation" },
            { text: "Anderen helfen", value: "sozial" },
            { text: "Kochen oder backen", value: "gastronomie" }
        ],
        key: "interests"
    },
    {
        question: "Wie arbeitest du am liebsten?",
        type: "single",
        options: [
            { text: "Mit meinen Händen / praktisch", value: "handwerk" },
            { text: "Mit Menschen zusammen", value: "sozial" },
            { text: "Am Computer", value: "it" },
            { text: "Im Büro / am Schreibtisch", value: "buero" },
            { text: "Draußen / in Bewegung", value: "outdoor" }
        ],
        key: "workType"
    },
    {
        question: "Welcher Bereich interessiert dich am meisten?",
        type: "single",
        options: [
            { text: "Technik & Maschinen", value: "technik" },
            { text: "Gesundheit & Pflege", value: "gesundheit" },
            { text: "Wirtschaft & Handel", value: "wirtschaft" },
            { text: "Kreatives & Gestaltung", value: "kreativ" },
            { text: "Natur & Umwelt", value: "natur" },
            { text: "IT & Digitales", value: "it" }
        ],
        key: "field"
    }
];

// Mapping der Antworten zu Berufsfeldern
const berufeDB = {
    technik: [
        { name: "Elektroniker/in", beschreibung: "Installiere elektrische Anlagen und halte sie instand.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre" },
        { name: "Industriemechaniker/in", beschreibung: "Stelle Maschinen und Anlagen her und warte sie.", abschluss: "Hauptschulabschluss", dauer: "3,5 Jahre" }
    ],
    gesundheit: [
        { name: "Medizinische/r Fachangestellte/r", beschreibung: "Unterstütze Ärzte bei der Behandlung.", abschluss: "Mittlere Reife", dauer: "3 Jahre" },
        { name: "Pflegefachmann/frau", beschreibung: "Pflege und betreue Menschen.", abschluss: "Mittlere Reife", dauer: "3 Jahre" }
    ],
    wirtschaft: [
        { name: "Kaufmann/frau für Büromanagement", beschreibung: "Organisiere bürowirtschaftliche Aufgaben.", abschluss: "Mittlere Reife", dauer: "3 Jahre" },
        { name: "Einzelhandelskaufmann/frau", beschreibung: "Verkaufe Waren und berate Kunden.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre" }
    ],
    kreativ: [
        { name: "Mediengestalter/in", beschreibung: "Gestalte digitale und Print-Medien.", abschluss: "Mittlere Reife", dauer: "3 Jahre" },
        { name: "Friseur/in", beschreibung: "Schneide, färbe und style Haare.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre" }
    ],
    it: [
        { name: "Fachinformatiker/in", beschreibung: "Entwickle Software oder betreue IT-Systeme.", abschluss: "Mittlere Reife", dauer: "3 Jahre" },
        { name: "IT-System-Elektroniker/in", beschreibung: "Plane und installiere IT-Systeme.", abschluss: "Mittlere Reife", dauer: "3 Jahre" }
    ],
    natur: [
        { name: "Gärtner/in", beschreibung: "Gestalte Gärten und Parkanlagen.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre" },
        { name: "Landwirt/in", beschreibung: "Erzeuge pflanzliche und tierische Produkte.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre" }
    ]
};

const QuizApp = {
    currentQ: 0,
    answers: [],

    start: function() {
        this.currentQ = 0;
        this.answers = [];
        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-question-container').style.display = 'block';
        this.showQuestion();
    },

    showQuestion: function() {
        const q = quizQuestions[this.currentQ];
        document.getElementById('quiz-question-text').innerText = q.question;
        const container = document.getElementById('quiz-options-container');
        container.innerHTML = '';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = opt.text;
            btn.onclick = () => this.handleAnswer(opt.value);
            container.appendChild(btn);
        });

        // Progress Bar
        const progress = ((this.currentQ) / quizQuestions.length) * 100;
        document.getElementById('quiz-progress-fill').style.width = progress + '%';
    },

    handleAnswer: function(val) {
        this.answers.push(val);
        this.currentQ++;
        if (this.currentQ < quizQuestions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    },

    showResults: function() {
        document.getElementById('quiz-question-container').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';
        document.getElementById('quiz-progress-fill').style.width = '100%';

        // Einfache Logik: Wir nehmen das "Interesse" (Frage 3, Index 2 im Array) als Hauptkategorie
        // Falls die Frage-Reihenfolge geändert wird, müsste man das anpassen (z.B. nach key suchen).
        // Hier: Antwort 3 ist das "Feld"
        const fieldAnswer = this.answers[2]; 
        const categoryKey = berufeDB[fieldAnswer] ? fieldAnswer : 'wirtschaft'; // Fallback

        const results = berufeDB[categoryKey];
        const container = document.getElementById('quiz-result-list');
        container.innerHTML = '';

        if (results) {
            results.forEach(job => {
                const div = document.createElement('div');
                div.className = 'beruf-card';
                div.innerHTML = `<h4>${job.name}</h4><p>${job.beschreibung}</p><div class="beruf-tags"><span class="beruf-tag">🎓 ${job.abschluss}</span><span class="beruf-tag">⏱️ ${job.dauer}</span></div>`;
                container.appendChild(div);
            });
        }
    },

    reset: function() {
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
};

// Start
document.addEventListener('DOMContentLoaded', initGlossary);
