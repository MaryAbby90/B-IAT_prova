define(['questAPI'], function(Quest){
	var API = new Quest();

	// ### Questions
	// Create the template
API.addQuestionsSet('basicDropdown', {
    type: 'selectOne',
    style: 'multiButtons',
    minWidth: '150px',
    autoSubmit: true,
    numericValues: true,
    required:true,
    help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	errorMsg: {
		required: "Per favore, rispondi a questa domanda"
	}
});

    API.addQuestionsSet('vittima',{
        inherit : 'singleChoice',
        name: 'vittima',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
        stem: '<b>Quanto fortemente associ il seguente concetto alla donna o all’uomo: <font color="red">Vittima di Discriminazione</font></b>?',
        answers: [
		{text:'Fortemente all’uomo',value:1},
		{text:'Moderatamente all’uomo',value:2},
		{text:'Leggermente all’uomo',value:3},
		{text:'Né all’uomo né alla donna',value:4},
		{text:'Leggermente alla donna',value:5},
		{text:'Moderatamente alla donna',value:6},
		{text:'Fortemente alla donna',value:7}
        ]
    });

    API.addQuestionsSet('autore',{
        inherit : 'singleChoice',
        name: 'autore',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
        stem: '<b>Quanto fortemente associ il seguente concetto alla donna o all’uomo: <font color="red">Autore di Discriminazione</font></b>?',
        answers: [
		{text:'Fortemente all’uomo',value:1},
		{text:'Moderatamente all’uomo',value:2},
		{text:'Leggermente all’uomo',value:3},
		{text:'Né all’uomo né alla donna',value:4},
		{text:'Leggermente alla donna',value:5},
		{text:'Moderatamente alla donna',value:6},
		{text:'Fortemente alla donna',value:7}
        ]
    });

	API.addQuestionsSet('DiscriminazioneGruppo',{
	inherit : 'singleChoice',
	name: 'DiscriminazioneGruppo',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Quanto spesso ritieni che le donne siano discriminate a causa del loro genere?</b>',
	answers: [
		{text:'Mai',value: 1},
		{text:'Raramente',value: 2},
		{text:'Qualche volta',value: 3},
		{text:'Spesso',value: 4}
		]
	});
	
	API.addQuestionsSet('DiscriminazioneIndividuale',{
	inherit : 'singleChoice',
	name: 'DiscriminazioneIndividuale',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Quanto spesso ritieni di essere stata/o personalmente discriminata/o a causa del tuo genere?</b>',
	answers: [
		{text:'Mai',value: 1},
		{text:'Raramente',value: 2},
		{text:'Qualche volta',value: 3},
		{text:'Spesso',value: 4}
		]
	});

API.addQuestionsSet('BPNSFS',{
	type : 'grid',
	name: 'BPNSFS',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Di seguito sono riportate delle affermazioni che si riferiscono a sentimenti vissuti nella propria vita. Leggi ciascuna affermazione con attenzione. Puoi rispondere scegliendo un numero da 1=(Completamente in disaccordo) a 5=(Completamente d’accordo) per indicare il grado d’accordo a ciascuna affermazione in riferimento a come ti senti <font color="red"><i>nel tuo contesto universitario.</i></font></b>', 
                    rows: [
			   'Sento un senso di possibilità di scelta e di libertà nelle cose in cui mi impegno',
			   'La maggior parte delle cose faccio, le faccio perché "le devo fare"',
			   'Mi sento fiduciosa/o di poter fare le cose bene',
			   'Mi sento delusa/o da molte delle mie prestazioni',
			   'Mi sento in sintonia con le persone che si prendono cura di me e alle quali tengo',
			   'Sento che le persone che sono importanti per me sono fredde e distanti nei miei confronti',
			   'Sento che le mie decisioni rispecchiano quello che voglio veramente',
			   'Mi sento costretta/o a fare molte cose che io non avrei scelto di fare',
			   'Mi sento competente per raggiungere i miei obiettivi',
			   'Mi sento insicura/o delle mie capacità',
			   'Provo un sentimento di calore con le persone con cui passo il mio tempo',
			   'Mi sento esclusa/o dal gruppo a cui vorrei appartenere',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Completamente in disaccordo', css : {width:'12%'}},
			{stem:'2.', css : {width:'12%'}},
			{stem:'3.', css : {width:'12%'}},
			{stem:'4.', css : {width:'12%'}},
			{stem:'5. Completamente d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});

API.addQuestionsSet('SoddAcc',{
	type : 'grid',
	name: 'SoddAcc',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Utilizzando la scala sottostante, indica il tuo grado di accordo con ciascuna delle seguenti affermazioni.</b>', 
                    rows: [
			   'Sono soddisfatta/o della decisione di laurearmi nel mio campo di studi' ,
			   'Mi sento a mio agio nell’ambiente universitario e accademico del mio corso di studi',
			   'In generale, mi piacciono le attività del mio corso di laurea',
			   'Sono complessivamente soddisfatta/o della mia vita universitaria e accademica',
			   'Apprezzo molto il livello di stimolazione intellettuale che trovo nei miei corsi',
			   'Mi sento entusiasta riguardo agli argomenti trattati nel mio corso di studi',
			   'Mi piace quello che sto imparando durante le mie lezioni'
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Fortemente in disaccordo', css : {width:'12%'}},
			{stem:'2. In disaccordo', css : {width:'12%'}},
			{stem:'3. Né in disaccordo né in accordo', css : {width:'12%'}},
			{stem:'4. D’accordo', css : {width:'12%'}},
			{stem:'5. Fortemente d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	});
	
API.addQuestionsSet('AspirCar',{
	type : 'grid',
	name: 'AspirCar',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: ': <b>Utilizzando la scala sottostante, indica quanto sia vera o falsa per te ciascuna delle seguenti affermazioni.</b>', 
                    rows: [
			   'Mi piacerebbe lavorare in un settore in cui le mie competenze nelle discipline STEM siano particolarmente valorizzate',
			   'Mi piacerebbe lavorare in un ambiente in cui le competenze STEM siano fondamentali per il successo professionale',
			   'Sto considerando una carriera nel campo delle STEM',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Per niente vero', css : {width:'7%'}},
			{stem:'2.', css : {width:'7%'}},
			{stem:'3.', css : {width:'7%'}},
			{stem:'4.', css : {width:'7%'}},
			{stem:'5.', css : {width:'7%'}},
			{stem:'6.', css : {width:'7%'}},
			{stem:'7. Completamente vero', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	

API.addQuestionsSet('AspettCarr',{
	type : 'grid',
	name: 'AspettCarr',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Utilizzando la scala sottostante, indica quanto sia vera o falsa per te ciascuna delle seguenti affermazioni.</b>', 
                    rows: [
			   'Ho sempre sperato di avere un lavoro nelle STEM un giorno',
			   'Per me è molto importante avere un lavoro nelle STEM in futuro',
			   'Mi aspetto di ottenere la laurea necessaria per un lavoro in STEM',
			   'È molto probabile che, in futuro, troverò un lavoro nelle STEM',
			   'Mi aspetto di avere una carriera professionale solida nel campo delle STEM',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Fortemente in disaccordo', css : {width:'12%'}},
			{stem:'2.', css : {width:'12%'}},
			{stem:'3.', css : {width:'12%'}},
			{stem:'4.', css : {width:'12%'}},
			{stem:'5. Fortemente d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	

API.addQuestionsSet('Resilienza',{
	type : 'grid',
	name: 'Resilienza',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Utilizzando la scala sottostante, indica quanto sia vera o falsa per te ciascuna delle seguenti affermazioni.</b>', 
                    rows: [
			   'Tendo a riprendermi in fretta dopo periodi difficili',
			   'Ho difficoltà a “farcela” dopo eventi stressanti',
			   'Non mi ci vuole molto per recuperare da un evento stressante',
			   'È difficile per me ripartire subito quando succede qualcosa di brutto',
			   'Di solito ho attraversato momenti difficili con poca fatica',
			   'Mi serve molto tempo per superare battute d’arresto nella mia vita',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Forte disaccordo', css : {width:'12%'}},
			{stem:'2. Disaccordo', css : {width:'12%'}},
			{stem:'3. Indifferente', css : {width:'12%'}},
			{stem:'4. D’accordo', css : {width:'12%'}},
			{stem:'5. Molto d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	


API.addQuestionsSet('Distress',{
	type : 'grid',
	name: 'Distress',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: '<b>Nelle prossime dieci domande ti verrà chiesto come ti sei sentita/o nelle ultime 4 settimane <font color="red"><i>nel tuo contesto universitario</i></font>. Per ognuna di esse, contrassegna la risposta che più di tutte rispecchia la frequenza delle emozioni descritte. Presta attenzione! Ti compariranno 10 affermazioni.</b>', 
                    rows: [
			'Nelle ultime 4 settimane quante volte ti sei sentita/o esausta/o senza una ragione apparente?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o nervosa/o?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o così nervosa/o da non riuscire in nessun modo a calmarti?',
			'Nelle ultime 4 settimane quante volte sei stata/o presa/o dalla disperazione?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o irrequieta/o o agitata/o?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o così irrequieta/o da non riuscire a stare ferma/o?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o depressa/o?',
			'Nelle ultime 4 settimane quante volte hai sentito che ogni cosa che facevi richiedeva uno sforzo?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o così triste che nulla riusciva a rasserenarti?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o inutile?',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Nemmeno una volta', value:0, css : {width:'12%'}},
			{stem:'2. Poche volte', value:1, css : {width:'12%'}},
			{stem:'3. Diverse volte', value:2, css : {width:'12%'}},
			{stem:'4. Quasi sempre', value:3, css : {width:'12%'}},
			{stem:'5. Sempre', value:4, css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	
	
API.addQuestionsSet('basicDropdown2', {
    type: 'dropdown',
    autoSubmit: false,
    numericValues: true,
    required:true,
    help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	errorMsg: {
		required: "Per favore, rispondi a questa domanda"
	}
});

	
	API.addQuestionsSet('singleChoice', [
     {
        type: 'selectOne',
        autoSubmit: false,
        numericValues: true,
        required: true,
        help: '<%= pagesMeta.number < 100 %>',
    	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	    errorMsg: {
    		required: "Per favore, rispondi a questa domanda"
    	}
		}]);
	
	API.addQuestionsSet('basicGrid',
	{
		type: 'grid',
		cellLabels:true,
		rowStemHide: true,
		checkboxType : 'colorMark',
		required : true,
		errorMsg: {
			required: "Per favore, rispondi a questa domanda."
		},
		help: '<%= pagesMeta.number < 100 %>',
		helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
		columnStemHide: true,
		maxWidth:420,
		name : '<%=questionsData.name%>',
		columns: [
			{type:'text', textProperty:'left', css : {width:'13.5%'}},
			{stem:'1', css : {width:'7%'}},
			{stem:'2', css : {width:'7%'}},
			{stem:'3', css : {width:'7%'}},
			{stem:'4', css : {width:'7%'}},
			{stem:'5', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'13.5%'}}
		],
	
        rows: [
			{left:'Completamente in disaccordo', right:'Completamente d’accordo', name:'<%=questionsData.name%>.agree'}
		]
	});
	

    API.addQuestionsSet('basicSelect',
    {
        type: 'selectOne',
        autoSubmit:false,
        numericValues:true,
        style:'multiButtons',
	required : true,
	errorMsg: {
	required: "Per favore, rispondi a questa domanda."
	  	  },
        answers : [
            '1 - Fortemente in disaccordo',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7 - Fortemente d’accordo'
        ]
    });

	API.addQuestionsSet('COWS_1',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_1_1',
			stem : '<b>1. La/il tua/o docente ti ha informato dell’introduzione di nuove procedure che potrebbero aiutarti a migliorare il tuo rendimento accademico. La prima cosa che pensi è:</b><br/><br/>' + 
				'Questo sarà interessante e importante per me provarlo'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_1_2',
			stem : 'Sentirò la pressione di dover fare come dice la/il mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_1_3',
			stem : 'Probabilmente sarà inutile per me farlo'
		}
	]);
	
	API.addQuestionsSet('COWS_2',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_2_1',
			stem : '<b>2. La/il tua/o docente desidera che tu sia più autonoma/o e indipendente nello studio. La prima cosa che probabilmente penserai sarà:</b><br/><br/>' + 
				'Sarà importante per me mettermi alla prova per vedere se funziona'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_2_2',
			stem : 'Sentirò la pressione di seguire ciò che mi dice la/il mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_2_3',
			stem : 'È difficile cambiare su aspetti come l’indipendenza, sono fatta/o così'
		}
	]);

	API.addQuestionsSet('COWS_3',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_3_1',
			stem : '<b>3. La/il tua/o docente ti ha chiesto di affrontare la questione del tuo interesse per lo studio, che ultimamente sembra essere un po’ calato. Probabilmente penserai/sentirai:</b><br/><br/>' + 
				'Vorrei parlare con la/il mia/o docente per cercare insieme una soluzione adeguata'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_3_2',
			stem : 'Mi sentirò sotto pressione per fare qualcosa che soddisfi la/il mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_3_3',
			stem : 'Onestamente, penso di non poter realmente cambiare il mio interesse di base per lo studio'
		}
	]);

	API.addQuestionsSet('COWS_4',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_4_1',
			stem : '<b>4. La/il tua/o docente ti ha chiesto di frequentare un corso per migliorare le tue competenze accademiche. Probabilmente penserai/sentirai:</b><br/><br/>' + 
				'Penso che potrebbe essere interessante e stimolante'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_4_2',
			stem : 'Mi sentirò sotto pressione per farlo e soddisfare le aspettative della/del mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_4_3',
			stem : 'Ritengo di avere già una certa competenza, e non c’è molto che io possa fare per migliorarla'
		}
	]);

	API.addQuestionsSet('COWS_5',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_5_1',
			stem : '<b>5. La/il tua/o docente ti ha suggerito di lavorare con una/o studentessa/e più esperta/o per migliorare le tue competenze. Probabilmente penserai o sentirai:</b><br/><br/>' + 
				'Ritengo che questa possa essere un’opportunità importante per me'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_5_2',
			stem : 'Mi sentirò sotto pressione a farlo per adempiere ai miei incarichi di studio'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_5_3',
			stem : 'A dire il vero, penso di non essere in grado di cambiare significativamente il mio livello di competenza'
		}
	]);

	API.addQuestionsSet('COWS_6',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_6_1',
			stem : '<b>6. La/il tua/o docente ti ha chiesto di collaborare di più con i tuoi colleghi di corso. Probabilmente penserai, sentirai o farai:</b><br/><br/>' + 
				'Mi impegnerò a individuare con chi collaborare e li contatterò'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_6_2',
			stem : 'Avvertirò la pressione di dover collaborare su qualcosa che preferirei affrontare da sola/o'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_6_3',
			stem : 'Sento che, onestamente, non posso fare molto per modificare il mio atteggiamento sociale'
		}
	]);	

    API.addQuestionsSet('nazione',{
        inherit : 'singleChoice',
        name: 'nazione',
        stem: '<b>Indica la tua nazionalità</b>',
        answers: [
		{text:'Italiana',value:1},
		{text:'Altro',value:2}
        ]
    });
	
    API.addQuestionsSet('sesso',{
        inherit : 'singleChoice',
        name: 'sesso',
        stem: '<b>Indica il tuo sesso biologico</b>',
        answers: [
		{text:'Maschio',value:1},
		{text:'Femmina',value:2},
		{text:'Altro',value:3}
        ]
    });

    API.addQuestionsSet('genere',{
        inherit : 'singleChoice',
        name: 'genere',
        stem: '<b>Indica il genere con cui ti identifichi</b>',
        answers: [
		{text:'Uomo',value:1},
		{text:'Donna',value:2},
		{text:'Non Binario',value:3},
		{text:'Altro',value:4}
        ]
    });	

	API.addQuestionsSet('basicQ',{
		decline: true,
		required : true,
		errorMsg: {
			required: "Per favore, rispondi a questa domanda."
		  	  },
		help: '<%= pagesMeta.number < 100 %>',
		helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
		autoSubmit:true,
		numericValues:true
	});
	
	API.addQuestionsSet('singleChoicedrop',{
		inherit: 'basicQ',
		autoSubmit:false,
		type: 'dropdown'
	});	
	
	API.addQuestionsSet('età',{
		inherit: 'singleChoicedrop',
		name: 'età',
		stem: '<b>Indica la tua età</b>',
		answers: [
			{text:'2009',value:2009},
			{text:'2008',value:2008},
			{text:'2007',value:2007},
			{text:'2006',value:2006},
			{text:'2005',value:2005},
			{text:'2004',value:2004},
			{text:'2003',value:2003},
			{text:'2002',value:2002},
			{text:'2001',value:2001},
			{text:'2000',value:2000},
			{text:'1999',value:1999},
			{text:'1998',value:1998},
			{text:'1997',value:1997},
			{text:'1996',value:1996},
			{text:'1995',value:1995},
			{text:'1994',value:1994},
			{text:'1993',value:1993},
			{text:'1992',value:1992},
			{text:'1991',value:1991},
			{text:'1990',value:1990},
			{text:'1989',value:1989},
			{text:'1988',value:1988},
			{text:'1987',value:1987},
			{text:'1986',value:1986},
			{text:'1985',value:1985},
			{text:'1984',value:1984},
			{text:'1983',value:1983},
			{text:'1982',value:1982},
			{text:'1981',value:1981},
			{text:'1980',value:1980},
			{text:'1979',value:1979},
			{text:'1978',value:1978},
			{text:'1977',value:1977},
			{text:'1976',value:1976},
			{text:'1975',value:1975},
			{text:'1974',value:1974},
			{text:'1973',value:1973},
			{text:'1972',value:1972},
			{text:'1971',value:1971},
			{text:'1970',value:1970},
			{text:'1969',value:1969},
			{text:'1968',value:1968},
			{text:'1967',value:1967},
			{text:'1966',value:1966},
			{text:'1965',value:1965},
			{text:'1964',value:1964},
			{text:'1963',value:1963},
			{text:'1962',value:1962},
			{text:'1961',value:1961},
			{text:'1960',value:1960},
			{text:'1959',value:1959},
			{text:'1958',value:1958},
			{text:'1957',value:1957},
			{text:'1956',value:1956},
			{text:'1955',value:1955},
			{text:'1954',value:1954},
			{text:'1953',value:1953},
			{text:'1952',value:1952},
			{text:'1951',value:1951},
			{text:'1950',value:1950},
			{text:'1949',value:1949},
			{text:'1948',value:1948},
			{text:'1947',value:1947},
			{text:'1946',value:1946},
			{text:'1945',value:1945},
			{text:'1944',value:1944},
			{text:'1943',value:1943},
			{text:'1942',value:1942},
			{text:'1941',value:1941},
			{text:'1940',value:1940},
			{text:'1939',value:1939},
			{text:'1938',value:1938},
			{text:'1937',value:1937},
			{text:'1936',value:1936},
			{text:'1935',value:1935},
			{text:'1934',value:1934},
			{text:'1933',value:1933},
			{text:'1932',value:1932},
			{text:'1931',value:1931},
			{text:'1930',value:1930},
			{text:'1929',value:1929},
			{text:'1928',value:1928},
			{text:'1927',value:1927},
			{text:'1926',value:1926},
			{text:'1925',value:1925},
			{text:'1924',value:1924},
			{text:'1923',value:1923},
			{text:'1922',value:1922},
			{text:'1921',value:1921},
			{text:'1920',value:1920},
			{text:'1919',value:1919},
			{text:'1918',value:1918},
			{text:'1917',value:1917},
			{text:'1916',value:1916},
			{text:'1915',value:1915},
			{text:'1914',value:1914},
			{text:'1913',value:1913},
			{text:'1912',value:1912},
			{text:'1911',value:1911},
			{text:'1910',value:1910}
		]
	});		
	
	/**
	* Page prototype
	*/

API.addPagesSet('basicPage',
{
	v1style:2,
	numbered: false,
	noSubmit: false,
	numericValues:true,
	submitText: "Invia"
});

    API.addPagesSet('basicPage2',
    {
        header: '<b>Immagina di ritrovarti nelle sei situazioni sottoelencate ed indica il tuo grado di accordo con ciascuna delle seguenti affermazioni, su una scala da 1 (= Fortemente in disaccordo) a 7 (=Fortemente d’accordo).</b>',
        headerStyle : {'font-size':'1.5em'},
	submitText: "Invia",
        questions : [
                 {inherit: {set: 'COWS_1', type: 'sequential'}},
      		 {inherit: {set: 'COWS_1', type: 'sequential', index: 1}},
       		 {inherit: {set: 'COWS_1', type: 'sequential', index: 2}},
        
        	 {inherit: {set: 'COWS_2', type: 'sequential'}},
        	 {inherit: {set: 'COWS_2', type: 'sequential', index: 1}},
        	 {inherit: {set: 'COWS_2', type: 'sequential', index: 2}},

       		 {inherit: {set: 'COWS_3', type: 'sequential'}},
      		 {inherit: {set: 'COWS_3', type: 'sequential', index: 1}},
       		 {inherit: {set: 'COWS_3', type: 'sequential', index: 2}},

       		 {inherit: {set: 'COWS_4', type: 'sequential'}},
       		 {inherit: {set: 'COWS_4', type: 'sequential', index: 1}},
      		 {inherit: {set: 'COWS_4', type: 'sequential', index: 2}},

        	 {inherit: {set: 'COWS_5', type: 'sequential'}},
     		 {inherit: {set: 'COWS_5', type: 'sequential', index: 1}},
       		 {inherit: {set: 'COWS_5', type: 'sequential', index: 2}},

       		 {inherit: {set: 'COWS_6', type: 'sequential'}},
       		 {inherit: {set: 'COWS_6', type: 'sequential', index: 1}},
        	 {inherit: {set: 'COWS_6', type: 'sequential', index: 2}}
            ],
        v1style:2,
        decline:false,
        numbered: false
    });

	API.addSequence([
	            {
	               inherit:'età'							
	            },
		{
	        mixer : 'random', 
	        wrapper: true, 
	        data : [
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'vittima'}
	            },
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'autore'}							
	            }
	        ]
	    },
	    {
	        mixer : 'random', 
	        wrapper: true, 
	        data : [
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'DiscriminazioneGruppo'}
	            },
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'DiscriminazioneIndividuale'}							
	            }
	        ]
	    },
	    {
		mixer : 'random', 
	        wrapper: true, 
	        data : [
		    {
	        	inherit:'basicPage', 
	        	questions: {inherit:'BPNSFS'}
	            },
	    	    {
	        	inherit:'basicPage', 
	        	questions: {inherit:'SoddAcc'}
	   	    },	
	   	    {
	    		inherit:'basicPage', 
	   		questions: {inherit:'AspirCar'}
		    },
		    {
	  		inherit:'basicPage', 
	      		questions: {inherit:'AspettCarr'}
		    },	
		    {
	 	        inherit:'basicPage', 
	        	questions: {inherit:'Resilienza'}
	  	    },	
		    {
			inherit : 'basicPage2'
		    },
	   	    {
	   		inherit:'basicPage', 
	 		questions: {inherit:'Distress'}
	 	    }
		]
	    }
	]);


    return API.script;
});
