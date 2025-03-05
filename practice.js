define(['https://MaryAbby90.github.io/B-IAT_prova/extensionpractice.js'], function(batExtension){
	return batExtension({
		categories : [ 
            {
				name : 'Insects',
				title : {
					media : {word : 'Insects'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Used to position the "Or" in the combined block.
					startStimulus : {
						media : {word : 'Flea, Centipede, Gnat, Wasp'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Flea'},
                    {word: 'Centipede'},
                    {word: 'Gnat'},
                    {word: 'Wasp'}
                ], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			
			
			
			
			
				{
				name : 'Flowers', //Category label.
				title : {
					media : {word : 'Flowers'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {
						    word: 'Orchid, Lilac, Rose, Tulip'},
						    //word : 'Republican, Right Wing, George Bush, Conservative'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Orchid'},   
                    {word: 'Lilac'},
                    {word: 'Rose'},
                    {word: 'Tulip'}
                ], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			}
		
		],
	
		
       	practiceBlock : false, 
		
		base_url : {//Where are your images?
			image : 'https://MaryAbby90.github.io/B-IAT_prova/images/' 
		},
			
			
		fb_strong_Att1WithCatB_Att2WithCatA : 'Your data suggest a strong association Female-Good and Male-Bad.',
		fb_moderate_Att1WithCatB_Att2WithCatA : 'Your data suggest a moderate association Female-Good and Male-Bad.',
		fb_slight_Att1WithCatB_Att2WithCatA : 'Your data suggest a slight association Female-Good and Male-Bad.',
		fb_equal_CatAvsCatB : 'Your data suggest a little to no association of the categories Male and Female with the attributes Good and Bad.',
		fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong association Male-Good and Female-Bad.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate association Male-Good and Female-Bad.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight association Male-Good and Female-Bad.'
			
		
		
});
});

