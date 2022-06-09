from flask import Flask, Response, request
import pymongo
import json
from bson.objectid import ObjectId
app = Flask(__name__)

try:
    mongo= pymongo.MongoClient(
        host="localhost",
        port=27017,
        serverSelectionTimeoutMS = 1000
    )
    db = mongo.DATA_BULAN_JUNI
    mongo.server_info()
except:
    print("ERROR- Cannot connect to db")
# -----------------------------------------------
@app.route("/admin/create", methods=["POST"])
def create_admin():
    try:
        payload = json.loads(request.data)
        # user = {
            # 'nama': request.form["nama"],
            # 'tempatTanggalLahir': request.form["tempatTanggalLahir"],
            # 'alamatEmail': request.form["alamatEmail"],
            # 'noTelp': request.form["noTelp"]
            # }
        dbResponse = db.user.insert_one(payload)
        print(dbResponse.inserted_id)
        return Response(
            response= json.dumps({"message":"user created",
            "id":f"{dbResponse.inserted_id}"}),
            status=200,
            mimetype="application/json")
    except Exception as ex:
        return Response(response= json.dumps({"message":"cannot read users"}), status=400, mimetype="application/json")
# -----------------------------------------------
@app.route("/read", methods=["GET"])
def get_some_user():
    try:
        data = list(db.user.find())
        for user in data:
            user["_id"]=str(user["_id"])
        return Response(
            response= json.dumps(data),
            status=200, 
            mimetype="application/json")
    except Exception as ex:
        print(ex)
        return Response(response= json.dumps({"message":"cannot read user"}), status=400, mimetype="application/json")
            
# -----------------------------------------------
@app.route("/admin/<id>", methods=["PATCH"])
def update_user(id):
    try:
        dbResponse = db.user.update_many(
            {"_id": ObjectId(id)},
            {"$set":{'nomorTelepon':request.form["nomorTelepon"]}},
            )
        if dbResponse.modified_count == 1:
            return Response(
                response=json.dumps(
                    {"message": "user update"}),
                status=200,
                mimetype="application/json"
            )
        return Response(
            response=json.dumps(
                {"message":"nothing to update"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        return Response(response= json.dumps({"message":"cannot read users"}), status=400, mimetype="application/json")
# -----------------------------------------------
@app.route("/admin/<id>", methods=["DELETE"])
def delete_user(id):
    try:
        dbResponse = db.user.delete_one({"_id":ObjectId(id)})
        if dbResponse.deleted_count == 1:
            return Response(
                response=json.dumps(
                    {"message": "user delete", "id":f"{id}"}),
                status=200,
                mimetype="application/json"
                )
    except Exception as ex:
        return Response(response= json.dumps({"message":"cannot read users"}), status=400, mimetype="application/json")
# -----------------------------------------------
if __name__ == "__main__":
    app.run(debug=True)
    