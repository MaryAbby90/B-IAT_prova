define(['questAPI'], function (Quest) {
    var API = new Quest();

// ### Questions

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

// This is to remove warnings for multiple selection questions

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

// ### Pages
API.addPagesSet('basicPage',
{
	v1style:2,
	numbered: false,
	noSubmit: false,
	numericValues:true,
	submitText: "Invia"
});

    
// ... and here we go adding the different questions

    API.addSequence([ 
        //{
			    //mixer : 'random', 
				//wrapper:true, 
				//data : [
                		{
                                inherit: 'basicPage',
                                questions: [{
                                inherit: 'singleChoice',
                                name: 'Sex',
                                required: true,
                                stem: "Indica il tuo sesso alla nascita",
                                answers: [
                						'Maschio',
                						'Femmina',
                						'Altro'
                		       ]}]
                		},
                		 {
                                inherit: 'basicPage',
                                questions: [{
                                inherit: 'singleChoice',
                                name: 'Gender',
                                required: true,
                                stem: "Indica il genere con cui ti identifichi",
                                answers: [
                						'Uomo',
                						'Donna',
                						'Non binario',
                						'Altro'
                					    ]}]
                		},
                		{
                                inherit: 'basicPage',
                                questions: [{
                                inherit: 'singleChoice',
                                name: 'orientamento sessuale',
                                required: true,
                                stem: "Come definiresti il tuo orientamento sessuale",
                                answers: [
                						'Esclusivamente eterosessuale',
                						'Prevalentemente eterosessuale',
                						'Bisessuale',
                						'Prevalentemente omosessuale (gay/lesbica)',
                						'Esclusivamente omosessuale (gay/lesbica)',
                						'Altro'
                					    ]}]
                		},
                		
                            {
                                inherit: 'basicPage',
                                questions: [{
                                inherit : 'basicDropdown2',
                                name: 'Age',
                                required: true,
                                stem: "Qual è la tua età?",
                                answers: [
            						'18','19','20',
            					   '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35',
            					   '36','37','38','39','40','41','42','43','44','45','46','47','48','49','50',
            					   '51','52','53','54','55','56','57','58','59','60','61','62','63','64','65',
            					   '66','67','68','69','70','71','72','73','74','75','76','77','78','79','80',
            					   '81','82','83','84','85','86','87','88','89','90','91','92','93','94','95',
            					   '96','97','98','99','100','101','102','103','104','105'
                                ]}]
            		        },
                            {
                                inherit: 'basicPage',
                                questions: [{
                                inherit: 'singleChoice',
                                name: 'nazionalità',
                                required: true,
                                stem: "Indica la tua nazionalità",
                                answers: [
                						'Italiana',
                						'Altro'
                		       ]}]
                		    },
                		    {
                                inherit: 'basicPage',
                                questions: [{
                                inherit : 'basicDropdown2',
                                name: 'regione',
                                required: true,
                                stem: "Indica la regione in cui vivi",
                                answers: [
                						'Abruzzo',
                						'Basilicata',
                						'Calabria',
                						'Campania',
                						'Emilia-Romagna',
                						'Friuli-Venezia Giulia',
                						'Lazio',
                						'Liguria',
                						'Lombardia',
                						'Marche',
                						'Molise',
                						'Piemonte',
                						'Puglia',
                						'Sardegna',
                						'Sicilia',
                						'Toscana',
                						'Trentino-Alto Adige',
                						'Umbria',
                						'Valle d’Aosta',
                						'Veneto'
                		       ]}]
                		    },
                            {
                                inherit: 'basicPage',
                                questions: [{
                                    inherit: 'singleChoice',
                                    name: 'Titolo di studio',
                                    required: true,
                                    stem: "Indica il tuo titolo di studio",
                                    answers: [
                    				'Scuola primaria (elementari)',
                                    'Scuola secondaria di primo grado (medie)',
                                    'Scuola secondaria di secondo grado (licei, istituti tecnici, istituti professionali)',
                                    'Laurea triennale',
                                    'Laurea magistrale o specialistica',
                                    'Master Post-Lauream di I livello e di II livello',
                                    'Dottorato di ricerca',
                                    'Altra formazione post-lauream'
                    
                    					]}]
                    		},
                            {
                                inherit: 'basicPage',
                                questions: [{
                                    inherit: 'singleChoice',
                                    name: 'Lavoro',
                                    required: true,
                                    stem: "Qual è la tua attuale condizione lavorativa?",
                                    answers: [
                    				'Studente',
                                    'Disoccupato',
                                    'Lavoratore dipendente',
                                    'Lavoratore autonomo',
                                    'Altro'
                                         ]}]
                    		},
                    		{
                                inherit: 'basicPage',
                                questions: [{
                                    inherit: 'singleChoice',
                                    name: 'Orientamento politico',
                                    required: true,
                                    stem: "Indica il tuo orientamento politico",
                                    answers: [
                    				'Fortemente di destra',
                                    'Moderatamente di destra',
                                    'Leggermente di destra',
                                    'Centro',
                                    'Leggermente di sinistra',
                                    'Moderatamente di sinistra',
                                    'Fortemente di sinistra'
                                        ]
                    					}]
                    		},
                    		{
                                inherit: 'basicPage',
                                questions: [{
                                    inherit: 'singleChoice',
                                    name: 'Grado di religiosità',
                                    required: true,
                                    stem: "Indica il tuo grado di religiosità",
                                    answers: [
                    				'Molto religioso',
                                    'Moderatamente religioso',
                                    'Un po’ religioso',
                                    'Per niente religioso'
                    
                    					]}]
                    		},
                    		{
                                inherit: 'basicPage',
                                questions: [{
                                    type : 'selectOne',
                                    name: 'Affiliazione religiosa',
                                    required: true,
                                    stem: "Indica la tua affiliazione religiosa",
                                    answers: [
                    				'Cattolico',
                                    'Protestante',
                                    'Ortodosso',
                                    'Ebreo',
                                    'Testimone di Geova',
                                    'Musulmano',
                                    'Buddista',
                                    'Induista',
                                    'Ateo',
                                    'Nessuna',
                                    'Altro'
                                    
                    
                    					]}]
                    		}
        // Qui si devono aggiungere le altre domande
                        ]);
	return API.script;
});


        
