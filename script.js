
// ==========================================
// GLOBALE STEUERUNG (Tabs)
// ==========================================
function switchTool(toolId) {
    document.querySelectorAll('.tool-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + toolId).classList.add('active');

    document.querySelectorAll('.tool-section').forEach(s => s.classList.add('hidden'));
    const activeSection = document.getElementById('tool-' + toolId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('animate-in');
}

// ==========================================
// KARTEN TABS (PDF Card)
// ==========================================
function switchBwTab(tabId) {
    // Buttons
    document.querySelectorAll('.bw-tab').forEach(b => b.classList.remove('active'));
    // Content
    document.querySelectorAll('.bw-content').forEach(c => c.classList.add('hidden'));

    // Activate
    const btn = document.querySelector(`button[onclick="switchBwTab('${tabId}')"]`);
    if(btn) btn.classList.add('active');
    document.getElementById('bw-content-' + tabId).classList.remove('hidden');
}


// ==========================================
// BILDUNGSWEGE TOOL LOGIC (RESTORED)
// ==========================================

// --- HIER IST DIE WIEDERHERGESTELLTE LOGIK AUS DER DOCX ---
const paths = {
  // ============ OHNE ABSCHLUSS ============
  ohneAbschluss: {
    hauptschulabschluss: [
      {
        title: "VAB (Vorqualifizierungsjahr Arbeit/Beruf)",
        steps: ["Ohne Abschluss", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden.",
        recommended: true
      },
      {
        title: "AV (Ausbildungsvorbereitung)",
        steps: ["Ohne Abschluss", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Die AV bereitet auf eine Berufsausbildung vor und ermöglicht den Erwerb eines dem Hauptschulabschluss gleichwertigen Bildungsstands.",
        recommended: true
      },
      {
        title: "AVdual (Ausbildungsvorbereitung dual)",
        steps: ["Ohne Abschluss", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika. Der Hauptschulabschluss wird über eine Prüfung erworben.",
        recommended: true
      },
      {
        title: "1-jährige Berufsfachschule (1BFS)",
        steps: ["Ohne Abschluss", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Mit erfolgreichem Abschluss der 1BFS wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erlangt.",
        recommended: true
      },
      {
        title: "Ausbildung Alltagsbetreuer/in",
        steps: ["Ohne Abschluss", "Berufsfachschule Alltagsbetreuung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "Individuell",
        note: "Die Ausbildung kann ohne Hauptschulabschluss begonnen werden. Der erfolgreiche Abschluss schließt einen dem Hauptschulabschluss gleichwertigen Bildungsstand ein."
      },
      {
        title: "Über duale Ausbildung",
        steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit dem erfolgreichen Abschluss einer dualen Ausbildung wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erworben."
      }
    ],
    mittlereReife: [
      {
        title: "Über Hauptschulabschluss und 2BFS",
        steps: ["Ohne Abschluss", "AVdual/VAB/AV", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "3-4 Jahre",
        note: "Zunächst Hauptschulabschluss erwerben, dann über die 2BFS zur Fachschulreife (Mittlere Reife).",
        recommended: true
      },
      {
        title: "Über Hauptschulabschluss und Modell 9+3",
        steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Hauptschul- und Mittlere Reife",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "5-7 Jahre",
        note: "Mehrstufiger Weg mit Zwischenschritten."
      }
    ],
    abitur: [
      {
        title: "Über alle Zwischenschritte",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "7-9 Jahre",
        note: "Mit jedem Abschluss gibt es immer einen Anschluss - auch bis zum Abitur."
      }
    ],
    berufsabschluss: [
      {
        title: "Direkte duale Ausbildung (ohne Abschluss möglich)",
        steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "In manchen Berufen ist eine Ausbildung auch ohne Schulabschluss möglich.",
        recommended: true
      },
      {
        title: "Über Hauptschulabschluss",
        steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "3,5-5,5 Jahre",
        note: "Mit Hauptschulabschluss verbessern sich die Chancen auf einen Ausbildungsplatz deutlich."
      }
    ],
    meister: [
      {
        title: "Über Berufsabschluss zur Aufstiegsfortbildung",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "8-12 Jahre",
        note: "Mit Abschluss, immer Anschluss - bis zur höchsten beruflichen Qualifikation."
      }
    ],
    studium: [
      {
        title: "Über Abitur zum Studium",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "10+ Jahre",
        note: "Auch ohne Schulabschluss ist der Weg bis zum Studium möglich."
      },
      {
        title: "Über berufliche Qualifikation",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Ausbildung", "Berufspraxis (3 Jahre)", "Studium ohne Abitur"],
        duration: "9+ Jahre",
        note: "Mit abgeschlossener Berufsausbildung und Berufserfahrung ist ein Studium auch ohne Abitur möglich."
      }
    ]
  },

  // ============ SBBZ ============
  sbbz: {
    bve: [
      {
        title: "Berufsvorbereitende Einrichtung (BVE)",
        steps: ["SBBZ", "BVE"],
        duration: "2 Jahre",
        note: "SBBZ-spezifisches Angebot: Die BVE bereitet auf eine Beschäftigung auf dem allgemeinen Arbeitsmarkt vor.",
        recommended: true
      }
    ],
    vabKF: [
      {
        title: "VAB-KF (Kooperative Form)",
        steps: ["SBBZ", "VAB-KF"],
        duration: "1 Jahr",
        note: "SBBZ-spezifisches Angebot: Vorbereitung auf Ausbildung oder Beschäftigung.",
        recommended: true
      }
    ],
    sonderberufsschule: [
      {
        title: "Sonderberufsschule",
        steps: ["SBBZ", "Sonderberufsschule", "Berufsabschluss"],
        duration: "Individuell",
        note: "SBBZ-spezifisches Angebot: Ausbildung speziell für Menschen mit Behinderung.",
        recommended: true
      }
    ],
    hauptschulabschluss: [
      {
        title: "Direkter Weg über SBBZ",
        steps: ["SBBZ", "Hauptschulabschluss"],
        duration: "Individuell",
        note: "An manchen SBBZ kann der Hauptschulabschluss direkt erworben werden (abhängig vom Förderschwerpunkt).",
        recommended: true
      },
      {
        title: "VAB mit Prüfung",
        steps: ["SBBZ", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden."
      },
      {
        title: "AV mit Prüfung",
        steps: ["SBBZ", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Die AV bereitet auf eine Berufsausbildung vor und ermöglicht den Erwerb des Hauptschulabschlusses."
      },
      {
        title: "AVdual mit Prüfung",
        steps: ["SBBZ", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika und ermöglicht den Erwerb des Hauptschulabschlusses."
      },
      {
        title: "1-jährige Berufsfachschule",
        steps: ["SBBZ", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Mit erfolgreichem Abschluss der 1BFS wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erlangt."
      },
      {
        title: "Über duale Ausbildung",
        steps: ["SBBZ", "Duale Ausbildung mit Unterstützung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Unterstützung durch Berufsberatung und ggf. Reha-Maßnahmen."
      }
    ],
    mittlereReife: [
      {
        title: "Über Hauptschulabschluss und 2BFS",
        steps: ["SBBZ", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "2+ Jahre",
        note: "Bei entsprechendem Förderschwerpunkt: Zunächst Hauptschulabschluss, dann 2BFS.",
        recommended: true
      },
      {
        title: "Über Ausbildung und Modell 9+3",
        steps: ["SBBZ", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "4+ Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Hauptschul- und Mittlere Reife",
        steps: ["SBBZ", "Hauptschulabschluss", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "5-7 Jahre",
        note: "Mit entsprechendem Förderschwerpunkt und Unterstützung realistisch erreichbar."
      }
    ],
    abitur: [
      {
        title: "Über alle Bildungsstufen",
        steps: ["SBBZ", "Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "6-9 Jahre",
        note: "Mit entsprechendem Förderschwerpunkt (z.B. Hören, Sehen, körperlich-motorische Entwicklung) und Unterstützung möglich."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung mit Unterstützung",
        steps: ["SBBZ", "Hauptschulabschluss", "Duale Ausbildung + Unterstützung", "Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Mit Unterstützung durch Berufsberatung und ggf. Reha-Maßnahmen, Hilfsmitteln am Arbeitsplatz.",
        recommended: true
      },
      {
        title: "Fachpraktiker-Ausbildung (theoriereduziert)",
        steps: ["SBBZ", "Fachpraktiker-Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "SBBZ-spezifisches Angebot: Theoriereduzierte Ausbildung für Menschen mit Lernbehinderung.",
        recommended: true
      },
      {
        title: "Ausbildung im Berufsbildungswerk",
        steps: ["SBBZ", "Berufsbildungswerk", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "SBBZ-spezifisches Angebot: Spezialisierte Ausbildung mit umfassender Unterstützung.",
        recommended: true
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["SBBZ", "Hauptschulabschluss", "Ausbildung", "Berufspraxis", "Meister/Techniker"],
        duration: "8-12 Jahre",
        note: "Mit entsprechender Unterstützung und abhängig vom Förderschwerpunkt möglich."
      }
    ],
    studium: [
      {
        title: "Über Abitur",
        steps: ["SBBZ", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium mit Unterstützung"],
        duration: "10+ Jahre",
        note: "Abhängig vom Förderschwerpunkt. Hochschulen bieten Unterstützungsangebote für Studierende mit Behinderung."
      }
    ]
  },

  // ============ VABO ============
  vabo: {
    hauptschulabschluss: [
      {
        title: "VABO mit Deutschförderung → VAB",
        steps: ["VABO (Deutschförderung B1)", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Nach erfolgreicher Deutschförderung im VABO kann über VAB der Hauptschulabschluss erworben werden.",
        recommended: true
      },
      {
        title: "VABO → AV",
        steps: ["VABO (Deutschförderung B1)", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Nach dem VABO ermöglicht die AV den Erwerb des Hauptschulabschlusses.",
        recommended: true
      },
      {
        title: "VABO → AVdual",
        steps: ["VABO (Deutschförderung B1)", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "2-3 Jahre",
        note: "Nach dem VABO kann über AVdual mit Betriebspraktika der Hauptschulabschluss erworben werden.",
        recommended: true
      },
      {
        title: "VABO → 1BFS",
        steps: ["VABO (Deutschförderung B1)", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Mit ausreichenden Deutschkenntnissen direkter Einstieg in die 1BFS möglich.",
        recommended: true
      },
      {
        title: "VABO → Ausbildung Alltagsbetreuer/in",
        steps: ["VABO (Deutschförderung B1)", "Berufsfachschule Alltagsbetreuung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2+ Jahre",
        note: "Die Ausbildung kann nach VABO begonnen werden und schließt einen dem Hauptschulabschluss gleichwertigen Bildungsstand ein."
      },
      {
        title: "VABO → Duale Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "Duale Ausbildung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "3,5-5 Jahre",
        note: "Mit erfolgreichem Abschluss einer dualen Ausbildung wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erworben."
      }
    ],
    mittlereReife: [
      {
        title: "VABO → Hauptschulabschluss → 2BFS",
        steps: ["VABO (Deutschförderung B1)", "AVdual/VAB", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Zunächst Deutsch lernen und Hauptschulabschluss erwerben, dann über die 2BFS zur Mittleren Reife.",
        recommended: true
      },
      {
        title: "VABO → Hauptschulabschluss → Modell 9+3",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "5-6 Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "VABO → Mittlere Reife → Berufskolleg",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "6-8 Jahre",
        note: "Mehrstufiger Weg mit Zwischenschritten."
      }
    ],
    abitur: [
      {
        title: "VABO → Mittlere Reife → Berufliches Gymnasium",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "7-9 Jahre",
        note: "Mit jedem Abschluss gibt es immer einen Anschluss."
      }
    ],
    berufsabschluss: [
      {
        title: "VABO → direkt zur Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "Duale Ausbildung", "Berufsabschluss"],
        duration: "3,5-5 Jahre",
        note: "In manchen Berufen ist eine Ausbildung nach VABO direkt möglich. Ggf. mit ausbildungsbegleitenden Hilfen (abH).",
        recommended: true
      },
      {
        title: "VABO → Hauptschulabschluss → Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "4,5-6,5 Jahre",
        note: "Mit Hauptschulabschluss verbessern sich die Chancen auf einen Ausbildungsplatz."
      }
    ],
    meister: [
      {
        title: "VABO → Ausbildung → Aufstiegsfortbildung",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Ausbildung", "Berufspraxis", "Meister/Techniker"],
        duration: "9-13 Jahre",
        note: "Mit Abschluss, immer Anschluss - auch für zugewanderte Jugendliche."
      }
    ],
    studium: [
      {
        title: "VABO → Abitur → Studium",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "11+ Jahre",
        note: "Der Weg zum Studium ist auch nach VABO möglich."
      }
    ]
  },

  // ============ AVDUAL (als eigener Startpunkt) ============
  avdual: {
    hauptschulabschluss: [
      {
        title: "Hauptschulabschluss über AVdual",
        steps: ["AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "Im AVdual kann der Hauptschulabschluss erworben oder verbessert werden.",
        recommended: true
      }
    ],
    berufsabschluss: [
      {
        title: "Direkt in die Ausbildung",
        steps: ["AVdual", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Nach erfolgreichem AVdual-Abschluss kann eine Berufsausbildung begonnen werden.",
        recommended: true
      }
    ]
  },

  // ============ HAUPTSCHULABSCHLUSS ============
  hauptschulabschluss: {
    mittlereReife: [
      {
        title: "2-jährige Berufsfachschule (2BFS)",
        steps: ["Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "2 Jahre",
        note: "Die 2BFS führt zur Fachschulreife (Mittlere Reife) und vermittelt berufliche Grundbildung.",
        recommended: true
      },
      {
        title: "10. Klasse Werkrealschule",
        steps: ["Hauptschulabschluss", "10. Klasse Werkrealschule", "Werkrealschulabschluss"],
        duration: "1 Jahr",
        note: "Nach Klasse 9 kann die 10. Klasse der Werkrealschule besucht werden."
      },
      {
        title: "10. Klasse Realschule",
        steps: ["Hauptschulabschluss", "10. Klasse Realschule", "Realschulabschluss"],
        duration: "1 Jahr",
        note: "Bei entsprechenden Noten kann die 10. Klasse der Realschule besucht werden."
      },
      {
        title: "10. Klasse Gemeinschaftsschule",
        steps: ["Hauptschulabschluss", "10. Klasse Gemeinschaftsschule", "Realschulabschluss"],
        duration: "1 Jahr",
        note: "Die Gemeinschaftsschule bietet die Möglichkeit, den Realschulabschluss zu erreichen."
      },
      {
        title: "Mit dualer Ausbildung (Modell 9+3)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Berufsabschluss + Mittlere Reife"],
        duration: "3 Jahre",
        note: "Bei guten Leistungen (Notendurchschnitt 2,5) kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden.",
        recommended: true
      },
      {
        title: "Mit dualer Ausbildung (KMK-Modell)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung (mind. 2 Jahre, Ø 3,0)", "Berufsabschluss + Mittlere Reife"],
        duration: "2-3 Jahre",
        note: "Bei Notenschnitt 3,0 in der Berufsschule und 5 Jahren Fremdsprachenunterricht wird ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt."
      },
      {
        title: "Berufsaufbauschule (BAS)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufsaufbauschule (1 Jahr)", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Mit abgeschlossener Berufsausbildung kann über die BAS der mittlere Bildungsabschluss erworben werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Mittlere Reife zum Berufskolleg",
        steps: ["Hauptschulabschluss", "2BFS/10. Klasse", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "4-5 Jahre",
        note: "Zunächst Mittlere Reife erwerben, dann 2 Jahre Berufskolleg.",
        recommended: true
      },
      {
        title: "Über Ausbildung und BKFH",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Ausbildung", "BKFH (1 Jahr)", "Fachhochschulreife"],
        duration: "6-8 Jahre",
        note: "Nach Ausbildung kann in einem Jahr die Fachhochschulreife erworben werden."
      }
    ],
    abitur: [
      {
        title: "Über Mittlere Reife zum Beruflichen Gymnasium",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "5 Jahre",
        note: "Mit Mittlerer Reife Zugang zum dreijährigen beruflichen Gymnasium.",
        recommended: true
      },
      {
        title: "Über Ausbildung zur Berufsoberschule",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Ausbildung", "Berufsoberschule (2 Jahre)", "Abitur"],
        duration: "7-9 Jahre",
        note: "Mit abgeschlossener Berufsausbildung zur fachgebundenen oder allgemeinen Hochschulreife."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Hauptschulabschluss können viele Ausbildungsberufe erlernt werden.",
        recommended: true
      },
      {
        title: "2-jährige Berufsfachschule",
        steps: ["Hauptschulabschluss", "Berufsfachschule (2-jährig)", "Berufsabschluss"],
        duration: "2 Jahre",
        note: "Schulische Berufsausbildung in verschiedenen Berufsfeldern."
      },
      {
        title: "1-jährige Berufsfachschule + Ausbildung",
        steps: ["Hauptschulabschluss", "1-jährige Berufsfachschule", "Duale Ausbildung (verkürzt)", "Berufsabschluss"],
        duration: "3,5-4,5 Jahre",
        note: "Die 1BFS kann als erstes Ausbildungsjahr in Handwerksberufen angerechnet werden."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-10 Jahre",
        note: "Mit Abschluss, immer Anschluss - bis zur höchsten beruflichen Qualifikation."
      }
    ],
    studium: [
      {
        title: "Über Abitur",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "8+ Jahre",
        note: "Der klassische Weg über alle Bildungsstufen."
      },
      {
        title: "Über berufliche Qualifikation (ohne Abitur)",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Ausbildung", "Berufspraxis (3 Jahre)", "Studium ohne Abitur"],
        duration: "9+ Jahre",
        note: "Für beruflich Qualifizierte ist ein Studium ohne Abitur möglich."
      }
    ]
  },

  // ============ MITTLERE REIFE ============
  mittlereReife: {
    fachhochschulreife: [
      {
        title: "2-jähriges Berufskolleg",
        steps: ["Mittlere Reife", "Berufskolleg (2 Jahre)", "Fachhochschulreife"],
        duration: "2 Jahre",
        note: "Das 2-jährige Berufskolleg führt zur Fachhochschulreife und vermittelt berufliche Kenntnisse.",
        recommended: true
      },
      {
        title: "Berufskolleg I + II",
        steps: ["Mittlere Reife", "Berufskolleg I (1 Jahr)", "Berufskolleg II (1 Jahr)", "Fachhochschulreife + Assistentenabschluss"],
        duration: "2 Jahre",
        note: "Nach BK I kann bei guten Noten ins BK II gewechselt werden."
      },
      {
        title: "Mit dualer Ausbildung + Zusatzunterricht",
        steps: ["Mittlere Reife", "Duale Ausbildung + Zusatzunterricht", "Berufsabschluss + Fachhochschulreife"],
        duration: "3 Jahre",
        note: "Während der Ausbildung kann durch Zusatzunterricht die Fachhochschulreife erworben werden."
      },
      {
        title: "1-jähriges Berufskolleg nach Ausbildung (BKFH)",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufskolleg zum Erwerb der FH-Reife (1 Jahr)", "Fachhochschulreife"],
        duration: "4-5 Jahre",
        note: "Nach abgeschlossener Berufsausbildung kann in einem Jahr die Fachhochschulreife erworben werden."
      },
      {
        title: "2-jährige Fachschule",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Fachschule (2 Jahre)", "Fachhochschulreife + Fortbildungsabschluss"],
        duration: "5-7 Jahre",
        note: "An zweijährigen Fachschulen kann die Fachhochschulreife erworben werden."
      }
    ],
    abitur: [
      {
        title: "Berufliches Gymnasium (3-jährig)",
        steps: ["Mittlere Reife", "Berufliches Gymnasium (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife mit beruflichem Schwerpunkt (6 Richtungen verfügbar).",
        recommended: true
      },
      {
        title: "Aufbaugymnasium",
        steps: ["Mittlere Reife", "Aufbaugymnasium (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Das Aufbaugymnasium ist speziell für Realschulabsolventen ('Realschulaufsetzer')."
      },
      {
        title: "Allgemeinbildendes Gymnasium",
        steps: ["Mittlere Reife", "Gymnasium Klasse 11-13", "Abitur"],
        duration: "3 Jahre",
        note: "Bei entsprechender Qualifikation ist der Wechsel ans allgemeinbildende Gymnasium möglich."
      },
      {
        title: "Gymnasiale Oberstufe Gemeinschaftsschule",
        steps: ["Mittlere Reife", "Gemeinschaftsschule Oberstufe (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Die Gemeinschaftsschule bietet eine gymnasiale Oberstufe an."
      },
      {
        title: "Berufsoberschule (BOS) nach Ausbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsoberschule Oberstufe (2 Jahre)", "Abitur"],
        duration: "5-7 Jahre",
        note: "Mit abgeschlossener Berufsausbildung führt die BOS zur fachgebundenen oder allgemeinen Hochschulreife."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Mittlerer Reife stehen nahezu alle Ausbildungsberufe offen.",
        recommended: true
      },
      {
        title: "Schulische Berufsausbildung",
        steps: ["Mittlere Reife", "Berufsfachschule/Berufskolleg", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Vollzeitschulische Ausbildung z.B. als Erzieher/in, Pflegefachmann/-frau oder technische/r Assistent/in."
      },
      {
        title: "1-jährige Berufsfachschule + Ausbildung",
        steps: ["Mittlere Reife", "1-jährige Berufsfachschule", "Duale Ausbildung (verkürzt)", "Berufsabschluss"],
        duration: "3,5-4,5 Jahre",
        note: "Die 1BFS kann bei Ausbildungsplatzzusage als erstes Ausbildungsjahr angerechnet werden."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-9 Jahre",
        note: "Höchste berufliche Qualifikation - gleichgestellt mit Bachelor."
      }
    ],
    studium: [
      {
        title: "Klassischer Weg über Abitur",
        steps: ["Mittlere Reife", "Abitur (3 Jahre)", "Studium"],
        duration: "6+ Jahre",
        note: "Abitur berechtigt zum Studium aller Studiengänge.",
        recommended: true
      },
      {
        title: "Weg über Fachhochschulreife",
        steps: ["Mittlere Reife", "Berufskolleg (2 Jahre)", "Fachhochschulreife", "Studium (FH/DHBW)"],
        duration: "5+ Jahre",
        note: "Studium an Fachhochschulen und Dualen Hochschulen."
      },
      {
        title: "Über berufliche Qualifikation (ohne Abitur)",
        steps: ["Mittlere Reife", "Ausbildung", "Berufspraxis (3 Jahre)", "Studium ohne Abitur"],
        duration: "8+ Jahre",
        note: "Für beruflich Qualifizierte ist ein Studium ohne Abitur möglich."
      }
    ]
  },

  // ============ FACHHOCHSCHULREIFE ============
  fachhochschulreife: {
    abitur: [
      {
        title: "Berufliches Gymnasium Klasse 13",
        steps: ["Fachhochschulreife", "Berufliches Gymnasium Klasse 13", "Abitur"],
        duration: "1 Jahr",
        note: "Mit Fachhochschulreife kann die Klasse 13 des beruflichen Gymnasiums besucht werden.",
        recommended: true
      },
      {
        title: "Berufsoberschule Oberstufe Klasse 2",
        steps: ["Fachhochschulreife + Ausbildung", "Berufsoberschule Klasse 2", "Abitur"],
        duration: "1 Jahr",
        note: "Bei guter Fachhochschulreife und abgeschlossener Ausbildung direkter Einstieg in Klasse 2 der BOS möglich."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Fachhochschulreife", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Eine Berufsausbildung ist auch mit Fachhochschulreife möglich und sinnvoll."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Fachhochschulreife", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-9 Jahre",
        note: "Höchste berufliche Qualifikation."
      }
    ],
    bachelor: [
      {
        title: "Studium an Hochschule für angewandte Wissenschaften",
        steps: ["Fachhochschulreife", "Hochschule/FH/DHBW", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Die Fachhochschulreife berechtigt zum Studium an Hochschulen für angewandte Wissenschaften und Dualen Hochschulen.",
        recommended: true
      },
      {
        title: "Duales Studium",
        steps: ["Fachhochschulreife", "Duales Studium", "Bachelor + Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Kombination von Praxis im Betrieb und Theorie an der Hochschule."
      }
    ]
  },

  // ============ ABITUR ============
  abitur: {
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Abitur", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Viele Abiturienten entscheiden sich bewusst für eine Berufsausbildung, oft mit verkürzter Ausbildungszeit."
      },
      {
        title: "Schulische Berufsausbildung",
        steps: ["Abitur", "Berufsfachschule/Berufskolleg", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Schulische Ausbildungen z.B. als Erzieher/in oder technische/r Assistent/in."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Abitur", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-9 Jahre",
        note: "Auch mit Abitur kann der Weg über eine Berufsausbildung zur Aufstiegsfortbildung führen."
      }
    ],
    bachelor: [
      {
        title: "Direktes Studium",
        steps: ["Abitur", "Universität/Hochschule", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Mit Abitur können alle Studiengänge an Universitäten und Hochschulen studiert werden.",
        recommended: true
      },
      {
        title: "Duales Studium",
        steps: ["Abitur", "Duales Studium", "Bachelor + Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Das duale Studium kombiniert Praxis im Betrieb mit Theorie an der Hochschule."
      }
    ]
  }
}

// Helper function to render results
function showPaths() {
    const startSelect = document.getElementById('start');
    const zielSelect = document.getElementById('ziel');
    const resultDiv = document.getElementById('result');

    const start = startSelect.value;
    const ziel = zielSelect.value;

    if (!start || !ziel) {
        resultDiv.innerHTML = '<div class="result-card"><p>Bitte Start und Ziel auswählen.</p></div>';
        return;
    }

    // Lookup paths
    // The paths object structure is paths[start][ziel] = array of objects
    let availablePaths = [];
    if (paths[start] && paths[start][ziel]) {
        availablePaths = paths[start][ziel];
    }

    if (availablePaths.length === 0) {
        resultDiv.innerHTML = '<div class="result-card" style="border-left-color: #ef4444;"><p>Kein direkter Weg in der Datenbank gefunden. Bitte versuchen Sie einen Zwischenschritt (z.B. erst Mittlere Reife).</p></div>';
        return;
    }

    let html = `<h3 class="mb-4">${availablePaths.length} Weg(e) gefunden:</h3><div class="results-list">`;

    availablePaths.forEach((path, index) => {
        html += `
            <div class="result-card ${path.recommended ? 'recommended' : ''}">
                <div class="result-header">
                    <h3>${index + 1}. ${path.title}</h3>
                    ${path.duration ? `<span class="duration-badge" style="background:var(--primary); color:white; padding:2px 8px; border-radius:10px; font-size:0.8rem; margin-left:10px;">⏱️ ${path.duration}</span>` : ''}
                </div>

                <div class="result-steps" style="display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin: 15px 0;">
                    ${path.steps.map((step, i) => 
                        `<span class="step" style="background:rgba(255,255,255,0.1); padding:5px 10px; border-radius:5px;">${step}</span>` + 
                        (i < path.steps.length - 1 ? '<span class="arrow">→</span>' : '')
                    ).join('')}
                </div>

                <div class="result-desc">
                    <p>${path.note || ''}</p>
                </div>
            </div>
        `;
    });

    html += '</div>';
    resultDiv.innerHTML = html;

    // Update visualization (Circles)
    const sText = startSelect.options[startSelect.selectedIndex].text;
    const zText = zielSelect.options[zielSelect.selectedIndex].text;
    document.getElementById('vis-start').innerText = "✓";
    document.getElementById('vis-target').innerText = "✓";
    // Optional: Add labels below circles
}

function resetPaths() {
    document.getElementById('start').value = "";
    document.getElementById('ziel').value = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('vis-start').innerText = "?";
    document.getElementById('vis-target').innerText = "?";
}

// Event Listeners for Visuals
document.addEventListener('DOMContentLoaded', () => {
    // Initial State
    resetPaths();
});

