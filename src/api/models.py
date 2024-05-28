from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Profesional(db.Model):
    __tablename__ = 'Profesional'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(15), unique=False, nullable=True)
    apellidos = db.Column(db.String(15), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)
    telefono = db.Column(db.String(12), unique=True, nullable=True)
    localizacion = db.Column(db.String(20), unique=False, nullable=True) 
    direccion = db.Column(db.String(30), unique=False, nullable=True)
    foto_de_perfil = db.Column(db.String, unique=True, nullable=True)
    descripcion = db.Column(db.String(300), unique=False, nullable=True)
    info_adicional = db.Column(db.String(300), unique=False, nullable=True)
    tipo_servicio_chef = db.Column(db.Enum('picapica', 'clase_de_cocina', 'comida_de_trabajo', 'servicio_degustacion', 'batchcooking', name='tipo_servicio_chef'), unique=False, nullable=True)
    tipo_servicio_jamonero = db.Column(db.Enum('clase_de_corte_jamon', 'corte_de_jamon', name='tipo_servicio_jamonero'))
    tipo_servicio_sumiller = db.Column(db.Enum('clase_de_cata_de_vinos', 'maridaje', name='tipo_servicio_sumiller'))
    tipo_servicio_pastelero = db.Column(db.Enum('clase_de_pasteleria', 'merienda', 'desayuno', name='tipo_servicio_pastelero'))
    tipo_servicio_barman = db.Column(db.Enum('clase_de_cocteleria', 'servicio_barra', name='tipo_servicio_barman'))
    servicio_pasteleria = db.Column(db.Enum('clase_de_pasteleria', 'desayuno', 'merienda', name='servicio_pasteleria'))
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)

    def __repr__(self):
        return f'<Profesional {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            "telefono": self.telefono,
            "localizacion": self.localizacion,
            "direccion": self.direccion,
            "foto_de_perfil": self.foto_de_perfil,
            "descripcion": self.descripcion,
            "info_adicional": self.info_adicional,
            "tipo_servicio_chef": self.tipo_servicio_chef,
            "tipo_servicio_jamonero": self.tipo_servicio_jamonero,
            "tipo_servicio_sumiller": self.tipo_servicio_sumiller,
            "tipo_servicio_pastelero": self.tipo_servicio_pastelero,
            "tipo_servicio_barman": self.tipo_servicio_barman,
            "servicio_pasteleria": self.servicio_pasteleria,
            "is_active": self.is_active
        }

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(15), unique=False, nullable=True)
    apellidos = db.Column(db.String(15), unique=False, nullable=True)   
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)
    telefono = db.Column(db.String(12), unique=True, nullable=True)
    localizacion = db.Column(db.String(20), unique=False, nullable=True)  
    longitud = db.Column(db.Float, unique=False, nullable=True)
    latitud = db.Column(db.Float, unique=False, nullable=True)
    direccion = db.Column(db.String(30), unique=False, nullable=True)
    foto_de_perfil = db.Column(db.String, unique=True, nullable=True)
    tipo_de_dieta = db.Column(db.Enum('Vegetariano', 'Vegano', 'Omnivoro', name='tipo_de_dieta'), nullable=True)
    alergias = db.Column(db.String(50), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            "telefono": self.telefono,
            "localizacion": self.localizacion,
            "longitud": self.longitud,
            "latitud": self.latitud,
            "direccion": self.direccion,
            "foto_de_perfil": self.foto_de_perfil,
            "tipo_de_dieta": self.tipo_de_dieta,
            "alergias": self.alergias
        }

class Conversacion(db.Model):
    __tablename__ = 'conversacion'
    id = db.Column(db.Integer, primary_key=True)
    fecha_creacion = db.Column(db.DateTime, unique=False, nullable=False)
    coment_text = db.Column(db.String(800), unique=False, nullable=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('Profesional.id'), nullable=False)

    usuario = db.relationship('User', foreign_keys=[usuario_id])
    profesional = db.relationship('Profesional', foreign_keys=[profesional_id])

    def __repr__(self):
        return f'<Conversacion {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha_creacion": self.fecha_creacion,
            "coment_text": self.coment_text,
            "usuario_id": self.usuario_id,
            "profesional_id": self.profesional_id
        }

class ServiciosContratados(db.Model):
    __tablename__ = 'servicios_contratados'
    id = db.Column(db.Integer, primary_key=True)
    precio = db.Column(db.Float, unique=False, nullable=True)
    pax = db.Column(db.Integer, unique=False, nullable=True)
    menu = db.Column(db.String, unique=False, nullable=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('Profesional.id'), nullable=False)
    fecha = db.Column(db.DateTime, unique=False, nullable=True)
    cliente = db.relationship('User', foreign_keys=[cliente_id])
    profesional = db.relationship('Profesional', foreign_keys=[profesional_id])

    def __repr__(self):
        return f'<ServiciosContratados {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "precio": self.precio,
            "pax": self.pax,
            "menu": self.menu,
            "cliente_id": self.cliente_id,
            "profesional_id": self.profesional_id,
            "fecha": self.fecha
        }
    
def to_dict(self):
    return {}