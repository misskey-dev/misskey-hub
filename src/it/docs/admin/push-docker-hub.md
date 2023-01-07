# Come pubblicare su Docker Hub usando le GitHub Actions

La [descrizione del Workflow per pubblicare su Docker Hub usando le GitHub Actions](https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml) si trova nel repository.

Il repository originale verrà pubblicato su Docker Hub con i tag `latest` e `nome-della-release`, potrebbe esserci il tag `nome-del-branch` ma non è soggetto a pubblicazione automatica.

Il Workflow fallirà se avviato da un fork. Di seguito indichiamo come pubblicare un fork sul proprio Docker Hub.

## Come configurare il Workflow

1. Crea un repository su Docker Hub
2. Sostituisci le [image](https://github.com/misskey-dev/misskey/blob/53f3b779bf16abcda4f6e026c51384f3b8fbcc62/.github/workflows/docker.yml#L20) del Workflow con il repository creato
3. Crea i [secret](https://docs.github.com/ja/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) ti occorre creare la coppia `DOCKER_USERNAME` e `DOCKER_PASSWORD`, che saranno le tue credenziali Docker Hub

## Come pubblicare

Con la configurazione indicata in precedenza, il repository verrà _pushato_ su Docker Hub, ad ogni nuova release. Nello specifico, avrà i tags `latest` e `nome-della-release`.

Puoi anche pubblicare manualmente da GitHub. Seleziona il _branch_ in `Actions => Publish Docker Image => Run Workflow`. In questo caso però il tag creato sarà `nome-del-branch`
