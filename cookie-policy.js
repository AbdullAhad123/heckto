gsap.registerPlugin(ScrollTrigger);
// Cookie Policy - Complete JS with Translations and Animations
const translations = {
    en: {
        "pageTitle": "Heckto Cookie Policy",
        "siteTitle": "HECKTO",
        "summaryTitle": "Summary",
        "summaryText": "This Cookie Policy explains how HECKTO Ltd (\"we\", \"us\", \"our\") uses Trackers (including cookies and similar technologies) when you visit www.heckto.com.",
        "lastUpdated": "Latest update: 7 August 2025",
        "ownerControllerTitle": "Owner and Data Controller",
        "ownerName": "Daniel Asghar",
        "ownerRole": "Business Development Manager & CEO",
        "ownerCompany": "HECKTO Ltd",
        "ownerAddress": "8 Cunningham Court, Blackburn, UK, BB1 2QX",
        "ownerEmail": "Owner contact email: sales@heckto.it",
        "trackersCollectedTitle": "Types of Trackers Used",
        "trackersCollectedText": "This Application uses the following categories of Trackers:",
        "trackerType1": "<strong>Essential Trackers:</strong> Necessary for basic functionality",
        "trackerType2": "<strong>Analytics Trackers:</strong> Measure audience and usage patterns",
        "trackerType3": "<strong>Advertising Trackers:</strong> Enable interest-based advertising",
        "trackerType4": "<strong>Social Media Trackers:</strong> Enable social sharing features",
        "trackerType5": "<strong>Functionality Trackers:</strong> Remember user preferences",
        "processingMethodsTitle": "Mode and Place of Processing",
        "methodsTitle": "Methods of Processing",
        "methodsText1": "The Owner takes appropriate security measures to prevent unauthorized access to Trackers.",
        "methodsText2": "Processing is carried out using computers and IT tools following organizational procedures strictly related to the purposes indicated.",
        "placeTitle": "Place",
        "placeText": "Data is processed at the Owner's operating offices and in any other places where the processing parties are located.",
        "purposesProcessingTitle": "Purposes of Processing Trackers",
        "purpose1": "To provide and maintain our service",
        "purpose2": "To monitor usage of our service",
        "purpose3": "To detect, prevent and address technical issues",
        "purpose4": "To provide targeted advertising",
        "purpose5": "To enable social media features",
        "detailedTrackersTitle": "Detailed Information on Trackers",
        "essentialTrackersTitle": "Essential Trackers",
        "essentialTrackersText": "These are necessary for the website to function:",
        "essentialTracker1": "Session cookies (expire when browser closes)",
        "essentialTracker2": "Authentication cookies",
        "analyticsTrackersTitle": "Analytics Trackers",
        "analyticsTrackersText": "These help us understand how visitors interact:",
        "analyticsTracker1": "Google Analytics (Google LLC) - Usage Data",
        "analyticsTracker2": "Hotjar (Hotjar Ltd) - Behavior analytics",
        "advertisingTrackersTitle": "Advertising Trackers",
        "advertisingTrackersText": "Used for interest-based advertising:",
        "advertisingTracker1": "Facebook Pixel (Facebook, Inc.) - Trackers +2",
        "advertisingTracker2": "Google Ads Conversion Tracking - Trackers",
        "optOutTitle": "How to Opt Out of Tracker Collection",
        "optOutText1": "Users can manage preferences for Trackers directly within their device settings.",
        "optOutText2": "For example:",
        "optOutMethod1": "Browser settings to block cookies",
        "optOutMethod2": "Global Privacy Control (GPC) signals",
        "optOutMethod3": "Platform-specific opt-outs (e.g., Facebook, Google)",
        "retentionTitle": "Retention Time",
        "retentionText1": "Trackers are processed and stored for as long as required:",
        "retentionItem1": "Session cookies: Until browser closure",
        "retentionItem2": "Persistent cookies: Up to 2 years",
        "retentionItem3": "Analytics data: Up to 26 months",
        "euUsersTitle": "Information for EU Users",
        "euUsersText": "Under GDPR, users have the right to:",
        "euRight1": "Withdraw consent for non-essential Trackers",
        "euRight2": "Access information about stored Trackers",
        "euRight3": "Request deletion of Tracker data",
        "usUsersTitle": "Information for US Users",
        "usUsersText": "Under state privacy laws, users can:",
        "usRight1": "Opt-out of \"sale\" of personal information",
        "usRight2": "Opt-out of targeted advertising",
        "usRight3": "Limit use of sensitive information",
        "definitionsTitle": "Definitions",
        "def1": "<strong>Tracker:</strong> Any technology that enables tracking (cookies, pixels, fingerprinting)",
        "def2": "<strong>Cookie:</strong> Small data file stored in the user's device",
        "def3": "<strong>First-party Tracker:</strong> Set by the website being visited",
        "def4": "<strong>Third-party Tracker:</strong> Set by domains other than the website being visited",
        "contactInfoTitle": "Contact Information",
        "contactName": "Daniel Asghar",
        "contactRole": "Business Development Manager & CEO",
        "contactCompany": "HECKTO Ltd",
        "contactAddress": "8 Cunningham Court, Blackburn, UK, BB1 2QX",
        "contactEmail": "Owner contact email: sales@heckto.it"
    },
    it: {
        "pageTitle": "Politica sui Cookie di Heckto",
        "siteTitle": "HECKTO",
        "summaryTitle": "Riepilogo",
        "summaryText": "Questa Politica sui Cookie spiega come HECKTO Ltd (\"noi\", \"nostro\") utilizza Tracker (inclusi cookie e tecnologie simili) quando visiti www.heckto.com.",
        "lastUpdated": "Ultimo aggiornamento: 7 August 2025",
        "ownerControllerTitle": "Titolare e Responsabile del Trattamento",
        "ownerName": "Daniel Asghar",
        "ownerRole": "Business Development Manager & CEO",
        "ownerCompany": "HECKTO Ltd",
        "ownerAddress": "8 Cunningham Court, Blackburn, UK, BB1 2QX",
        "ownerEmail": "Email del titolare: sales@heckto.it",
        "trackersCollectedTitle": "Tipi di Tracker Utilizzati",
        "trackersCollectedText": "Questa Applicazione utilizza le seguenti categorie di Tracker:",
        "trackerType1": "<strong>Tracker essenziali:</strong> Necessari per il funzionamento base",
        "trackerType2": "<strong>Tracker analitici:</strong> Misurano il pubblico e i modelli di utilizzo",
        "trackerType3": "<strong>Tracker pubblicitari:</strong> Abilitano la pubblicità basata sugli interessi",
        "trackerType4": "<strong>Tracker per social media:</strong> Abilitano le funzioni di condivisione",
        "trackerType5": "<strong>Tracker funzionali:</strong> Memorizzano le preferenze dell'utente",
        "processingMethodsTitle": "Modalità e Luogo del Trattamento",
        "methodsTitle": "Metodi di Trattamento",
        "methodsText1": "Il Titolare adotta misure di sicurezza appropriate per prevenire l'accesso non autorizzato ai Tracker.",
        "methodsText2": "Il trattamento viene effettuato utilizzando computer e strumenti IT seguendo procedure organizzative strettamente correlate alle finalità indicate.",
        "placeTitle": "Luogo",
        "placeText": "I dati vengono trattati presso le sedi operative del Titolare e in qualsiasi altro luogo in cui si trovano le parti coinvolte nel trattamento.",
        "purposesProcessingTitle": "Finalità del Trattamento dei Tracker",
        "purpose1": "Fornire e mantenere il nostro servizio",
        "purpose2": "Monitorare l'utilizzo del nostro servizio",
        "purpose3": "Rilevare, prevenire e risolvere problemi tecnici",
        "purpose4": "Fornire pubblicità mirata",
        "purpose5": "Abilitare funzioni dei social media",
        "detailedTrackersTitle": "Informazioni Dettagliate sui Tracker",
        "essentialTrackersTitle": "Tracker Essenziali",
        "essentialTrackersText": "Questi sono necessari per il funzionamento del sito web:",
        "essentialTracker1": "Cookie di sessione (scadono alla chiusura del browser)",
        "essentialTracker2": "Cookie di autenticazione",
        "analyticsTrackersTitle": "Tracker Analitici",
        "analyticsTrackersText": "Questi ci aiutano a capire come interagiscono i visitatori:",
        "analyticsTracker1": "Google Analytics (Google LLC) - Dati di utilizzo",
        "analyticsTracker2": "Hotjar (Hotjar Ltd) - Analisi del comportamento",
        "advertisingTrackersTitle": "Tracker Pubblicitari",
        "advertisingTrackersText": "Utilizzati per la pubblicità basata sugli interessi:",
        "advertisingTracker1": "Facebook Pixel (Facebook, Inc.) - Tracker +2",
        "advertisingTracker2": "Monitoraggio conversioni Google Ads - Tracker",
        "optOutTitle": "Come Rifiutare la Raccolta di Tracker",
        "optOutText1": "Gli utenti possono gestire le preferenze per i Tracker direttamente nelle impostazioni del dispositivo.",
        "optOutText2": "Per esempio:",
        "optOutMethod1": "Impostazioni del browser per bloccare i cookie",
        "optOutMethod2": "Segnali Global Privacy Control (GPC)",
        "optOutMethod3": "Rifiuti specifici per piattaforma (es. Facebook, Google)",
        "retentionTitle": "Tempi di Conservazione",
        "retentionText1": "I Tracker vengono elaborati e conservati per il tempo necessario:",
        "retentionItem1": "Cookie di sessione: Fino alla chiusura del browser",
        "retentionItem2": "Cookie persistenti: Fino a 2 anni",
        "retentionItem3": "Dati analitici: Fino a 26 mesi",
        "euUsersTitle": "Informazioni per Utenti UE",
        "euUsersText": "Secondo il GDPR, gli utenti hanno diritto a:",
        "euRight1": "Revocare il consenso per Tracker non essenziali",
        "euRight2": "Accedere alle informazioni sui Tracker memorizzati",
        "euRight3": "Richiedere la cancellazione dei dati dei Tracker",
        "usUsersTitle": "Informazioni per Utenti USA",
        "usUsersText": "Secondo le leggi statali sulla privacy, gli utenti possono:",
        "usRight1": "Rifiutare la \"vendita\" di informazioni personali",
        "usRight2": "Rifiutare la pubblicità mirata",
        "usRight3": "Limitare l'uso di informazioni sensibili",
        "definitionsTitle": "Definizioni",
        "def1": "<strong>Tracker:</strong> Qualsiasi tecnologia che consente il tracciamento (cookie, pixel, fingerprinting)",
        "def2": "<strong>Cookie:</strong> Piccolo file di dati memorizzato sul dispositivo dell'utente",
        "def3": "<strong>Tracker di prima parte:</strong> Impostati dal sito web visitato",
        "def4": "<strong>Tracker di terze parti:</strong> Impostati da domini diversi dal sito web visitato",
        "contactInfoTitle": "Informazioni di Contatto",
        "contactName": "Daniel Asghar",
        "contactRole": "Business Development Manager & CEO",
        "contactCompany": "HECKTO Ltd",
        "contactAddress": "8 Cunningham Court, Blackburn, UK, BB1 2QX",
        "contactEmail": "Email del titolare: sales@heckto.it"
    },
    de: {
        "pageTitle": "Heckto Cookie-Richtlinie",
        "siteTitle": "HECKTO",
        "summaryTitle": "Zusammenfassung",
        "summaryText": "Diese Cookie-Richtlinie erklärt, wie HECKTO Ltd (\"wir\", \"uns\", \"unser\") Tracker (einschließlich Cookies und ähnlicher Technologien) verwendet, wenn Sie www.heckto.com besuchen.",
        "lastUpdated": "Letzte Aktualisierung: 7. August 2025",
        "ownerControllerTitle": "Eigentümer und Datenverantwortlicher",
        "ownerName": "Daniel Asghar",
        "ownerRole": "Business Development Manager & CEO",
        "ownerCompany": "HECKTO Ltd",
        "ownerAddress": "8 Cunningham Court, Blackburn, UK, BB1 2QX",
        "ownerEmail": "E-Mail des Eigentümers: sales@heckto.it",
        "trackersCollectedTitle": "Arten von verwendeten Trackern",
        "trackersCollectedText": "Diese Anwendung verwendet die folgenden Kategorien von Trackern:",
        "trackerType1": "<strong>Essenzielle Tracker:</strong> Notwendig für grundlegende Funktionen",
        "trackerType2": "<strong>Analytische Tracker:</strong> Messen von Publikum und Nutzungsmustern",
        "trackerType3": "<strong>Werbe-Tracker:</strong> Ermöglichen interessenbasierte Werbung",
        "trackerType4": "<strong>Social-Media-Tracker:</strong> Ermöglichen Social-Sharing-Funktionen",
        "trackerType5": "<strong>Funktionale Tracker:</strong> Merken sich Benutzereinstellungen",
        "processingMethodsTitle": "Art und Ort der Verarbeitung",
        "methodsTitle": "Verarbeitungsmethoden",
        "methodsText1": "Der Eigentümer ergreift angemessene Sicherheitsmaßnahmen, um unbefugten Zugriff auf Tracker zu verhindern.",
        "methodsText2": "Die Verarbeitung erfolgt mit Computern und IT-Tools nach organisatorischen Verfahren, die streng mit den angegebenen Zwecken verbunden sind.",
        "placeTitle": "Ort",
        "placeText": "Daten werden an den Betriebsstätten des Eigentümers und an allen anderen Orten verarbeitet, an denen die an der Verarbeitung beteiligten Parteien tätig sind.",
        "purposesProcessingTitle": "Zwecke der Tracker-Verarbeitung",
        "purpose1": "Bereitstellung und Aufrechterhaltung unseres Dienstes",
        "purpose2": "Überwachung der Nutzung unseres Dienstes",
        "purpose3": "Erkennung, Verhinderung und Behebung technischer Probleme",
        "purpose4": "Bereitstellung zielgerichteter Werbung",
        "purpose5": "Aktivierung von Social-Media-Funktionen",
        "detailedTrackersTitle": "Detaillierte Informationen zu Trackern",
        "essentialTrackersTitle": "Essenzielle Tracker",
        "essentialTrackersText": "Diese sind für die Funktionsweise der Website notwendig:",
        "essentialTracker1": "Sitzungs-Cookies (laufen ab, wenn der Browser geschlossen wird)",
        "essentialTracker2": "Authentifizierungs-Cookies",
        "analyticsTrackersTitle": "Analytische Tracker",
        "analyticsTrackersText": "Diese helfen uns zu verstehen, wie Besucher interagieren:",
        "analyticsTracker1": "Google Analytics (Google LLC) - Nutzungsdaten",
        "analyticsTracker2": "Hotjar (Hotjar Ltd) - Verhaltensanalyse",
        "advertisingTrackersTitle": "Werbe-Tracker",
        "advertisingTrackersText": "Werden für interessenbasierte Werbung verwendet:",
        "advertisingTracker1": "Facebook Pixel (Facebook, Inc.) - Tracker +2",
        "advertisingTracker2": "Google Ads Conversion Tracking - Tracker",
        "optOutTitle": "Wie Sie die Tracker-Erfassung ablehnen können",
        "optOutText1": "Benutzer können die Tracker-Einstellungen direkt in ihren Geräteeinstellungen verwalten.",
        "optOutText2": "Zum Beispiel:",
        "optOutMethod1": "Browser-Einstellungen zum Blockieren von Cookies",
        "optOutMethod2": "Global Privacy Control (GPC)-Signale",
        "optOutMethod3": "Plattformspezifische Opt-Outs (z.B. Facebook, Google)",
        "retentionTitle": "Aufbewahrungsdauer",
        "retentionText1": "Tracker werden so lange verarbeitet und gespeichert, wie erforderlich:",
        "retentionItem1": "Sitzungs-Cookies: Bis zum Schließen des Browsers",
        "retentionItem2": "Persistente Cookies: Bis zu 2 Jahre",
        "retentionItem3": "Analysedaten: Bis zu 26 Monate",
        "euUsersTitle": "Informationen für EU-Benutzer",
        "euUsersText": "Gemäß GDPR haben Benutzer das Recht:",
        "euRight1": "Die Zustimmung für nicht-essenzielle Tracker zu widerrufen",
        "euRight2": "Auf Informationen über gespeicherte Tracker zuzugreifen",
        "euRight3": "Löschung von Tracker-Daten zu verlangen",
        "usUsersTitle": "Informationen für US-Benutzer",
        "usUsersText": "Nach den staatlichen Datenschutzgesetzen können Benutzer:",
        "usRight1": "Der \"Weitergabe\" persönlicher Informationen widersprechen",
        "usRight2": "Zielgerichteter Werbung widersprechen",
        "usRight3": "Die Verwendung sensibler Informationen einschränken",
        "definitionsTitle": "Definitionen",
        "def1": "<strong>Tracker:</strong> Jede Technologie, die Tracking ermöglicht (Cookies, Pixel, Fingerprinting)",
        "def2": "<strong>Cookie:</strong> Kleine Datendatei, die auf dem Gerät des Benutzers gespeichert wird",
        "def3": "<strong>First-Party-Tracker:</strong> Vom besuchten Website gesetzt",
        "def4": "<strong>Third-Party-Tracker:</strong> Von anderen Domains als der besuchten Website gesetzt",
        "contactInfoTitle": "Kontaktinformationen",
        "contactName": "Daniel Asghar",
        "contactRole": "Business Development Manager & CEO",
        "contactCompany": "HECKTO Ltd",
        "contactAddress": "8 Cunningham Court, Blackburn, UK, BB1 2QX",
        "contactEmail": "E-Mail des Eigentümers: sales@heckto.it"
    }
};

// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-button');
    
    // Function to translate the page
    const translatePage = (lang) => {
        for (const key in translations[lang]) {
            const elements = document.querySelectorAll(`[data-lang-key="${key}"]`);
            elements.forEach(el => {
                // Handle different element types appropriately
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.value = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            });
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    };

    // Event listeners for language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Translate page
            const lang = button.getAttribute('data-lang');
            translatePage(lang);
            
            // Save preference to localStorage
            localStorage.setItem('preferredLang', lang);
        });
    });

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    const activeButton = document.querySelector(`.lang-button[data-lang="${savedLang}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
        translatePage(savedLang);
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Section animations
    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                once: true
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Header animation on load
    gsap.from(".header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    // Footer animation
    gsap.from(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 95%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "power2.out"
    });
});