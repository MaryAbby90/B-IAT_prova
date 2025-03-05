define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Consenso',
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
      questions : [{
        type: 'info',
        stem: 
        '<p>Gentile partecipante,</p><br/>' +
        '<p>stiamo conducendo una ricerca il cui obiettivo è di indagare credenze, atteggiamenti e opinioni sulla comunità LGBTQ.</p>'+
        '<p>Ti verrà chiesto di leggere alcune istruzioni e rispondere ad alcune domande volte ad indagare le tue credenze e atteggiamenti. La compilazione del questonario richiederà circa quindici minuti del tuo tempo.</p>' +
        '<p>Prima di chiederti il consenso necessario per il trattamento dei dati personali e dei dati sensibili che saranno raccolti, ai sensi dell’art. 9 del Codice Deontologico degli Psicologi italiani, del D.Lgs. 196/2003 (“Codice Privacy”) integrato dal D.Lgs. 101/2018 di adeguamento al Regolamento europeo 679/2016 noto come GDPR (General Data Protecton Regulaton), e in applicazione del Provvedimento n° 146 del 5 giugno 2019 emanato dal Garante per la Protezione dei Dati Personali al fine di rafforzare la protezione e il trattamento dei dati personali alla luce dei principi di correttezza, liceità, trasparenza, tutela della riservatezza e dei diritti dell’interessato in merito ai propri dati, e nel rispetto della dichiarazione di Helsinki del 2013 circa i requisiti scientifci, i protocolli di ricerca, i comitati etici, la privacy e riservatezza, il consenso informato, la registrazione della ricerca e la pubblicazione o divulgazione dei risultati,</p><br/>' +
        '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>ti chiediamo di leggere attentamente le seguenti indicazioni:</b></h1></p><br/>' +
        '<p>- La partecipazione alla ricerca è volontaria: Sei libero/a di decidere di prenderne parte oppure no. Nel caso decidessi di non partecipare o abbandonare lo studio non subirai alcuna conseguenza.</p>' +
        '<p>- Non ci sono rischi/disagi o benefici diretti associati alla tua partecipazione a questo studio. Ci auguriamo che possa essere per te un’esperienza educativa e coinvolgente e allo stesso tempo che possa aiutarci a capire qualcosa di più su come le persone pensano.</p>' +
        '<p>- Il trattamento e l’elaborazione di tutti i dati personali da te forniti avverranno in forma anonima e i risultati verranno utlizzati esclusivamente in forma aggregata, garantendo ogni cautela necessaria a evitarne la identificabilità.</p>' +
        '<p>- L’accesso ai dati da te forniti sarà concesso esclusivamente al personale incaricato dello studio, il quale è vincolato alla segretezza sull’identità dei partecipanti.</p>' +
        '<p>- Tutti i dati personali saranno sottoposti a modalità di trattamento sia cartaceo sia elettronico e/o automatizzato, quindi con modalità sia manuali sia informatiche, e verranno conservati dalla Responsabile della ricerca: Maddalena Marini. Tutti i dati saranno archiviati su computer e server protetti da password a cui avranno accesso solo i ricercatori.</p>' +
        '<p>- Saranno utilizzate adeguate misure di sicurezza al fine di garantire la protezione, la sicurezza, l’integrità, l’accessibilità di tutti i dati personali, entro i vincoli delle norme vigenti e del segreto professionale.</p>' +
        '<p>- I dati personali che non siano più necessari, o per i quali non vi sia più un presupposto giuridico per la relativa conservazione, verranno anonimizzati irreversibilmente o distrutti in modo sicuro.</p>' +
        '<p>- La comunicazione dei risultati dello studio a soggetti terzi nel corso di congressi e convegni scientifci, così come la pubblicazione per scopi scientifici potranno avvenire soltanto in forma aggregata e assolutamente anonima, a cura e sotto la responsabilità diretta del responsabile della ricerca.</p>' +
        '<p>- In qualsiasi momento puoi decidere di ritirare il tuo consenso, contattando la Responsabile dello studio, la Prof.ssa Maddalena Marini, ricercatrice presso il Dipartmento di Psicologia dell’Università degli Studi della Campania “Luigi Vanvitelli” all’indirizzo e-mail: <a href=maddalena.marini@unicampania.it>maddalena.marini@unicampania.it</a>. Nel caso decidessi di ritirare il consenso al trattamento dei dati, la Responsabile dello studio si impegna fin da ora ad eliminare tutti i dati e le informazioni da te fornite.</p>' +
        '<p>- Lo studio e la relativa documentazione sono stati approvati dal Comitato Etico del Dipartmento di Psicologia dell’Università della Campania “Luigi Vanvitelli”.</p><br/>' +
        '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Accettando di partecipare alla ricerca, dichiari:</b></h1></p><br/>' +
        '<p>- di aver letto attentamente la nota informativa relativa al consenso informato;</p>' +
        '<p>- di essere stato/a informato/a riguardo agli obiettivi e alle finalità del progetto di ricerca, così come riguardo alla procedura sperimentale;</p>' +
        '<p>- di aver avuto la possibilità di porre domande a proposito di qualsiasi aspetto della procedura sperimentale e di aver ottenuto risposte soddisfacenti;</p>' +
        '<p>- di essere a conoscenza dei disagi e benefci dell’esperimento;</p>' +
        '<p>- di aver ricevuto le informazioni relative alla riservatezza dei dati personali che saranno raccolti e trattati, nell’assoluto anonimato, esclusivamente per fini di ricerca.</p><br/>' +
        '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Accettando di partecipare alla ricerca, fornisci il consenso al trattamento dei dati.</b></h1></p><br/>' +
        '<p>Inoltre, avendo ricevuto apposita informativa sul trattamento dei dati personali e in relazione a quanto indicato in relazione al trattamento dei dati, per ciò che attiene al trattamento e alla comunicazione dei dati personali forniti per tutte le finalità indicate nella presente informativa:</p>'
        },
        

    // Note: Feel free to adapt language based on your consent form.
    {
        inherit : 'basicSelect',
        name: 'userconsent',
        description: '<b>Clicca due volte sul tasto per selezionare la tua risposta<p>',
        answers: [
            {text: 'Accetto di partecipare alla ricerca', value: true},
            {text: 'Non accetto di partecipare alla ricerca', value: false}
        ]
      }
      ]
    }
    
      
     ]);
 return API.script;
});









