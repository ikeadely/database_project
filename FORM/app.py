from locale import currency
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
        query = f"select * from form"
        curs.execute(query)
        result = curs.fetchall()

        data = []
        for i in result:
            data.append({
                "form_id": i[0],
                "organizationname": i[1],
                "username": i[2],
                "email": i[3],
                "password": i[4],
                "country": i[5],
                "city": i[6],
                "address": i[7],
                "postalcode": i[8],
                "currency": i[9],
                "language": i[10],
                "date": i[11],
                "note": i[12]
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
        query = f"select a.organizationname, a.username, a.email, a.password, a.country, a.city, a.address, a.postalcode, a.currency, a.language, a.date, a.note"
            from form where a.username = '{payload['username']}' and password ='{payload['password']}
        organizationname = payload["organizationname"]
        username = payload["username"]
        email = payload["email"]
        password = payload["password"]
        country = payload["country"]
        city = payload["city"]
        address = payload["addres"]
        postalcode = payload["postalcode"]
        currency = payload["currency"]
        
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