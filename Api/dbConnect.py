import os
from dotenv import load_dotenv
import pymongo
from pymongo import MongoClient
load_dotenv()

# minimum requirements to run the app
# pip install Flask
# pip install python-dotenv
# pip install pymongo
#pip install bson
# Connexion à la base de données
def connectDB() :
    # client = MongoClient('localhost', 27017)
    # db_name = client['Anime']
    uri = "mongodb+srv://"+os.getenv('NAME')+":"+os.getenv('PASSWORD')+"@rudybanger.gevfxpa.mongodb.net/Projet?retryWrites=true&w=majority"
    client = pymongo.MongoClient(uri)
    # Remplacez le nom de la collection et de la colonne par les vôtres
    db = client.Projet
    collection = db.Anime
    # db = db_name.anime
    return collection

