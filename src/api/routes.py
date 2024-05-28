from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required, get_jwt
from api.models import db, User, Profesional,Conversacion,ServiciosContratados


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# This should be implemented as a proper storage (e.g., a database or an in-memory store like Redis)
revoked_tokens = set()

@api.route('/usuarios', methods=['GET'])
def get_usuarios():
    # Obtener todos los usuarios de la base de datos
    usuarios = User.query.all()
    # Convertir los objetos de usuario a un formato serializable
    usuarios_serializados = [user.serialize() for user in usuarios]
    return jsonify({"results": usuarios_serializados}), 200

@api.route('/profesionales', methods=['GET'])
def get_profesionales():
    # Obtener todos los usuarios de la base de datos
    profesionales = Profesional.query.all()
    # Convertir los objetos de usuario a un formato serializable
    profesionales_serializados = [profesional.serialize() for profesional in profesionales]
    return jsonify({"results": profesionales_serializados}), 200

@api.route('/usuario/<int:user_id>', methods=['GET'])
def get_usuario(user_id):
    # Obtener el usuario de la base de datos por su ID
    usuario = User.query.get_or_404(user_id)
    # Convertir el objeto de usuario a un formato serializable
    usuario_serializado = usuario.serialize()
    return jsonify(usuario_serializado), 200

@api.route('/profesional/<int:profesional_id>', methods=['GET'])
def get_profesional(profesional_id):
    # Obtener el usuario de la base de datos por su ID
    profesional = Profesional.query.get_or_404(profesional_id)
    # Convertir el objeto de usuario a un formato serializable
    profesional_serializado = profesional.serialize()
    return jsonify(profesional_serializado), 200

#ruta crear usuario
@api.route('/crearusuario', methods=['POST'])
def crear_usuario():
    data = request.get_json()
    nombre = data.get("nombre")
    email = data.get("email")
    password = data.get("password")
    
    if not nombre or not email or not password:
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Este correo electrónico ya está registrado"}), 400

    user_new = User(
        nombre=nombre,
        email=email,
        password=password
    )
    db.session.add(user_new)
    db.session.commit()
    return jsonify({"msg": "Usuario creado exitosamente"}), 201

@api.route('/crearprofesional', methods=['POST'])
def crear_profesional():
    data = request.get_json()
    nombre = data.get("nombre")
    email = data.get("email")
    password = data.get("password")

    if not nombre or not email or not password:
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400

    if Profesional.query.filter_by(email=email).first():
        return jsonify({"msg": "Este correo electrónico ya está registrado"}), 400

    profesional_new = Profesional(
        nombre=nombre,
        email=email,
        password=password
    )
    db.session.add(profesional_new)
    db.session.commit()
    return jsonify({"msg": "Profesional creado exitosamente"}), 201

#ruta iniciar sesion usuario
@api.route("/iniciarsesionusuario", methods=["POST"])
def iniciar_sesion_usuario():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
# Buscar el usuario en la base de datos
    user = User.query.filter_by(email=email, password=password).first()
    
# Verificar si el usuario existe y la contraseña es correcta
    if user is None or user.password != password:
        return jsonify({"msg": "Usuario no encontrado o contraseña incorrecta"}), 401
    
      #Crear el token JWT
    access_token = create_access_token(identity=user.id)
    
     # Devolver el token JWT y el ID del usuario
    return jsonify({"token": access_token, "user_id": user.id}), 200

@api.route("/iniciarsesionprofesional", methods=["POST"])
def iniciar_sesion_profesional():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    # Buscar al profesional en la base de datos
    profesional = Profesional.query.filter_by(email=email, password=password).first()
    
    # Verificar si el profesional existe y la contraseña es correcta
    if profesional is None or profesional.password != password:
        return jsonify({"msg": "Usuario no encontrado o contraseña incorrecta"}), 401
    
    # Crear el token JWT
    access_token = create_access_token(identity=profesional.id)
    
    # Devolver el token JWT y el ID del profesional
    return jsonify({"token": access_token, "profesional_id": profesional.id}), 200


#ruta vista privada usuario
@api.route("/vistaprivadausuario", methods=["GET"])
@jwt_required()
def vista_privada_usuario():
    # Obtener el ID del usuario actualmente autenticado
    current_user_id = get_jwt_identity()
    
    # Buscar el usuario en la base de datos
    user = User.query.get(current_user_id)
    
    if user is None:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
    # Devolver la información del usuario
    return jsonify({
        "id": user.id,
        "nombre": user.nombre,
        "apellidos": user.apellidos,
        "email": user.email,
        "telefono": user.telefono,
        "localizacion": user.localizacion,
        "longitud": user.longitud,
        "latitud": user.latitud,
        "direccion": user.direccion,
        "foto_de_perfil": user.foto_de_perfil,
        "tipo_de_dieta": user.tipo_de_dieta,
        "alergias": user.alergias
    }), 200

#ruta vista privada profesional
@api.route("/vistaprivadaprofesional", methods=["GET"])
@jwt_required()
def vista_privada_profesional():
    # Obtener el ID del profesional actualmente autenticado
    current_profesional_id = get_jwt_identity()
    
    # Buscar el profesional en la base de datos
    profesional = Profesional.query.get(current_profesional_id)
    
    if profesional is None:
        return jsonify({"msg": "Profesional no encontrado"}), 404
    
    # Devolver la información del profesional
    return jsonify({
        "id": profesional.id,
        "nombre": profesional.nombre,
        "apellidos": profesional.apellidos,
        "email": profesional.email,
        "telefono": profesional.telefono,
        "localizacion": profesional.localizacion,
        "direccion": profesional.direccion,
        "foto_de_perfil": profesional.foto_de_perfil,
        "descripcion": profesional.descripcion,
        "info_adicional": profesional.info_adicional,
        "tipo_servicio_chef": profesional.tipo_servicio_chef,
        "tipo_servicio_jamonero": profesional.tipo_servicio_jamonero,
        "tipo_servicio_sumiller": profesional.tipo_servicio_sumiller,
        "tipo_servicio_pastelero": profesional.tipo_servicio_pastelero,
        "tipo_servicio_barman": profesional.tipo_servicio_barman,
        "servicio_pasteleria": profesional.servicio_pasteleria,
        "is_active": profesional.is_active
    }), 200


# #ruta editar usuario
@api.route("/actualizarusuario", methods=["PUT"])
@jwt_required()
def update_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user is None:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    data = request.json

    if "email" in data:
        user.email = data["email"]
    if "password" in data:
        user.password = data["password"]
    if "nombre" in data:
        user.nombre = data["nombre"]
    if "apellidos" in data:
        user.apellidos = data["apellidos"]
    if "telefono" in data:
        user.telefono = data["telefono"]
    if "localizacion" in data:
        user.localizacion = data["localizacion"]
    if "longitud" in data:
        user.longitud = data["longitud"]
    if "latitud" in data:
        user.latitud = data["latitud"]
    if "direccion" in data:
        user.direccion = data["direccion"]
    if "foto_de_perfil" in data:
        user.foto_de_perfil = data["foto_de_perfil"]
    if "tipo_de_dieta" in data:
        user.tipo_de_dieta = data["tipo_de_dieta"]
    if "alergias" in data:
        user.alergias = data["alergias"]

    db.session.commit()

    return jsonify({"msg": "Usuario actualizado exitosamente"}), 200

# Método para editar profesional
@api.route("/editarprofesional", methods=["PUT"])
@jwt_required()
def editar_profesional():
    # Obtener el ID del profesional desde el token JWT
    profesional_id = get_jwt_identity()

    # Buscar al profesional en la base de datos
    profesional = Profesional.query.get(profesional_id)
    if profesional is None:
        return jsonify({"msg": "Profesional no encontrado"}), 404

    # Obtener los datos enviados en la solicitud
    data = request.json

    # Actualizar los detalles del profesional con los datos enviados
    profesional.nombre = data.get("nombre", profesional.nombre)
    profesional.apellidos = data.get("apellidos", profesional.apellidos)
    profesional.email = data.get("email", profesional.email)
    profesional.password = data.get("password", profesional.password)
    profesional.telefono = data.get("telefono", profesional.telefono)
    profesional.localizacion = data.get("localizacion", profesional.localizacion)
    profesional.direccion = data.get("direccion", profesional.direccion)
    profesional.foto_de_perfil = data.get("foto_de_perfil", profesional.foto_de_perfil)
    profesional.descripcion = data.get("descripcion", profesional.descripcion)
    profesional.info_adicional = data.get("info_adicional", profesional.info_adicional)
    profesional.tipo_servicio_chef = data.get("tipo_servicio_chef", profesional.tipo_servicio_chef)
    profesional.tipo_servicio_jamonero = data.get("tipo_servicio_jamonero", profesional.tipo_servicio_jamonero)
    profesional.tipo_servicio_sumiller = data.get("tipo_servicio_sumiller", profesional.tipo_servicio_sumiller)
    profesional.tipo_servicio_pastelero = data.get("tipo_servicio_pastelero", profesional.tipo_servicio_pastelero)
    profesional.tipo_servicio_barman = data.get("tipo_servicio_barman", profesional.tipo_servicio_barman)
    profesional.servicio_pasteleria = data.get("servicio_pasteleria", profesional.servicio_pasteleria)
    profesional.is_active = data.get("is_active", profesional.is_active)

    # Guardar los cambios en la base de datos
    db.session.commit()

    return jsonify({"msg": "Detalles del profesional actualizados exitosamente"}), 200


#metodo Eliminar usuario
@api.route("/eliminarusuario", methods=["DELETE"])
@jwt_required()
def borrar_usuario():
    # Obtener el ID del usuario desde el token JWT
    user_id = get_jwt_identity()

    # Buscar al usuario en la base de datos
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    # Eliminar al usuario de la base de datos
    db.session.delete(user)
    db.session.commit()

    return jsonify({"msg": "Usuario eliminado exitosamente"}), 200


# Método para eliminar profesional
@api.route("/eliminarprofesional", methods=["DELETE"])
@jwt_required()
def eliminar_profesional():
    # Obtener el ID del profesional desde el token JWT
    profesional_id = get_jwt_identity()

    # Buscar al profesional en la base de datos
    profesional = Profesional.query.get(profesional_id)
    if profesional is None:
        return jsonify({"msg": "Profesional no encontrado"}), 404

    # Eliminar al profesional de la base de datos
    db.session.delete(profesional)
    db.session.commit()

    return jsonify({"msg": "Profesional eliminado exitosamente"}), 200








