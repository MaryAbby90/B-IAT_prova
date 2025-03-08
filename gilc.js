define(['questAPI'], function(Quest){
	var API = new Quest();

	// ### Questions
	// Create the template
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

	// create the specific question instances instances
	API.addQuestionsSet('gridQuestions',
	[
		    {
			inherit : 'basicGrid',
			data : {name : 'gilc_q1'},
			stem: '<br/>Un gruppo organizzato di persone LGBT opera per avere maggiore potere, nascondendosi dietro la richiesta di maggiori diritti.<br/>'
		},
		{
			inherit : 'basicGrid',
			data : {name : 'gilc_q2'},
			stem: '<br/>Ci sono delle persone LGBT molto potenti che riescono ad influenzare le decisioni del Parlamento e del Governo, a scapito degli altri cittadini.<br/>'
		},
		 
		{
		  inherit : 'basicGrid',
		    data : {name :'gilc_q3'},
		    stem:'<br/>Le persone LGBT vogliono fare promulgare leggi per favorire se stesse dal punto di vista economico, lavorativo, sociale, a scapito delle persone eterosessuali.<br/>'}, 
            
        {
		  inherit : 'basicGrid',
		    data : {name :'gilc_q4'},
		    stem:'<br/>Un gruppo di persone LGBT si è organizzato per insinuarsi in tutti i principali settori della società per aumentare la propria influenza su di essa.<br/>'},
	        
	   {
	       inherit : 'basicGrid',        
		    data : {name :'gilc_q5'},
		    stem:'<br/>Le persone LGBT vogliono utilizzare le leggi ed i tribunali per imporre una precisa visione politica del mondo.<br/>'},
            
        {
		    inherit : 'basicGrid',
		    data : {name :'gilc_q6'},
		    stem:'<br/>Esiste un’organizzazione di alcune persone molto potenti che sfruttano le istanze LGBT per instaurare una dittatura del pensiero unico.<br/>'},
        
        {
		    inherit : 'basicGrid',        
		    data : {name : 'gilc_q7'},
		    stem:'<br/>Alcune persone molto potenti vogliono diffondere l’“ideologia gender” nelle scuole per indottrinare i bambini.<br/>'},
        {
		    inherit : 'basicGrid',
		    data : {name : 'gilc_q8'},
		    stem:'<br/>Ci sono delle persone che si sono organizzate per sovvertire l’ordine naturale delle cose attraverso l’“ideologia gender”.<br/>'},

        {
		    inherit : 'basicGrid',
		    data : {name : 'gilc_q9'},
		    stem:'<br/>Ci sono concreti tentativi di propaganda nelle scuole per plagiare i bambini e permettergli di decidere se essere maschi o femmine come desiderano.<br/>'}
	]);

	// ### Pages
	API.addPagesSet('basicPage',
	{
		//progressBar: 'Page <%= pagesMeta.number %> out of 12',
		questions : {inherit:{set:'gridQuestions', type:'exRandom'}},
		v1style:2,
		decline:false,
		numbered: false,
		numericValues: true,
		header: 'Questionario',
		submitText: "Invia"
	});

	// ### Sequence
	API.addSequence(
	[
		{
			mixer : 'random',
			times : 9,
			data :
			[
				
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q1'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q2'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q3'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q4'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q5'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q6'}
				},
				{inherit:'basicPage', 
			    stem: {inherit : 'gilc_q7'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q8'}
				},
				{inherit:'basicPage', 
				stem: {inherit : 'gilc_q9'}
				}
				
		]}		
	]);

	/**
	Return the script to piquest's god, or something of that sort.
	**/
	return API.script;
});











