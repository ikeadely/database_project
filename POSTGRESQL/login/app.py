from flask import Flask, jsonify, request, json
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(host="0.0.0.0", database="login", user="login", password="lupasandi")
curs = conn.cursor()

@app.route("/create", methods=["POST"])
def create():
    try:
        payload =json.loads(request.data)
        organizationname = payload["organizationname"]
        businesslocation = payload["businesslocation"]

        query = f"insert into books(organizationname, businesslocation) values('{organizationname}', '{businesslocation}')"
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message":"success",
            "data":organizationname
        })
    except Exception as e:
        print(e)

@app.route("/read", methods=['GET'])
def read():
    try:
        query = f"select * from books"
        curs.execute(query)
        result = curs.fetchall()

        data = []
        for i in result:
            data.append({
                "id" : i[0],
                "organizationname": i[1],
                "businesslocation": i[2]
            })
        return jsonify({
            "data":data
        })
    except Exception as e:
        print(e)

if "__name__" == "__main__":
    app.run(host="0.0.0.0", port=5000)