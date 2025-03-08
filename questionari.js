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

	
    API.addQuestionsSet('vittima',{
        inherit : 'singleChoice',
        name: 'vittima',
        stem: 'Quanto fortemente associ il seguente concetto alla donna o all’uomo: <font color="red"><i>Vittima di Discriminazione</i></font></b>?',
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
        stem: 'Quanto fortemente associ il seguente concetto alla donna o all’uomo: <font color="red"><i>Vittima di Discriminazione</i></font></b>?',
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
	

	{
		API.addSequence([
			//First, we present the three direct liking questions.
			{
			    mixer : 'random', 
				wrapper:true, 
				data : [
							{
								inherit:'basicPage', 
								questions: {inherit:'autore'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'vittima'}							
							}
					]},
					{
						inherit:'basicPage', 
						questions: {inherit:'sex'}
					}
					
		
					
			
		]);
	}

    return API.script;
});
