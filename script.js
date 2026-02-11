// --- DATENBANKEN ---

// 1. Daten für Bildungswege & Glossar
const bildungswegeData = {
    kein: {
        deutsch: [
            { name: "VABO", full: "Vorqualifizierungsjahr Arbeit/Beruf ohne Deutschkenntnisse", description: "Für Jugendliche ohne Deutschkenntnisse. Fokus auf Spracherwerb (bis B1).", dauer: "1 Jahr" },
            { name: "Integrationskurs", full: "Integrationskurs", description: "Sprach- und Orientierungskurs für Neuzugewanderte.", dauer: "6-9 Monate" }
        ],
        hauptschul: [
            { name: "AVdual", full: "Ausbildungsvorbereitung dual", description: "Für Jugendliche ohne Ausbildungsplatz. Praktika + Schule. Ziel: Hauptschulabschluss verbessern.", dauer: "1 Jahr" },
            { name: "VAB", full: "Vorqualifizierungsjahr Arbeit/Beruf", description: "Allgemeine Berufsvorbereitung für Jugendliche ohne Hauptschulabschluss.", dauer: "1 Jahr" }
        ]
    },
    hauptschul: {
        mittlerer: [
            { name: "2BFS", full: "Zweijährige Berufsfachschule", description: "Führt zur Fachschulreife (Mittlere Reife).", dauer: "2 Jahre" }
        ],
        ausbildung: [
            { name: "Duale Ausbildung", full: "Duale Berufsausbildung", description: "Lernen im Betrieb und in der Berufsschule.", dauer: "3-3,5 Jahre" }
        ]
    },
    mittlerer: {
        fhr: [
            { name: "BK", full: "Berufskolleg", description: "Führt zur Fachhochschulreife. Verschiedene Richtungen (Technik, Kaufmännisch etc.).", dauer: "1-2 Jahre" }
        ],
        abitur: [
            { name: "BG", full: "Berufliches Gymnasium", description: "Führt zur Allgemeinen Hochschulreife (Abitur).", dauer: "3 Jahre" }
        ]
    }
};

// 2. Daten für das Berufswahl-Quiz
const berufeDB = {
    technik: [
        { name: "Elektroniker/in", beschreibung: "Installiere elektrische Anlagen und halte sie instand.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true },
        { name: "Industriemechaniker/in", beschreibung: "Stelle Maschinen und Anlagen her und warte sie.", abschluss: "Hauptschulabschluss", dauer: "3,5 Jahre", chancen: true },
        { name: "KFZ-Mechatroniker/in", beschreibung: "Repariere und warte Fahrzeuge.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true }
    ],
    gesundheit: [
        { name: "Medizinische/r Fachangestellte/r", beschreibung: "Unterstütze Ärzte bei der Behandlung.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
        { name: "Pflegefachmann/frau", beschreibung: "Pflege und betreue kranke und ältere Menschen.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    wirtschaft: [
        { name: "Kaufmann/frau für Büromanagement", beschreibung: "Organisiere bürowirtschaftliche Aufgaben.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
        { name: "Einzelhandelskaufmann/frau", beschreibung: "Verkaufe Waren und berate Kunden.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true }
    ],
    kreativ: [
        { name: "Mediengestalter/in", beschreibung: "Gestalte digitale und Print-Medien.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: false },
        { name: "Friseur/in", beschreibung: "Schneide, färbe und style Haare.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true }
    ]
};

// --- MODUL 1: BILDUNGSWEGE WIZARD ---

let currentWizardStep = 1;
let selectedBildungsstand = '';

function selectBildungsstand(stand) {
    selectedBildungsstand = stand;
    document.getElementById('wizard-step-1').style.display = 'none';
    document.getElementById('wizard-step-2').style.display = 'block';

    const zielContainer = document.getElementById('ziel-options');
    zielContainer.innerHTML = ''; 

    let options = [];
    if (stand === 'kein') {
        options = [
            { id: 'deutsch', text: 'Deutsch lernen' },
            { id: 'hauptschul', text: 'Hauptschulabschluss machen' }
        ];
    } else if (stand === 'hauptschul') {
        options = [
            { id: 'mittlerer', text: 'Mittleren Abschluss machen' },
            { id: 'ausbildung', text: 'Ausbildung beginnen' }
        ];
    } else {
        options = [
            { id: 'fhr', text: 'Fachhochschulreife' },
            { id: 'abitur', text: 'Abitur' }
        ];
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
            div.innerHTML = `
                <h4>${item.name}</h4>
                <p><em>${item.full}</em></p>
                <p>${item.description}</p>
                <div class="beruf-tags">
                    <span class="beruf-tag">⏱️ ${item.dauer}</span>
                </div>
            `;
            container.appendChild(div);
        });
    } else {
        container.innerHTML = '<p>Bitte wende dich für eine individuelle Beratung an uns.</p>';
    }
}

function resetWizard() {
    selectedBildungsstand = '';
    document.getElementById('wizard-results').style.display = 'none';
    document.getElementById('wizard-step-2').style.display = 'none';
    document.getElementById('wizard-step-1').style.display = 'block';
}

// --- MODUL 2: PDF DOWNLOAD (Fallback) ---
function generatePDF(type) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Meldestelle Berufliche Schulen Stuttgart", 20, 20);

    doc.setFontSize(16);
    if(type === 'vabo') {
        doc.text("Anfrage VABO Schuljahr 26/27", 20, 40);
        doc.setFontSize(12);
        doc.text("Bitte füllen Sie dieses Formular vollständig aus.", 20, 50);
        doc.save("Anfrage-VABO-26-27.pdf");
    } else {
        doc.text("Vermittlungsanfrage AVdual", 20, 40);
        doc.setFontSize(12);
        doc.text("Anmeldung für das Schuljahr 2026/2027", 20, 50);
        doc.save("AVdual-Vermittlung.pdf");
    }
}

// --- MODUL 3: GLOSSAR ---
function initGlossary() {
    const container = document.getElementById('glossar-container');
    const terms = [];

    Object.values(bildungswegeData).forEach(category => {
        Object.values(category).forEach(list => {
            list.forEach(item => {
                if (!terms.find(t => t.name === item.name)) {
                    terms.push(item);
                }
            });
        });
    });

    terms.sort((a, b) => a.name.localeCompare(b.name));

    terms.forEach((term, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item glossary-term'; 
        item.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(this)">
                ${term.name} <span style="font-size:0.8rem">▼</span>
            </div>
            <div class="accordion-content">
                <p><strong>${term.full}</strong></p>
                <p>${term.description}</p>
                <p><small>Dauer: ${term.dauer}</small></p>
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
        const text = item.innerText.toLowerCase();
        if (text.includes(search)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// --- MODUL 4: BERUFSWAHL-QUIZ ---
const QuizApp = {
    questions: [
        {
            text: "Was macht dir am meisten Spaß?",
            options: [
                { text: "Dinge bauen & reparieren", value: "technik" },
                { text: "Menschen helfen & pflegen", value: "gesundheit" },
                { text: "Organisieren & Verkaufen", value: "wirtschaft" },
                { text: "Kreativ sein & Gestalten", value: "kreativ" }
            ]
        },
        {
            text: "Wie arbeitest du am liebsten?",
            options: [
                { text: "Im Team mit viel Kontakt", value: "social" },
                { text: "Lieber für mich konzentriert", value: "focus" },
                { text: "Draußen oder in der Werkstatt", value: "hands" }
            ]
        },
        {
            text: "Welcher Schulabschluss ist realistisch?",
            options: [
                { text: "Hauptschulabschluss", value: "low" },
                { text: "Mittlere Reife", value: "mid" },
                { text: "Abitur", value: "high" }
            ]
        }
    ],
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
        const q = this.questions[this.currentQ];
        document.getElementById('quiz-question-text').innerText = q.text;

        const progress = ((this.currentQ) / this.questions.length) * 100;
        document.getElementById('quiz-progress-fill').style.width = progress + '%';

        const container = document.getElementById('quiz-options-container');
        container.innerHTML = '';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = opt.text;
            btn.onclick = () => this.handleAnswer(opt.value);
            container.appendChild(btn);
        });
    },

    handleAnswer: function(val) {
        this.answers.push(val);
        this.currentQ++;

        if (this.currentQ < this.questions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    },

    showResults: function() {
        document.getElementById('quiz-question-container').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';
        document.getElementById('quiz-progress-fill').style.width = '100%';

        const mainCategory = this.answers[0]; 
        const categoryKey = berufeDB[mainCategory] ? mainCategory : 'wirtschaft';
        const results = berufeDB[categoryKey];
        const container = document.getElementById('quiz-result-list');
        container.innerHTML = '';

        results.forEach(job => {
            const div = document.createElement('div');
            div.className = 'beruf-card';
            div.innerHTML = `
                <h4>${job.name}</h4>
                <p>${job.beschreibung}</p>
                <div class="beruf-tags">
                    <span class="beruf-tag">🎓 ${job.abschluss}</span>
                    <span class="beruf-tag">⏱️ ${job.dauer}</span>
                    ${job.chancen ? '<span class="beruf-tag" style="background:#d4edda; color:#155724">✨ Gute Chancen</span>' : ''}
                </div>
            `;
            container.appendChild(div);
        });
    },

    reset: function() {
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initGlossary();
});