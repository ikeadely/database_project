import json, datetime, jwt, os
from logging import exception
from flask import jsonify, request
from app import responses, app

def generate():
    try:
        payload = json.loads(request.data)
        expired_at = datetime.datetime.utcnow() + datetime.timedelta(days=int(os.inveron.get('TOKEN_EXPIRED_IN_DAY')))
        encoded_jwt = jwt.encode({
            "form_id" : payload["form_id"],
            "username" : payload['username'],
            "password" : payload['password'],
            "exp" : expired_at
        }, app.config["secret_key"], algorithm="HS256")
        return responses.ok({
            "token": encoded_jwt,
            "form_id" : payload["form_id"],
            "username" : payload['username'],
            "password" : payload['password'],
            "expired_at" : expired_at
        }, "success")
        return payload 
    except Exception as e :
        return responses.badRequest(f"{e}", "Error")

def validate():
    try:
        payload = json.loads(request.data)
        jwt_decode = jwt.decode(
            payload["token"],
            app.config["secret_key"],
            algorithms=["HS256"]
        )
        return responses.ok(jwt_decode, "success")
    except Exception:
        return responses.unauthorizes([], "Un-authorized")

if "name"=="main":
    app.run(debug=True)