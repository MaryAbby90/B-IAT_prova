define(['questAPI'], function(Quest){
	
	var API = new Quest();
	var isTouch = API.getGlobal().isTouch;
	
	/**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
		noSubmit:false, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Questionario',
		submitText: "Invia",
		decline: false,/*
		declineText: isTouch ? 'Decline' : 'Decline to Answer',*/ 
		autoFocus:true/*, 1111
		progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 3' : 'Page <%= pagesMeta.number %> out of 15'*/
	});
	
    /**
	* Question prototypes
	*/
	API.addQuestionsSet('basicQ',{
		decline: 'true',
		required : true, 		
		errorMsg: {
			required: isTouch ? "Per favore seleziona una risposta" : 
			"Per favore seleziona una risposta"
		}
	});

	API.addQuestionsSet('basicSelect',{
		inherit :'basicQ',
		type: 'selectOne'
	});
	
    API.addQuestionsSet('basicDropdown',{
		inherit :'basicQ',
		type : 'dropdown',
		autoSubmit:false
	});
	
    API.addQuestionsSet('therm',{
		inherit: 'basicSelect',
		answers: [
			{text:'10 - Extremely warm', value:10},
			{text:'9 - Very warm', value:9},
			{text:'8 - Moderately warm', value:8},
			{text:'7 - Somewhat warm', value:7},
			{text:'6 - Slightly warm', value:6},
			{text:'5 - Neither warm nor cold', value:5},
			{text:'4 - Slightly cold', value:4},
			{text:'3 - Somewhat cold', value:3},
			{text:'2 - Moderately cold', value:2},
			{text:'1 - Very cold', value:1},
			{text:'0 - Extremely cold', value:0}
		]
	});
	
	/**
	*Specific questions
	*/	
	
	    API.addQuestionsSet('att',{
		inherit : 'basicSelect',
		name: 'att',
		stem: 'Seleziona la frase che ti descrive meglio:',
		answers: [
			{text:'Preferisco fortemente le persone eterosessuali alle persone LGBT.',value:1},
			{text:'Preferisco moderatamente le persone eterosessuali alle persone LGBT.',value:2},
			{text:'Preferisco leggermente le persone eterosessuali alle persone LGBT.',value:3},
			{text:'Mi piacciono allo stesso modo le persone eterosessuali e le persone LGBT.',value:4},
			{text:'Preferisco leggermente le persone LGBT alle persone eterosessuali.',value:5},
			{text:'Preferisco moderatamente le persone LGBT alle persone eterosessuali.',value:6},
			{text:'Preferisco fortemente le persone LGBT alle persone eterosessuali.',value:7}
		]
	});
	
		API.addQuestionsSet('cospirazione',{
		inherit : 'basicSelect',
		name: 'vittima_discriminazione',
		stem: 'Quanto associ il concetto di “COSPIRAZIONE” con le categorie persone eterosessuali e persone LGBT?',
		answers: [
		{text:'Fortemente con persone eterosessuali',value: 1},
	    {text:'Moderatamente con persone eterosessuali',value: 2},
	    {text:'Leggermente con persone eterosessuali',value: 3},
	    {text:'Né con persone eterosessuali né con persone LGBT',value: 4},
	    {text:'Leggermente con persone LGBT',value: 5},
	    {text:'Moderatamente con persone LGBT',value: 6},
	    {text:'Fortemente con persone LGBT',value: 7}
		]
	});
	
	
	API.addQuestionsSet('verità',{
		inherit : 'basicSelect',
		name: 'stato',
		stem: 'Quanto associ il concetto “VERITÀ” con le categorie persone eterosessuali e persone LGBT?',
		answers: [
	    {text:'Fortemente con persone eterosessuali',value: 1},
	    {text:'Moderatamente con persone eterosessuali',value: 2},
	    {text:'Leggermente con persone eterosessuali',value: 3},
	    {text:'Né con persone eterosessuali né con persone LGBT',value: 4},
	    {text:'Leggermente con persone LGBT',value: 5},
	    {text:'Moderatamente con persone LGBT',value: 6},
	    {text:'Fortemente con persone LGBT',value: 7}
		]
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
								questions: {inherit:'cospirazione'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'verità'}							
							}
					]},
					{
						inherit:'basicPage', 
						questions: {inherit:'att'}
					}
					
		
					
			
		]);
	}
	
	return API.script;
});























