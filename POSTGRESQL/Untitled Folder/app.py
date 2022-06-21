from flask import Flask, jsonify, request, json
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(host="0.0.0.0", database="login", user="login", password="lupasandi")
curs = conn.cursor()

@app.route("/read", methods=['GET'])
def read():
    try:
        query = f"select * from users"
        curs.execute(query)
        result = curs.fetchall()
        # print(result)

        data = []
        for i in result:
            data.append({
                "id": i[0],
                "fullname": i[1],
                "username": i[2],
                "password": i[3],
                "email": i[4]
            })
        return jsonify({
            "data":data
        })
    except Exception as e:
        print(e)

@app.route("/create", methods=["POST"])
def create():
    try:
        payload = json.loads(request.data)
        # print(payload)
        fullname = payload["fullname"]
        username = payload["username"]
        password = payload["password"]
        email = payload["email"]
       
        query = f"insert into users(fullname, username, password, email) values('{fullname}', '{username}', '{password}', '{email}')"
        curs.execute(query)
        conn.commit()
        # result = curs.fetchall
        # print(result)
        return jsonify({
            "message": "sukses",
            "data": fullname
        })
    except Exception as e:
        print(e) 

@app.route("/update/<id>", methods=["PUT"])
def update(id):
    try:
        payload = json.loads(request.data)
        print(payload)
        fullname = payload["fullname"]
        username = payload["username"]
        password = payload["password"]
        email = payload["email"]
        
        query = f"update users set fullname=('{fullname}'), username=('{username}'), password=('{password}'), email=('{email}') where id=({id})"
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message": "success"
        })

    except Exception as e:
        return jsonify({
            "message": "Gagal mengupdate data",
            "detailMessage":f"{e}"
        }),400

@app.route("/delete/<id>", methods=["DELETE"])
def delete(id):
    try:
        query = f"delete from users where id ={id}"
        curs.execute(query)
        conn.commit()
        return jsonify({
            "message":"succes",
        })
    except Exception as e:
        print(e)

if "__name__" == "__main__":
    app.run(host="0.0.0.0", port=5000)
