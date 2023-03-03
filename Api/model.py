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

############################# QUESTIONS ############################################

#Trouver les dix genres les plus populaires dans ce JSON, en triant par ordre décroissant de popularité.
def getMostPopularGenres():
    db = connectDB()
    anime = anime.aggregate([
        {"$unwind": "$genres"},
        {"$group": {"_id": "$genres.name", "count": {"$sum": 1}, "total_popularity": {"$sum": "$popularity"}}},
        {"$project": {"_id": 1, "count": 1, "avg_popularity": {"$round": [{"$divide": ["$total_popularity", "$count"]}, 2]}}},
        {"$sort": {"avg_popularity": -1}},
        {"$limit": 10}
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


#Trouver les producteurs qui ont produit des anime avec les meilleures notes moyennes, en triant par ordre décroissant de note moyenne.
def getBestProducers():
    db = connectDB()
    anime = db.aggregate([
        {"$unwind": "$producers"},
        {"$group": {"_id": "$producers.name", "avg_score": {"$avg": "$score"}, "count": {"$sum": 1}}},
        {"$match": {"count": {"$gt": 0}}},
        {"$sort": {"avg_score": -1}},
        {"$limit": 5}
    ])
    return anime

#top 3 des animes
def getTop3():
    db = connectDB()
    anime = db.find({"type": "TV", "score": {"$ne": ""}}).sort("score", -1).limit(3)
    return anime