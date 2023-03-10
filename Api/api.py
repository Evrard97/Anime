# Import libraries
from flask import Flask, jsonify, request
from bson.json_util import dumps
from dbConnect import connectDB
import json
import model
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# ROUTES

###############################################CRUD##############################################################

#get all animes
@app.route('/animes', methods=['GET'])
def getHello():
    return dumps(model.getAnimes())

#find anime by id
@app.route('/animes/<id>', methods=['GET'])
def getAnimeById(id):
    return dumps(dumps(model.getAnimeById(id)))

#insert anime
@app.route('/animes/create', methods=['POST'])
def createAnime():
    request_data = request.get_json()
    model.insertAnime(request_data)
    return dumps("Anime added successfully")

#delete anime
@app.route('/animes/delete/<id>', methods=['DELETE'])
def deleteAnime(id):
    model.deleteAnime(id)
    return dumps("Anime deleted successfully")

#update anime
@app.route('/animes/update/<id>', methods=['PUT'])
def updateAnime(id):
    request_data = request.get_json()
    model.updateAnime(id, request_data)
    return dumps("Anime updated successfully")

#################################################QUESTIONS########################################################

#Quels sont les genres les plus populaires parmi les animes
@app.route('/animes/genres', methods=['GET'])
def getMostPopularGenres():
    return dumps(model.getMostPopularGenres())

#top studios by nb of animes
@app.route('/animes/studios', methods=['GET'])
def getTopStudios():
    return dumps(model.getBestProducers())

#best anime by year
@app.route('/animes/year', methods=['GET'])
def getBestAnimeByYear():
    return dumps(model.bestMoviesByYear())

#average duration by genre
@app.route('/animes/duration', methods=['GET'])
def getAverageDurationByGenre():
    return dumps(model.getAverageDurationByGenre())

#getTop3
@app.route('/animes/top3', methods=['GET'])
def getTop3():
    return dumps(model.getTop3())

if __name__ == '__main__':
    try:
        app.run(port=5000, debug=True)
    except:
        print("Server error")