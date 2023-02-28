# Import libraries
from flask import Flask, jsonify, request
from bson.json_util import dumps
# from bson.objectid import ObjectId 
from dbConnect import connectDB
import json
import model
# from flask_cors import CORS

app = Flask(__name__)

# CORS(app)

# ROUTES

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










if __name__ == '__main__':
    try:
        app.run(port=5000, debug=True)
    except:
        print("Server error")
