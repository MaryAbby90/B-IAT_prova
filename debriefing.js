define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Hai completato lo studio. Grazie per la tua partecipazione!',
		decline: false,
		autoFocus:true
	});
  
    /**
   * Question prototypes
   */
   API.addQuestionsSet('basicSelect',{
    type: 'selectOne',
    autoSubmit:'true',
    maxWidth: '60%'
  });
  
   API.addSequence([
    {
      inherit : 'basicPage',
      questions : [
          {
            type: 'info',
            stem: 
            '<p>In questa pagina, ti verranno fornite alcune informazioni generali sullo studio e sulle sue finalità.</h1></p><br/>' +
            '<p> La finalità della ricerca era di valutare le credenze cospirative nei confronti della comunità LGBTQ.</h1></p>' +
            '<p> Le credenze cospirative sono convinzioni che attribuiscono eventi complessi o situazioni problematiche a un gruppo segreto di individui o organizzazioni che agirebbero dietro le quinte per manipolare gli eventi a proprio vantaggio. Queste credenze spesso implicano che le cause degli eventi siano nascoste al pubblico e che la versione ufficiale dei fatti sia distorta o addiritura falsa. Nello specifco le credenze cospirative riguardanti la comunità LGBTQ sostengono l’esistenza di una "Lobby Gay" che mira a diffondere l’omosessualità, l’indottrinamento dei bambini nelle scuole, la sovversione dell’ordine naturale e l’instaurazione di una dittatura del pensiero unico basata sulla "Teoria di Genere" (un neologismo privo di qualsiasi valore scientifico).</h1></p>' +
            '<p> L’intento di questo studio è quello di comprendere le credenze cospirative riguardanti le persone LGBTQ e i fattori individuali e demografici che possono inﬂuenzarle.</h1></p>' +
            '<p> Durante la partecipazione allo studio, ti è stato chiesto di seguire alcune istruzioni e rispondere a domande finalizzate a indagare le tue credenze e atteggiamenti. Nello specifico, ti è stato chiesto di completare un test di associazione implicita (Implicit Associaton Test, IAT). Questo test misura il modo in cui la nostra mente associa insieme concetti dfferenti. Le misure implicite spesso rivelano associazioni che differiscono dalle credenze consapevoli misurate attraverso i questionari.</p>' +
            '<p> All’inizio dello studio, non abbiamo divulgato completamente tutte le informazioni sulla natura e lo scopo di questo studio per evitare potenziali pregiudizi nelle risposte. Ci auguriamo che tu capisca perché lo abbiamo fatto e perché non siamo riusciti a rivelare completamente l’obiettivo del nostro studio fino ad ora.</p>' + 
            '<p> Nel caso in cui hai domande, preoccupazioni, reclami o vuoi ritirare le tue risposte dallo studio si prega di contattare la Responsabile dello studio, la Prof.ssa Maddalena Marini, ricercatrice presso il Dipartmento di Psicologia dell’Università degli Studi della Campania “Luigi Vanvitelli” all’indirizzo e-mail: <a href=maddalena.marini@unicampania.it>maddalena.marini@unicampania.it</a>.</h1></p><br/>' +
            '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Grazie ancora per la tua partecipazione!</b></h1></p><br/>'
            }
        ] 
    }]);
 return API.script;
});










