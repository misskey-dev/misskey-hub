# Le pagine

Sono vere e proprie pagine, tipo un blog, organizzate gerarchicamente sotto al tuo profilo, es: `/@sysop/pages/regolamento`

## Le variabili

Puoi anche creare pagine dinamiche utilizzando le variabili.

Scrivendo **{nome variabile}** nel testo, puoi assegnare il valore di una variabile. Ad esempio, se il testo è `Ciao { cosa } mondo!` e il valore della variabile **cosa** è _Ai_, allora il testo visualizzato sarà: `Ciao Ai mondo!`.

Le variabili vengono interpretate calcolandone i valori dall'alto verso il basso. Quindi non è possibile che una variabile faccia riferimento a una variabile sottostante. Ad esempio, se definisci tre variabili come `A, B e C`, puoi richiamare il valore di `B` da `C` ma non puoi richiamare il valore di `B` e `C` da dentro `A`, poiché esse non sono state dichiarate prima di essa.

Per ricevere testo immesso dai visitatori, posiziona un blocco **Input utente** nella pagina e assegna il nome di una variabile in **Nome variabile** indicando la variabile in cui desideri memorizzare l'input (la variabile verrà creata automaticamente). Puoi usare quella variabile per interagire con il testo immesso dal visitatore.

## Le Funzioni

Consentono di svolgere il calcolo dei valori in modo riutilizzabile.

Per creare una funzione, crea una variabile di tipo **funzione**.

Una funzione può avere slot (argomenti) e i valori degli slot possono essere usati come variabili all'interno della funzione. Esistono anche funzioni che accettano altre funzioni come argomenti.
