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

#quels sont les genres les plus populaires?
def getMostPopularGenres():
    db = connectDB()
    anime = db.find({'rank': 25})
    return anime

#Quel est le pourcentage d'anime répertoriés dans ce JSON qui sont des films par rapport aux séries TV ?

#Quels sont les genres les plus populaires parmi les animes?
def getMostPopularGenres():
    db = connectDB()
    anime = db.aggregate([
        {"$project":{"genres.name":1, "_id":0, "mal_id":1}},
        {"$unwind": "$genres"},
        {"$group":{"_id":"$genres.name","nb":{"$sum":1}}},
        {"$sort":{"nb":-1}}
    ]) 
    return anime

#top studios by nb of animes
def getTopStudios():
    db = connectDB()
    anime = db.aggregate([
        {"$unwind":"$studios"},
        {"$group":{"_id": "$studios.name", "count": {"$sum":1}}},
        {"$project": {"_id": 0, "studio": "$_id", "count": 1}},
        {"$sort":{"count": -1}},
    ]) 
    return anime

#top
def bestMoviesByYear():
    db = connectDB()
    anime = db.aggregate([
        {"$match": {"type": "TV", "score": {"$ne": ""}}},
        {"$group": {"_id": {"year": {"$year": {"$toDate": "$aired.from"}}, "title": "$title_english"}, "averageScore": {"$avg": "$score"}}},
        {"$sort": {"_id.year": 1, "averageScore": -1}},
        {"$group": {"_id": "$_id.year", "topAnime": {"$push": {"title": "$_id.title", "score": "$averageScore"}}}}
    ])
    return anime


#Durée moyenne des épisodes par genre
def getAverageDurationByGenre():
    db = connectDB()
    anime = db.aggregate([{"$unwind": "$genres"},{"$group":{"_id": "$genres.name","count": {"$sum": 1}," avg_score": {"$avg": "$score"}}},{"$sort": {"count": -1}}
    ]) 
    return anime

#Quels sont les genres les plus populaires parmi les animes
def getMostPopularGenres():
    db = connectDB()
    anime = db.aggregate([
        {"$project":{"genres.name":1, "_id":0, "mal_id":1}},
        {"$unwind": "$genres"},
        {"$group":{"_id":"$genres.name","nb":{"$sum":1}}},
        {"$sort":{"nb":-1}}
    ]) 
    return anime
