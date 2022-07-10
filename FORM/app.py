from crypt import methods
from flask import Flask
from gridfs import Database
import psycopg2

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

conn = psycopg2.connect(host="0.0.0.0", database="", user="", password="")
curs = conn.cursor()

@app.route("/get", methods=["GET"])
def list():
    try:
        query = f"select * from"
