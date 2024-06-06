from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required, get_jwt
from api.models import db, User, Profesional,Conversacion,ServiciosContratados,Favoritos
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mail import Mail, Message
from datetime import datetime, timedelta
import uuid
from flask import jsonify

api = Blueprint('api', __name__)

mail = Mail()
# Allow CORS requests to this API
CORS(api)

# This should be implemented as a proper storage (e.g., a database or an in-memory store like Redis)
revoked_tokens = set()

@api.route('/usuarios', methods=['GET'])
def cargar_usuarios():
    # Obtener todos los usuarios de la base de datos
    usuarios = User.query.all()
    # Convertir los objetos de usuario a un formato serializable
    usuarios_serializados = [user.serialize() for user in usuarios]
    return jsonify({"results": usuarios_serializados}), 200

@api.route('/profesionales', methods=['GET'])
def cargar_profesionales():
    # Obtener todos los usuarios de la base de datos
    profesionales = Profesional.query.all()
    # Convertir los objetos de usuario a un formato serializable
    profesionales_serializados = [profesional.serialize() for profesional in profesionales]
    return jsonify({"results": profesionales_serializados}), 200

@api.route('/usuario/<int:user_id>', methods=['GET'])
def cargar_usuario(user_id):
    # Obtener el usuario de la base de datos por su ID
    usuario = User.query.get_or_404(user_id)
    # Convertir el objeto de usuario a un formato serializable
    usuario_serializado = usuario.serialize()
    return jsonify(usuario_serializado), 200

@api.route('/profesional/<int:profesional_id>', methods=['GET'])
def cargar_profesional(profesional_id):
    # Obtener el usuario de la base de datos por su ID
    profesional = Profesional.query.get_or_404(profesional_id)
    # Convertir el objeto de usuario a un formato serializable
    profesional_serializado = profesional.serialize()
    return jsonify(profesional_serializado), 200

#ruta crear usuario
@api.route('/crearusuario', methods=['POST'])
def crear_usuario():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Este correo electrónico ya está registrado"}), 400
    
    hashed_password = generate_password_hash(password)

    user_new = User(
        email= email,
        password= hashed_password
    )
    db.session.add(user_new)
    db.session.commit()
    return jsonify({"msg": "Usuario creado exitosamente"}), 201

@api.route('/crearprofesional', methods=['POST'])
def crear_profesional():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"msg": "Correo y contraseña son requeridos"}), 400

    if Profesional.query.filter_by(email=email).first():
        return jsonify({"msg": "Este correo electrónico ya está registrado"}), 400
    
    hashed_password = generate_password_hash(password)

    profesional_new = Profesional(
        email= email,
        password= hashed_password
    )
    db.session.add(profesional_new)
    db.session.commit()
    return jsonify({"msg": "Profesional creado exitosamente"}), 201

#ruta iniciar sesion usuario
@api.route("/iniciarsesionusuario", methods=["POST"])
def iniciar_sesion_usuario():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None or not check_password_hash(user.password, password):
        return jsonify({"msg": "Usuario no encontrado o contraseña incorrecta"}), 401
    access_token = create_access_token(identity=user.id)
    print(user.serialize())
    return jsonify({"token": access_token, "user": user.serialize()}), 200

#ruta iniciar sesion profesional
@api.route("/iniciarsesionprofesional", methods=["POST"])
def iniciar_sesion_profesional():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    profesional = Profesional.query.filter_by(email=email).first()
    if profesional is None or not check_password_hash(profesional.password, password):
        return jsonify({"msg": "Profesional no encontrado o contraseña incorrecta"}), 401
    access_token = create_access_token(identity=profesional.id)
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
        "is_active": profesional.is_active
    }), 200

# ruta editar usuario
@api.route("/editarusuario", methods=["PUT"])
@jwt_required()
def editar_usuario():
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

    return jsonify({"msg": "Usuario editado exitosamente"}), 200

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
@api.route('/eliminarusuario/<int:user_id>', methods=["DELETE"])
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

from datetime import datetime

@api.route('/crearconversacion', methods=['POST'])
def crear_conversacion():
    data = request.get_json()
    profesional_id = data.get('profesional_id')
    coment_text = data.get('coment_text')
    usuario_id = data.get('usuario_id')

    if not profesional_id or not coment_text or not usuario_id:
        return jsonify({"msg": "profesional_id, coment_text, y usuario_id son necesarios"}), 400

    # Obtener la fecha actual
    fecha_creacion = datetime.now()

    # Crear una nueva conversación con los datos proporcionados
    nueva_conversacion = Conversacion(
        fecha_creacion=fecha_creacion,
        coment_text=coment_text,
        usuario_id=usuario_id,
        profesional_id=profesional_id
    )

    # Guardar la nueva conversación en la base de datos
    db.session.add(nueva_conversacion)
    db.session.commit()

    return jsonify({"msg": "Conversación creada exitosamente"}), 201

@api.route('/profesional/<int:profesional_id>/mensajes', methods=['GET'])
def cargar_mensajes_profesional(profesional_id):
    # Obtener todos los mensajes de conversación enviados al profesional con el ID proporcionado
    mensajes = Conversacion.query.filter_by(profesional_id=profesional_id).all()
    
    # Verificar si hay mensajes para el profesional
    if not mensajes:
        return jsonify({"msg": "No hay mensajes para este profesional"}), 404
    
    # Serializar los objetos de mensaje a un formato JSON
    mensajes_serializados = [mensaje.serialize() for mensaje in mensajes]
    
    return jsonify({"mensajes": mensajes_serializados}), 200

@api.route('/profesional/<int:profesional_id>/mensajes/<int:mensaje_id>/responder', methods=['POST'])
def responder_mensaje_profesional(profesional_id, mensaje_id):
    data = request.get_json()
    comentario = data.get("comentario")

    # Verificar si se proporcionó un comentario
    if not comentario:
        return jsonify({"msg": "Se requiere un comentario para responder al mensaje"}), 400

    # Verificar si el mensaje pertenece al profesional
    mensaje = Conversacion.query.filter_by(id=mensaje_id, profesional_id=profesional_id).first()
    if not mensaje:
        return jsonify({"msg": "El mensaje no existe o no está asociado a este profesional"}), 404

    # Agregar la respuesta al mensaje
    mensaje.coment_text = comentario
    db.session.commit()

    return jsonify({"msg": "Respuesta enviada exitosamente"}), 201

@api.route("/conversaciones_usuario", methods=["GET"])
@jwt_required()
def get_user_conversations():
    # Obtener el ID del usuario actualmente autenticado
    user_id = get_jwt_identity()

    # Buscar todas las conversaciones en las que el usuario está involucrado
    conversaciones = Conversacion.query.filter(Conversacion.usuario_id == user_id).all()

    # Serializar las conversaciones para enviarlas como respuesta
    conversaciones_serializadas = [conversacion.serialize() for conversacion in conversaciones]

    return jsonify({"conversaciones": conversaciones_serializadas}), 200


# Método para agregar un profesional a la lista de favoritos de un usuario
@api.route("/agregarfavorito/<int:profesional_id>", methods=["POST"])
@jwt_required()
def agregar_favorito(profesional_id):
    # Obtener el ID del usuario actualmente autenticado
    user_id = get_jwt_identity()
    
    # Verificar si el usuario ya ha marcado a este profesional como favorito
    favorito_existente = Favoritos.query.filter_by(usuario_id=user_id, profesional_id=profesional_id).first()
    if favorito_existente:
        return jsonify({"msg": "Este profesional ya está en tu lista de favoritos"}), 400
    
    # Crear un nuevo registro en la tabla de favoritos
    nuevo_favorito = Favoritos(usuario_id=user_id, profesional_id=profesional_id)
    db.session.add(nuevo_favorito)
    db.session.commit()
    
    return jsonify({"msg": "Profesional añadido a favoritos exitosamente"}), 201

@api.route('/eliminarfavorito/<int:favorito_id>', methods=['DELETE'])
@jwt_required()
def eliminar_favorito(favorito_id):
    # Obtener el ID del usuario actualmente autenticado
    current_user_id = get_jwt_identity()
    
    # Buscar el favorito en la base de datos por ID y usuario actual
    favorito = Favoritos.query.filter_by(id=favorito_id, usuario_id=current_user_id).first()
    
    # Verificar si el favorito existe y pertenece al usuario actual
    if favorito is None:
        return jsonify({"msg": "Favorito no encontrado o no pertenece al usuario"}), 404
    
    # Eliminar el favorito de la base de datos
    db.session.delete(favorito)
    db.session.commit()

    return jsonify({"msg": "Favorito eliminado exitosamente"}), 200

@api.route('/favoritos', methods=['GET'])
@jwt_required()
def obtener_favoritos():
    # Obtener el ID del usuario actualmente autenticado
    current_user_id = get_jwt_identity()
    
    # Buscar los favoritos del usuario en la base de datos
    favoritos = Favoritos.query.filter_by(usuario_id=current_user_id).all()
    
    # Verificar si el usuario tiene favoritos
    if not favoritos:
        return jsonify({"msg": "No se encontraron profesionales favoritos para este usuario"}), 404
    
    # Serializar los datos de los favoritos
    favoritos_serializados = [favorito.serialize() for favorito in favoritos]
    
    return jsonify({"favoritos": favoritos_serializados}), 200

# @api.route("/mailTest")
# def index():
#     try:
#         msg = Message(
#             subject="Hello",
#             sender="adoptaunchef@gmail.com",
#             recipients=["chefdavid@hotmail.com"]
#         )
#         msg.body = "Hello Flask message sent from Flask-Mail"
#         mail.send(msg)
#         return jsonify({"msg": "email sent"})
#     except Exception as e:
#         return jsonify({"error": str(e)})

@api.route("/resetpassword", methods=["POST"])
def reset_password():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({"error": "Email is required"}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    # Generar un token único
    token = str(uuid.uuid4())
    expiration = datetime.utcnow() + timedelta(hours=1)
    user.reset_token = token
    user.token_expiration = expiration
    db.session.commit()

    try:
        msg = Message(
            subject="Password Reset Request",
            sender="adoptaunchef@gmail.com",
            recipients=[email]
        )
        reset_link = f"https://legendary-waffle-x55gpwjxw94rc944-3000.app.github.dev/resetpassword/{token}"
        msg.body = f"Please click the link below to reset your password:\n\n{reset_link}"
        mail.send(msg)
        return jsonify({"msg": "email sent"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@api.route("/resetpassword/<token>", methods=["PUT"])
def update_password(token):
    data = request.get_json()
    new_password = data.get('password')

    if not new_password:
        return jsonify({"error": "Password is required"}), 400

    user = User.query.filter_by(reset_token=token).first()

    if not user or user.token_expiration < datetime.utcnow():
        return jsonify({"error": "Invalid or expired token"}), 400

    # Actualizar la contraseña
    user.password = generate_password_hash(new_password)
    user.reset_token = None
    user.token_expiration = None
    db.session.commit()

    return jsonify({"msg": "Password has been updated"})

# Ruta para cerrar sesión usuario
@api.route('/cerrarsesionusuario', methods=['POST'])
@jwt_required()
def cerrar_sesion_usuario():
    jti = get_jwt()["jti"]
    revoked_tokens.add(jti)
    return jsonify({"msg": "Sesión cerrada exitosamente"}), 200

