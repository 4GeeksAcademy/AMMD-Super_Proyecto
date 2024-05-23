from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(15), unique=False, nullable=False)
    apellidos = db.Column(db.String(15), unique = False, nullable=False)
    nombre_usuario = db.Column(db.String(15), unique = True, nullable = False)
    email = db.Column(db.String(120), unique = True, nullable=False)
    password = db.Column(db.String(20), unique = False, nullable=False)
    telefono = db.Column(db.String(12), unique = True, nullable = False)
    dni = db.Column(db.String(15), unique = True, nullable = False)
    localización = db.Column(db.String(20), unique = False, nullable = False) #mirar tipo de dato, con google sería float.(si solo ponemos nombre es String)
    direccion = db.Column(db.String(30), unique = False, nullable = True)
    foto_de_perfil = db.Column(db.String, unique = True, nullable = False) #He puesto tipo de dato strin porque con el img daba error, hay que mirarlo
    descripcion = db.Column(db.String(300), unique = False, nullable = False)
    info_adicional = db.Column(db.String(300), unique = False, nullable = False)
    servicio_pica_pica = db.Column(db.String(300),unique = False, nullable= False)
    servicio_clase_cocina = db.Column(db.String(300),unique = False, nullable= False)
    servicio_clase_pasteleria = db.Column(db.String(300),unique = False, nullable= False)
    servicio_clase_corte_jamon = db.Column(db.String(300),unique = False, nullable= False)
    servicio_comida_trabajo = db.Column(db.String(300),unique = False, nullable= False)
    servicio_degustacion = db.Column(db.String(300),unique = False, nullable= False)
    servicio_batchcooking = db.Column(db.String(300),unique = False, nullable= False)
    servicio_corte_jamon = db.Column(db.String(300),unique = False, nullable= False)
    servicio_cata_vinos = db.Column(db.String(300),unique = False, nullable= False)
    servicio_maridaje = db.Column(db.String(300),unique = False, nullable= False)
    servicio_barman = db.Column(db.String(300),unique = False, nullable= False)
    servicio_clase_cockteleria = db.Column(db.String(300),unique = False, nullable= False)
    is_active = db.Column(db.Boolean(), unique =False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "nombre_usuario": self.nombre_usuario,
            "email": self.email,
            "password": self.password,
            "telefono": self.telefono,
            "dni": self.dni,
            "localizacion":self.localización,
            "direccion": self.direccion,
            "foto_de_perfil": self.foto_de_perfil,
            "descripcion": self.descripcion,
            "info_adicional": self.info_adicional,
            "servicio_pica_pica": self.servicio_pica_pica,
            "servicio_clase_cocina":self.servicio_clase_cocina,
            "servicio_clase de pasteleria": self.servicio_clase_pasteleria,
            "servicio_clase_corte_jamon": self.servicio_clase_corte_jamon,
            "servicio_comida_trabajo": self.servicio_comida_trabajo,
            "servicio_degustacion": self.servicio_degustacion,
            "servicio_batchcooking": self.servicio_batchcooking,
            "servicio_corte_jamon": self.servicio_corte_jamon,
            "servicio_cata_vinos": self.servicio_cata_vinos,
            "servicio_maridaje": self.servicio_maridaje,
            "servicio_barman": self.servicio_barman,
            "servicio_clase_cockteleria": self.servicio_clase_cockteleria
            ##???" is_active"   
            }
    
class Chat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha_creacion = db.Column(db.DateTime, unique = False, nullable = False) #En vez de dateStamp he puesto DateTime porque sino daba error
    texto = db.Column(db.String(400), unique = False, nullable = True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False) #es una fk que enlaza con nombre de usuario, para identificar a los participantes
    #He añadido los datos dentro de db.Columns de usuario_id

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha_creacion": self.fecha_creacion,
            "texto": self.texto,
            "usuario_id": self.usuario_id       #revisar!!  
        }

class servicios_contratados(db.Model):
    id = db.Column(db.Integer, primary_key=True)#se relaciona con el numero de conversacion del evento
    precio = db.Column(db.Float, unique = False, nullable = True)
    pax = db.Column(db.Integer, unique = False, nullable = True)
    menu = db.Column(db.String, unique = False, nullable = True)
    nombre_cliente = db.Column(db.String(30), unique = False, nullable = True)
    nombre_profesional = db.Column(db.String(30), unique = False, nullable = True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "precio": self.precio,
            "pax": self.pax,
            "menu": self.menu,
            "nombre_cliente": self.nombre_cliente,
            "nombre_profesional": self.nombre_profesional          
        }