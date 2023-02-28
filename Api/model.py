from dbConnect import connectDB
from bson.objectid import ObjectId

#get all animes
def getAnimes():
    db = connectDB()
    anime = db.find({})
    return anime

#find anime by id
def getAnimeById(id):
    db = connectDB()
    anime = db.find_one({"_id": ObjectId(id)})
    return anime

#insert anime
def insertAnime(anime):
    db = connectDB()
    db.insert_one(anime)
    return anime

#update anime
def updateAnime(id, anime):
    db = connectDB()
    db.update_one({"_id": ObjectId(id)}, {"$set": anime})
    return anime

#delete anime
def deleteAnime(id):
    db = connectDB()
    db.delete_one({"_id": ObjectId(id)})
    return "Anime deleted successfully"