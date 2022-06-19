from flask import Flask, Response, request
import pymongo
import json
from bson.objectid import ObjectId
app = Flask(__name__)

try:
    mongo = pymongo.MongoClient(
        host="localhost",
        port=27017,
        serverSelectionTimeoutMS=1000
    )

    db = mongo.data_pertama
    mongo.server_info()
except:
    print("ERROR - tidak bisa Connect ke db")
##############
# membaca data (read)
#############
@app.route("/read", methods=["GET"])
def get_some_users():
    try:
        data = list(db.masuk_data.find())
        for user in data:
            user["_id"] = str(user["_id"])
        return Response(
            response= json.dumps(data),
            status=500,
            mimetype="aplication/json"
        )

    except Exception as ex:
        print(ex)
        return Response(response=json.dumps({"message": "tidak bisa membaca users"}), status=500, mimetype="aplication/json")

#############
## membuat data (creat)
############

@app.route("/creat", methods=["POST"])
def create_user():
    try:
        payload = json.loads(request.data)
        # user = {
        #     'Nama': request.values["Nama"],
        #     'Daerah': request.values["Daerah"],
        #     'tahunMasuk': request.values["tahunMasuk"],
        #     'tahunKeluar': request.values["tahunKeluar"],
        #     'NoHp': request.values["NoHp"],
        #     'Email': request.values["Email"]
            # }
        # print(payload)
        dbResponse = db.masuk_data.insert_one(payload)
        print(dbResponse.inserted_id)
        return Response(
            response=json.dumps(
                {"message": "user sudah terbaca",
                "id":f"{dbResponse.inserted_id}"}),
            status=200,
            mimetype="aplication/json")
            
    except Exception as ex:
        print("*******")
        print(ex)
        print("*******")

############
# memperbaharui data (update)
###########
@app.route("/update/<id>", methods=["PATCH"])
def update_user(id):
    try:
        dbResponse = db.masuk_data.insert_one(
            {"_id": ObjectId(id)},
            {"$set":{'Nama': request.form["Nama"]}},
            {"$set":{'Daerah': request.form["Daerah"]}},
            {"$set":{'tahunMasuk': request.form["tahunMasuk"]}},
            {"$set":{'tahunKeluar': request.form["tahunKeluar"]}},
            {"$set":{'NoHp': request.form["NoHp"]}},
            {"$set":{'Email': request.form["Email"]}}
        )
        if dbResponse.modified_count == 1:
            return Response(
                response= json.dumps(
                    {"message": "update berhasil"}),
                status=200,
                mimetype="aplication/json"
            )
        return Response(
            response= json.dumps(
                {"message": "tidak bisa update"}),
            status=200,
            mimetype="aplication/json"
        )
    except Exception as ex:
        print("******")
        print(ex)
        print("*****")
        return Response(
            response= json.dumps(
                {"message": "maaf ya, tidak bisa update"}),
            status=500,
            mimetype="aplication/json"
        )
#######
# menghapus data (delete)
######
@app.route("/delete/<id>", methods=["DELETE"])
def delete_user(id):
    try:
        dbResponse = db.data_masuk.delete_one({"_id":ObjectId(id)}),
        if dbResponse.deleted_count == 1:
            return Response(
                response= json.dumps(
                    {"message": "berhasil di delete", "id":f"{id}"}),
                status=200,
                mimetype="aplication/json"
            )
    

    except Exception as ex:
        print("*****")
        print(ex)
        print("*****")
        return Response(
            response= json.dumps(
                {"message": "maaf ya, tidak bisa delete user"}),
            status=500,
            mimetype="aplication/json"
        )

###########
if __name__ == "__main__":
    app.run(debug=True)