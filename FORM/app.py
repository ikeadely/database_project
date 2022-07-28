from ssl import OP_NO_RENEGOTIATION
from flask import Flask, jsonify, request
import json
import psycopg2

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

conn = psycopg2.connect(host="0.0.0.0", database="dblogin", user="form", password="lupasandi")
curs = conn.cursor()

@app.route("/read", methods=["GET"])
def read():
    try:
       query = f" select * from pricingfeature"
       curs.execute(query)
       result = curs.fetchall()
       data = []
       for i in result:
           data.append({
               "id": i[0],
               "standard": i[1],
               "profesional": i[2],
               "ultimate": i[3]
           })
       return jsonify({
           "data" : data
       })
    except Exception as e:
        print(e)

    response = jsonify(message="Simple server is running")
    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
   
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

@app.route("/post", methods=["POST"])
def post():
    try:
        payload =json.loads(request.data)
        standard = payload["standard"]
        profesional = payload["profesional"]
        ultimate = payload["ultimate"]
        query = f"insert into pricingfeature(standard, profesional, ultimate) values ('{standard}', '{profesional}', '{ultimate}')"
        print(query)
        curs.execute(query)
        conn.commit()
        curs.close()
        conn.close()
        return jsonify({
            "message":"berhasil"
        }), 200
    except Exception as e:
        return jsonify({
            "message":"gagal",
            "detailMessage": f"{e}"
        }),400

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

@app.route("/edit/<id>", methods=["PUT"])
def edit(id):
    try:
        payload = json.loads(request.data)
        standard = payload["standard"]
        profesional = payload["profesional"]
        ultimate = payload["ultimate"]
        query = f"update pricingfeature set standard=('{standard}'), profesional=('{profesional}'), ultimate=('{ultimate}') where id=({id})"
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message":"berhasil"
        }), 200
    except Exception as e:
        return jsonify({
         "message":"gagal",
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
    app.run(debug=True)  


# flask run -h "0.0.0.0" -p 8080