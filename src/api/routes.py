from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required, get_jwt

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# This should be implemented as a proper storage (e.g., a database or an in-memory store like Redis)
revoked_tokens = set()

@api.route('/crear_usuario', methods=['POST'])
def crear_usuario():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not email or not password:
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400
    user = User.query.filter_by(email=email, password=password).first()
    if user:
        return jsonify({"msg": "Este usuario ya existe"}), 401
    user_new = User(email=email, password=password)
    db.session.add(user_new)
    db.session.commit()
    return jsonify({"msg": "Usuario creado"}), 200

@api.route('/crear_profesional', methods=['POST'])
def crear_profesional():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not email or not password:
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400
    user = User.query.filter_by(email=email, password=password).first()
    if user:
        return jsonify({"msg": "Este usuario ya existe"}), 401
    user_new = User(email=email, password=password)
    db.session.add(user_new)
    db.session.commit()
    return jsonify({"msg": "Usuario creado"}), 200

@api.route("/iniciar_sesion_profesional", methods=["POST"])
def iniciar_sesion_profesional():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None or user.password != password:
        return jsonify({"msg": "Usuario no encontrado o contraseña incorrecta"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id}), 200

@api.route("/iniciar_sesion_usuario", methods=["POST"])
def iniciar_sesion_usuario():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None or user.password != password:
        return jsonify({"msg": "Usuario no encontrado o contraseña incorrecta"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id}), 200

@api.route("/privada_profesional", methods=["GET"])
@jwt_required()
def privada_profesional():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user is None:
        return APIException("Usuario no encontrado", status_code=404)
    return jsonify("Usuario autenticado"), 200

@api.route("/privada_usuario", methods=["GET"])
@jwt_required()
def privada_usuario():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user is None:
        return APIException("Usuario no encontrado", status_code=404)
    return jsonify("Usuario autenticado"), 200

@api.route("/actualizar_usuario", methods=["PUT"])
@jwt_required()
def update_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user is None:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    data = request.json

    user.nombre = data.get("nombre", user.nombre)
    user.apellidos = data.get("apellidos", user.apellidos)
    user.nombre_usuario = data.get("nombre_usuario", user.nombre_usuario)
    user.email = data.get("email", user.email)
    user.password = data.get("password", user.password)
    user.telefono = data.get("telefono", user.telefono)
    user.dni = data.get("dni", user.dni)
    user.localizacion = data.get("localizacion", user.localizacion)
    user.direccion = data.get("direccion", user.direccion)
    user.foto_de_perfil = data.get("foto_de_perfil", user.foto_de_perfil)
    user.descripcion = data.get("descripcion", user.descripcion)
    user.info_adicional = data.get("info_adicional", user.info_adicional)
    user.servicio_pica_pica = data.get("servicio_pica_pica", user.servicio_pica_pica)
    user.servicio_clase_cocina = data.get("servicio_clase_cocina", user.servicio_clase_cocina)
    user.servicio_clase_pasteleria = data.get("servicio_clase_pasteleria", user.servicio_clase_pasteleria)
    user.servicio_clase_corte_jamon = data.get("servicio_clase_corte_jamon", user.servicio_clase_corte_jamon)
    user.servicio_comida_trabajo = data.get("servicio_comida_trabajo", user.servicio_comida_trabajo)
    user.servicio_degustacion = data.get("servicio_degustacion", user.servicio_degustacion)
    user.servicio_batchcooking = data.get("servicio_batchcooking", user.servicio_batchcooking)
    user.servicio_corte_jamon = data.get("servicio_corte_jamon", user.servicio_corte_jamon)
    user.servicio_cata_vinos = data.get("servicio_cata_vinos", user.servicio_cata_vinos)
    user.servicio_maridaje = data.get("servicio_maridaje", user.servicio_maridaje)
    user.servicio_barman = data.get("servicio_barman", user.servicio_barman)
    user.servicio_clase_cockteleria = data.get("servicio_clase_cockteleria", user.servicio_clase_cockteleria)
    user.is_active = data.get("is_active", user.is_active)

    db.session.commit()

    return jsonify({"msg": "Usuario actualizado exitosamente"}), 200

@api.route("/cerrar_sesion", methods=["POST"])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    revoked_tokens.add(jti)
    return jsonify({"msg": "Cierre de sesión exitoso"}), 200
