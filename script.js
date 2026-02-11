
// === DATENBANK: BILDUNGSWEGE (WIZARD) ===
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

// === DATENBANK: BERUFSWAHL (QUIZ) ===
const berufeDB = {
    technik: [
        { name: "Elektroniker/in", beschreibung: "Installiere elektrische Anlagen und halte sie instand.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true },
        { name: "KFZ-Mechatroniker/in", beschreibung: "Repariere und warte Fahrzeuge.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true }
    ],
    gesundheit: [
        { name: "Medizinische/r Fachangestellte/r", beschreibung: "Unterstütze Ärzte bei der Behandlung.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
        { name: "Pflegefachmann/frau", beschreibung: "Pflege und betreue kranke und ältere Menschen.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    wirtschaft: [
        { name: "Kaufmann/frau für Büromanagement", beschreibung: "Organisiere bürowirtschaftliche Aufgaben.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    kreativ: [
        { name: "Mediengestalter/in", beschreibung: "Gestalte digitale und Print-Medien.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: false }
    ]
};

// === WIZARD LOGIK (WIEDERHERGESTELLT) ===
let selectedBildungsstand = '';

function selectBildungsstand(stand) {
    selectedBildungsstand = stand;
    document.getElementById('wizard-step-1').style.display = 'none';
    document.getElementById('wizard-step-2').style.display = 'block';

    const zielContainer = document.getElementById('ziel-options');
    zielContainer.innerHTML = ''; 

    let options = [];
    if (stand === 'kein') {
        options = [{id:'deutsch', text:'Deutsch lernen'}, {id:'hauptschul', text:'Hauptschulabschluss'}];
    } else if (stand === 'hauptschul') {
        options = [{id:'mittlerer', text:'Mittleren Abschluss'}, {id:'ausbildung', text:'Ausbildung'}];
    } else {
        options = [{id:'fhr', text:'Fachhochschulreife'}, {id:'abitur', text:'Abitur'}];
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
    if (data) {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'beruf-card';
            div.innerHTML = `<h4>${item.name}</h4><p><em>${item.full}</em></p><p>${item.description}</p>`;
            container.appendChild(div);
        });
    }
}

function resetWizard() {
    selectedBildungsstand = '';
    document.getElementById('wizard-results').style.display = 'none';
    document.getElementById('wizard-step-2').style.display = 'none';
    document.getElementById('wizard-step-1').style.display = 'block';
}

// === GLOSSAR LOGIK ===
function initGlossary() {
    const container = document.getElementById('glossar-container');
    const terms = [];
    Object.values(bildungswegeData).forEach(cat => {
        Object.values(cat).forEach(list => list.forEach(item => terms.push(item)));
    });
    // Deduplicate & Sort
    const uniqueTerms = Array.from(new Set(terms.map(a => a.name)))
        .map(name => terms.find(a => a.name === name)).sort((a,b) => a.name.localeCompare(b.name));

    uniqueTerms.forEach(term => {
        const item = document.createElement('div');
        item.className = 'accordion-item glossary-term';
        item.innerHTML = `
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                ${term.name} <span>▼</span>
            </div>
            <div class="accordion-content">
                <p><strong>${term.full}</strong></p><p>${term.description}</p>
            </div>`;
        container.appendChild(item);
    });
}

// === QUIZ LOGIK (WIEDERHERGESTELLT) ===
const QuizApp = {
    questions: [
        { text: "Was macht dir Spaß?", options: [{text:"Bauen", val:"technik"}, {text:"Helfen", val:"gesundheit"}, {text:"Organisieren", val:"wirtschaft"}] },
        { text: "Wie arbeitest du?", options: [{text:"Im Team", val:"social"}, {text:"Alleine", val:"focus"}] },
        { text: "Welcher Abschluss?", options: [{text:"Hauptschule", val:"low"}, {text:"Mittlere Reife", val:"mid"}] }
    ],
    currentQ: 0, answers: [],
    start: function() { 
        this.currentQ = 0; this.answers = []; 
        document.getElementById('quiz-start').style.display = 'none'; 
        document.getElementById('quiz-question-container').style.display = 'block'; 
        this.showQuestion(); 
    },
    showQuestion: function() {
        const q = this.questions[this.currentQ];
        document.getElementById('quiz-question-text').innerText = q.text;
        const c = document.getElementById('quiz-options-container'); c.innerHTML = '';
        q.options.forEach(o => {
            const b = document.createElement('button'); b.className = 'btn-option'; b.innerText = o.text;
            b.onclick = () => { this.answers.push(o.val); this.currentQ++; this.currentQ < this.questions.length ? this.showQuestion() : this.showResults(); };
            c.appendChild(b);
        });
    },
    showResults: function() {
        document.getElementById('quiz-question-container').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';
        const cat = this.answers[0]; 
        const res = berufeDB[cat] || berufeDB['wirtschaft'];
        const c = document.getElementById('quiz-result-list'); c.innerHTML = '';
        res.forEach(j => {
            c.innerHTML += `<div class="beruf-card"><h4>${j.name}</h4><p>${j.beschreibung}</p></div>`;
        });
    },
    reset: function() {
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
    }
};

document.addEventListener('DOMContentLoaded', initGlossary);
