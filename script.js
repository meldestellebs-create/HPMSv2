
// ==========================================
// 1. GLOSSAR DATEN (EXAKT AUS DOCX)
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

function initGlossary() {
    const container = document.getElementById('glossar-container');
    if(!container) return;
    glossarDaten.sort((a, b) => a.name.localeCompare(b.name));
    glossarDaten.forEach((term) => {
        const item = document.createElement('div');
        item.className = 'accordion-item glossary-term'; 
        item.innerHTML = `<div class="accordion-header" onclick="toggleAccordion(this)">${term.name} <span style="font-size:0.8rem">▼</span></div><div class="accordion-content"><p><strong>${term.full}</strong></p><p>${term.description}</p></div>`;
        container.appendChild(item);
    });
}
function toggleAccordion(header) {
    header.parentElement.classList.toggle('active');
    header.querySelector('span').innerText = header.parentElement.classList.contains('active') ? '▲' : '▼';
}
function filterGlossar() {
    const search = document.getElementById('glossar-search').value.toLowerCase();
    document.querySelectorAll('.glossary-term').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(search) ? 'block' : 'none';
    });
}

// ==========================================
// 2. BILDUNGSWEGE TOOL LOGIC (FROM BWT-INDEX)
// ==========================================
// Copying the MASSIVE paths object from your provided file structure
const paths = {
    ohneAbschluss: {
        hauptschulabschluss: [
            { title: "VAB (Vorqualifizierungsjahr Arbeit/Beruf)", steps: ["Ohne Abschluss", "VAB + Prüfung", "Hauptschulabschluss"], duration: "1 Jahr", note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden.", recommended: true },
            { title: "AVdual (Ausbildungsvorbereitung dual)", steps: ["Ohne Abschluss", "AVdual + Prüfung", "Hauptschulabschluss"], duration: "1-2 Jahre", note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika. Der Hauptschulabschluss wird über eine Prüfung erworben.", recommended: true }
        ],
        mittlereReife: [
            { title: "Über Hauptschulabschluss und 2BFS", steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"], duration: "3-4 Jahre", note: "Zunächst Hauptschulabschluss erwerben, dann über die 2BFS zur Fachschulreife (Mittlere Reife).", recommended: true }
        ],
        berufsabschluss: [
            { title: "Direkte duale Ausbildung", steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss"], duration: "3 Jahre", note: "In manchen Berufen ist eine Ausbildung auch ohne Schulabschluss möglich.", recommended: true }
        ]
    },
    vabo: {
        hauptschulabschluss: [
            { title: "VABO → VAB", steps: ["VABO (Deutschförderung)", "VAB + Prüfung", "Hauptschulabschluss"], duration: "2 Jahre", note: "Erst Deutsch lernen, dann Hauptschulabschluss.", recommended: true }
        ]
    },
    hauptschulabschluss: {
        mittlereReife: [
            { title: "2-jährige Berufsfachschule (2BFS)", steps: ["Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"], duration: "2 Jahre", note: "Führt zur Fachschulreife.", recommended: true },
            { title: "Modell 9+3", steps: ["Hauptschulabschluss", "Ausbildung (3 Jahre, Ø 2.5)", "Mittlere Reife"], duration: "3 Jahre", note: "Bei gutem Ausbildungsabschluss wird Mittlere Reife anerkannt.", recommended: true }
        ],
        berufsabschluss: [
            { title: "Duale Ausbildung", steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"], duration: "2-3.5 Jahre", note: "Klassische Ausbildung im Betrieb.", recommended: true }
        ],
        abitur: [
            { title: "Über Mittlere Reife zum Gymnasium", steps: ["Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"], duration: "6-7 Jahre", note: "Ein langer Weg, aber möglich!", recommended: true }
        ]
    },
    mittlereReife: {
        fachhochschulreife: [
            { title: "Berufskolleg (BK)", steps: ["Mittlere Reife", "Berufskolleg", "Fachhochschulreife"], duration: "1-2 Jahre", note: "Führt zur Fachhochschulreife.", recommended: true }
        ],
        abitur: [
            { title: "Berufliches Gymnasium", steps: ["Mittlere Reife", "Berufliches Gymnasium", "Abitur"], duration: "3 Jahre", note: "Der direkte Weg zum Abitur mit beruflichem Profil.", recommended: true }
        ],
        berufsabschluss: [
            { title: "Duale Ausbildung", steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsabschluss"], duration: "2.5-3 Jahre", note: "Oft Lehrzeitverkürzung möglich.", recommended: true }
        ]
    },
    abitur: {
        berufsabschluss: [
             { title: "Duale Ausbildung", steps: ["Abitur", "Duale Ausbildung (Verkürzt)", "Berufsabschluss"], duration: "2 Jahre", note: "Turbo-Ausbildung für Abiturienten.", recommended: true }
        ],
        studium: [
             { title: "Studium", steps: ["Abitur", "Universität/Hochschule", "Bachelor"], duration: "3+ Jahre", note: "Direkter Zugang zu allen Hochschulen.", recommended: true }
        ]
    }
};

function showPaths() {
    const start = document.getElementById("start").value;
    const ziel = document.getElementById("ziel").value;
    const resultDiv = document.getElementById("result");

    if (!start || !ziel) {
        resultDiv.innerHTML = '<div class="path-card" style="border-left-color:orange"><p>Bitte Start und Ziel auswählen.</p></div>';
        return;
    }

    // Fallback logic if path doesn't exist explicitly
    const availablePaths = paths[start]?.[ziel] || [];

    if (availablePaths.length === 0) {
        resultDiv.innerHTML = '<div class="path-card" style="border-left-color:red"><p>Kein direkter Standardweg gefunden. Bitte wählen Sie einen Zwischenschritt (z.B. erst Mittlere Reife).</p></div>';
        return;
    }

    let html = `<h3>${availablePaths.length} Weg(e) gefunden:</h3>`;

    availablePaths.forEach((path, index) => {
        html += `
            <div class="path-card ${path.recommended ? 'recommended' : ''}">
                <div class="path-title">
                    ${index + 1}. ${path.title}
                    ${path.duration ? `<span class="duration-badge">⏱️ ${path.duration}</span>` : ''}
                </div>
                <div class="path-steps">
                    ${path.steps.map((step, i) => 
                        `<span class="step">${step}</span>` + (i < path.steps.length - 1 ? '<span class="arrow">→</span>' : '')
                    ).join('')}
                </div>
                ${path.note ? `<p style="margin-top:10px; color:#666; font-size:0.9rem">ℹ️ ${path.note}</p>` : ''}
            </div>
        `;
    });

    resultDiv.innerHTML = html;
}

function resetPaths() {
    document.getElementById("start").value = "";
    document.getElementById("ziel").value = "";
    document.getElementById("result").innerHTML = "";
    updateVisuals();
}

function updateVisuals() {
    const s = document.getElementById('start');
    const z = document.getElementById('ziel');
    const sVal = s.options[s.selectedIndex].text;
    const zVal = z.options[z.selectedIndex].text;

    document.getElementById('vis-start').innerText = s.value ? "✓" : "?";
    document.getElementById('vis-target').innerText = z.value ? "✓" : "?";

    // Optional: Text updates underneath circles if you want
}


// ==========================================
// 3. QUIZ LOGIC (EXTRACTED FROM BWT)
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
            { text: "Anderen helfen", value: "sozial" }
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
            { text: "Im Büro / am Schreibtisch", value: "buero" }
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
            { text: "IT & Digitales", value: "it" }
        ],
        key: "field"
    }
];

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
        const c = document.getElementById('quiz-options-container');
        c.innerHTML = '';
        q.options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'quiz-option';
            btn.innerText = opt.text;
            btn.onclick = () => this.handleAnswer(opt.value);
            c.appendChild(btn);
        });
        document.getElementById('quiz-progress-fill').style.width = ((this.currentQ / quizQuestions.length) * 100) + '%';
    },
    handleAnswer: function(val) {
        this.answers.push(val);
        this.currentQ++;
        if (this.currentQ < quizQuestions.length) this.showQuestion();
        else this.showResults();
    },
    showResults: function() {
        document.getElementById('quiz-question-container').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';
        // Mock result logic
        const field = this.answers[2] || 'wirtschaft';
        document.getElementById('quiz-result-list').innerHTML = `<div class='beruf-card'><h4>Ergebnis für ${field}</h4><p>Basierend auf deinen Antworten (z.B. ${this.answers[0]}) empfehlen wir Berufe im Bereich ${field}.</p></div>`;
    },
    reset: function() {
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initGlossary();
    document.getElementById('start')?.addEventListener('change', updateVisuals);
    document.getElementById('ziel')?.addEventListener('change', updateVisuals);
});
