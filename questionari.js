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
	
API.addQuestionsSet('SoddAcc',{
	type : 'grid',
	name: 'SoddAcc',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Utilizzando la scala sottostante, indica il tuo grado di accordo con ciascuna delle seguenti affermazioni.', 
                    rows: [
			    'Sono soddisfatta/o della decisione di laurearmi nel mio campo di studi' ,
			   'Mi sento a mio agio nell’ambiente universitario e accademico del mio corso di studi',
			   'In generale, mi piacciono le attività del mio corso di laurea',
			   'Sono complessivamente soddisfatta/o della mia vita universitaria e accademica',
			   'Apprezzo molto il livello di stimolazione intellettuale che trovo nei miei corsi',
			   'Mi sento entusiasta riguardo agli argomenti trattati nel mio corso di studi',
			   'Mi piace quello che sto imparando durante le mie lezioni'
			   ],
                    columns: ['Fortemente in disaccordo', 'In disaccordo', 'Né in disaccordo né in accordo', 'D’accordo', 'Fortemente d’accordo']
	
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
	stem: '<b>Di seguito sono riportate delle affermazioni che si riferiscono a sentimenti vissuti nella propria vita. Leggi ciascuna affermazione con attenzione.',
	'Puoi rispondere scegliendo un numero da 1=(Completamente in disaccordo) a 5=(Completamente d’accordo) per indicare il grado d’accordo a ciascuna affermazione in riferimento a come ti senti <font color="red"><i>nel tuo contesto universitario.</i></font></b>', 
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

	API.addQuestionsSet('individualdiscrimination',{
	inherit : 'singleChoice',
	name: 'individualdiscrimination',
	stem: 'How often do you feel that you, personally, have been discriminated against because of your race, ethnicity, or color?',
	answers: [
		{text:'Never',value: 1},
		{text:'Rarely',value: 2},
		{text:'Sometimes',value: 3},
		{text:'oroften',value: 4}
		]
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

	
    API.addQuestionsSet('vittima',{
        inherit : 'singleChoice',
        name: 'vittima',
        stem: '<b>Quanto fortemente associ il seguente concetto alla donna o all’uomo: <font color="red"><i>Vittima di Discriminazione</i></font></b>?',
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
        stem: '<b>Quanto fortemente associ il seguente concetto alla donna o all’uomo: <font color="red"><i>Autore di Discriminazione</i></font></b>?',
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
