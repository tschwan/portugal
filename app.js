const STATION_KEYS = ['station-1', 'station-2', 'station-3', 'station-4', 'station-5'];

const STATIONS_DATA = {
    'station-1': {
        id: 'station-1',
        title: 'Anreise & Start in Faro',
        dates: '04.09. – 05.09.2026',
        badge: '01 ANREISE • TAG 0–1',
        heroImage: 'images/hotel-faro-3k.jpg',
        description: 'Parken am Flughafen Weeze P3, Flug nach Faro, erste Nacht im Hotel 3K direkt am Flughafen und Mietwagenübernahme am Samstag um 09:30 Uhr bei EPI Rent a Car.',
        hotel: {
            name: 'Hotel 3K Aeropuerto Faro',
            meta: '1 Nacht (Fr–Sa, 04.–05.09.) • DZ • Direkt am Flughafen Faro',
            mapsQuery: 'Hotel 3K Faro Aeroporto',
            website: 'https://www.hotel3kfaro.com/en/',
            image: 'images/hotel-faro-3k.jpg',
            details: 'Perfekt für die späte Ankunft (22:50 Uhr). Nur ca. 700 m vom Terminal entfernt mit Außenpool.'
        },
        spots: [
            {
                id: 's1-parken-weeze',
                title: 'Parkplatz Flughafen Weeze P3',
                time: 'Fr, 04.09. • Einfahrt ab 17:00 Uhr',
                category: 'roadtrip',
                badges: ['Parkplatz Weeze', 'Buchung WEWBP864120'],
                description: 'Gebuchter Stellplatz auf Parkplatz P3 am Flughafen Niederrhein / Weeze.',
                bullets: [
                    '<strong>Buchungsnummer:</strong> WEWBP864120',
                    '<strong>Einfahrt:</strong> Ab Freitag, 04.09.2026 um 17:00 Uhr.',
                    '<strong>Ausfahrt reserviert bis:</strong> Samstag, 19.09.2026 um 02:00 Uhr.',
                    '<strong>Schrankenablauf:</strong> Jede der 4 Einfahrtsspuren nutzbar. Die Schranke öffnet <strong>automatisch per Kennzeichenerkennung</strong>.',
                    '<strong>Hilfe bei Störung:</strong> Telefon-Taste (Hilfe) an der Säule drücken (24h Parkleitstelle).',
                    '<strong>Fußweg:</strong> Ca. 10–15 Minuten bis zum Terminal.'
                ],
                location: 'Flughafen Weeze P3',
                mapsQuery: 'Airport Weeze P3'
            },
            {
                id: 's1-flug-hinflug',
                title: 'Hinflug: Weeze ➔ Faro (Ryanair)',
                time: 'Fr, 04.09. • 20:45 – 22:50 Uhr',
                category: 'roadtrip',
                badges: ['Hinflug', 'Ryanair Direktflug'],
                description: 'Direktflug von Weeze (NRN) nach Faro (FAO).',
                bullets: [
                    '<strong>Abflug Weeze:</strong> 20:45 Uhr (MESZ)',
                    '<strong>Ankunft Faro:</strong> 22:50 Uhr (WESZ / portugiesische Ortszeit)',
                    '<strong>Flugdauer:</strong> ca. 3 Std. 05 Min.'
                ],
                location: 'Weeze (NRN) ➔ Faro (FAO)',
                mapsQuery: 'Aeroporto de Faro'
            },
            {
                id: 's1-hotel-3k',
                title: 'Hotel 3K Aeropuerto Faro',
                time: 'Fr, 04.09. • Check-in nach Landung',
                category: 'roadtrip',
                badges: ['Erste Nacht', 'Flughafen Faro'],
                image: 'images/hotel-faro-3k.jpg',
                website: 'https://www.hotel3kfaro.com/en/',
                description: 'Kurze Wege nach der Landung um 22:50 Uhr: Ca. 700 m zu Fuß vom Terminal entfernt.',
                bullets: [
                    '<strong>Zimmer:</strong> Doppelzimmer (DZ)',
                    '<strong>Ablauf:</strong> Nach der Landung direkt einchecken und ausschlafen vor der Mietwagenabholung am Samstagmorgen.'
                ],
                location: 'Faro Flughafen',
                mapsQuery: 'Hotel 3K Faro Aeroporto'
            },
            {
                id: 's1-mietwagen-annahme',
                title: 'Mietwagenannahme (EPI Rent a Car)',
                time: 'Sa, 05.09. • 09:30 Uhr',
                category: 'roadtrip',
                badges: ['Mietwagen EPI', '09:30 Uhr', 'Vollkasko 0€ SB'],
                description: 'Fahrzeugübernahme am Samstagmorgen im Büro von EPI Rent a Car in Faro.',
                bullets: [
                    '<strong>Termin:</strong> Samstag, 05.09.2026 um <strong>09:30 Uhr</strong>.',
                    '<strong>Vermieter & Ort:</strong> EPI Rent a Car Büro Faro.',
                    '<strong>Fahrzeugklasse:</strong> Seat Ibiza (oder vergleichbar).',
                    '<strong>Konditionen:</strong> Inklusive 2. Fahrer und ohne Selbstbeteiligung.',
                    '<strong>Weiterfahrt:</strong> Um 10:00 Uhr direkter Start des Panorama-Roadtrips über Monchique & Fóia ins Alentejo.'
                ],
                location: 'EPI Rent a Car Büro Faro',
                mapsQuery: 'EPI Rent a Car Faro'
            }
        ]
    },
    'station-2': {
        id: 'station-2',
        title: 'Zambujeira do Mar & Wilde Alentejo-Küste',
        dates: '05.09. – 09.09.2026',
        badge: '02 ZAMBUJEIRA • TAG 1–5',
        heroImage: 'images/hero-alentejo-coast.jpg',
        description: 'Vom Panorama-Roadtrip über das Monchique-Gebirge bis zu einsamen Klippen, Radtouren ab Haustür und Klippen-Fischlokalen.',
        hotel: {
            name: 'Monte do Papa-léguas — Turismo Rural',
            meta: '4 Nächte (05.–09.09.) • DZ inkl. Frühstück • Pool',
            mapsQuery: 'Monte do Papa-léguas Zambujeira do Mar',
            website: 'https://www.montedopapaleguas.pt/',
            image: 'images/hotel-monte-papa-leguas.jpg',
            details: 'Ländliche Oase an der Westküste. Ruhiger Hof mit Pool, perfekt zum Entspannen.'
        },
        spots: [
            {
                id: 's2-tag1-roadtrip-complete',
                title: 'Tag 1 (Sa, 05.09.): Panorama-Roadtrip Faro ➔ Zambujeira do Mar',
                time: '10:00 – 17:30 Uhr • Ganztages-Roadtrip (Start nach Mietwagenannahme 09:30 Uhr)',
                category: 'roadtrip',
                badges: ['Roadtrip Tag 1', 'Serra de Monchique', 'Fóia 902m', 'Tasca do Petrol', 'Odemira'],
                image: 'images/hero-monchique-foia.jpg',
                description: 'Die malerische Panoramafahrt von Faro hinauf in die Serra de Monchique, über den höchsten Gipfel der Algarve und durch das Alentejo-Hinterland bis nach Zambujeira do Mar.',
                bullets: [
                    '<strong>09:30 Uhr – Mietwagenannahme:</strong> Übernahme des Seat Ibiza im Büro von EPI Rent a Car in Faro.',
                    '<strong>10:00 – 11:00 Uhr – Caldas de Monchique:</strong> Historisches, schattiges Thermaldorf im tiefen Tal mit natürlichen Heilquellen, alten Bäumen und erstem Galão auf dem Kopfsteinpflaster-Dorfplatz.',
                    '<strong>12:15 Uhr – Gipfel Fóia (902 m):</strong> Höchster Punkt der gesamten Algarve mit 360-Grad-Rundumblick bis zum Atlantik und bizarren Monolithen.',
                    '<strong>13:00 Uhr – Bergstraße M901:</strong> Traumhafte Kurvenstrecke über Marmelete durch dichte Korkeichen- und Eukalyptuswälder.',
                    '<strong>13:30 Uhr – Mittagspause A Tasca do Petrol:</strong> Legendäre, urige Bergschänke mit geschmortem Wildschwein (Javali), Iberico-Schwein (Porco Preto) und hausgemachten Honig-Mandel-Desserts.',
                    '<strong>16:00 Uhr – Odemira:</strong> Das weiße Herz des Alentejo – Uferweg am Rio Mira, weiß getünchte Gassen und Panoramablick von der historischen Windmühle Moinho de Vento.',
                    '<strong>17:30 Uhr – Ankunft Monte do Papa-léguas:</strong> Einchecken in Zambujeira do Mar und den Tag am Pool ausklingen lassen.'
                ],
                location: 'Faro ➔ Monchique ➔ Odemira ➔ Zambujeira',
                mapsQuery: 'Miradouro da Fóia Monchique'
            },
            {
                id: 's2-tour-nord',
                title: 'Fahrrad-Tour Nord: Klippen, Fischer & Störche',
                time: 'Halbtages-Tour ab Haustür (ca. 10 km einfach)',
                category: 'activities',
                badges: ['Rad-Tour Nord', 'Cabo Sardão', 'Klippenstörche'],
                image: 'images/hero-alentejo-coast.jpg',
                description: 'Herrliche Küstenradtour direkt ab dem Monte do Papa-léguas über den Küstenradweg nach Norden.',
                bullets: [
                    '<strong>Zambujeira do Mar:</strong> Ortskern und Strände Praia da Zambujeira & Alterinhos.',
                    '<strong>Entrada da Barca:</strong> Wilder Klippen-Fischerhafen in einer tiefen Felsspalte mit den Fischlokalen O Sacas & A Barca.',
                    '<strong>Praia do Cavaleiro:</strong> Schmugglerbucht mit in den Fels gehauenem Holztreppen-Abstieg.',
                    '<strong>Cabo Sardão:</strong> Weißer Leuchtturm und Weißstörche, die weltweit nur hier direkt auf nackten Felsnadeln über den Wellen nisten.'
                ],
                location: 'Zambujeira ➔ Cabo Sardão',
                mapsQuery: 'Farol do Cabo Sardão'
            },
            {
                id: 's2-tour-sued',
                title: 'Fahrrad-Tour Süd: Fado, Streetart & Praia da Amália',
                time: 'Halbtages-Tour ab Haustür (ca. 8 km einfach)',
                category: 'activities',
                badges: ['Rad-Tour Süd', 'Praia da Amália', 'Fado & Bach'],
                image: 'images/praia-da-amalia.jpg',
                description: 'Südliche Radroute zu Fado-Kultur und einem der magischsten Strände Portugals.',
                bullets: [
                    '<strong>Brejão:</strong> Ruhiges Straßendorf mit großem Street-Art-Mural der Fado-Legende Amália Rodrigues. Im Tante-Emma-Laden (Mercearia) frische Feigen mitnehmen.',
                    '<strong>Praia da Amália:</strong> Räder an Gewächshäusern parken, durch einen dichten Bambustunnel wandern bis zum Strand mit natürlichem Bach-Wasserfall (am besten bei Ebbe!).'
                ],
                location: 'Brejão & Praia da Amália',
                mapsQuery: 'Praia da Amália Brejão'
            },
            {
                id: 's2-fisherman',
                title: 'Fisherman’s Trail Küstenwanderung',
                time: 'Flexibel (2–3 Stunden)',
                category: 'activities',
                badges: ['Wanderung', 'Fisherman’s Trail', 'Klippenpfad'],
                description: 'Der rot-blau markierte Weltklasse-Küstenwanderweg führt direkt an der Haustür vorbei über feine Sand-Klippenpfade gen Norden.',
                bullets: [
                    '<strong>Aussichten:</strong> Spektakuläre Panoramen auf versteckte, unzugängliche Buchten.',
                    '<strong>Tipp:</strong> Feste Schuhe anziehen und ausreichend Trinkwasser mitnehmen.'
                ],
                location: 'Fisherman’s Trail Zambujeira',
                mapsQuery: 'Rota Vicentina Zambujeira do Mar'
            },
            {
                id: 's2-rio-mira',
                title: 'Kajak & SUP auf dem Rio Mira',
                time: '25 Min. Anfahrt nördlich',
                category: 'activities',
                badges: ['Aktivität', 'Rio Mira', 'Kajak & SUP'],
                description: 'Wenn der Atlantik zu rau ist: Der Rio Mira ist glasklar und strömungsarm. Boards oder Kajaks direkt am Ufer in Vila Nova de Milfontes leihen.',
                bullets: [
                    '<strong>Paddeln:</strong> Lautlos flussaufwärts durch grüne Natur gleiten.'
                ],
                location: 'Vila Nova de Milfontes',
                mapsQuery: 'Praia da Franquia Vila Nova de Milfontes'
            },
            {
                id: 's2-pego-pias',
                title: 'Pego das Pias (Canyon-Schwimmen)',
                time: 'Natur-Geheimtipp im Binnenland',
                category: 'highlights',
                badges: ['Geheimtipp', 'Pego das Pias', 'Canyon-Bad'],
                description: 'Wilde Felsschlucht zwischen Odemira und São Luís mit tiefen, spiegelglatten Süßwasser-Gumpen im Schatten.',
                bullets: [
                    '<strong>Abkühlung:</strong> Perfekt zum Klippenspringen und Baden abseits des Meeres.'
                ],
                location: 'São Luís / Odemira',
                mapsQuery: 'Pego das Pias Odemira'
            },
            {
                id: 's2-nord-trips',
                title: 'Tagesausflüge gen Norden (Almograve & Porto Covo)',
                time: 'Mit dem Auto (20–45 Min.)',
                category: 'highlights',
                badges: ['Küstentrip', 'Almograve', 'Porto Covo'],
                description: 'Erkundung der nördlichen Alentejo-Küste mit dem Auto.',
                bullets: [
                    '<strong>Praia de Almograve (20 Min.):</strong> Breiter Naturstrand mit messerscharfem Schieferriff-Labyrinth bei Ebbe.',
                    '<strong>Vila Nova de Milfontes:</strong> Weiße Festung Forte de São Clemente und windgeschützter Flussstrand Praia da Franquia.',
                    '<strong>Porto Covo & Ilha do Pessegueiro (45 Min.):</strong> Weiß-blaues Fischerdorf mit quadratischem Platz, Buchten (Praia dos Samoqueiros) und Festungsinsel.'
                ],
                location: 'Almograve & Porto Covo',
                mapsQuery: 'Praia de Almograve'
            },
            {
                id: 's2-food-sacas',
                title: 'Restaurante O Sacas',
                time: 'Mittag oder Abend',
                category: 'food',
                badges: ['Fisch-Klassiker', 'Entrada da Barca'],
                image: 'images/entrada-da-barca.jpg',
                description: 'Uriges Klippenrestaurant direkt über dem Fischerhafen Entrada da Barca. Authentischer geht es kulinarisch kaum.',
                bullets: [
                    '<strong>Auf dem Teller:</strong> Fangfrischer Grillfisch (wird oft am Tisch präsentiert), Feijoada de Búzios (Schneckeneintopf) und zarter Oktopus.',
                    '<strong>Atmosphäre:</strong> Meeresbrandung gegen Felsen bei bestem Blick.'
                ],
                location: 'Entrada da Barca',
                mapsQuery: 'Restaurante O Sacas Zambujeira'
            },
            {
                id: 's2-food-azenha',
                title: 'Restaurante Azenha do Mar',
                time: '15 Min. südlich (Mittag/Abend)',
                category: 'food',
                badges: ['Meeresfrüchte-Kult', 'Azenha do Mar'],
                description: 'Legendäres Klippenlokal im gleichnamigen Fischerdorf. Keine Reservierung – Namen auf die Liste an der Tür schreiben und mit einem Imperial-Bier an der Klippe warten!',
                bullets: [
                    '<strong>Spezialität:</strong> Sapateira Recheada (gefüllter Taschenkrebs), Meeresfrüchte-Platten und fangfrische Krebse zu unschlagbaren Preisen.'
                ],
                location: 'Azenha do Mar',
                mapsQuery: 'Restaurante Azenha do Mar'
            },
            {
                id: 's2-food-miramar',
                title: 'Restaurante Miramar',
                time: 'Sundowner-Abend',
                category: 'food',
                badges: ['Panoramablick', 'Sundowner Zambujeira'],
                description: 'Terrasse direkt an der Klippenkante über dem Hauptstrand von Zambujeira do Mar mit Blick auf die Brandung und den Sonnenuntergang.',
                bullets: [
                    '<strong>Highlights:</strong> Amêijoas à Bulhão Pato (Venusmuscheln in Knoblauch/Koriander), Schwertmuschel-Reis (Arroz de Lingueirão) und gegrillter Robalo.'
                ],
                location: 'Zambujeira Ortskern',
                mapsQuery: 'Restaurante Miramar Zambujeira do Mar'
            },
            {
                id: 's2-food-costa',
                title: 'Marisqueira Costa Alentejana & UBZ Central',
                time: 'Im Ortskern Zambujeira',
                category: 'food',
                badges: ['Traditionell', 'Petiscos & Cataplana'],
                description: 'Zwei Top-Adressen im Zentrum von Zambujeira:',
                bullets: [
                    '<strong>Costa Alentejana:</strong> Benchmark für Cataplanas, Arroz de Marisco und Plumas vom Porco Preto.',
                    '<strong>UBZ Central:</strong> Lässige Bier- und Petiscos-Bar mit Cerveja Artesanal, Knoblauchgarnelen und Burgern.'
                ],
                location: 'Zambujeira do Mar',
                mapsQuery: 'Marisqueira Costa Alentejana'
            }
        ]
    },
    'station-3': {
        id: 'station-3',
        title: 'Luz, Lagos & die West-Algarve',
        dates: '09.09. – 13.09.2026',
        badge: '03 LUZ & LAGOS • TAG 5–9',
        heroImage: 'images/hero-ponta-da-piedade.jpg',
        description: 'Vom Ende der Welt am Cabo de São Vicente zu goldenen Felsgrotten, maurischen Gassen in Lagos und entspannten Stränden.',
        hotel: {
            name: 'Baia da Luz Resort',
            meta: '4 Nächte (09.–13.09.) • Apartment • Ruhige Poolanlage nahe Strand',
            mapsQuery: 'Baia da Luz Resort Praia da Luz',
            website: 'https://www.baiadaluz.com/',
            image: 'images/hotel-baia-da-luz.jpg',
            details: 'Komfortables Apartment-Resort mit Pool im entspannten Badeort Praia da Luz.'
        },
        spots: [
            {
                id: 's3-roadtrip-day5',
                title: 'Tag 5 (09.09.): Roadtrip Zambujeira ➔ Luz',
                time: '09:30 – 16:00 Uhr • Tag 5',
                category: 'roadtrip',
                badges: ['Roadtrip Tag 5', 'Odeceixe', 'Cabo de São Vicente', 'Sagres'],
                image: 'images/cabo-de-sao-vicente.jpg',
                description: 'Spektakuläre Fahrt von Zambujeira nach Süden über die Grenzlinie zur Algarve bis zum Cabo de São Vicente.',
                bullets: [
                    '<strong>09:50–10:40 Odeceixe:</strong> Traumhafte Hufeisen-Flussschleife des Rio Seixe am Strand. Schneller Galão to-go am Aussichtspunkt.',
                    '<strong>11:15–12:00 Arrifana:</strong> Klippenspitze Fortaleza da Arrifana mit Blick auf die Felsnadel Pedra da Agulha.',
                    '<strong>12:45–13:15 Cabo de São Vicente:</strong> 75m senkrechte Klippen am südwestlichsten Punkt Europas mit rotem Leuchtturm.',
                    '<strong>13:25–15:15 Sagres:</strong> Mittagspause bei Three Little Birds (Burger, Tacos & Bowls) & Plateau der Fortaleza de Sagres.',
                    '<strong>16:00 Ankunft Luz:</strong> Koffer aufs Zimmer und Ankunftsbier am Hausstrand.'
                ],
                location: 'Odeceixe ➔ Sagres ➔ Luz',
                mapsQuery: 'Farol do Cabo de São Vicente'
            },
            {
                id: 's3-odeceixe',
                title: 'Praia da Odeceixe (Flussschleife & Strand)',
                time: 'Zwischenstopp Tag 5 / Ausflug',
                category: 'highlights',
                badges: ['Natur-Highlight', 'Flussschleife Odeceixe'],
                image: 'images/praia-da-odeceixe.jpg',
                description: 'Eine der spektakulärsten Buchten Portugals, an der sich der Fluss Seixe in einer perfekten Hufeisenkurve um den Strand ins Meer schlängelt.',
                bullets: [
                    '<strong>Aussicht:</strong> Aussichtspunkt oben an den Klippen für perfekten Blick auf Surfer und Flussbett.'
                ],
                location: 'Odeceixe Grenze Algarve',
                mapsQuery: 'Praia de Odeceixe'
            },
            {
                id: 's3-ponta-piedade',
                title: 'Ponta da Piedade (Goldene Klippen & Grotten)',
                time: 'Tagsüber & Sonnenuntergang',
                category: 'highlights',
                badges: ['Klippen-Highlight', 'Ponta da Piedade', 'Kajak & Sunset'],
                image: 'images/hero-ponta-da-piedade.jpg',
                description: 'Vom Meer zerfressene goldgelbe Kalksteinfelsen, Felsentore und Meeresgrotten.',
                bullets: [
                    '<strong>Kajaktour tagsüber:</strong> Ab Lagos direkt durch die engen Felsentore paddeln.',
                    '<strong>Sonnenuntergang:</strong> Über die Holzstege oben auf den Klippen zum Leuchtturm wandern – magisches Licht auf gelbem Stein.'
                ],
                location: 'Lagos',
                mapsQuery: 'Ponta da Piedade Lagos'
            },
            {
                id: 's3-lagos-altstadt',
                title: 'Historische Altstadt von Lagos & Markthalle',
                time: 'Vormittag oder Abend',
                category: 'highlights',
                badges: ['Kultur & Stadt', 'Altstadt Lagos', 'Markthalle'],
                description: 'Lebendige Seefahrerstadt mit maurischer Stadtmauer aus dem 16. Jahrhundert, Kopfsteinpflaster und Plätzen.',
                bullets: [
                    '<strong>Highlights:</strong> Sklavenmarkt (Mercado de Escravos) und goldene Barockkirche Igreja de Santo António.',
                    '<strong>Insider-Tipp:</strong> Markthalle (Mercado Municipal) – im obersten Stockwerk Dachterrasse mit Blick über den Hafen für einen Espresso.'
                ],
                location: 'Altstadt Lagos',
                mapsQuery: 'Mercado Municipal de Lagos'
            },
            {
                id: 's3-burgau-trail',
                title: 'Klippenwanderung von Luz nach Burgau',
                time: 'Halbtages-Wanderung',
                category: 'activities',
                badges: ['Klippenpfad', 'Luz nach Burgau'],
                description: 'Mittelschwere Wanderung auf den Klippenpfaden von Praia da Luz nach Westen.',
                bullets: [
                    '<strong>Ziel Burgau:</strong> Das „portugiesische Santorini“ mit weiß-blauen Häusern, die sich steil in eine schmale Bucht schmiegen.'
                ],
                location: 'Praia da Luz nach Burgau',
                mapsQuery: 'Praia do Burgau'
            },
            {
                id: 's3-joao-arens',
                title: 'Praia de João de Arens (Klippen-Labyrinth)',
                time: 'Geheimtipp-Bucht',
                category: 'highlights',
                badges: ['Geheimtipp', 'João de Arens', 'Pinienbuchten'],
                description: 'Wilder, unbeschilderter Küstenabschnitt zwischen Alvor und Portimão mit pinienbewachsenen Felsnadeln und winzigen Sandbuchten durch Felstunnel.',
                bullets: [
                    '<strong>Erkunden:</strong> Am Ende der Schotterstraße beim Pinienwald parken und Trampelpfade auf eigene Faust erkunden.'
                ],
                location: 'Zwischen Alvor & Portimão',
                mapsQuery: 'Praia de João de Arens'
            },
            {
                id: 's3-rocha-negra',
                title: 'Rocha Negra Strandwanderung & Picknick',
                time: 'Später Nachmittag',
                category: 'highlights',
                badges: ['Vulkanfels', 'Rocha Negra Picknick'],
                image: 'images/praia-da-luz-rocha-negra.jpg',
                description: 'Tiefschwarze Basaltformation am östlichen Ende der Bucht von Luz – ein krasser vulkanischer Kontrast zu den sonst gelben Algarve-Klippen.',
                bullets: [
                    '<strong>Aussicht & Picknick:</strong> Kurzer Steilpfad aufs Plateau mit Wein, Käse & Oliven zum Sonnenuntergang.',
                    '<strong>Café-Tipp:</strong> Coffee & Waves an der Promenade von Luz mit Blick auf den Fels.'
                ],
                location: 'Praia da Luz',
                mapsQuery: 'Rocha Negra Praia da Luz'
            },
            {
                id: 's3-camilo-meiapraia',
                title: 'Praia do Camilo & Meia Praia',
                time: 'Strandtage',
                category: 'highlights',
                badges: ['Traumstrände', 'Praia do Camilo', 'Meia Praia'],
                description: 'Zwei vollkommen unterschiedliche Strand-Erlebnisse:',
                bullets: [
                    '<strong>Praia do Camilo:</strong> Fotogene Bilderbuch-Bucht über 200 Holzstufen mit türkisfarbenem Wasser und Felstunnel (früh morgens oder spät nachmittags besuchen).',
                    '<strong>Meia Praia:</strong> 5 km langer Sandstrand mit viel Platz und Holzsteg-Strandbars wie Linda the Beach Bar.'
                ],
                location: 'Lagos',
                mapsQuery: 'Praia do Camilo Lagos'
            },
            {
                id: 's3-food-zazu',
                title: 'Zazu Beach Club & Fortaleza da Luz',
                time: 'Abendessen / Sundowner',
                category: 'food',
                badges: ['Beach Club', 'Fortaleza da Luz', 'Cocktails'],
                description: 'Zwei kulinarische Highlights direkt in Praia da Luz:',
                bullets: [
                    '<strong>Zazu Beach Club:</strong> Stylische Crossover- und Fusionsküche, Bowls, Burger, Meeresfrüchte und Cocktails mit Blick auf die Rocha Negra.',
                    '<strong>Fortaleza da Luz:</strong> Restaurant in einer Festungsanlage aus dem 17. Jh. mit Klippengarten und edlem Flair.'
                ],
                location: 'Praia da Luz Promenade',
                mapsQuery: 'Zazu Beach Club Luz'
            },
            {
                id: 's3-food-confraria',
                title: 'Confraria (Tapas) & Black and White Coffee',
                time: 'Petiscos / Specialty Coffee',
                category: 'food',
                badges: ['Petiscos & Wein', 'Specialty Coffee'],
                description: 'Für Genuss in entspannter Atmosphäre:',
                bullets: [
                    '<strong>Confraria (Luz):</strong> Gemütliche Tapas-Oase (Petiscos) in einer Gasse mit lebendiger Terrasse und fantastischer Weinauswahl.',
                    '<strong>Black and White Coffee Shop (Lagos):</strong> Modernes Café mit erstklassigem Specialty Coffee und Kuchen.'
                ],
                location: 'Luz & Lagos',
                mapsQuery: 'Confraria Praia da Luz'
            }
        ]
    },
    'station-4': {
        id: 'station-4',
        title: 'Olhos de Água, Felsalgarve & Ost-Algarve',
        dates: '13.09. – 18.09.2026',
        badge: '04 OLHOS DE ÁGUA • TAG 9–15',
        heroImage: 'images/hero-praia-da-falesia.jpg',
        description: 'Monumentale rote Klippen an der Praia da Falésia, Benagil Meereshöhle, Altstadt von Tavira, Ria Formosa Inseln und Piri-Piri Hähnchen in Guia.',
        hotel: {
            name: '3HB Falésia Garden',
            meta: '5 Nächte (13.–18.09.) • Apartment • Inkl. Frühstück • Klippenlage',
            mapsQuery: '3HB Falésia Garden Olhos de Água',
            website: 'https://www.3hb.com/hoteis/3hb-falesia-garden/',
            image: 'images/hotel-3hb-falesia.jpg',
            details: 'Traumhafte Lage direkt oberhalb der roten Klippen der Praia da Falésia in Olhos de Água.'
        },
        spots: [
            {
                id: 's4-roadtrip-day9',
                title: 'Tag 9 (13.09.): Roadtrip Luz ➔ Olhos de Água',
                time: '09:30 – 17:00 Uhr • Tag 9',
                category: 'roadtrip',
                badges: ['Roadtrip Tag 9', 'Ferragudo', 'Praia da Marinha', 'Algarve Shopping'],
                description: 'Fahrt von Luz über Ferragudo und die berühmte Praia da Marinha bis zum 3HB Falésia Garden.',
                bullets: [
                    '<strong>10:00–11:15 Ferragudo:</strong> Weißes Fischerdorf, Spaziergang hoch zur Kirche für den Flussblick, Espresso an der Praça Rainha Dona Leonor.',
                    '<strong>11:35–12:45 Praia da Marinha:</strong> Klippenpfad nach Westen mit freiem Blick auf die monumentalen Doppel-Felsbögen ("M" im Wasser).',
                    '<strong>13:00–14:15 Sand City Lagoa (Optional):</strong> Größte Sandskulpturen der Welt.',
                    '<strong>14:35–16:30 Algarve Shopping Guia:</strong> Shopping und Continente-Supermarkt für lokale Spezialitäten.',
                    '<strong>17:00 Ankunft Olhos de Água:</strong> Check-in im 3HB Falésia Garden & Sundowner an den Klippen.'
                ],
                location: 'Ferragudo ➔ Marinha ➔ Olhos de Água',
                mapsQuery: 'Praia da Marinha Lagoa'
            },
            {
                id: 's4-praia-falesia',
                title: 'Praia da Falésia & Pinienwald von Alfamar',
                time: 'Direkt vor der Haustür',
                category: 'highlights',
                badges: ['Hotelstrand', 'Rote Klippen Falésia', 'Pinienwald'],
                image: 'images/hero-praia-da-falesia.jpg',
                description: 'Fast 6 Kilometer langer Traumstrand mit einer monumentalen senkrechten Steilwand aus intensiv roten und weißen Tonsanden.',
                bullets: [
                    '<strong>Spaziergang:</strong> Am späten Nachmittag leuchten die roten Felsen in der tiefstehenden Sonne.',
                    '<strong>Pinienwald:</strong> Schattige Spazierwege auf den Klippen mit Bänken und Meerblick abseits des Strandtrubels.'
                ],
                location: 'Olhos de Água / Falésia',
                mapsQuery: 'Praia da Falésia'
            },
            {
                id: 's4-suesswasserquellen',
                title: 'Die Süßwasserquellen von Olhos de Água',
                time: 'Bei Ebbe am Hauptstrand',
                category: 'highlights',
                badges: ['Naturphänomen', 'Süßwasserquellen Ebbe'],
                description: 'Phänomen, dem der Ort seinen Namen verdankt ("Augen des Wassers"). Bei Ebbe quillt eiskaltes Süßwasser aus dem nassen Sandboden.',
                bullets: [
                    '<strong>Historie:</strong> Lokale Fischer nutzten die runden Süßwasser-Augen seit Jahrhunderten zur Kühlung ihres Fangs.'
                ],
                location: 'Praia de Olhos de Água',
                mapsQuery: 'Praia dos Olhos de Água'
            },
            {
                id: 's4-benagil',
                title: 'Bootsfahrt zur Benagil-Höhle',
                time: 'Frühmorgens (ca. 09:00 Uhr Tour)',
                category: 'activities',
                badges: ['Bootstour', 'Benagil Meereshöhle'],
                image: 'images/benagil-cave.jpg',
                description: 'Die weltberühmte Meereshöhle mit dem markanten runden Loch in der Decke, durch das die Sonne auf den sandigen Innenstrand scheint.',
                bullets: [
                    '<strong>Tipp:</strong> Früheste Tour des Tages buchen (ab Albufeira oder Vilamoura), um die Höhle vor den Touristenmassen zu erleben (Schwimmen ist lebensgefährlich!).'
                ],
                location: 'Ab Albufeira / Vilamoura',
                mapsQuery: 'Algar de Benagil'
            },
            {
                id: 's4-tavira',
                title: 'Tavira (Das Venedig der Algarve)',
                time: 'Tagesausflug nach Osten (ca. 40 Min.)',
                category: 'highlights',
                badges: ['Kultur & Altstadt', 'Tavira', 'Römische Brücke'],
                image: 'images/tavira-historic.jpg',
                description: 'Gilt für viele als schönste Stadt der Algarve. Der Fluss Gilão teilt die Stadt, überspannt von einer antiken römischen Brücke.',
                bullets: [
                    '<strong>Entdecken:</strong> Über 30 Kirchen, typische Scherendächer (Telhados de Tesoura) und alte Burgruine.',
                    '<strong>Geheimtipp:</strong> Câmera Escura im alten Wasserturm (Torre de Tavira) für ein 360-Grad-Live-Spiegelbild der Stadt.'
                ],
                location: 'Tavira, Ost-Algarve',
                mapsQuery: 'Ponte Romana de Tavira'
            },
            {
                id: 's4-ria-formosa',
                title: 'Fischerstadt Olhão & Ria Formosa Inseln',
                time: 'Samstagmorgen oder Ausflug',
                category: 'highlights',
                badges: ['Naturparadies', 'Olhão Markthalle', 'Ria Formosa Inseln'],
                image: 'images/ria-formosa.jpg',
                description: 'Ausflug in das riesige Lagunen- und Salzwiesenparadies der Ria Formosa.',
                bullets: [
                    '<strong>Olhão Markthallen:</strong> Berühmte rote Backsteinhallen am Wasser mit dem besten Fisch- und Bauernmarkt (besonders samstags).',
                    '<strong>Inseln Farol & Culatra:</strong> Mit der günstigen Linienfähre übersetzen auf autofreie Sandinseln mit reinen Sandwegen und endlosen Sandbänken.'
                ],
                location: 'Olhão & Ria Formosa',
                mapsQuery: 'Mercados de Olhão'
            },
            {
                id: 's4-faro-altstadt',
                title: 'Faro Altstadt (Vila Adentro) & Knochenkapelle',
                time: 'Halbtagesausflug',
                category: 'highlights',
                badges: ['Altstadt Faro', 'Vila Adentro', 'Knochenkapelle'],
                description: 'Die vom Tourismus kaum berührte, von mittelalterlichen Mauern umschlossene Altstadt Faros.',
                bullets: [
                    '<strong>Vila Adentro:</strong> Durch das Stadttor Arco da Vila zu Orangenbaum-Plätzen und der Kathedrale Sé.',
                    '<strong>Makaberer Tipp:</strong> Capela dos Ossos bei der Carmo-Kirche mit Wänden aus Knochen von über 1200 Mönchen.'
                ],
                location: 'Faro Altstadt',
                mapsQuery: 'Arco da Vila Faro'
            },
            {
                id: 's4-geheimtipps-ost',
                title: 'Hinterland & Perlen: Alte, Cacela Velha & Loulé',
                time: 'Ausflüge abseits der Massen',
                category: 'highlights',
                badges: ['Hinterland', 'Alte Naturbad', 'Cacela Velha'],
                description: 'Drei authentische Ziele im Hinterland und Osten:',
                bullets: [
                    '<strong>Alte:</strong> Unberührtes Quellendorf mit den Fontes (künstlich angelegtes Naturschwimmbad im kühlen Flusswasser).',
                    '<strong>Cacela Velha:</strong> Winziges weißes Festungsdorf mit Traumblick über die Ria Formosa Lagune bei Ebbe.',
                    '<strong>Loulé:</strong> Lebendige Marktstadt mit arabisch inspirierter Markthalle.'
                ],
                location: 'Alte, Cacela Velha & Loulé',
                mapsQuery: 'Fonte Grande de Alte'
            },
            {
                id: 's4-headlands-trail',
                title: 'Trail of the Headlands & Bucht Praia da Coelha',
                time: 'Wandern & Schnorcheln',
                category: 'activities',
                badges: ['Wanderpfad', 'Headlands Trail', 'Praia da Coelha'],
                description: 'Einsame Klippenwege und versteckte Muschelbuchten:',
                bullets: [
                    '<strong>Trail of the Headlands:</strong> Küstenpfad zwischen Carvoeiro und Ferragudo – weniger überlaufen als die Hanging Valleys.',
                    '<strong>Praia da Coelha:</strong> Winzige windgeschützte Bucht über Fußweg vorbei an Olivenbäumen mit glasklarem Schnorchel-Wasser.'
                ],
                location: 'Carvoeiro / Albufeira West',
                mapsQuery: 'Praia da Coelha'
            },
            {
                id: 's4-food-cigale-teodosio',
                title: 'La Cigale & O Teodósio (Die Wiege des Piri-Piri)',
                time: 'Fisch an der Klippe vs. Piri-Piri',
                category: 'food',
                badges: ['Fisch & Piri-Piri', 'La Cigale', 'O Teodósio Guia'],
                description: 'Zwei absolute Legenden der Algarve-Gastronomie:',
                bullets: [
                    '<strong>La Cigale (Olhos de Água):</strong> Traditionslokal direkt an der Klippenkante des Hauptstrands mit Cataplana und frischer Seezunge.',
                    '<strong>O Teodósio (Guia):</strong> Riesig, laut und maximal authentisch – das knusprig-scharfe Original Frango Piri-Piri vom Holzkohlegrill mit handgemachten Pommes.'
                ],
                location: 'Olhos de Água & Guia',
                mapsQuery: 'Restaurante O Teodósio Guia'
            },
            {
                id: 's4-food-vilajoya-fazgostos',
                title: 'Vila Joya Sea & Faz Gostos (Faro)',
                time: 'Sundowner-Luxus & Gourmet-Finale',
                category: 'food',
                badges: ['Fine Dining', 'Vila Joya Sea', 'Faz Gostos Faro'],
                description: 'Besondere kulinarische Adressen für den Ausklang:',
                bullets: [
                    '<strong>Vila Joya Sea (Praia de Galé):</strong> Exklusive Klippen-Strandbar für Sundowner-Cocktails und Sushi mit den Füßen fast im Sand.',
                    '<strong>Faz Gostos (Faro Vila Adentro):</strong> Gehobene, bodenständige Spitzenküche in alten Altstadt-Gewölben (Bacalhau & Alentejo-Schwein).'
                ],
                location: 'Galé & Faro',
                mapsQuery: 'Faz Gostos Faro'
            }
        ]
    },
    'station-5': {
        id: 'station-5',
        title: 'Abreise & Heimflug nach Weeze',
        dates: '18.09.2026',
        badge: '05 ABREISE • TAG 15',
        heroImage: 'images/hero-monchique-foia.jpg',
        description: 'Check-out in Olhos de Água, Mietwagenrückgabe am Flughafen Faro, Rückflug mit Ryanair und Parkplatz-Ausfahrt am Flughafen Weeze P3.',
        hotel: {
            name: '3HB Falésia Garden (Check-out)',
            meta: 'Check-out am Vormittag • Fahrt zum Flughafen Faro ca. 35 Min.',
            mapsQuery: '3HB Falésia Garden Olhos de Água',
            website: 'https://www.3hb.com/hoteis/3hb-falesia-garden/',
            image: 'images/hotel-3hb-falesia.jpg',
            details: 'Letztes Frühstück auf den Klippen vor der Fahrt zum Flughafen Faro.'
        },
        spots: [
            {
                id: 's5-checkout',
                title: 'Check-out & Fahrt zum Flughafen Faro',
                time: 'Fr, 18.09. • Vormittag / Mittag',
                category: 'roadtrip',
                badges: ['Check-out', 'Fahrt Flughafen 35 Min.'],
                description: 'Abschied von Olhos de Água und entspannte Fahrt zum Flughafen Faro.',
                bullets: [
                    '<strong>Check-out:</strong> Bis spätestens 11:00 / 12:00 Uhr.',
                    '<strong>Route zum Flughafen:</strong> Über die N125 oder Autobahn A22 nach Osten (ca. 35 km / 35 Minuten Fahrzeit).'
                ],
                location: 'Olhos de Água ➔ Flughafen Faro',
                mapsQuery: 'Aeroporto de Faro'
            },
            {
                id: 's5-mietwagen-rueckgabe',
                title: 'Mietwagenrückgabe (EPI Rent a Car)',
                time: 'Fr, 18.09. • bis ca. 14:00 Uhr',
                category: 'roadtrip',
                badges: ['Mietwagen-Abgabe', 'EPI Rent a Car', 'Flughafen Faro'],
                description: 'Fahrzeugabgabe vor dem Rückflug.',
                bullets: [
                    '<strong>Vermieter:</strong> EPI Rent a Car',
                    '<strong>Fahrzeug:</strong> Seat Ibiza (vollgetankt zurückgeben)',
                    '<strong>Zeitfenster:</strong> Ca. 2 Stunden vor Abflug zur entspannten Gepäckabgabe und Sicherheitskontrolle.'
                ],
                location: 'Flughafen Faro Terminal',
                mapsQuery: 'EPI Rent a Car Aeroporto Faro'
            },
            {
                id: 's5-rueckflug',
                title: 'Rückflug: Faro ➔ Weeze (Ryanair)',
                time: 'Fr, 18.09. • 16:20 – 20:20 Uhr',
                category: 'roadtrip',
                badges: ['Rückflug', 'Ryanair', 'Faro nach Weeze'],
                description: 'Direktflug von Faro (FAO) zurück nach Weeze (NRN).',
                bullets: [
                    '<strong>Abflug Faro:</strong> 16:20 Uhr (WESZ / portugiesische Ortszeit)',
                    '<strong>Ankunft Weeze:</strong> 20:20 Uhr (MESZ / deutsche Zeit)',
                    '<strong>Flugdauer:</strong> ca. 3 Std. 00 Min.'
                ],
                location: 'Faro (FAO) ➔ Weeze (NRN)',
                mapsQuery: 'Airport Weeze'
            },
            {
                id: 's5-ausfahrt-weeze',
                title: 'Ausfahrt Parkplatz Weeze P3',
                time: 'Fr, 18.09. • Ab 20:30 Uhr (reserviert bis 19.09. 02:00 Uhr)',
                category: 'roadtrip',
                badges: ['Ausfahrt Weeze P3', 'Kennzeichenerkennung'],
                description: 'Rückkehr zum eigenen Auto auf Parkplatz P3.',
                bullets: [
                    '<strong>Buchungsnummer:</strong> WEWBP864120',
                    '<strong>Ausfahrt:</strong> Schranke öffnet <strong>automatisch per Kennzeichenerkennung</strong>.',
                    '<strong>Bei Problemen:</strong> Telefon-Taste an der Ausfahrtssäule drücken.',
                    '<strong>Nachzahlung (falls nötig):</strong> Hilfetaste am Kassenautomaten drücken, Ticket erhalten & bezahlen.'
                ],
                location: 'Flughafen Weeze P3',
                mapsQuery: 'Airport Weeze P3'
            }
        ]
    }
};

class TravelApp {
    constructor() {
        this.currentStationKey = 'station-1';
        this.currentCategory = 'all';
        this.initElements();
        this.initEvents();
        this.renderStation();
    }
    initElements() {
        this.stationPills = document.querySelectorAll('.station-pill');
        this.controlsBar = document.getElementById('controlsBar');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.heroSection = document.getElementById('heroSection');
        this.countAll = document.getElementById('countAll');
        this.countRoadtrip = document.getElementById('countRoadtrip');
        this.countHighlights = document.getElementById('countHighlights');
        this.countActivities = document.getElementById('countActivities');
        this.countFood = document.getElementById('countFood');
        this.heroImage = document.getElementById('heroImage');
        this.heroStationTag = document.getElementById('heroStationTag');
        this.heroDateTag = document.getElementById('heroDateTag');
        this.heroTitle = document.getElementById('heroTitle');
        this.heroDesc = document.getElementById('heroDesc');
        this.heroHotelThumb = document.getElementById('heroHotelThumb');
        this.heroHotelName = document.getElementById('heroHotelName');
        this.heroHotelMeta = document.getElementById('heroHotelMeta');
        this.heroHotelWebBtn = document.getElementById('heroHotelWebBtn');
        this.heroHotelMapsBtn = document.getElementById('heroHotelMapsBtn');
        this.spotsContainer = document.getElementById('spotsContainer');
        this.prevStationBtn = document.getElementById('prevStationBtn');
        this.nextStationBtn = document.getElementById('nextStationBtn');
        this.prevStationTitle = document.getElementById('prevStationTitle');
        this.nextStationTitle = document.getElementById('nextStationTitle');
        this.lightboxModal = document.getElementById('lightboxModal');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxCaption = document.getElementById('lightboxCaption');
        this.closeLightboxBtn = document.getElementById('closeLightboxBtn');
    }
    initEvents() {
        this.stationPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveStation(pill.dataset.station);
            });
        });
        this.categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (btn.classList.contains('is-disabled')) return;
                this.categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = btn.dataset.cat;
                this.renderSpots();
            });
        });
        this.prevStationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentIndex = STATION_KEYS.indexOf(this.currentStationKey);
            if (currentIndex > 0) {
                this.setActiveStation(STATION_KEYS[currentIndex - 1]);
            }
        });
        this.nextStationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentIndex = STATION_KEYS.indexOf(this.currentStationKey);
            if (currentIndex < STATION_KEYS.length - 1) {
                this.setActiveStation(STATION_KEYS[currentIndex + 1]);
            }
        });
        this.closeLightboxBtn.addEventListener('click', () => {
            this.closeLightbox();
        });
        this.lightboxModal.addEventListener('click', (e) => {
            if (e.target === this.lightboxModal || e.target === this.lightboxImage) {
                this.closeLightbox();
            }
        });
        this.heroImage.addEventListener('click', () => {
            this.openLightbox(this.heroImage.src, this.heroTitle.textContent);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox();
            }
        });
    }
    setActiveStation(stationKey) {
        this.currentStationKey = stationKey;
        this.currentCategory = 'all';
        this.stationPills.forEach(p => p.classList.toggle('active', p.dataset.station === stationKey));
        this.categoryButtons.forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
        this.renderStation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    renderStation() {
        const station = STATIONS_DATA[this.currentStationKey];
        if (!station) return;
        this.heroImage.src = station.heroImage;
        this.heroStationTag.textContent = station.badge;
        this.heroDateTag.textContent = station.dates;
        this.heroTitle.textContent = station.title;
        this.heroDesc.textContent = station.description;

        this.heroHotelThumb.src = station.hotel.image;
        this.heroHotelName.textContent = station.hotel.name;
        this.heroHotelMeta.textContent = station.hotel.meta;
        if (station.hotel.website) {
            this.heroHotelWebBtn.href = station.hotel.website;
            this.heroHotelWebBtn.style.display = 'inline-flex';
        } else {
            this.heroHotelWebBtn.style.display = 'none';
        }
        this.heroHotelMapsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.hotel.mapsQuery)}`;
        
        // Update category counts & visibility
        if (this.currentStationKey === 'station-1' || this.currentStationKey === 'station-5') {
            this.controlsBar.style.display = 'none';
        } else {
            this.controlsBar.style.display = 'block';
            this.updateCategoryCounts(station.spots);
        }

        // Update Prev / Next navigation buttons
        const currentIndex = STATION_KEYS.indexOf(this.currentStationKey);
        if (currentIndex > 0) {
            this.prevStationBtn.disabled = false;
            const prevStation = STATIONS_DATA[STATION_KEYS[currentIndex - 1]];
            this.prevStationTitle.textContent = prevStation.badge.split(' • ')[0];
        } else {
            this.prevStationBtn.disabled = true;
            this.prevStationTitle.textContent = '—';
        }
        if (currentIndex < STATION_KEYS.length - 1) {
            this.nextStationBtn.disabled = false;
            const nextStation = STATIONS_DATA[STATION_KEYS[currentIndex + 1]];
            this.nextStationTitle.textContent = nextStation.badge.split(' • ')[0];
        } else {
            this.nextStationBtn.disabled = true;
            this.nextStationTitle.textContent = '—';
        }

        this.renderSpots();
    }
    updateCategoryCounts(spots) {
        const counts = { all: spots.length, roadtrip: 0, highlights: 0, activities: 0, food: 0 };
        spots.forEach(s => {
            if (counts[s.category] !== undefined) counts[s.category]++;
        });
        if (this.countAll) this.countAll.textContent = counts.all;
        if (this.countRoadtrip) this.countRoadtrip.textContent = counts.roadtrip;
        if (this.countHighlights) this.countHighlights.textContent = counts.highlights;
        if (this.countActivities) this.countActivities.textContent = counts.activities;
        if (this.countFood) this.countFood.textContent = counts.food;
        
        this.categoryButtons.forEach(btn => {
            const cat = btn.dataset.cat;
            const count = counts[cat] || 0;
            btn.classList.toggle('is-disabled', count === 0);
        });
    }
    renderSpots() {
        const station = STATIONS_DATA[this.currentStationKey];
        if (!station) return;
        const filtered = station.spots.filter(spot => {
            if (this.currentCategory !== 'all' && spot.category !== this.currentCategory) return false;
            return true;
        });
        if (filtered.length === 0) {
            this.spotsContainer.innerHTML = `
                <div class="empty-stream-card">
                    <svg class="empty-vector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
                    <div class="empty-title">Keine Einträge in dieser Kategorie</div>
                    <div class="empty-desc">Wähle "Alle Einträge", um alle Spots dieser Station zu sehen.</div>
                </div>
            `;
            return;
        }
        let html = '';
        filtered.forEach(spot => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapsQuery || spot.title)}`;
            const bulletsHtml = spot.bullets && spot.bullets.length > 0 ? `
                <ul class="spot-highlights-box">
                    ${spot.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            ` : '';
            const mediaHtml = spot.image ? `
                <div class="spot-media-frame">
                    <img src="${spot.image}" alt="${spot.title}" class="spot-photo" data-img="${spot.image}" data-caption="${spot.title}" loading="lazy">
                    <div class="spot-floating-bar">
                        ${spot.badges ? spot.badges.map(b => `<span class="spot-badge-pill">${b}</span>`).join('') : ''}
                    </div>
                </div>
            ` : `
                <div class="spot-floating-bar" style="position:relative; inset:auto; padding:16px 20px 0;">
                    ${spot.badges ? spot.badges.map(b => `<span class="spot-badge-pill">${b}</span>`).join('') : ''}
                </div>
            `;
            const webBtnHtml = spot.website ? `
                <a href="${spot.website}" target="_blank" rel="noopener noreferrer" class="action-pill-web">
                    <svg class="svg-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <span>Webseite</span>
                </a>
            ` : '';
            html += `
                <article class="spot-card" id="card-${spot.id}">
                    ${mediaHtml}
                    <div class="spot-details-body">
                        ${spot.time ? `<div class="spot-timing-kicker">${spot.time}</div>` : ''}
                        <h3 class="spot-headline">${spot.title}</h3>
                        <p class="spot-lead-text">${spot.description}</p>
                        ${bulletsHtml}
                    </div>
                    <div class="spot-card-bar">
                        <div class="spot-location-info">
                            <svg class="svg-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span>${spot.location || 'Portugal'}</span>
                        </div>
                        <div class="spot-actions-group">
                            ${webBtnHtml}
                            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="maps-open-pill">
                                <span>Google Maps</span>
                                <svg class="svg-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </a>
                        </div>
                    </div>
                </article>
            `;
        });
        this.spotsContainer.innerHTML = html;
        this.attachSpotEvents();
    }
    attachSpotEvents() {
        this.spotsContainer.querySelectorAll('.spot-photo').forEach(img => {
            img.addEventListener('click', () => {
                this.openLightbox(img.dataset.img, img.dataset.caption);
            });
        });
    }
    openLightbox(imgSrc, caption) {
        this.lightboxImage.src = imgSrc;
        this.lightboxCaption.textContent = caption || '';
        this.lightboxModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }
    closeLightbox() {
        this.lightboxModal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TravelApp();
});
