Remind it !
===========


## Installer un serveur ElasticSearch

Dans le répertoire elasticsearch, lancer :

    vagrant up

### Installer le plugin attachments



### Indexer un document attaché

[Attachment Plugin doc]( http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/mapping-attachment-type.html)


## Appliquer une modification du script d'installation de la VM

Sur une vm en cours d'exécution :

    vagrant provision


    vagrant reload --provision

## Nettoyage et remise à zéro

Détruire la VM elasticsearch et lancer :

    vagrant destroy



## Recherche dans un attachment

Utilise l'extension Chrome Sense pour tester les requêtes

### Nettoyage & suppression de l'index

    DELETE blog

### Création de l'index et du mapping attachment

    PUT /blog
    {
       "mappings" : {
           "site" : {
               "properties" : {
                   "file" : {
                       "type" : "attachment"
                   }
               }
           }
       }
    }

### Indexation d'un contenu encodé en Base 64

    POST blog/site
    {
        "file" : "RWxhc3RpY1NlYXJjaCBpcyBteSBmYXZvdXJpdGUgdG9vbAo="
    }

### Recherche du contenu

    GET blog/site/_search
    {
       "query": {
          "match": {
              "file" : "ElasticSearch"
          }
       }
    }

