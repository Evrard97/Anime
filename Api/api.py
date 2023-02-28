# Import libraries
from flask import Flask, jsonify, request
from bson.json_util import dumps 
import json
import model
# from flask_cors import CORS

app = Flask(__name__)

# CORS(app)

# ROUTES
@app.route('/animes', methods=['GET'])
def getHello():
	    return dumps(model.getAnimes())

@app.route('/hello', methods=['POST'])
def postHello():
	return 'This is a POST request!'

@app.route('/hello', methods=['PUT'])
def putHello():
	return 'This is a PUT request!'

@app.route('/hello', methods=['DELETE'])
def deleteHello():
	return 'This is a DELETE request!'










if __name__ == '__main__':
    try:
        app.run(port=5000, debug=True)
    except:
        print("Server error")
