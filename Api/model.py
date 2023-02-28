from dbConnect import connectDB

def getHello():
    db = connectDB()
    anime = db.find()
    return anime
