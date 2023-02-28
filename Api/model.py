from dbConnect import connectDB

def getAnimes():
    db = connectDB()
    anime = db.find()
    return anime
