define(['pipAPI' ,'https://maryabby90.github.io/B-IAT_prova/extension_biat.js'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension({
    "practiceCategory1": {
        "name": "Fiori",
        "title": {
            "media": {
                "word": "Fiori"
            },
            "css": {
                "color": "#31b404",
                "font-size": "1.8em"
            },
            "height": 4,
            "startStimulus": {
                "media": {
                    "word": "Margherita, Tulipano, Rosa, Orchidea"
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
                "word": "Margherita"
            },
            {
                "word": "Tulipano"
            },
            {
                "word": "Rosa"
            },
            {
                "word": "Orchidea"
            }
        ],
        "stimulusCss": {
            "color": "#31b404",
            "font-size": "2em"
        }
    },
    "practiceCategory2": {
        "name": "Insetti",
        "title": {
            "media": {
                "word": "Insetti"
            },
            "css": {
                "color": "#31b404",
                "font-size": "1.8em"
            },
            "height": 4,
            "startStimulus": {
                "media": {
                    "word": "Millepiedi, Swans, Crows, Ravens"
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
                "word": "Millepiedi"
            },
            {
                "word": "Swans"
            },
            {
                "word": "Crows"
            },
            {
                "word": "Ravens"
            }
        ],
        "stimulusCss": {
            "color": "#31b404",
            "font-size": "2em"
        }
    },
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
                    "word": "Abusatore, Perpetratore, Sessista"
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
                "word": "Abusatore"
            },
            {
                "word": "Perpetratore"
            },
            {
                "word": "Sessista"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2em"
        }
    },
    "attribute2": {
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
                    "word": "Bersaglio, Perseguitato, Vittima"
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
                "word": "Perseguitato"
            },
            {
                "word": "Vittima"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2em"
        }
    },
    "isTouch": false,
    "practiceBlock": true,
    "showStimuliWithInst": true,
    "remindError": true,
    "base_url": {
        "image": "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/docs/images/"
    },
    "nMiniBlocks": 1,
    "nTrialsPerMiniBlock": 16,
    "nPracticeBlockTrials": 16,
    "nCategoryAttributeBlocks": 2,
    "focalAttribute": "attribute1",
    "firstFocalAttribute": "random",
    "focalCategoryOrder": "random",
    "leftKeyText": "\"E\" for all else",
    "rightKeyText": "\"I\" if item belongs",
    "orText": "or",
    "remindErrorText": "<p style=\"font-size:0.6em;font-family:arial sans-serif; text-align:center;\">If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<p/>",
    "finalText": "Press space to continue to the next task",
    "instTemplate": "<div><p style=\"font-size:20px; font-family:arial sans-serif; text-align:center;\"><br/><font-color=\"#000000\"><u>Part blockNum of nBlocks </u><br/><br/></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial\">Put a right finger on the <b>I</b> key for items that belong to the category <font-color=\"#0000FF\">focalAtt</font>, and for items that belong to the category <font-color=\"#31b404\">focalCat</font>.<br/>Put a left finger on the <b>E</b> key for items that do not belong to these categories.<br/><br/>If you make a mistake, a red <font-color=\"#ff0000\"><b>X</b></font> will appear. Press the other key to continue.<br/><br/><p style=\"text-align:center;\">Press the <b>space bar</b> when you are ready to start.</font></p></div>"
});});
