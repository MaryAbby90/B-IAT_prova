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
		{text:'Fortemente all’uomo.',value:1},
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
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Di seguito sono riportate delle affermazioni che si riferiscono a sentimenti vissuti nella propria vita. Leggi ciascuna affermazione con attenzione. Puoi rispondere scegliendo un numero da 1=(Completamente in disaccordo) a 5=(Completamente d’accordo) per indicare il grado d’accordo a ciascuna affermazione in riferimento a come ti senti <font color="red"><i>nel tuo contesto universitario.</i></font>', 
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
			{type:'text', textProperty:'left', css : {width:'13.5%'}},
			{stem:'1. Completamente in disaccordo', css : {width:'7%'}},
			{stem:'2.', css : {width:'7%'}},
			{stem:'3.', css : {width:'7%'}},
			{stem:'4.', css : {width:'7%'}},
			{stem:'5. Completamente d’accordo', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'13.5%'}}
		],
	
	});

API.addQuestionsSet('SoddAcc',{
	type : 'grid',
	name: 'SoddAcc',
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
			//{type:'text', textProperty:'left', css : {width:'40%'}},
			{stem:'1. Fortemente in disaccordo', css : {width:'12%'}},
			{stem:'2. In disaccordo', css : {width:'12%'}},
			{stem:'3. Né in disaccordo né in accordo', css : {width:'12%'}},
			{stem:'4. D’accordo', css : {width:'12%'}},
			{stem:'5. Fortemente d’accordo', css : {width:'12%'}},
			//{type:'text', textProperty:'right', css : {width:'0%'}}
		],
	});
	
API.addQuestionsSet('AspirCar',{
	type : 'grid',
	name: 'AspirCar',
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
			{type:'text', textProperty:'left', css : {width:'13.5%'}},
			{stem:'1. Per niente vero', css : {width:'7%'}},
			{stem:'2.', css : {width:'7%'}},
			{stem:'3.', css : {width:'7%'}},
			{stem:'4.', css : {width:'7%'}},
			{stem:'5.', css : {width:'7%'}},
			{stem:'6.', css : {width:'7%'}},
			{stem:'7. Completamente vero', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'13.5%'}}
		],
	
	});	

API.addQuestionsSet('AspettCarr',{
	type : 'grid',
	name: 'AspettCarr',
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
			{type:'text', textProperty:'left', css : {width:'13.5%'}},
			{stem:'1. Fortemente in disaccordo', css : {width:'7%'}},
			{stem:'2.', css : {width:'7%'}},
			{stem:'3.', css : {width:'7%'}},
			{stem:'4.', css : {width:'7%'}},
			{stem:'5. Fortemente d’accordo', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'13.5%'}}
		],
	
	});	

API.addQuestionsSet('Resilienza',{
	type : 'grid',
	name: 'Resilienza',
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
			{type:'text', textProperty:'left', css : {width:'13.5%'}},
			{stem:'1. Forte disaccordo', css : {width:'7%'}},
			{stem:'2. Disaccordo', css : {width:'7%'}},
			{stem:'3. Indifferente', css : {width:'7%'}},
			{stem:'4. D’accordo', css : {width:'7%'}},
			{stem:'5. Molto d’accordo', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'13.5%'}}
		],
	
	});	

API.addQuestionsSet('Distress',{
	type : 'grid',
	name: 'Distress',
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
			{type:'text', textProperty:'left', css : {width:'13.5%'}},
			{stem:'1. Forte disaccordo', value:0, css : {width:'7%'}},
			{stem:'2. Disaccordo', value:1, css : {width:'7%'}},
			{stem:'3. Indifferente', value:2, css : {width:'7%'}},
			{stem:'4. D’accordo', value:3, css : {width:'7%'}},
			{stem:'5. Molto d’accordo', value:4, css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'13.5%'}}
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
	
    API.addQuestionsSet('sex',{
        inherit : 'singleChoice',
        name: 'sex',
        stem: 'Indica il tuo sesso biologico',
        answers: [
		{text:'Maschio',value:1},
		{text:'Femmina',value:2},
		{text:'Altro',value:3}
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

	API.addSequence([
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
	        inherit:'basicPage', 
	        questions: {inherit:'sex'}
	    },
	    {
	        inherit:'basicPage', 
	        questions: {inherit:'SoddAcc'}
	    },
	    {
	        inherit:'basicPage', 
	        questions: {inherit:'BPNSFS'}
	    },
	    {
	        inherit:'basicPage', 
	        questions: {inherit:'AspirCar'}
	    }
	]);


    return API.script;
});
