from flask import Flask, jsonify, json, request
import psycopg2
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


conn = psycopg2.connect(host="0.0.0.0", database="dblogin", user="form", password="lupasandi")
curs = conn.cursor()



##-------database form----##
@app.route("/register", methods=["GET"])
def register():
    try:
        query = f"select * from formuser"
        curs.execute(query)
        result = curs.fetchall()
        data = []
        for i in result:
            data.append({
                "form_id": i[0],
                "organizationName": i[1],
                "username": i[2],
                "password": i[3],
                "country": i[4],
                "province": i[5],
                "city": i[5],
                "address": i[6],
                "postalCode": i[7],
                "currency": i[8],
                "language": i[9],
                "timeZone": i[10]
            })
        return jsonify({
            "data": data
        })
    except Exception as e:
        print(e)


@app.route("/login", methods=["GET"])
def login():
    try:
        query = f"select * from register"
        curs.execute(query)
        result = curs.fetchall()
        data = []
        for i in result:
            data.append({
                "form_id": i[0],
                "username": i[1],
                "password": i[2]
            })
        return jsonify({
            "data": data
        })
    except Exception as e:
        print(e)


@app.route("/postregister", methods=["POST"])
def tambah():
    try:
        payload = json.loads(request.data)
        organizationname = payload["organizationname"]
        username = payload["username"]
        email = payload["username"]
        password = payload["payload"]
        country = payload["country"]
        province = payload["province"]
        city = payload["city"]
        address = payload["address"]
        postalcode = payload["postalcode"]
        currency = payload["currency"]
        language = payload["language"]
        query = f"insert into form (organizationname, username, email, password, country, province, city, address, postalcode, currency, language) values ('{organizationname}', '{username}', '{email}', '{password}', '{country}', '{province}', '{city}', '{address}', '{postalcode}', '{currency}', '{language}')"
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message": "data berhasil ditambahkan"
        }), 200
    except Exception as e:
        return jsonify({
            "message": "data gagal ditambahkan",
            "error": f"{e}"
        }), 400

@app.route("/login", methods=["GET", "POST"])
def login():
    info = json.loads(request.data)
    username = info.get("username", "guest")
    password = info.get("password", "")
    user = user.objects(name=username, password=password).first()

    query=f"select username, password from register where username=%s and password=%s"
    Params = ("username", "password")
    curs.execute(query, Params)
    row = Cursor.fetchone()

    if row:
        return jsonify({
            "status": 200
        })
        # print("berhasil")
    else:
        return jsonify({
        "status": 401,
        "reason": "Username or Password errror"
    })


if "name"=="main":
    app.run(debug=True)