const STATION_KEYS = ['station-1', 'station-2', 'station-3', 'station-4', 'station-5'];

const STATIONS_DATA = {
    "station-1": {
        "id": "station-1",
        "title": "Anreise & Start in Faro",
        "dates": "04.09. – 05.09.2026",
        "badge": "01 ANREISE • TAG 0–1",
        "heroImage": "images/hotel-faro-3k.jpg",
        "description": "Parken am Flughafen Weeze P3, Flug nach Faro, erste Nacht im Hotel 3K direkt am Flughafen und Mietwagenübernahme am Samstag um 09:30 Uhr bei EPI Rent a Car vor dem großen Panorama-Roadtrip.",
        "hotel": {
            "name": "Hotel 3K Aeropuerto Faro",
            "meta": "1 Nacht (Fr–Sa, 04.–05.09.) • DZ • Ca. 700 m vom Terminal",
            "mapsQuery": "Hotel 3K Faro Aeroporto",
            "website": "https://www.hotel3kfaro.com/en/",
            "image": "images/hotel-faro-3k.jpg",
            "details": "Perfekt für die späte Ankunft um 22:50 Uhr. Nur ca. 700 m zu Fuß vom Terminal entfernt mit Außenpool."
        },
        "spots": [
            {
                "id": "s1-parken-weeze",
                "title": "Parkplatz Flughafen Weeze P3",
                "time": "Fr, 04.09. • Einfahrt ab 17:00 Uhr",
                "category": "roadtrip",
                "badges": [
                    "🅿️ Parkplatz Weeze P3",
                    "🔑 Buchung WEWBP864120",
                    "💶 111 €"
                ],
                "description": "Gebuchter Stellplatz auf Parkplatz P3 am Flughafen Niederrhein / Weeze.",
                "bullets": [
                    "<strong>Buchungsnummer:</strong> WEWBP864120 (111,00 € bezahlt mit Kreditkarte).",
                    "<strong>Einfahrt:</strong> Ab Freitag, 04.09.2026 um 17:00 Uhr.",
                    "<strong>Ausfahrt reserviert bis:</strong> Samstag, 19.09.2026 um 02:00 Uhr (reichlich Puffer vorhanden).",
                    "<strong>Schrankenablauf:</strong> Am Haupteingang jede der 4 Spuren nutzbar. Die Schranken an Zufahrt und Parkplatz öffnen <strong>automatisch per Kennzeichenerkennung</strong>.",
                    "<strong>Hilfe bei Störung:</strong> Telefon-Taste (Hilfe-Symbol) an der Säule drücken (Parkleitstelle 24h besetzt).",
                    "<strong>Fußweg:</strong> Ca. 10–15 Minuten gemütlicher Fußweg bis zum Terminal."
                ],
                "location": "Flughafen Weeze P3",
                "mapsQuery": "Airport Weeze P3"
            },
            {
                "id": "s1-flug-hinflug",
                "title": "Hinflug: Weeze ➔ Faro (Ryanair)",
                "time": "Fr, 04.09. • 20:45 – 22:50 Uhr",
                "category": "roadtrip",
                "badges": [
                    "✈️ Ryanair Direktflug",
                    "⏱️ 3h 05min Flugzeit"
                ],
                "description": "Freitagabend-Direktflug von Weeze (NRN) nach Faro (FAO).",
                "bullets": [
                    "<strong>Abflug Weeze:</strong> 20:45 Uhr (MESZ)",
                    "<strong>Ankunft Faro:</strong> 22:50 Uhr (WESZ / portugiesische Ortszeit)",
                    "<strong>Flugdauer:</strong> ca. 3 Std. 05 Min."
                ],
                "location": "Weeze (NRN) ➔ Faro (FAO)",
                "mapsQuery": "Aeroporto de Faro"
            },
            {
                "id": "s1-hotel-3k",
                "title": "Hotel 3K Aeropuerto Faro",
                "time": "Fr, 04.09. • Check-in nach Landung",
                "category": "roadtrip",
                "badges": [
                    "🛏️ Erste Nacht",
                    "📍 700m vom Terminal",
                    "🏊 Mit Außenpool"
                ],
                "image": "images/hotel-faro-3k.jpg",
                "website": "https://www.hotel3kfaro.com/en/",
                "description": "Kurze Wege nach der Landung um 22:50 Uhr: In wenigen Gehminuten (ca. 700 m) zu Fuß vom Terminal erreichbar.",
                "bullets": [
                    "<strong>Zimmer:</strong> Doppelzimmer (DZ, 124 € bezahlt).",
                    "<strong>Frühstück:</strong> Ohne Frühstück gebucht (Frühstück optional für 12 € vor Ort).",
                    "<strong>Plan:</strong> Nach der späten Landung direkt ins Hotelbett fallen und ausschlafen vor der Mietwagenabholung am Samstagmorgen."
                ],
                "location": "Faro Flughafen",
                "mapsQuery": "Hotel 3K Faro Aeroporto"
            },
            {
                "id": "s1-mietwagen-annahme",
                "title": "Mietwagenannahme (EPI Rent a Car)",
                "time": "Sa, 05.09. • 09:30 Uhr",
                "category": "roadtrip",
                "badges": [
                    "🚗 EPI Rent a Car",
                    "⏰ 09:30 Uhr",
                    "🛡️ Vollkasko 0€ SB",
                    "👥 2. Fahrer inkl."
                ],
                "description": "Fahrzeugübernahme am Samstagmorgen im Büro von EPI Rent a Car in Faro.",
                "bullets": [
                    "<strong>Termin:</strong> Samstag, 05.09.2026 um <strong>09:30 Uhr</strong>.",
                    "<strong>Vermieter & Ort:</strong> EPI Rent a Car Faro.",
                    "<strong>Fahrzeugklasse:</strong> Seat Ibiza (495 €).",
                    "<strong>Konditionen:</strong> Inklusive 2. Fahrer und komplett ohne Selbstbeteiligung.",
                    "<strong>Weiterfahrt:</strong> Um 10:00 Uhr direkter Start des großen Panorama-Roadtrips über Monchique & Fóia ins Alentejo!"
                ],
                "location": "EPI Rent a Car Büro Faro",
                "mapsQuery": "EPI Rent a Car Faro"
            }
        ]
    },
    "station-2": {
        "id": "station-2",
        "title": "Zambujeira do Mar & Wilde Alentejo-Küste",
        "dates": "05.09. – 09.09.2026",
        "badge": "02 ZAMBUJEIRA • TAG 1–5",
        "heroImage": "images/hero-alentejo-coast.jpg",
        "description": "Vom Panorama-Roadtrip über die Monchique-Berge bis zu einsamen Schmugglerbuchten, Radtouren ab Haustür und legendärem Klippenwarten mit Bier.",
        "hotel": {
            "name": "Monte do Papa-léguas — Turismo Rural",
            "meta": "4 Nächte (05.–09.09.) • DZ inkl. Frühstück • Ruhige Oase mit Pool",
            "mapsQuery": "Monte do Papa-léguas Zambujeira do Mar",
            "website": "https://www.montedopapaleguas.pt/",
            "image": "images/hotel-monte-papa-leguas.jpg",
            "details": "Ländliche Oase an der Westküste. Ruhiger Hof mit Pool, perfekt zum Entspannen nach den Touren."
        },
        "spots": [
            {
                "id": "s2-tag1-roadtrip",
                "title": "Tag 1 (Sa, 05.09.): Panorama-Roadtrip Faro ➔ Zambujeira do Mar",
                "time": "10:00 – 17:30 Uhr • Ganztages-Roadtrip",
                "category": "roadtrip",
                "badges": [
                    "🚗 Roadtrip Tag 1",
                    "⛰️ Fóia 902m",
                    "🐗 Tasca do Petrol",
                    "🏰 Odemira",
                    "🏊 Pool-Ankunft"
                ],
                "image": "images/hero-monchique-foia.jpg",
                "description": "Nach der Mietwagenübernahme um 09:30 Uhr startet das Abenteuer: Vom sonnigen Faro geht es hoch in die kühlen Bergwälder der Serra de Monchique, über den höchsten Gipfel der Algarve, über eine einsame Traum-Bergstraße zur urigen Bergschänke und durch das weiße Herz des Alentejo bis zu unserer Oase am Meer.",
                "timeline": [
                    {
                        "time": "10:00 – 11:00 Uhr",
                        "title": "Caldas de Monchique",
                        "story": "Ein verwunschenes, historisches Thermaldorf im tiefen, schattigen Tal. Perfekt für den ersten entspannten Zwischenstopp des Vormittags: Kühle, frische Bergluft einatmen und dem Plätschern der natürlichen Heilquellen lauschen.",
                        "bullets": [
                            "<strong>Jahrhundertealte Parkanlagen:</strong> Riesige, uralte Bäume spenden Schatten für einen kurzen Spaziergang abseits der heißen Küste.",
                            "<strong>Historische Architektur:</strong> Elegante alte Badehäuser versprühen den nostalgischen Charme des 19. Jahrhunderts.",
                            "<strong>Perfekter Kaffee-Stopp:</strong> Auf dem kopfsteingepflasterten Dorfplatz unter Bäumen den ersten Galão des Tages genießen."
                        ],
                        "mapsQuery": "Caldas de Monchique"
                    },
                    {
                        "time": "12:15 Uhr",
                        "title": "Gipfel Fóia (902 m)",
                        "story": "Markiert mit stolzen 902 Metern den absoluten Höhepunkt der Algarve! Die Serpentinen-Auffahrt führt durch duftende Eukalyptuswälder, bis sich oben ein spektakulärer 360-Grad-Rundumblick öffnet, der an klaren Tagen Süd- und Westküste gleichzeitig offenbart.",
                        "bullets": [
                            "<strong>Gigantische 360-Grad-Weitsicht:</strong> Der Blick reicht über die sanften Hügel des Hinterlands bis zum tiefblauen Atlantischen Ozean.",
                            "<strong>Markante Felslandschaft:</strong> Bizarre Monolithen und Steinformationen laden zum Erkunden ein.",
                            "<strong>Erfrischendes Bergklima:</strong> Der stetige, kühle Wind auf dem Plateau ist die perfekte Abwechslung zum Küstenwetter."
                        ],
                        "mapsQuery": "Miradouro da Fóia Monchique"
                    },
                    {
                        "time": "13:00 Uhr",
                        "title": "Die Bergstraße M901 über Marmelete",
                        "story": "Gilt als eine der schönsten und einsamsten fahrtechnischen Schleifen des westlichen Hinterlands. Wer die Monchique-Berge auf der Rückseite hinabgleitet, erlebt ein echtes fahrdynamisches Highlight auf bestem Asphalt, komplett abseits der Touristenbusse.",
                        "bullets": [
                            "<strong>Reines Cruising-Erlebnis:</strong> Die Straße schlängelt sich elegant durch unberührte Täler und über einsame Hügelkämme.",
                            "<strong>Dichte Korkeichenwälder:</strong> Sanfte Haine mit traditioneller Korkernte links und rechts der Piste.",
                            "<strong>Absolute Abgeschiedenheit:</strong> Minimaler Verkehr – Landschaft und Kurven pur!"
                        ],
                        "mapsQuery": "Marmelete Monchique"
                    },
                    {
                        "time": "13:30 Uhr",
                        "title": "Restaurante A Tasca do Petrol",
                        "story": "Legendäre, urige Bergschänke direkt an der Panoramastraße für ein ausgiebiges, traditionelles Mittagessen im Landesinneren. Hier wird ohne Schnickschnack die ehrliche, deftige Küche der Region zelebriert.",
                        "bullets": [
                            "<strong>Authentische Fleischspezialitäten:</strong> Berühmt für butterzart geschmortes Wildschwein (<em>Javali</em>) und exzellentes schwarzes Iberico-Schwein (<em>Porco Preto</em>).",
                            "<strong>Rustikales Ambiente:</strong> Unprätentiöser Familienbetrieb, in dem auch die Einheimischen aus den umliegenden Dörfern einkehren.",
                            "<strong>Hausgemachte Desserts:</strong> Traditionelle süße Nachspeisen mit regionalem Honig und Mandeln."
                        ],
                        "mapsQuery": "Restaurante A Tasca do Petrol Marmelete"
                    },
                    {
                        "time": "16:00 Uhr",
                        "title": "Odemira",
                        "story": "Das weiße Herz des Alentejo-Hinterlands thront majestätisch auf einem Hügel direkt über dem träge dahinfließenden Fluss Mira. Nach der Weiterfahrt nach Norden bietet dieses absolut untouristische Städtchen die ideale Kulisse für einen ausgiebigen Nachmittagsspaziergang.",
                        "bullets": [
                            "<strong>Verschachtelte Altstadtgassen:</strong> Komplett weiße Häuserreihen und steile Treppenwege laden zum ziellosen Erkunden ein.",
                            "<strong>Historische Windmühle:</strong> Der <em>Moinho de Vento</em> überragt die Stadt und bietet einen fantastischen Ausblick über das grüne Flusstal.",
                            "<strong>Idyllischer Uferweg:</strong> Entlang des Rio Mira lässt es sich wunderbar im Schatten der Bäume flanieren, weit weg von jedem Trubel."
                        ],
                        "mapsQuery": "Moinho de Vento Odemira"
                    },
                    {
                        "time": "17:30 Uhr",
                        "title": "Monte do Papa-léguas – Turismo Rural",
                        "story": "Eure finale Oase für den Abend, versteckt in der malerischen Kulisse der ländlichen Westküste. Nach einem langen Tag auf den Straßen des Hinterlands rollt ihr hier am späten Nachmittag auf den Hof, checkt entspannt ein und könnt den Tag am Pool ausklingen lassen!",
                        "bullets": [
                            "<strong>Ankommen & Eintauchen:</strong> Ruhiger Hof, stilvolle Zimmer und erfrischender Pool mitten in der Natur."
                        ],
                        "mapsQuery": "Monte do Papa-léguas Zambujeira do Mar"
                    }
                ],
                "location": "Faro ➔ Monchique ➔ Marmelete ➔ Odemira ➔ Zambujeira",
                "mapsQuery": "Monte do Papa-léguas Zambujeira do Mar"
            },
            {
                "id": "s2-fahrrad-nord",
                "title": "Fahrrad-Spezial Tour Nord: Fischer, Klippen & Störche",
                "time": "Halbtages-Tour ab Haustür • ca. 10 km einfach",
                "category": "activities",
                "badges": [
                    "🚲 Fahrrad-Spezial",
                    "🎣 Entrada da Barca",
                    "🌊 Schmugglerbucht",
                    "🪶 Klippenstörche"
                ],
                "image": "images/entrada-da-barca.jpg",
                "description": "Das Auto kann hier öfter mal stehen bleiben! Vom Monte aus seid ihr in wenigen Minuten auf dem Küstenradweg nach Norden.",
                "bullets": [
                    "<strong>Zambujeira do Mar:</strong> In wenigen Minuten rollt ihr entspannt hinunter in den charmanten Kern des Hauptortes und zu den Stadtstränden (<em>Praia da Zambujeira</em> und <em>Praia dos Alterinhos</em>).",
                    "<strong>Entrada da Barca:</strong> Nur ein kurzes Stück weiter nördlich liegt der winzige, wilde Klippen-Fischerhafen. Die Boote liegen hier in einer engen, tiefen Felsspalte. Direkt darüber thronen die legendären Fischlokale <em>O Sacas</em> und <em>A Barca</em>.",
                    "<strong>Praia do Cavaleiro:</strong> Eine Bucht wie aus einem Schmugglerfilm, eingeschlossen von roten Steilwänden. Eine spektakuläre, in den Fels gehauene Holztreppe führt hinunter – meistens seid ihr hier komplett allein!",
                    "<strong>Cabo Sardão:</strong> Das majestätische Kap mit seinem weißen Leuchtturm. Hier schaut ihr von den Klippen direkt in die Nester der Weißstörche, die weltweit nur hier auf den nackten Felsen direkt über der tosenden Meeresbrandung nisten!"
                ],
                "location": "Zambujeira ➔ Entrada da Barca ➔ Cabo Sardão",
                "mapsQuery": "Farol do Cabo Sardão"
            },
            {
                "id": "s2-fahrrad-sued",
                "title": "Fahrrad-Spezial Tour Süd: Fado, Streetart & versteckte Oasen",
                "time": "Halbtages-Tour ab Haustür • ca. 8 km einfach",
                "category": "activities",
                "badges": [
                    "🚲 Fahrrad-Spezial",
                    "🎨 Fado-Streetart",
                    "🌿 Bambustunnel",
                    "💦 Strand-Wasserfall"
                ],
                "image": "images/praia-da-amalia.jpg",
                "description": "Die zweite geniale Radroute direkt ab dem Monte do Papa-léguas Richtung Süden zu Kultur und Naturwundern.",
                "bullets": [
                    "<strong>Brejão:</strong> Ein herrlich verschlafenes Straßendorf südlich von Zambujeira. Hier findet ihr ein riesiges, extrem cooles Street-Art-Mural der legendären Fado-Sängerin Amália Rodrigues. Im lokalen Tante-Emma-Laden (<em>Mercearia</em>) könnt ihr euch mit frischen Feigen für den Tag eindecken.",
                    "<strong>Praia da Amália:</strong> Der wohl magischste Strand der Region! Ihr parkt die Räder an den Gewächshäusern und lauft zu Fuß durch einen komplett verwunschenen, dichten Bambustunnel. Der Weg führt vorbei an Amalias ehemaligem Refugium, bis ein kleiner Wasserfall direkt auf den Sandstrand stürzt (am besten bei Ebbe besuchen!)."
                ],
                "location": "Brejão & Praia da Amália",
                "mapsQuery": "Praia da Amália Brejão"
            },
            {
                "id": "s2-fishermans-trail",
                "title": "Wandern auf dem Fisherman’s Trail",
                "time": "2 Stunden • Direkt ab Haustür",
                "category": "activities",
                "badges": [
                    "🥾 Fisherman’s Trail",
                    "📍 Direkt ab Haustür",
                    "🌊 Weltklasse-Klippenpfad"
                ],
                "description": "Der rot-blau markierte Weltklasse-Küstenwanderweg führt direkt an eurer Haustür vorbei. Schnappt euch feste Schuhe und lauft einfach mal zwei Stunden über den reinen Sand der Klippenpfade nach Norden. Die Aussichten auf versteckte, unzugängliche Buchten sind unbezahlbar!",
                "bullets": [
                    "<strong>Wegecharakter:</strong> Reiner, feiner Klippensand mit atemberaubenden Tiefblicken.",
                    "<strong>Ausrüstung:</strong> Feste Schuhe, Sonnenschutz und ausreichend Wasser."
                ],
                "location": "Fisherman’s Trail Zambujeira",
                "mapsQuery": "Rota Vicentina Zambujeira do Mar"
            },
            {
                "id": "s2-rio-mira",
                "title": "Kajak & Stand-up-Paddling auf dem Rio Mira",
                "time": "25 Min. Anfahrt gen Norden",
                "category": "activities",
                "badges": [
                    "🛶 Rio Mira",
                    "🏄 Kajak & SUP",
                    "🌿 Glasklares Süßwasser"
                ],
                "description": "Wenn der Atlantik zu wild ist, fahrt ihr 25 Minuten nach Norden. Der Fluss Mira ist glasklar und ruhig.",
                "bullets": [
                    "<strong>Verleih vor Ort:</strong> Direkt am Ufer in Vila Nova de Milfontes kann man sich Boards oder Kajaks leihen.",
                    "<strong>Das Erlebnis:</strong> Lautlos den Fluss aufwärts paddeln und die unberührte Natur vom Wasser aus genießen."
                ],
                "location": "Vila Nova de Milfontes (Rio Mira)",
                "mapsQuery": "Praia da Franquia Vila Nova de Milfontes"
            },
            {
                "id": "s2-pego-das-pias",
                "title": "Pego das Pias (Canyon-Schwimmen)",
                "time": "Ausflug ins wilde Inland",
                "category": "highlights",
                "badges": [
                    "🏊 Canyon-Schwimmen",
                    "💎 Naturgeheimtipp",
                    "🌲 Kühle Felsgumpen"
                ],
                "description": "Ein absoluter Naturgeheimtipp im Hinterland zwischen Odemira und São Luís. Der Fluss hat sich hier tief in monumentale, runde Felsformationen gefressen.",
                "bullets": [
                    "<strong>Die Kulisse:</strong> Wilde Felsschlucht mit tiefen, spiegelglatten Süßwasser-Pools.",
                    "<strong>Aktivität:</strong> Perfekt zum Klippenspringen und Abkühlen im Schatten der Bäume abseits der Küstenhitze."
                ],
                "location": "Zwischen Odemira & São Luís",
                "mapsQuery": "Pego das Pias Odemira"
            },
            {
                "id": "s2-sao-teotonio",
                "title": "São Teotónio: Alentejo-Alltag & 80-Cent-Espresso",
                "time": "Kurzer Inland-Ausflug",
                "category": "highlights",
                "badges": [
                    "☕ 80-Cent-Espresso",
                    "🧢 Schiebermützen-Kult",
                    "🧀 Samstags-Bauernmarkt"
                ],
                "description": "Das raue, ungeschönte Herz der lokalen Landwirtschaft im Inland.",
                "bullets": [
                    "<strong>Der Vibe:</strong> Setzt euch in eine der traditionellen Pastelarias am Marktplatz zu den alten Männern mit Schiebermütze und trinkt einen Espresso für 80 Cent.",
                    "<strong>Bauernmarkt:</strong> Samstags gibt es hier tolle Bauernmärkte mit lokalem Honig, Ziegenkäse und Süßkartoffeln."
                ],
                "location": "São Teotónio Ortszentrum",
                "mapsQuery": "São Teotónio Odemira"
            },
            {
                "id": "s2-almograve",
                "title": "Praia de Almograve (Schieferriff-Labyrinth)",
                "time": "20 Min. nördlich",
                "category": "highlights",
                "badges": [
                    "🦀 Gezeitentümpel",
                    "🌑 Schwarzes Schieferriff",
                    "🌊 Wilder Naturstrand"
                ],
                "description": "Ein breiter Naturstrand etwa 20 Minuten nördlich von Zambujeira.",
                "bullets": [
                    "<strong>Gezeiten-Spektakel:</strong> Bei Ebbe verwandelt sich der Strand in ein bizarres Labyrinth aus schwarzen, messerscharfen Schieferriffen und Gezeitentümpeln voller Krebse.",
                    "<strong>Spaziergang:</strong> Endlose Weite und raue Atlantikbrandung."
                ],
                "location": "Praia de Almograve",
                "mapsQuery": "Praia de Almograve"
            },
            {
                "id": "s2-milfontes",
                "title": "Vila Nova de Milfontes (Prinzessin des Alentejo)",
                "time": "30 Min. nördlich",
                "category": "highlights",
                "badges": [
                    "👑 Prinzessin des Alentejo",
                    "🏴‍☠️ Piratenfestung",
                    "🏖️ Windgeschützter Flussstrand"
                ],
                "description": "Die wunderschöne weiße 'Prinzessin des Alentejo' an der Mündung des Rio Mira in den Atlantik.",
                "bullets": [
                    "<strong>Altstadt & Piratenfestung:</strong> Schlendert durch die Altstadt zur alten Piraten-Abwehrfestung (<em>Forte de São Clemente</em>).",
                    "<strong>Aussicht:</strong> Genießt den Blick auf die Flussmündung, wo das grüne Flusswasser auf den blauen Atlantik trifft.",
                    "<strong>Badebucht:</strong> Der Flussstrand <em>Praia da Franquia</em> bietet perfekten Windschutz vor rauer Meeresbrise."
                ],
                "location": "Vila Nova de Milfontes",
                "mapsQuery": "Forte de São Clemente Vila Nova de Milfontes"
            },
            {
                "id": "s2-porto-covo",
                "title": "Porto Covo & Ilha do Pessegueiro",
                "time": "Knapp 45 Min. nördlich",
                "category": "highlights",
                "badges": [
                    "⚓ Strahlendes Fischerdorf",
                    "🏖️ Praia dos Samoqueiros",
                    "🏰 Einsame Festungsinsel"
                ],
                "description": "Ein strahlend weiß-blaues Fischerdorf mit besonderem Flair knapp 45 Minuten nördlich.",
                "bullets": [
                    "<strong>Dorfplatz & Buchten:</strong> Der Ort hat einen wunderschönen, quadratischen Marktplatz und tolle Badebuchten (<em>Praia dos Samoqueiros</em>).",
                    "<strong>Festungsinsel:</strong> Ein paar Kilometer südlich liegt die geschichtsträchtige, einsame Festungsinsel <em>Ilha do Pessegueiro</em> im Meer."
                ],
                "location": "Porto Covo",
                "mapsQuery": "Praça Marquês de Pombal Porto Covo"
            },
            {
                "id": "s2-food-sacas",
                "title": "Restaurante O Sacas",
                "time": "Mittag oder Abend • Entrada da Barca",
                "category": "food",
                "badges": [
                    "🐟 Klippen-Klassiker",
                    "🌊 Brandung am Tisch",
                    "🔥 Holzkohlegrill"
                ],
                "image": "images/entrada-da-barca.jpg",
                "description": "Der Klippen-Klassiker für Fisch-Puristen! Das Restaurant liegt ein Stück außerhalb des Dorfes, direkt über dem spektakulären Klippen-Fischerhafen Entrada da Barca. Mehr Meer geht kulinarisch und atmosphärisch kaum.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Urig, maritim und unaufgeregt. Drinnen sitzt man bodenständig, draußen hört man bei gutem Wetter die Brandung gegen die Felsen klatschen. Hier treffen sich Einheimische und kulinarische Pilger."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Fangfrischer Fisch nach Tagesangebot (wird oft am Tisch roh präsentiert), der perfekt auf Holzkohle gegrillt wird. Absolute Empfehlung sind auch die Feijoada de Búzios (ein deftiger Bohneneintopf mit Seeschnecken) oder der butterzarte Oktopus."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Den ultimativen Fischabend bei stürmischer Klippenkulisse."
                    }
                ],
                "location": "Entrada da Barca (Zambujeira)",
                "mapsQuery": "Restaurante O Sacas Zambujeira do Mar"
            },
            {
                "id": "s2-food-costa",
                "title": "Marisqueira Costa Alentejana",
                "time": "Abend • Ortskern Zambujeira",
                "category": "food",
                "badges": [
                    "🥘 Cataplana-Benchmark",
                    "🥩 Porco Preto Secretos",
                    "🍷 Herzlicher Service"
                ],
                "description": "Die traditionelle Genussoase im Ort! Mitten im Ortskern von Zambujeira do Mar gelegen, ist dieses Restaurant die absolute Benchmark, wenn es um die ehrliche, opulente Küche des Alentejo geht.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Gemütlich, warm und sehr herzlich. Die Wände sind traditionell gefliest, der Service ist extrem aufmerksam. Man merkt in jeder Ecke den Stolz auf die regionalen Produkte."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Hier glänzen die typischen Cataplanas (im Kupfertopf gedämpfte Meeresfrüchte) und der Arroz de Marisco (saftiger Seafood-Reis). Wer eine Pause von Fisch braucht: Die Secretos oder Plumas vom Porco Preto (dem schwarzen Alentejo-Schwein) sind ein absoluter Traum und butterzart."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Ein ausgiebiges, traditionelles Abendessen in geselliger Runde."
                    }
                ],
                "location": "Zambujeira do Mar Ortskern",
                "mapsQuery": "Marisqueira Costa Alentejana Zambujeira"
            },
            {
                "id": "s2-food-ubz",
                "title": "UBZ Central",
                "time": "Abend / Nacht • Ortskern Zambujeira",
                "category": "food",
                "badges": [
                    "🍺 Cerveja Artesanal",
                    "🍤 Petiscos & Tapas",
                    "🍔 Lässige Bar-Vibes"
                ],
                "description": "Die lässige Petiscos- & Bier-Bar! Wenn es abends mal unkomplizierter, moderner und lockerer zugehen soll, ist das UBZ im Herzen des Dorfes die richtige Adresse.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Lässig, jung, mit einer tollen Außenterrasse. Perfekt, um bei einem kalten Handwerksbier (Cerveja Artesanal) oder einem guten Wein den Tag entspannt Revue passieren zu lassen."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Der Fokus liegt auf hervorragenden Petiscos – der portugiesischen Antwort auf Tapas. Von genial gewürzten Knoblauch-Garnelen über lokale Käseplatten bis hin zu richtig guten Burgern und Steaks."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Einen entspannten Abend mit Fingerfood und guter Musik nach einem langen Outdoor-Tag."
                    }
                ],
                "location": "Zambujeira do Mar Ortskern",
                "mapsQuery": "UBZ Central Zambujeira do Mar"
            },
            {
                "id": "s2-food-azenha",
                "title": "Restaurante Azenha do Mar",
                "time": "Mittag oder Abend • 15 Min. südlich",
                "category": "food",
                "badges": [
                    "🦀 Meeresfrüchte-Kult",
                    "🍺 Warten mit Klippenbier",
                    "🔥 Keine Reservierung"
                ],
                "description": "Der Meeresfrüchte-Kult am Abgrund! Dieses Restaurant liegt im gleichnamigen, winzigen Fischerdorf etwa 15 Minuten südlich von Zambujeira und genießt in ganz Portugal absoluten Legendenstatus.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Extrem unprätentiös, laut, lebendig und rau direkt an den Klippen. Wichtig: Man kann NICHT reservieren! Die Portugiesen stehen hier mittags und abends lange vor Öffnung Schlange. Man schreibt seinen Namen auf die Liste an der Tür, holt sich ein kaltes Imperial (Bier) am Kiosk und zelebriert das Warten auf den Klippen!"
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Die Sapateira Recheada (gefüllter Taschenkrebs) ist hier eine Offenbarung. Dazu gibt es Meeresfrüchte-Platten, butterzarten Oktopus und frischeste Krebse zu Preisen, die man auf dem normalen Tourismus-Radar vergeblich sucht."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Ein echtes kulinarisches Abenteuer, bei dem das Warten vor der Tür fest zum Erlebnis gehört."
                    }
                ],
                "location": "Azenha do Mar",
                "mapsQuery": "Restaurante Azenha do Mar"
            },
            {
                "id": "s2-food-miramar",
                "title": "Restaurante Miramar",
                "time": "Sundowner-Abend • Klippenkante",
                "category": "food",
                "badges": [
                    "🌅 Logenplatz über Wellen",
                    "🦪 Venusmuscheln",
                    "🐟 Gegrillter Wolfsbarsch"
                ],
                "description": "Der Logenplatz über den Wellen! Wenn ihr am Abend einfach nur im Ort bleiben und beim Essen den perfekten Blick auf den Sonnenuntergang im Atlantik haben wollt, führt an dieser Adresse kein Weg vorbei.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Entspannt und unkompliziert. Das Highlight ist die Terrasse, die direkt an der Klippenkante über dem Hauptstrand (Praia da Zambujeira do Mar) klebt. Hier schaut man direkt ins Weißwasser der Brandung."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Klassische, ehrliche portugiesische Küche. Hervorragend zum Teilen vorab: Amêijoas à Bulhão Pato (Venusmuscheln in viel Knoblauch, Koriander und Olivenöl). Als Hauptgang: Arroz de Lingueirão (Schwertmuschel-Reis) oder klassischer, auf den Punkt gegrillter Wolfsbarsch (Robalo)."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Den klassischen Sundowner-Abend, bei dem das Auge die ganze Zeit über den Horizont wandern darf."
                    }
                ],
                "location": "Praia da Zambujeira Klippe",
                "mapsQuery": "Restaurante Miramar Zambujeira do Mar"
            }
        ]
    },
    "station-3": {
        "id": "station-3",
        "title": "Luz, Lagos & die West-Algarve",
        "dates": "09.09. – 13.09.2026",
        "badge": "03 LUZ & LAGOS • TAG 5–9",
        "heroImage": "images/hero-ponta-da-piedade.jpg",
        "description": "Vom Ende der Welt am Cabo de São Vicente zu goldenen Felsgrotten, maurischen Gassen in Lagos und dem wohlverdienten Ankunftsbier am Hausstrand.",
        "hotel": {
            "name": "Baia da Luz Resort",
            "meta": "4 Nächte (09.–13.09.) • Apartment • Ruhige Poolanlage nahe Strand",
            "mapsQuery": "Baia da Luz Resort Praia da Luz",
            "website": "https://www.baiadaluz.com/",
            "image": "images/hotel-baia-da-luz.jpg",
            "details": "Komfortables Apartment-Resort mit Pool im entspannten Badeort Praia da Luz."
        },
        "spots": [
            {
                "id": "s3-roadtrip-day5",
                "title": "Tag 5 (Mi, 09.09.): Roadtrip Zambujeira ➔ Luz & Lagos",
                "time": "09:30 – 16:00 Uhr • Ganztages-Roadtrip",
                "category": "roadtrip",
                "badges": [
                    "🚗 Roadtrip Tag 5",
                    "🌊 Odeceixe Hufeisen",
                    "📸 Arrifana-Selfie",
                    "🌭 Bratwurst-Check",
                    "🍔 Three Little Birds",
                    "🍺 Ankunftsbier Luz"
                ],
                "image": "images/cabo-de-sao-vicente.jpg",
                "description": "Tschüss Alentejo, hallo Abenteuer! Ihr packt die Koffer, dreht die Musik auf und fahrt auf der N120 direkt nach Süden über die Grenze zur Algarve – von dramatischen Steilklippen bis zum ersten Bad im Meer.",
                "timeline": [
                    {
                        "time": "09:30 Uhr",
                        "title": "Abfahrt in Zambujeira do Mar",
                        "story": "Tschüss Alentejo, hallo Abenteuer! Ihr packt die Koffer und fahrt auf der N120 direkt nach Süden.",
                        "bullets": [
                            "<strong>Fahrtstrecke:</strong> Malerische Küstenstraße gen Süden zur Grenze der Algarve."
                        ],
                        "mapsQuery": "Zambujeira do Mar"
                    },
                    {
                        "time": "09:50 – 10:40 Uhr",
                        "title": "Odeceixe & Praia da Odeceixe",
                        "story": "Ihr überquert die Grenze zur Algarve.",
                        "bullets": [
                            "<strong>Der Plan:</strong> Fahrt nicht nur durch das hübsche Dorf, sondern direkt vor an die <em>Praia da Odeceixe</em>. Das ist eine der spektakulärsten Buchten Portugals, weil der Fluss Seixe hier in einer perfekten Hufeisenkurve um den Strand herum in den Atlantik fließt.",
                            "<strong>Was ihr macht:</strong> Holt euch einen schnellen Galão auf die Hand, lauft kurz hoch zum Aussichtspunkt und schaut den ersten Surfern des Tages zu."
                        ],
                        "mapsQuery": "Praia da Odeceixe"
                    },
                    {
                        "time": "11:15 – 12:00 Uhr",
                        "title": "Arrifana (Das Surfer-Mekka)",
                        "story": "Weiter geht es über die N120 nach Aljezur und dann über die Stichstraße zur Praia da Arrifana.",
                        "bullets": [
                            "<strong>Der Plan:</strong> Spart euch den steilen Fußweg ganz nach unten zum Strand (das kostet zu viel Zeit!). Fahrt stattdessen bis ganz vor an die Klippenspitze zu den alten Festungsruinen (<em>Fortaleza da Arrifana</em>).",
                            "<strong>Der Ausblick:</strong> Von hier oben blickt ihr senkrecht hinab auf die gigantische, sichelförmige Bucht und die berüchtigte Felsnadel <em>Pedra da Agulha</em>, die wie ein Monolith aus dem Wasser ragt – definitiv der Ort für das beste Urlaubs-Selfie des Tages!"
                        ],
                        "mapsQuery": "Fortaleza da Arrifana"
                    },
                    {
                        "time": "12:45 – 13:15 Uhr",
                        "title": "Cabo de São Vicente (Das Ende der Welt)",
                        "story": "Ihr fahrt die N120 weiter bis Vila do Bispo und biegt ab zum südwestlichsten Punkt Europas.",
                        "bullets": [
                            "<strong>Der Plan:</strong> Hier pfeift der Wind heftig und die Klippen stürzen 75 Meter senkrecht in den Atlantik. Jacke anziehen, die gewaltige Szenerie und den roten Leuchtturm bestaunen.",
                            "<strong>Status-Check:</strong> Die berühmte Bude 'Letzte Bratwurst vor Amerika' hat meistens geöffnet – aber hebt euch den Hunger auf, wir essen gleich cooler!"
                        ],
                        "mapsQuery": "Farol do Cabo de São Vicente"
                    },
                    {
                        "time": "13:25 – 15:15 Uhr",
                        "title": "Sagres (Mittagessen & Festung)",
                        "story": "Nur 10 Minuten Fahrt vom Kap entfernt liegt das staubige, verdammt lässige Surfer-Städtchen Sagres. Hier machen wir eine große Pause.",
                        "bullets": [
                            "<strong>Der Food-Tipp:</strong> Geht in das <em>Three Little Birds</em>. Das ist eine extrem coole, entspannte Bude mit genialen Burgern, Tacos und Bowls – genau das Richtige nach den windigen Klippen!",
                            "<strong>Danach:</strong> Verdauungsspaziergang an der <em>Fortaleza de Sagres</em>. Ihr müsst nicht zwingend reingehen (kostet Eintritt und dauert), aber allein die Fahrt auf das riesige Plateau und der Blick auf die wuchtigen Mauern vor der stürmischen Kulisse sind Wahnsinn."
                        ],
                        "mapsQuery": "Three Little Birds Sagres"
                    },
                    {
                        "time": "15:15 – 16:00 Uhr",
                        "title": "Der Endspurt nach Luz",
                        "story": "Ihr lasst Sagres hinter euch und cruist über die N125 nach Osten. Die Landschaft wird jetzt spürbar lieblicher, wärmer und die Wellen zahmer.",
                        "bullets": [
                            "<strong>Ankunftsbier:</strong> Um 16:00 Uhr rollt ihr in Luz auf den Hotelparkplatz. Koffer aufs Zimmer, rein in die Badehose und ab an den ruhigen Hausstrand für das erste wohlverdiente Ankunftsbier!"
                        ],
                        "mapsQuery": "Baia da Luz Resort Praia da Luz"
                    }
                ],
                "location": "Odeceixe ➔ Arrifana ➔ Cabo São Vicente ➔ Sagres ➔ Luz",
                "mapsQuery": "Baia da Luz Resort Praia da Luz"
            },
            {
                "id": "s3-ponta-da-piedade",
                "title": "Ponta da Piedade (Das Postkartenmotiv)",
                "time": "Sonnenuntergang & Tagsüber",
                "category": "highlights",
                "badges": [
                    "⭐ Pflichttermin",
                    "🛶 Kajak-Grotten",
                    "🌅 Magischer Sonnenuntergang"
                ],
                "image": "images/hero-ponta-da-piedade.jpg",
                "description": "Eine der spektakulärsten Klippenformationen der Welt, bestehend aus vom Meer zerfressenen, goldgelben Kalksteinfelsen, natürlichen Bögen und versteckten Grotten.",
                "sections": [
                    {
                        "type": "why",
                        "label": "Was ist das?",
                        "text": "Eine weltberühmte Felslandschaft mit bizarren Felsentoren und Grotten im smaragdgrünen Wasser."
                    },
                    {
                        "type": "experience",
                        "label": "Wie erleben?",
                        "text": "Am besten zweigleisig: Tagsüber lohnt sich eine geführte Kajaktour ab Lagos, bei der man direkt durch die engen Felsentore paddelt. Zum Sonnenuntergang wandert man über die hölzernen Stege oben auf den Klippen zum Leuchtturm – das Licht auf dem gelben Stein ist pure Magie!"
                    }
                ],
                "location": "Ponta da Piedade (Lagos)",
                "mapsQuery": "Ponta da Piedade Lagos"
            },
            {
                "id": "s3-lagos-altstadt",
                "title": "Die historische Altstadt von Lagos & Markthalle",
                "time": "Vormittag / Nachmittag",
                "category": "highlights",
                "badges": [
                    "🏛️ Maurische Stadtmauer",
                    "☕ Dachterrassen-Espresso",
                    "⛪ Goldene Barockkirche"
                ],
                "description": "Eine lebendige Stadt mit einer reichen Seefahrergeschichte, umgeben von einer gut erhaltenen maurischen Stadtmauer aus dem 16. Jahrhundert.",
                "sections": [
                    {
                        "type": "experience",
                        "label": "Das Programm",
                        "text": "Schlendert durch die mit Calçada Portuguesa (dem typischen Kopfsteinpflaster) ausgelegten Gassen. Besucht den historischen Sklavenmarkt (Mercado de Escravos) und die goldene Barockkirche Igreja de Santo António."
                    },
                    {
                        "type": "timing",
                        "label": "Insider-Tipp",
                        "text": "Die städtische Markthalle (Mercado Municipal) direkt an der Promenade bietet im obersten Stockwerk eine tolle Dachterrasse mit Blick über den Hafen – perfekt für einen schnellen Espresso!"
                    }
                ],
                "location": "Lagos Altstadt",
                "mapsQuery": "Mercado Municipal de Lagos"
            },
            {
                "id": "s3-forte-bandeira",
                "title": "Forte da Ponta da Bandeira",
                "time": "20-Minuten-Stopp",
                "category": "highlights",
                "badges": [
                    "🏰 17. Jahrhundert",
                    "📸 Dachterrassen-Blick",
                    "⚓ Lagos Hafen"
                ],
                "description": "Eine gut erhaltene Festung aus dem 17. Jahrhundert direkt vor der Altstadt von Lagos am Meer.",
                "bullets": [
                    "<strong>Warum hin?</strong> Viele laufen daran vorbei, obwohl man von der Dachterrasse einen fantastischen Blick auf den Hafen, die Stadtmauer und die Strände hat.",
                    "<strong>Das Erlebnis:</strong> Der Besuch dauert kaum 20 Minuten und lässt sich perfekt mit einem Spaziergang durch Lagos verbinden."
                ],
                "location": "Lagos Hafenbecken",
                "mapsQuery": "Forte da Ponta da Bandeira Lagos"
            },
            {
                "id": "s3-burgau-wanderung",
                "title": "Klippenwanderung nach Burgau ('Portugiesisches Santorini')",
                "time": "Mittelschwere Klippenwanderung",
                "category": "activities",
                "badges": [
                    "🥾 Klippenpfad",
                    "🇬🇷 Portugiesisches Santorini",
                    "🌊 Tiefblauer Atlantik"
                ],
                "description": "Eine wunderschöne, mittelschwere Wanderung entlang der Klippenpfade direkt von Praia da Luz nach Westen.",
                "bullets": [
                    "<strong>Das Ziel:</strong> Das winzige Fischerdorf Burgau wird oft als das 'portugiesische Santorini' bezeichnet, weil sich die weiß-blauen Häuser extrem steil in eine schmale Bucht schmiegen.",
                    "<strong>Das Panorama:</strong> Der Weg dorthin bietet grandiose Ausblicke auf den tiefblauen Atlantik und dramatische Felsabstürze."
                ],
                "location": "Praia da Luz ➔ Burgau",
                "mapsQuery": "Burgau Algarve"
            },
            {
                "id": "s3-joao-de-arens",
                "title": "Praia de João de Arens (Das geheime Klippen-Labyrinth)",
                "time": "Geheimtipp • Abseits der Massen",
                "category": "highlights",
                "badges": [
                    "💎 Geheim-Labyrinth",
                    "🌲 Pinien-Felsnadeln",
                    "🕳️ Felstunnel-Buchten"
                ],
                "description": "Ein absolut wilder, kaum beschilderter Küstenabschnitt zwischen Alvor und Portimão, den kaum ein normaler Tourist findet!",
                "bullets": [
                    "<strong>Warum hin?</strong> Hier hat sich ein regelrechtes Labyrinth aus pinienbewachsenen Felsnadeln, Einsturzkringeln (<em>Algar</em>) und winzigen, nur durch Felstunnel erreichbaren Sandbuchten gebildet.",
                    "<strong>Erkundung:</strong> Man parkt am Ende einer Schotterstraße nahe eines Pinienwaldes und erkundet die Trampelpfade auf eigene Faust."
                ],
                "location": "Zwischen Alvor & Portimão",
                "mapsQuery": "Praia de João de Arens Portimão"
            },
            {
                "id": "s3-menhire",
                "title": "Die Menhire von Vila do Bispo & Milrei",
                "time": "Mystischer Steinzeit-Ausflug",
                "category": "highlights",
                "badges": [
                    "🗿 Steinzeit-Kult",
                    "🌾 Mitten im Feld",
                    "🎟️ Kein Eintritt/Zaun"
                ],
                "description": "Ein mystischer Ausflug in die Steinzeit im windigen, kargen Hinterland von Vila do Bispo.",
                "bullets": [
                    "<strong>Höchste Dichte:</strong> Die Region beherbergt eine der größten Dichten an prähistorischen Megalith-Monumenten auf der Iberischen Halbinsel.",
                    "<strong>Das Erlebnis:</strong> Die meterhohen, weißen Kalkstein-Menhire stehen oft völlig unprätentiös mitten auf Feldern oder an Feldwegen. Es gibt keine Kassenhäuschen oder Absperrungen – pure Geschichte!"
                ],
                "location": "Vila do Bispo & Milrei",
                "mapsQuery": "Menir do Padrão Vila do Bispo"
            },
            {
                "id": "s3-zavial-ingrina",
                "title": "Praia do Zavial & Praia da Ingrina",
                "time": "Baden & Strand-Lunch",
                "category": "highlights",
                "badges": [
                    "🏄 Zavial Surfer-Wellen",
                    "🐚 Ingrina Muschelbucht",
                    "🐟 Restaurante Zavial"
                ],
                "description": "Zwei nebeneinander liegende, wunderschöne Naturbuchten abseits der großen Hauptstrände, südlich von Raposeira.",
                "bullets": [
                    "<strong>Das Erlebnis:</strong> Während Zavial bei Surfern für seine perfekten Wellen bekannt ist, liegt Ingrina wie eine ruhige, hufeisenförmige Muschel im Fels.",
                    "<strong>Kulinarik-Tipp:</strong> Das Restaurant direkt am Strand von Zavial (<em>Restaurante Zavial</em>) serviert hervorragenden Fisch und man sitzt fantastisch geschützt mit Blick auf die Brandung."
                ],
                "location": "Südlich von Raposeira",
                "mapsQuery": "Praia do Zavial"
            },
            {
                "id": "s3-delfin-tour",
                "title": "Delfin-Beobachtung ab Marina Lagos",
                "time": "2–3 Stunden auf dem Atlantik",
                "category": "activities",
                "badges": [
                    "🐬 Große Tümmler",
                    "🚤 Schnelle RIB-Boote",
                    "🌊 Offenes Meer"
                ],
                "description": "Die Gewässer vor der West-Algarve sind ein wichtiger Durchzugsort für verschiedene Delfinarten (vor allem Große Tümmler und Gewöhnliche Delfine).",
                "bullets": [
                    "<strong>Wie läuft das ab?</strong> Mit wendigen, schnellen Festrumpfschlauchbooten (RIBs) geht es ein paar Meilen hinaus aufs offene Meer.",
                    "<strong>Das Erlebnis:</strong> Die flachen Boote ermöglichen Begegnungen auf Augenhöhe, ohne die Tiere zu bedrängen oder zu jagen."
                ],
                "location": "Marina de Lagos",
                "mapsQuery": "Marina de Lagos"
            },
            {
                "id": "s3-en125-cruisen",
                "title": "Küsten-Cruisen auf der EN125-1",
                "time": "Nachmittags-Roadtrip",
                "category": "roadtrip",
                "badges": [
                    "🚗 Cruising",
                    "🏘️ Verschlafene Dörfer",
                    "🥐 Dorfkneipen-Pastel"
                ],
                "description": "Für einen entspannten Roadtrip-Nachmittag fährt man die alte Küstenstraße parallel zur modernen N125 ab.",
                "bullets": [
                    "<strong>Die Route:</strong> Sie führt durch verschlafene Orte wie Budens oder Figueira, in denen das Leben noch absolut typisch portugiesisch abläuft.",
                    "<strong>Einkehr:</strong> Perfekt, um in einer Dorfkneipe für ein ofenfrisches Pastel de Nata und einen Espresso anzuhalten."
                ],
                "location": "Budens & Figueira (EN125-1)",
                "mapsQuery": "Budens Vila do Bispo"
            },
            {
                "id": "s3-rocha-negra",
                "title": "Rocha Negra: Strandwanderung & Klippen-Picknick",
                "time": "Später Nachmittag / Sundowner",
                "category": "activities",
                "badges": [
                    "🌋 Vulkanischer Basalt",
                    "🧺 Wein & Käse Picknick",
                    "☕ Coffee & Waves"
                ],
                "image": "images/praia-da-luz-rocha-negra.jpg",
                "description": "Der markante, tiefschwarze Vulkanfels schließt das östliche Ende der Bucht von Praia da Luz wie eine dunkle Wand ab – ein geologischer Kontrast zu den sonst typisch gelben Kalkklippen!",
                "bullets": [
                    "<strong>Das Picknick-Programm:</strong> Ein steiler, aber kurzer Pfad führt hinauf auf das Plateau. Oben auf dem tiefschwarzen Basaltgestein packt ihr Wein, Käse und Oliven aus und genießt den Blick auf das ruhige Treiben im Ort.",
                    "<strong>Café-Tipp:</strong> <em>Coffee & Waves</em> direkt an der Promenade von Luz: Kaffee mit direktem Blick auf den Atlantik und die markante Rocha Negra. Perfekt für Frühstück oder Cappuccino nach dem Strandspaziergang."
                ],
                "location": "Praia da Luz (Rocha Negra)",
                "mapsQuery": "Rocha Negra Praia da Luz"
            },
            {
                "id": "s3-meia-praia",
                "title": "Endloser Strandtag am Meia Praia & Linda Beach Bar",
                "time": "Flexibler Strandtag",
                "category": "highlights",
                "badges": [
                    "🏖️ 5 km Sandstrand",
                    "🍹 Linda the Beach Bar",
                    "🛋️ Liegestuhl & Meeresrauschen"
                ],
                "description": "Der längste Sandstrand der Westalgarve, der sich über 5 Kilometer östlich von Lagos erstreckt.",
                "bullets": [
                    "<strong>Warum zur Entspannung?</strong> Im Gegensatz zu den engen Klippenbuchten hat man hier unendlich viel Platz, feinen Sand und keine erdrückenden Felswände – perfekt für endlose Spaziergänge.",
                    "<strong>Chillen:</strong> Entlang des Strandes gibt es exzellente Holzsteg-Strandbars (wie das <em>Linda the Beach Bar</em>), wo man bei einem kühlen Drink den Tag im Liegestuhl verbringen kann."
                ],
                "location": "Meia Praia (Lagos)",
                "mapsQuery": "Linda the Beach Bar Meia Praia Lagos"
            },
            {
                "id": "s3-praia-do-camilo",
                "title": "Praia do Camilo (Die Bilderbuch-Bucht)",
                "time": "Früh morgens (< 10:00 Uhr) oder späten Nachmittag",
                "category": "highlights",
                "badges": [
                    "🪜 200 Holzstufen",
                    "💎 Türkis- & Smaragdwasser",
                    "⏰ Vor 10 Uhr da sein!"
                ],
                "description": "Eine der bekanntesten und fotogensten Buchten der Algarve, eingerahmt von goldgelben Kalksteinfelsen und erreichbar über eine lange Holztreppe mit rund 200 Stufen.",
                "sections": [
                    {
                        "type": "why",
                        "label": "Warum hin?",
                        "text": "Das Wasser schimmert hier in unglaublichen Türkis- und Smaragdtönen. Bei ruhiger See kann man durch einen kleinen Felstunnel in die benachbarte Bucht schwimmen oder waten."
                    },
                    {
                        "type": "timing",
                        "label": "Insider-Timing",
                        "text": "Am schönsten früh morgens oder am späten Nachmittag! Die meisten Reisebusse kommen zwischen 10:00 und 15:00 Uhr. Wer etwas früher kommt, erlebt die Bucht deutlich ruhiger und das Licht eignet sich perfekt zum Fotografieren. Oben auf den Klippen führen kleine Wege zu fantastischen Aussichtspunkten bis zur Ponta da Piedade."
                    }
                ],
                "location": "Praia do Camilo (Lagos)",
                "mapsQuery": "Praia do Camilo Lagos"
            },
            {
                "id": "s3-food-zazu",
                "title": "Zazu Beach Club (Luz)",
                "time": "Nachmittag / Abend • Promenade Luz",
                "category": "food",
                "badges": [
                    "🍹 Füße im Sand",
                    "🍣 Fusion & Burger",
                    "🍸 Epische Cocktails"
                ],
                "description": "Der Lässige mit Meerblick! Wenn ihr die Füße quasi direkt im Sand parken wollt, ist das der perfekte Ort direkt an der Strandpromenade von Luz.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Super stylisch, entspannt, chillige Musik und freier Blick auf den Atlantik und die berühmte 'Rocha Negra' (den schwarzen Felsen von Luz)."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Geniale Crossover- und Fusion-Küche: Von richtig guten Burgern über asiatisch inspirierte Bowls bis hin zu frischen Meeresfrüchten und erstklassigen Steaks. Dazu gibt es fantastische Cocktails."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Den direkten Urlaubsmodus mit Strandflair."
                    }
                ],
                "location": "Praia da Luz Strandpromenade",
                "mapsQuery": "Zazu Beach Club Luz"
            },
            {
                "id": "s3-food-fortaleza",
                "title": "Fortaleza da Luz",
                "time": "Abend • Historische Festung",
                "category": "food",
                "badges": [
                    "🏰 17. Jh. Festungsgarten",
                    "🌅 Epischer Sonnenuntergang",
                    "🍷 Gehobene Küche"
                ],
                "description": "Das Historische auf den Klippen! Ein echtes Highlight, wenn es architektonisch etwas Besonderes sein soll. Das Restaurant befindet sich in einer alten Festungsanlage aus dem 17. Jahrhundert.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Ihr sitzt in einem wunderschönen, geschützten Garten direkt oben auf den Klippen. Der Blick über das Meer ist vor allem zum Sonnenuntergang absolut episch!"
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Gehobene, aber unkomplizierte Küche: Eine tolle Mischung aus traditionellen portugiesischen Gerichten (wie fangfrischem Fisch) und modernen internationalen Einflüssen."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Einen etwas feierlicheren ersten Abend mit viel Atmosphäre."
                    }
                ],
                "location": "Praia da Luz Klippe",
                "mapsQuery": "Fortaleza da Luz Restaurant"
            },
            {
                "id": "s3-food-confraria",
                "title": "Confraria (Die Tapas-Oase in Luz)",
                "time": "Abend • Gasse nahe Promenade",
                "category": "food",
                "badges": [
                    "🍤 Petiscos-Oase",
                    "🐙 Zarter Oktopus",
                    "🍇 Tolle Weinauswahl"
                ],
                "description": "Falls ihr abends eher Lust habt, euch durch verschiedene Kleinigkeiten zu probieren, statt ein schweres Hauptgericht zu essen.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Extrem gemütlich, ein paar Meter von der Promenade zurückgesetzt in einer kleinen Gasse, aber mit einer tollen, lebendigen Terrasse."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Erstklassige mediterrane Tapas (Petiscos): Von Oktopus über feinsten iberischen Schinken bis hin zu genialen vegetarischen Kreationen. Dazu haben sie eine fantastische Weinauswahl."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Ein langes, entspanntes Schlemmen, bei dem man sich einfach treiben lässt."
                    }
                ],
                "location": "Praia da Luz",
                "mapsQuery": "Confraria Luz Tapas"
            },
            {
                "id": "s3-food-black-white",
                "title": "Black and White Coffee Shop (Lagos)",
                "time": "Frühstück / Kaffeepause",
                "category": "food",
                "badges": [
                    "☕ Specialty Coffee",
                    "🥐 Hausgemachte Kuchen",
                    "🪴 Ruhige Oase"
                ],
                "description": "Ein modernes Spezialitäten-Café unweit der Altstadt von Lagos mit exzellentem Kaffee und hausgemachten Kuchen.",
                "bullets": [
                    "<strong>Warum hin?</strong> Perfekt für eine entspannte Frühstücks- oder Kaffeepause vor oder nach einem Spaziergang durch die Altstadt – deutlich ruhiger als viele Cafés direkt an der Promenade.",
                    "<strong>Perfekt für:</strong> Einen gemütlichen Start in den Tag oder eine Pause zwischen zwei Besichtigungen."
                ],
                "location": "Lagos Altstadtnähe",
                "mapsQuery": "Black and White Coffee Shop Lagos"
            }
        ]
    },
    "station-4": {
        "id": "station-4",
        "title": "Olhos de Água & Zentrale/Östliche Algarve",
        "dates": "13.09. – 18.09.2026",
        "badge": "04 OLHOS DE ÁGUA • TAG 9–14",
        "heroImage": "images/hero-praia-da-falesia.jpg",
        "description": "Von der leuchtenden Steilwand der Praia da Falésia zu Benagil, den Knochen von Faro, geheimen Sandbänken und der Wiege des echten Piri-Piri.",
        "hotel": {
            "name": "3HB Falésia Garden",
            "meta": "5 Nächte (13.–18.09.) • Apartment inkl. Frühstück • Direkt an Klippe & Strand",
            "mapsQuery": "3HB Falésia Garden Olhos de Água",
            "website": "https://www.3hb.com/en/hotels/3hb-falesia-garden/",
            "image": "images/hotel-3hb-falesia.jpg",
            "details": "Spektakuläre Klippenlage über dem feinen Sandstrand der Praia da Falésia mit Pool und Meerblick."
        },
        "spots": [
            {
                "id": "s4-roadtrip-day9",
                "title": "Tag 9 (So, 13.09.): Roadtrip Luz ➔ Olhos de Água",
                "time": "09:30 – 17:00 Uhr • Ganztages-Roadtrip",
                "category": "roadtrip",
                "badges": [
                    "🚗 Roadtrip Tag 9",
                    "🌸 Ferragudo",
                    "📸 Marinha Felsbögen",
                    "🏰 Sand City",
                    "🛍️ Algarve Shopping",
                    "🌅 Sundowner Olhos"
                ],
                "image": "images/roadtrip-day9-coastal.jpg",
                "description": "Koffer ins Auto packen, Musik an und ab auf die N125 nach Osten – von malerischen Fischergassen über weltberühmte Felsbögen bis zum Shopping und Ankunft am Traumstrand.",
                "timeline": [
                    {
                        "time": "09:30 Uhr",
                        "title": "Abfahrt in Praia da Luz",
                        "story": "Koffer ins Auto packen, Musik an und ab auf die N125 (oder die Autobahn A22 für den ersten Rutsch) nach Osten!",
                        "bullets": [
                            "<strong>Reisestimmung:</strong> Fahrt in den lebendigen und landschaftlich spektakulären Mittelteil der Algarve."
                        ],
                        "mapsQuery": "Praia da Luz"
                    },
                    {
                        "time": "10:00 – 11:15 Uhr",
                        "title": "Stopp 1: Ferragudo (Der charmante Start)",
                        "story": "Fahrtzeit ca. 30 Minuten.",
                        "bullets": [
                            "<strong>Vor Ort:</strong> Parkt am besten unten in der Nähe des Hafens/Flussufers. Schlendert eine gute Stunde durch die Postkarten-Gassen mit den weißen Häusern und Blumenkübeln hoch zur Kirche, um den Blick über den Fluss zu genießen.",
                            "<strong>Koffein-Kick:</strong> Holt euch auf dem Rückweg am Hauptplatz (<em>Praça Rainha Dona Leonor</em>) einen schnellen Galão oder Espresso."
                        ],
                        "mapsQuery": "Ferragudo Lagoa"
                    },
                    {
                        "time": "11:35 – 12:45 Uhr",
                        "title": "Stopp 2: Praia da Marinha (Das Klippen-Spektakel)",
                        "story": "Fahrtzeit ca. 20 Minuten über die Küstenstraße.",
                        "bullets": [
                            "<strong>Vor Ort:</strong> Da Mittagszeit ist, sparen wir uns den schweißtreibenden Abstieg zum Strand. Geht stattdessen oben auf dem Klippenpfad (Richtung Westen) spazieren.",
                            "<strong>Foto-Spot:</strong> Nach wenigen Minuten habt ihr den perfekten Blick auf die monumentalen Felsbögen (das berühmte 'M' im Wasser) – die perfekte Kulisse für grandiose Urlaubsfotos!"
                        ],
                        "mapsQuery": "Praia da Marinha"
                    },
                    {
                        "time": "13:00 – 14:15 Uhr",
                        "title": "Stopp 3 (Optional): Sand City bei Lagoa",
                        "story": "Fahrzeit ca. 15 Minuten zurück zur Hauptstraße EN125.",
                        "bullets": [
                            "<strong>Vor Ort:</strong> Da das Gelände direkt auf dem Weg liegt, könnt ihr hier spontan entscheiden: Wenn euch nach einer Zeitreise zu den Sandburgen zumute ist, biegt ihr ab und zieht euch eine gute Stunde lang die gigantischen Skulpturen rein. Wenn euch der Sinn eher nach Shopping steht, fahrt ihr einfach direkt weiter."
                        ],
                        "mapsQuery": "Sand City Lagoa"
                    },
                    {
                        "time": "14:35 – 16:30 Uhr",
                        "title": "Stopp 4: Algarve Shopping in Guia (Das Shopping-Finale)",
                        "story": "Fahrtzeit ca. 20 Minuten (von Sand City aus) über die EN125.",
                        "bullets": [
                            "<strong>Vor Ort:</strong> Hier habt ihr Zeit, um euch durch die Läden treiben zu lassen (inklusive Lefties und ein riesiger Continente-Supermarkt für lokale Spezialitäten).",
                            "<strong>Food-Tipp:</strong> Falls sich der Hunger meldet: Das Center hat im Obergeschoss einen riesigen Food-Court mit einer Außenterrasse. Perfekt für einen unkomplizierten Snack zwischendurch."
                        ],
                        "mapsQuery": "Algarve Shopping Guia"
                    },
                    {
                        "time": "16:30 – 16:50 Uhr",
                        "title": "Endspurt nach Olhos de Água",
                        "story": "Fahrtzeit ca. 20 Minuten.",
                        "bullets": [
                            "<strong>Das Ziel:</strong> Ihr verlasst das Einkaufszentrum und fahrt die letzte Stichstraße runter an die Küste. Um kurz vor 17:00 Uhr kommt ihr absolut tiefenentspannt an eurem neuen Hotel (3HB Falésia Garden) in Olhos de Água an, bringt die Koffer aufs Zimmer und könnt pünktlich zum ersten Sundowner an den Strand!"
                        ],
                        "mapsQuery": "3HB Falésia Garden Olhos de Água"
                    }
                ],
                "location": "Luz ➔ Ferragudo ➔ Marinha ➔ Guia ➔ Olhos de Água",
                "mapsQuery": "3HB Falésia Garden Olhos de Água"
            },
            {
                "id": "s4-praia-falesia",
                "title": "Praia da Falésia (Die gigantische Steilwand)",
                "time": "Später Nachmittag & Sonnenuntergang",
                "category": "highlights",
                "badges": [
                    "⭐ Pflichttermin",
                    "🧱 6 km Rote Steilwand",
                    "🌅 Leuchtende Klippen"
                ],
                "image": "images/hero-praia-da-falesia.jpg",
                "description": "Einer der beeindruckendsten Strände Portugals, der sich direkt östlich von Olhos de Água über fast 6 Kilometer bis nach Vilamoura erstreckt.",
                "sections": [
                    {
                        "type": "why",
                        "label": "Warum hin?",
                        "text": "Der Strand wird von einer monumentalen, senkrechten Steilwand aus intensiv roten und weißen Tonsanden flankiert, die oben mit grünen Pinien bewachsen ist."
                    },
                    {
                        "type": "experience",
                        "label": "Das Erlebnis",
                        "text": "Kommt am späten Nachmittag für einen ausgiebigen Strandspaziergang. Wenn die tiefstehende Sonne auf die roten Felsen trifft, fangen die Klippen regelrecht an zu leuchten!"
                    }
                ],
                "location": "Praia da Falésia (Olhos de Água)",
                "mapsQuery": "Praia da Falésia Olhos de Água"
            },
            {
                "id": "s4-quellen-olhos",
                "title": "Die Süßwasserquellen von Olhos de Água",
                "time": "Bei Ebbe am Hauptstrand",
                "category": "highlights",
                "badges": [
                    "💧 Namensgeber des Ortes",
                    "👀 Augen im Sand",
                    "❄️ Eiskaltes Süßwasser"
                ],
                "description": "Das Naturphänomen, dem der Ort seinen Namen verdankt ('Augen des Wassers').",
                "bullets": [
                    "<strong>Warum hin?</strong> Bei Ebbe kann man am östlichen Ende des Hauptstrandes (Praia de Olhos de Água) beobachten, wie eiskaltes Süßwasser aus dem Boden quillt und kreisrunde 'Augen' im nassen Sand bildet.",
                    "<strong>Tradition:</strong> Die lokalen Fischer nutzen diese Quellen seit Jahrhunderten, um ihren Fang kühl zu halten."
                ],
                "location": "Praia de Olhos de Água",
                "mapsQuery": "Praia dos Olhos de Água"
            },
            {
                "id": "s4-benagil-tour",
                "title": "Bootsfahrt zur Benagil-Höhle & Küstencruising",
                "time": "09:00 Uhr morgens • Bootstour",
                "category": "activities",
                "badges": [
                    "🕳️ Benagil-Kathedrale",
                    "⏰ Früh um 09:00 buchen!",
                    "🚤 Bootstour"
                ],
                "image": "images/benagil-cave.jpg",
                "description": "Die berühmteste Meereshöhle der Algarve mit dem markanten Loch in der Decke, durch das die Sonne auf den sandigen Innenstrand scheint.",
                "sections": [
                    {
                        "type": "experience",
                        "label": "Wie erleben?",
                        "text": "Da Schwimmen dorthin wegen der Strömungen lebensgefährlich ist, solltet ihr eine Bootstour buchen. Viele Touren starten direkt im nahen Albufeira oder Vilamoura."
                    },
                    {
                        "type": "timing",
                        "label": "Insider-Tipp",
                        "text": "Bucht die früheste Tour des Tages (meist gegen 09:00 Uhr), um die Höhle zu erleben, bevor die Touristenmassen eintreffen!"
                    }
                ],
                "location": "Benagil Meereshöhle",
                "mapsQuery": "Algar de Benagil"
            },
            {
                "id": "s4-tavira",
                "title": "Tavira (Das Venedig der Algarve) & Câmera Escura",
                "time": "Tagesausflug gen Osten (40 Min.)",
                "category": "highlights",
                "badges": [
                    "🏛️ Venedig der Algarve",
                    "🌉 Römische Brücke",
                    "🔭 Câmera Escura Wasserturm"
                ],
                "image": "images/tavira-historic.jpg",
                "description": "Für viele die schönste und architektonisch eleganteste Stadt der gesamten Algarve, etwa 40 Minuten östlich von Olhos de Água.",
                "sections": [
                    {
                        "type": "why",
                        "label": "Warum hin?",
                        "text": "Hier spürt man noch das alte Portugal: Die Stadt wird vom Fluss Gilão geteilt, über den eine wunderschöne römische Brücke führt. Tavira hat über 30 Kirchen, weiße Bürgerhäuser mit typischen Scherendächern (Telhados de Tesoura) und eine alte Burgruine mit verstecktem Garten über dem Dachmeer."
                    },
                    {
                        "type": "timing",
                        "label": "Der Geheimtipp",
                        "text": "Besucht die Câmera Escura im alten Wasserturm (Torre de Tavira): Ein optisches Spiegelsystem projiziert dort ein Live-360-Grad-Bild der Stadt an die Wand – faszinierend und skurril zugleich!"
                    }
                ],
                "location": "Tavira Altstadt",
                "mapsQuery": "Ponte Romana Tavira"
            },
            {
                "id": "s4-faro-altstadt",
                "title": "Historische Altstadt von Faro (Vila Adentro) & Knochenkapelle",
                "time": "Halbtages-Ausflug",
                "category": "highlights",
                "badges": [
                    "🏰 Vila Adentro",
                    "💀 Capela dos Ossos (1200 Schädel)",
                    "🍊 Orangenbaum-Plätze"
                ],
                "description": "Die meisten Touristen sehen von Faro nur den Flughafen, dabei hat die Stadt eine komplett vom Tourismus unberührte, von einer mittelalterlichen Mauer umschlossene Altstadt.",
                "sections": [
                    {
                        "type": "why",
                        "label": "Warum hin?",
                        "text": "Ihr betretet die Altstadt durch das monumentale Stadttor Arco da Vila. Dahinter warten kopfsteingepflasterte Orangenbaum-Plätze, die Kathedrale Sé (Turmblick über das gesamte Ria-Formosa-Delta) und absolute Ruhe."
                    },
                    {
                        "type": "timing",
                        "label": "Der makabre Insider-Tipp",
                        "text": "Die Capela dos Ossos (Knochenkapelle) in der Nähe der Carmo-Kirche: Die Wände und Säulen dieser kleinen Kapelle sind komplett mit den echten Knochen und Totenköpfen von über 1.200 Mönchen bedeckt. Schaurig, aber ein tief beeindruckendes historisches Dokument!"
                    }
                ],
                "location": "Faro Vila Adentro",
                "mapsQuery": "Arco da Vila Faro"
            },
            {
                "id": "s4-albufeira",
                "title": "Albufeira (Mehr als nur Party: Altstadt vs. Strip)",
                "time": "Vormittag / Nachmittag",
                "category": "highlights",
                "badges": [
                    "🏘️ Weiße Fischer-Altstadt",
                    "🏖️ Praia dos Pescadores",
                    "🎉 Strip-Warnung"
                ],
                "description": "Die touristische Hauptstadt der Algarve. Während viele nur den berühmten 'Strip' kennen, besteht Albufeira eigentlich aus zwei völlig unterschiedlichen Welten.",
                "bullets": [
                    "<strong>Warum hin?</strong> Die historische Altstadt überrascht mit weiß getünchten Häusern, kleinen Plätzen und engen Gassen, die bis zum Fischerstrand (<em>Praia dos Pescadores</em>) hinunterführen. Tagsüber herrscht eine entspannte Urlaubsatmosphäre.",
                    "<strong>Das Erlebnis:</strong> Schlendert durch die Altstadt, trinkt einen Kaffee auf dem Praça da República und lauft entlang der Promenade. Den 'Strip' in Areias de São João kann man sich ansehen, muss dort aber nicht den Abend verbringen. Wer nur die Altstadt besucht, bekommt einen deutlich authentischeren Eindruck als der Ruf vermuten lässt!"
                ],
                "location": "Albufeira Altstadt",
                "mapsQuery": "Praça da República Albufeira"
            },
            {
                "id": "s4-seven-hanging-valleys",
                "title": "Praia da Marinha & Seven Hanging Valleys Trail",
                "time": "Früh morgens oder späten Nachmittag",
                "category": "activities",
                "badges": [
                    "🥾 Seven Hanging Valleys",
                    "📸 Weltberühmte Doppelbögen",
                    "🌊 Türkisblaues Wasser"
                ],
                "description": "Einer der berühmtesten Strände Europas und das wohl bekannteste Fotomotiv der Algarve.",
                "bullets": [
                    "<strong>Warum hin?</strong> Schon der Blick von den Klippen ist spektakulär. Mehrere Aussichtspunkte bieten ständig neue Perspektiven auf die Felsformationen und das intensiv türkisblaue Wasser.",
                    "<strong>Wandern:</strong> Der Strand ist einer der Höhepunkte des berühmten Wanderwegs 'Seven Hanging Valleys Trail'. Wer etwas laufen möchte, wandert von hier ein Teilstück in Richtung Benagil.",
                    "<strong>Beste Besuchszeit:</strong> Kommt möglichst früh am Morgen oder erst gegen Abend. Mittags ist der Parkplatz oft überfüllt."
                ],
                "location": "Praia da Marinha (Lagoa)",
                "mapsQuery": "Praia da Marinha"
            },
            {
                "id": "s4-sand-city",
                "title": "Sand City Lagoa (Größte Sandskulpturen der Welt)",
                "time": "Später Nachmittag / Abends beleuchtet",
                "category": "highlights",
                "badges": [
                    "🏰 120+ Riesenskulpturen",
                    "💡 Farbenprächtige Nachtbeleuchtung",
                    "☀️ Mittagshitze meiden!"
                ],
                "description": "FIESA Sand City westlich von Lagoa direkt an der EN125: Die größte Sandskulpturen-Ausstellung der Welt!",
                "bullets": [
                    "<strong>Die Dimensionen:</strong> Auf rund 15.000 Quadratmetern verarbeiten internationale Künstler jedes Jahr zehntausende Tonnen Sand zu über 120 gigantischen Kunstwerken (von Mythologie über Filmgeschichte bis zu Weltwundern).",
                    "<strong>Beste Besuchszeit:</strong> Da es kaum Schatten gibt, im Spätsommer die pralle Mittagssonne meiden! Geht am späten Nachmittag oder abends hin: Nach Sonnenuntergang werden die Skulpturen mit farbigen Scheinwerfern spektakulär beleuchtet, was eine geniale, fast plastische Atmosphäre erzeugt."
                ],
                "location": "Lagoa (EN125)",
                "mapsQuery": "Sand City Lagoa"
            },
            {
                "id": "s4-shopping",
                "title": "Shopping-Highlights: Algarve Shopping & Mar Shopping",
                "time": "Nachmittag / Regentag-Option",
                "category": "highlights",
                "badges": [
                    "🛍️ Lefties & Continente",
                    "🏬 Designer-Outlet",
                    "🍕 Große Food-Courts"
                ],
                "description": "Die besten Shopping- und Einkaufsadressen der Region.",
                "bullets": [
                    "<strong>Algarve Shopping (Guia):</strong> Das größte Einkaufszentrum der westlichen Algarve. Perfekt für Regentage: Neben zahlreichen Geschäften (inkl. Lefties & riesigem Continente-Supermarkt für lokale Spezialitäten) gibt es Restaurants, Cafés und Kinos.",
                    "<strong>Mar Shopping Algarve (Faro):</strong> Modernes Einkaufszentrum bei Faro mit IKEA, Designer-Outlet und vielen internationalen Marken."
                ],
                "location": "Guia & Faro",
                "mapsQuery": "Algarve Shopping Guia"
            },
            {
                "id": "s4-coelha-rafael",
                "title": "Praia da Coelha & Praia de São Rafael",
                "time": "Geheimtipp • Baden & Schnorcheln",
                "category": "highlights",
                "badges": [
                    "🤿 Schnorchel-Paradies",
                    "🫒 Olivenbaum-Fußweg",
                    "🐚 Windgeschützte Buchten"
                ],
                "description": "Während Albufeira riesige Stadtstrände hat, verstecken sich westlich des Hafens von Albufeira (Richtung Galé) winzige, von bizarren Felsformationen umschlossene Muschelbuchten.",
                "bullets": [
                    "<strong>Praia da Coelha:</strong> Erreicht man nur über einen wunderschönen, 10-minütigen Fußweg vorbei an alten Oliven- und Johannisbrotbäumen. Der Strand ist windgeschützt, das Wasser glasklar und die Felsen im Wasser sind ideal zum Schnorcheln!",
                    "<strong>Praia de São Rafael:</strong> Traumhafter Sandstrand mit skurrilen Felsnadeln direkt vor der Küste."
                ],
                "location": "Westlich von Albufeira (Galé)",
                "mapsQuery": "Praia da Coelha Albufeira"
            },
            {
                "id": "s4-olhao-ria-formosa",
                "title": "Olhão Markthallen & Autofreie Inseln der Ria Formosa",
                "time": "Samstagvormittag / Ganztagstrip",
                "category": "highlights",
                "badges": [
                    "🦐 Rote Backsteinhallen",
                    "🏝️ Autofreie Sandinseln",
                    "🌾 Ria Formosa Naturpark"
                ],
                "image": "images/olhao-markthallen.jpg",
                "description": "Ein Ausflug nach Osten in das riesige Naturparadies der Ria Formosa – ein Geflecht aus Lagunen, Inseln und Salzwiesen.",
                "sections": [
                    {
                        "type": "experience",
                        "label": "Der Insider-Trip",
                        "text": "Fahrt in die authentische Fischerstadt Olhão. Besucht die berühmten roten Backstein-Markthallen direkt am Wasser (samstags ist hier der absolut beste Fisch- und Bauernmarkt der Region!). Setzt danach mit der günstigen Linienfähre für ein paar Euro auf die autofreie Insel Ilha do Farol oder Ilha da Culatra über."
                    },
                    {
                        "type": "why",
                        "label": "Das Inselfeeling",
                        "text": "Hier gibt es nur Sandwege, bunte Fischerhäuschen und unendliche, einsame Sandbänke – eine völlig andere Welt!"
                    }
                ],
                "location": "Olhão & Ria Formosa",
                "mapsQuery": "Mercados de Olhão"
            },
            {
                "id": "s4-trail-headlands",
                "title": "Klippenwandern auf dem Trail of the Headlands",
                "time": "Halbtages-Wanderung",
                "category": "activities",
                "badges": [
                    "🥾 Trail of Headlands",
                    "🌿 Deutlich ruhiger",
                    "🌊 Versteckte Grotten"
                ],
                "description": "Wer nicht weit fahren, aber die Beine bewegen will: Zwischen Carvoeiro und Ferragudo führt ein wunderschöner Küstenpfad an den Klippen entlang.",
                "bullets": [
                    "<strong>Warum dieser Trail?</strong> Er ist deutlich weniger überlaufen als der berühmte 'Sieben-Hängende-Täler-Weg', bietet aber dieselben spektakulären Ausblicke auf versteckte Grotten und Felsnadeln im Meer."
                ],
                "location": "Zwischen Carvoeiro & Ferragudo",
                "mapsQuery": "Trail of Headlands Carvoeiro"
            },
            {
                "id": "s4-pinien-vilamoura",
                "title": "Pinienwald von Alfamar & Marina de Vilamoura",
                "time": "Nachmittag bis Sonnenuntergang",
                "category": "activities",
                "badges": [
                    "🌲 Schattiger Pinienwald",
                    "⛵ Größter Yachthafen",
                    "🍹 Marina-Sundowner"
                ],
                "description": "Zwei ideale Adressen für Entspannung und Urlaubsflair abseits des Trubels.",
                "bullets": [
                    "<strong>Pinienwald von Alfamar:</strong> Oberhalb der Praia da Falésia erstrecken sich dichte, schattige Pinienwälder auf den roten Klippen. Hier kann man abseits der Hitze wunderbar im Schatten spazieren gehen, auf Holzbänken sitzen, aufs Meer schauen und den Duft der Piniennadeln genießen, während unten der Strandtrubel tobt.",
                    "<strong>Marina de Vilamoura:</strong> Der größte Yachthafen Portugals. Kommt kurz vor Sonnenuntergang, spaziert einmal um die Marina und sucht euch anschließend eine Terrasse für einen Cocktail oder ein Abendessen."
                ],
                "location": "Alfamar & Vilamoura",
                "mapsQuery": "Marina de Vilamoura"
            },
            {
                "id": "s4-dorf-alte",
                "title": "Alte (Das unberührte Quellendorf im Hinterland)",
                "time": "30 Min. nördlich • Inland-Entdeckung",
                "category": "highlights",
                "badges": [
                    "💦 Naturschwimmbad",
                    "🌿 Kühle Fontes-Quellen",
                    "🏘️ Schornstein-Architektur"
                ],
                "description": "Wenn ihr dem Küstentrubel für ein paar Stunden komplett entkommen wollt, fahrt 30 Minuten nach Norden ins Vorgebirge nach Alte. Es gilt als eines der am besten erhaltenen, typischen Dörfer der Algarve.",
                "bullets": [
                    "<strong>Das Erlebnis:</strong> Weiße Häuser mit kunstvollen, traditionellen Schornsteinen, steile Gassen und die Fontes (die natürlichen Quellen).",
                    "<strong>Naturschwimmbad:</strong> Am Ende des Dorfes fließt das quellfrische, glasklare Wasser in ein künstlich angelegtes Naturschwimmbad, umgeben von schattigen Liegewiesen und dichten Bäumen. Perfekt für ein entspanntes Picknick im kühlen Landesinneren!"
                ],
                "location": "Alte (Loulé)",
                "mapsQuery": "Fonte Grande Alte"
            },
            {
                "id": "s4-cacela-velha",
                "title": "Cacela Velha (Der vergessene Logenplatz im Osten)",
                "time": "Ausflug in den tiefen Osten (Tavira)",
                "category": "highlights",
                "badges": [
                    "🏰 Vergessener Logenplatz",
                    "🤫 10 Häuser & Mauer",
                    "🏖️ Sandbänke bei Ebbe"
                ],
                "description": "Ein winziges, geschütztes Festungsdorf auf einer Klippe weit im Osten, kurz vor Tavira. Es besteht gefühlt nur aus zehn weißen Häusern, einer Kirche und einer alten Festungsmauer.",
                "bullets": [
                    "<strong>Warum hin?</strong> Von der Festungsmauer aus habt ihr den mit Abstand spektakulärsten und einsamsten Blick über den östlichen Beginn der Ria Formosa.",
                    "<strong>Das Abenteuer:</strong> Bei Ebbe zieht sich das Wasser zurück und gibt riesige Sandbänke frei, zu denen man durch das knietiefe Wasser hinüberwandern kann. Keine Hotels, keine Souvenirshops – nur Ruhe und der Horizont!"
                ],
                "location": "Cacela Velha (Vila Nova de Cacela)",
                "mapsQuery": "Cacela Velha"
            },
            {
                "id": "s4-loule",
                "title": "Loulé (Die authentische Marktstadt)",
                "time": "Vormittag / Samstagsmarkt",
                "category": "highlights",
                "badges": [
                    "🏛️ Neo-maurische Markthalle",
                    "☕ Lokaler Alltag",
                    "🏺 Kunsthandwerk"
                ],
                "description": "Eine traditionelle Kleinstadt im Hinterland der Algarve mit einer wunderschönen Markthalle und einem überraschend lebendigen historischen Zentrum.",
                "bullets": [
                    "<strong>Warum hin?</strong> Deutlich weniger touristisch als die Küstenorte. Hier erlebt man den Alltag der Algarve mit kleinen Cafés, traditionellen Geschäften und engen Gassen.",
                    "<strong>Das Erlebnis:</strong> Bummelt ohne festen Plan durch die Altstadt, besucht die Markthalle und gönnt euch einen Kaffee auf einem der kleinen Plätze."
                ],
                "location": "Loulé Stadtzentrum",
                "mapsQuery": "Mercado Municipal de Loulé"
            },
            {
                "id": "s4-food-la-cigale",
                "title": "La Cigale (Olhos de Água)",
                "time": "Mittag oder Abend • Klippenkante",
                "category": "food",
                "badges": [
                    "🥘 Cataplana-Tradition",
                    "🐟 Gegrillte Seezunge",
                    "🌊 Unschlagbarer Meerblick"
                ],
                "description": "Für Fisch-Liebhaber! Ein absoluter Traditionsbetrieb, der seit Jahrzehnten direkt an der Klippenkante des Hauptstrandes von Olhos de Água thront. Der Blick auf das Meer ist unschlagbar.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Traditionell, maritim und direkt über den Wellen des Hauptstrandes gelegen."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Der Fokus liegt auf absolut frischem Seafood: Berühmt für ihre Cataplana (den traditionellen portugiesischen Eintopf im Kupferkessel) und perfekt gegrillte Seezunge."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Ein stilvolles Fischessen mit bestem Blick auf den Ozean direkt vor der Haustür."
                    }
                ],
                "location": "Praia de Olhos de Água",
                "mapsQuery": "Restaurante La Cigale Olhos de Água"
            },
            {
                "id": "s4-food-teodosio",
                "title": "O Teodósio / Guia (Die Wiege des Piri-Piri)",
                "time": "Mittag oder Abend • 15 Min. Inland",
                "category": "food",
                "badges": [
                    "🍗 Wiege des Piri-Piri",
                    "🔥 Knuspriges Holzkohlehuhn",
                    "💶 Billig & verdammt lecker"
                ],
                "description": "Für Fleisch-Fans! Das Restaurant liegt etwa 15 Minuten im Inland im Dorf Guia – dem Geburtsort des berühmten Frango Piri-Piri.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Riesig, laut, wuselig und maximal authentisch. Ein echtes Erlebnis portugiesischer Alltagskultur ohne Touristen-Chichi."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Hier gibt es im Grunde nur ein Gericht: Auf den Punkt scharf und knusprig gegrilltes Hähnchen vom Holzkohlegrill mit hausgemachten Pommes und einem typischen Tomaten-Zwiebel-Salat. Billig, verdammt lecker und absolut kultig!"
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Einen ungezwungenen Schlemmerabend mit dem besten Piri-Piri-Hähnchen der gesamten Region."
                    }
                ],
                "location": "Guia (Albufeira)",
                "mapsQuery": "Restaurante O Teodósio Guia"
            },
            {
                "id": "s4-food-vila-joya",
                "title": "Vila Joya Sea (Sundowner-Luxus in Galé)",
                "time": "Sundowner / Abend • Exklusiv",
                "category": "food",
                "badges": [
                    "✨ Sundowner-Luxus",
                    "🍣 High-End Sushi",
                    "🍸 Füße im Sand"
                ],
                "description": "Der edle Geheimtipp! Wenn ihr euch mal einen Abend voller Luxus und Romantik gönnen wollt, ohne den steifen Dresscode des dazugehörigen 2-Sterne-Mutterrestaurants zu haben.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Das Vila Joya Sea ist eine exklusive, extrem stylische Strandbar direkt auf den Klippen der Praia de Galé mit freiem Blick auf den Sonnenuntergang."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "High-End-Sushi, frische Austern und asiatisch-mediterrane Crossover-Gerichte, kreiert von Spitzenköchen."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Den ultimativen Sundowner-Cocktail mit den Füßen fast im Sand und Blick auf die untergehende Sonne."
                    }
                ],
                "location": "Praia de Galé (Albufeira)",
                "mapsQuery": "Vila Joya Sea Praia de Galé"
            },
            {
                "id": "s4-food-faz-gostos",
                "title": "Faz Gostos (Faro Vila Adentro)",
                "time": "Abend nach Faro-Ausflug",
                "category": "food",
                "badges": [
                    "🍷 Gourmet-Tipp Faro",
                    "🐟 Bacalhau-Spezialitäten",
                    "🏰 Historische Gewölbe"
                ],
                "description": "Die Belohnung nach dem Faro-Ausflug! Wenn ihr euch die Altstadt von Faro anschaut, bleibt unbedingt zum Abendessen hier.",
                "sections": [
                    {
                        "type": "vibe",
                        "label": "Der Vibe",
                        "text": "Das Restaurant liegt mitten in den historischen Mauern der Vila Adentro und verbindet alte Gewölbe mit modernem Design."
                    },
                    {
                        "type": "food",
                        "label": "Auf dem Teller",
                        "text": "Gehobene, aber bodenständige portugiesische Küche. Berühmt für ihre Kreationen mit Bacalhau (Kabeljau) und exzellente Fleischgerichte vom Alentejo-Schwein, gepaart mit einer der besten Weinkarten der Region."
                    },
                    {
                        "type": "perfect",
                        "label": "Perfekt für",
                        "text": "Einen unvergesslichen kulinarischen Abschluss des Ausflugs in die historische Hauptstadt."
                    }
                ],
                "location": "Faro Vila Adentro",
                "mapsQuery": "Restaurante Faz Gostos Faro"
            }
        ]
    },
    "station-5": {
        "id": "station-5",
        "title": "Abreise & Rückflug nach Weeze",
        "dates": "18.09.2026",
        "badge": "05 ABREISE • TAG 14",
        "heroImage": "images/hotel-faro-3k.jpg",
        "description": "Mietwagenrückgabe in Faro bei EPI Rent a Car, Rückflug nach Weeze mit Ryanair und Parkplatz-Ausfahrt mit Kennzeichenerkennung auf P3.",
        "hotel": {
            "name": "Keine Übernachtung (Heimreisetag)",
            "meta": "Fr, 18.09.2026 • Direktflug Faro nach Weeze",
            "mapsQuery": "Aeroporto de Faro",
            "website": "",
            "image": "images/hotel-faro-3k.jpg",
            "details": "Heimreise nach 14 erlebnisreichen Tagen an der Küste Portugals."
        },
        "spots": [
            {
                "id": "s5-mietwagen-rueckgabe",
                "title": "Mietwagenrückgabe Faro (EPI Rent a Car)",
                "time": "Fr, 18.09. • Vor dem Abflug",
                "category": "roadtrip",
                "badges": [
                    "🚗 EPI Rent a Car",
                    "✈️ Flughafen Faro"
                ],
                "description": "Rückgabe des Mietwagens vor dem Rückflug im Büro von EPI Rent a Car am Flughafen Faro.",
                "bullets": [
                    "<strong>Ablauf:</strong> Fahrzeug vollgetankt und sauber übergeben.",
                    "<strong>Transfer:</strong> Kurzer Weg ins Abflugterminal des Flughafens Faro."
                ],
                "location": "Flughafen Faro",
                "mapsQuery": "EPI Rent a Car Faro"
            },
            {
                "id": "s5-rueckflug",
                "title": "Rückflug: Faro ➔ Weeze (Ryanair)",
                "time": "Fr, 18.09. • 16:20 – 20:20 Uhr",
                "category": "roadtrip",
                "badges": [
                    "✈️ Ryanair Direktflug",
                    "⏱️ 3h 00min Flugzeit"
                ],
                "description": "Rückflug von Faro (FAO) nach Niederrhein / Weeze (NRN).",
                "bullets": [
                    "<strong>Abflug Faro:</strong> 16:20 Uhr (portugiesische Ortszeit)",
                    "<strong>Ankunft Weeze:</strong> 20:20 Uhr (MESZ / deutsche Ortszeit)",
                    "<strong>Flugdauer:</strong> ca. 3 Std. 00 Min."
                ],
                "location": "Faro (FAO) ➔ Weeze (NRN)",
                "mapsQuery": "Aeroporto de Faro"
            },
            {
                "id": "s5-ausfahrt-weeze",
                "title": "Parkplatz-Ausfahrt Weeze P3 & Heimfahrt",
                "time": "Fr, 18.09. • Nach Landung 20:20 Uhr",
                "category": "roadtrip",
                "badges": [
                    "🅿️ Parkplatz Weeze P3",
                    "🔑 Kennzeichenerkennung",
                    "⏳ Puffer bis Sa 02:00 Uhr"
                ],
                "description": "Rückkehr zum Auto auf Parkplatz P3 am Flughafen Weeze.",
                "bullets": [
                    "<strong>Gültigkeit der Buchung:</strong> Ausfahrt ist reserviert bis Samstag, 19.09. um 02:00 Uhr (genügend Puffer für eventuelle Flugverspätungen).",
                    "<strong>Ausfahrt:</strong> Die Schranke öffnet automatisch per Kennzeichenerkennung.",
                    "<strong>Hilfe bei Störung:</strong> Telefon-Taste an der Ausfahrtssäule drücken."
                ],
                "location": "Flughafen Weeze P3",
                "mapsQuery": "Airport Weeze P3"
            }
        ]
    }
};

class TravelApp {
    constructor() {
        this.currentStationKey = 'station-1';
        this.currentCategory = 'all';
        this.initDOMElements();
        this.bindEvents();
        this.renderStation();
    }
    initDOMElements() {
        this.stationPills = document.querySelectorAll('.station-pill');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.controlsBar = document.getElementById('controlsBar');
        this.spotsContainer = document.getElementById('spotsContainer');
        this.heroImage = document.getElementById('heroImage');
        this.heroStationTag = document.getElementById('heroStationTag');
        this.heroDateTag = document.getElementById('heroDateTag');
        this.heroTitle = document.getElementById('heroTitle');
        this.heroDesc = document.getElementById('heroDesc');
        this.heroHotelBanner = document.getElementById('heroHotelBanner');
        this.heroHotelThumb = document.getElementById('heroHotelThumb');
        this.heroHotelName = document.getElementById('heroHotelName');
        this.heroHotelMeta = document.getElementById('heroHotelMeta');
        this.heroHotelWebBtn = document.getElementById('heroHotelWebBtn');
        this.heroHotelMapsBtn = document.getElementById('heroHotelMapsBtn');
        this.prevStationBtn = document.getElementById('prevStationBtn');
        this.nextStationBtn = document.getElementById('nextStationBtn');
        this.prevStationTitle = document.getElementById('prevStationTitle');
        this.nextStationTitle = document.getElementById('nextStationTitle');
        this.lightboxModal = document.getElementById('lightboxModal');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxCaption = document.getElementById('lightboxCaption');
        this.closeLightboxBtn = document.getElementById('closeLightboxBtn');
        this.countAll = document.getElementById('countAll');
        this.countRoadtrip = document.getElementById('countRoadtrip');
        this.countHighlights = document.getElementById('countHighlights');
        this.countActivities = document.getElementById('countActivities');
        this.countFood = document.getElementById('countFood');
    }
    bindEvents() {
        this.stationPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const stationKey = pill.dataset.station;
                if (stationKey && stationKey !== this.currentStationKey) {
                    this.setActiveStation(stationKey);
                }
            });
        });
        this.categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.cat;
                if (cat && cat !== this.currentCategory) {
                    this.setActiveCategory(cat);
                }
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
    setActiveCategory(category) {
        this.currentCategory = category;
        this.categoryButtons.forEach(b => b.classList.toggle('active', b.dataset.cat === category));
        this.renderSpots();
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
            
            // Bullets
            const bulletsHtml = spot.bullets && spot.bullets.length > 0 ? `
                <ul class="spot-highlights-box">
                    ${spot.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            ` : '';

            // Sections (Der Vibe, Auf dem Teller, Warum hin?, Timing etc.)
            let sectionsHtml = '';
            if (spot.sections && spot.sections.length > 0) {
                sectionsHtml = `
                    <div class="spot-rubrics-grid">
                        ${spot.sections.map(sec => `
                            <div class="spot-rubric-card">
                                <div class="spot-rubric-header">
                                    <span class="spot-rubric-tag rubric-${sec.type || 'default'}">${sec.label}</span>
                                </div>
                                <div class="spot-rubric-text">${sec.text}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            // Timeline Steps (for Roadtrip Tage 1, 5, 9) - Expandable Box
            let timelineHtml = '';
            if (spot.timeline && spot.timeline.length > 0) {
                const stepCount = spot.timeline.length;
                timelineHtml = `
                    <details class="roadtrip-accordion">
                        <summary class="roadtrip-summary">
                            <div class="roadtrip-summary-info">
                                <span class="roadtrip-summary-icon">🗺️</span>
                                <div class="roadtrip-summary-texts">
                                    <strong class="roadtrip-summary-title">${stepCount} Roadtrip-Etappen & Zwischenstopps</strong>
                                    <span class="roadtrip-summary-sub">Klicken zum Aufklappen der genauen Uhrzeiten & Highlights</span>
                                </div>
                            </div>
                            <div class="roadtrip-summary-badge">
                                <span>Etappen ansehen</span>
                                <svg class="roadtrip-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                        </summary>
                        <div class="roadtrip-timeline-drawer">
                            <div class="roadtrip-timeline">
                                ${spot.timeline.map(step => `
                                    <div class="roadtrip-timeline-step">
                                        <div class="timeline-step-header">
                                            <span class="timeline-step-time">${step.time}</span>
                                            <strong class="timeline-step-title">${step.title}</strong>
                                        </div>
                                        <p class="timeline-step-story">${step.story}</p>
                                        ${step.bullets && step.bullets.length > 0 ? `
                                            <ul class="timeline-step-bullets">
                                                ${step.bullets.map(b => `<li>${b}</li>`).join('')}
                                            </ul>
                                        ` : ''}
                                        ${step.mapsQuery ? `
                                            <div class="timeline-step-actions">
                                                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(step.mapsQuery)}" target="_blank" rel="noopener noreferrer" class="timeline-maps-btn">
                                                    <span>Maps: ${step.title}</span>
                                                    <svg class="svg-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                                </a>
                                            </div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </details>
                `;
            }

            // Media frame
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

            // Website button
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
                        ${sectionsHtml}
                        ${timelineHtml}
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
