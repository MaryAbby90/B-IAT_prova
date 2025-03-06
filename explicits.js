define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionario',
	submitText: "Invia",
        decline: false,/*
        declineText: isTouch ? 'Decline' : 'Decline to Answer',*/
        autoFocus:true
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Per favore seleziona una risposta' 
                : 'Per favore seleziona una risposta'
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
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
        stem: 'Which statement best describes you?',
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
	
    API.addQuestionsSet('vittima',{
        inherit : 'basicSelect',
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
        inherit : 'basicSelect',
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

    API.addSequence([
        {
            mixer : 'random', 
            data : [
                {
                    mixer : 'random', 
                    wrapper:true, 
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
                    questions: {inherit:'att'}
                }
            ]
        }
    ]);

    return API.script;
});
