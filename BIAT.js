define(['pipAPI' ,'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/biat6.js'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension({
    "categories": [
        {
            "name": "Donna",
            "title": {
                "media": {
                    "word": "Donna"
                },
                "css": {
                    "color": "#31b404",
                    "font-size": "1.8em"
                },
                "height": 4,
                "startStimulus": {
                    "media": {
                        "word": "Femmina, Ragazza, Lei"
                    },
                    "css": {
                        "color": "#31b404",
                        "font-size": "1em"
                    },
                    "height": 2
                }
            },
            "stimulusMedia": [
                {
                    "word": "Femmina"
                },
                {
                    "word": "Ragazza"
                },
                {
                    "word": "Lei"
                }
            ],
            "stimulusCss": {
                "color": "#31b404",
                "font-size": "2em"
            }
        },
        {
            "name": "Uomo",
            "title": {
                "media": {
                    "word": "Uomo"
                },
                "css": {
                    "color": "#31b404",
                    "font-size": "1.8em"
                },
                "height": 4,
                "startStimulus": {
                    "media": {
                        "word": "Maschio, Ragazzo, Lui"
                    },
                    "css": {
                        "color": "#31b404",
                        "font-size": "1em"
                    },
                    "height": 2
                }
            },
            "stimulusMedia": [
                {
                    "word": "Maschio"
                },
                {
                    "word": "Ragazzo"
                },
                {
                    "word": "Lui"
                }
            ],
            "stimulusCss": {
                "color": "#31b404",
                "font-size": "2em"
            }
        }
    ],
    "attribute1": {
        "name": "Vittima di Discriminazione",
        "title": {
            "media": {
                "word": "Vittima di Discriminazione"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4,
            "startStimulus": {
                "media": {
                    "word": "Bersaglio, Oppresso, Perseguitato"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "1em"
                },
                "height": 2
            }
        },
        "stimulusMedia": [
            {
                "word": "Bersaglio"
            },
            {
                "word": "Oppresso"
            },
            {
                "word": "Perseguitato"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2em"
        }
    },
    "attribute2": {
        "name": "Autore di Discriminazione",
        "title": {
            "media": {
                "word": "Autore di Discriminazione"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4,
            "startStimulus": {
                "media": {
                    "word": "Perpretatore, Sessista, Abusatore"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "1em"
                },
                "height": 2
            }
        },
        "stimulusMedia": [
            {
                "word": "Perpretatore"
            },
            {
                "word": "Sessista"
            },
            {
                "word": "Abusatore"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2em"
        }
    },
    "isTouch": false,
    "practiceBlock": false,
    "showStimuliWithInst": true,
    "remindError": true,
    "base_url": {
        "image": "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/docs/images/"
    },
    "nMiniBlocks": 1,
    "nTrialsPerMiniBlock": 16,
    "nPracticeBlockTrials": 0,
    "nCategoryAttributeBlocks": 2,
    "focalAttribute": "attribute1",
    "firstFocalAttribute": "random",
    "focalCategoryOrder": "random",
    "leftKeyText": "\"E\" per tutto il resto",
    "rightKeyText": "\"I\" se la parola appartiene",
    "orText": "e",
    "remindErrorText": "<p style=\"font-size:0.6em;font-family:arial sans-serif; text-align:center;\">Se commetti un errore, una <font-color=\"#ff0000\"><b>X</b></font> rossa apparirà. Premi l'altro tasto per continuare.<p/>",
    "finalText": "Premi la barra spaziatrice per continuare.",
    "instTemplate": "<div><p style=\"font-size:20px; font-family:arial sans-serif; text-align:center;\"><br/><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Premi con l'indice destro il tasto <b>I</b> per le parole che appartengono alla categoria <font-color=\"#0000FF\">focalAtt</font>, e per le parole che appartengono alla categoria <font-color=\"#31b404\">focalCat</font>.<br/>Premi con l'indice sinistro il tasto <b>E</b> per le parole che non appartengono a queste categorie.<br/><br/>Se commetti un errore, una <font-color=\"#ff0000\"><b>X</b></font> rossa apparirà. Premi l'altro tasto per continuare.<br/><br/><p style=\"text-align:center;\">Premi la <b>barra spaziatrice</b> quando sei pront/o per iniziare.</font></p></div>"
});});
