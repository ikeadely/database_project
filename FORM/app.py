from crypt import methods
import json
from logging import exception
from flask import Flask, jsonify, request
from gridfs import Database
import psycopg2

# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

conn = psycopg2.connect(host="0.0.0.0", database="dblogin", user="form", password="lupasandi")
curs = conn.cursor()

@app.route("/get", methods=['GET'])
def get():
    try:
        query = f"select * from formdb"
        curs.execute(query)
        result = curs.fetchall()

        data = []
        for i in result:
            data.append({
                "id": i[0],
                "namaperusahaan": i[1],
                "email": i[2],
                "password": i[3],
                "negara": i[4],
                "alamat": i[5],
                "matauang": i[6],
                "bahasa": i[7],
                "zonawaktu": i[8]
            })
        return jsonify({
            "data" : data
        })
    except Exception as e:
        print(e)

@app.route("/add", methods=["POST"])
def add():
    try:
        payload = json.loads(request.data)
        namaperusahaan = payload["namaperusahaan"]
        email = payload["email"]
        password = payload["password"]
        negara = payload["negara"]
        alamat = payload["alamat"]
        matauang = payload["matauang"]
        bahasa = payload["bahasa"]
        query = f"insert into formdb(namaperusahaan, email, password, negara, alamat, matauang, bahasa) values ('{namaperusahaan}', '{email}', '{password}', '{negara}', '{alamat}', '{matauang}', '{bahasa}')"
        print(query)
        curs.execute(query)
        conn.commit()
        curs.close()
        conn.close()
        return jsonify({
            "message":"success!"
        }), 200
    except Exception as e:
        return jsonify({
         "message":"can't upload",
         "detailMessage": f"{e}"   
        }), 400

@app.route("/up/<id>", methods=["PUT"])
def up(id):
    try:
        payload = json.loads(request.data)
        namaperusahaan = payload["namaperusahaan"]
        email = payload["email"]
        password = payload["password"]
        negara = payload["negara"]
        alamat = payload["alamat"]
        matauang = payload["matauang"]
        bahasa = payload["bahasa"]
        query = f"insert into formdb (namaperusahaan, email, password, negara, alamat, matauang, bahasa) values ('{namaperusahaan}', '{email}', '{password}', '{negara}', '{alamat}', '{matauang}', '{bahasa}')"
        print(query)
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message":"success!!"
        }), 200
    except Exception as e:
        return jsonify({
         "message":"can't update",
         "detailMessage": f"{e}"   
        }), 400

@app.route("/delete/<id>", methods=["DELETE"])
def delete(id):
    try:
        query = f"delete from formdb where id={id}"
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message":"success!!"
        }), 200
    except Exception as e:
        return jsonify({ 
            "message":"can't delete",
            "detailMessage": f"{e}"
        }), 400


if "__name__" == "__main__":
    app.run(host="0.0.0.0", port=5000)  