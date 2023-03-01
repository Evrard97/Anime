import pymongo

# Remplacez les informations de connexion ci-dessous avec les vôtres
uri = "mongodb+srv://RudyBanger:aurelien1@rudybanger.gevfxpa.mongodb.net/Projet?retryWrites=true&w=majority"
client = pymongo.MongoClient(uri)

# Remplacez le nom de la collection et de la colonne par les vôtres
db = client.Projet
collection = db.Anime


colonnes_a_supprimer = ["mal_id", "approved", "titles", "title_english", "title_japanese", "title_synonyms", "source", "airing", "aired", "background", "season", "year", "broadcast", "licensors", "producers", "explicit_genres", "themes", "demographics"]

for colonne_a_supprimer in colonnes_a_supprimer:
  # Supprimez la colonne spécifiée de tous les documents dans la collection
  collection.update_many({}, {"$unset": {colonne_a_supprimer: 1}})

print("Champs supprimés avec succès")