from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class Profesional(db.Model):
    __tablename__ = 'Profesional'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(15), nullable=True)
    apellidos = db.Column(db.String(15), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)
    telefono = db.Column(db.String(12), unique=True, nullable=True)
    localizacion = db.Column(db.Enum('madrid', 'barcelona', 'valencia', name='localizacion')) 
    direccion = db.Column(db.String(30), nullable=True)
    foto_de_perfil = db.Column(db.String, unique=True, nullable=True)
    descripcion = db.Column(db.String(300), nullable=True)
    info_adicional = db.Column(db.String(300), nullable=True)

    tipo_de_profesional = db.Column(db.Enum('chef','barman','cortador de jamon','sumiller','pastelero',name='tipo_de_profesional'))

    tipo_de_cocina_especialidad = db.Column(db.Enum('cocina española','cocina peruana','cocina griega','cocina americana','cocina italiana','cocina argentina','cocina tailandesa','cocina mexicana','cocina creativa','cocina japonesa', 'cocina vegana',name='tipo_de_cocina'),nullable=True)  
    
    tipo_servicio_chef_pica_pica = db.Column(db.Text, nullable=True)
    tipo_servicio_chef_taller_de_cocina = db.Column(db.Text, nullable=True)
    tipo_servicio_chef_comida_de_trabajo =db.Column(db.Text, nullable=True)
    tipo_servicio_chef_servicio_degustacion = db.Column(db.Text, nullable=True)
    tipo_servicio_chef_comida_informal = db.Column(db.Text, nullable=True)
    tipo_servicio_chef_batchcooking = db.Column(db.Text, nullable=True)

    tipo_servicio_jamonero_corte = db.Column(db.Text, nullable=True)
    tipo_servicio_jamonero_clase_corte = db.Column(db.Text, nullable=True)

    tipo_servicio_sumiller_maridaje = db.Column(db.Text, nullable=True)
    tipo_servicio_sumiller_cata = db.Column(db.Text, nullable=True)  

    tipo_servicio_pastelero_clase = db.Column(db.Text, nullable=True)  
    tipo_servicio_pastelero_desayuno = db.Column(db.Text, nullable=True)  
    tipo_servicio_pastelero_merienda = db.Column(db.Text, nullable=True)  

    tipo_servicio_barman_barra = db.Column(db.Text, nullable=True)  
    tipo_servicio_barman_clase = db.Column(db.Text, nullable=True)     
     
    is_active = db.Column(db.Boolean(), nullable=True)

    def __repr__(self):
        return f'<Profesional {self.id}>'

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    
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
            "tipo_servicio_chef_pica_pica":self.tipo_servicio_chef_pica_pica,
            "tipo_servicio_chef_taller_de_cocina":self.tipo_servicio_chef_taller_de_cocina,
            "tipo_servicio_chef_comida_de_trabajo":self.tipo_servicio_chef_comida_de_trabajo,
            "tipo_servicio_chef_servicio_degustacion":self.tipo_servicio_chef_servicio_degustacion,
            "tipo_servicio_chef_comida_informal":self.tipo_servicio_chef_comida_informal,
            "tipo_servicio_chef_batchcooking":self.tipo_servicio_chef_batchcooking,
            "tipo_servicio_jamonero_corte":self.tipo_servicio_jamonero_corte,
            "tipo_servicio_jamonero_clase_corte":self.tipo_servicio_jamonero_clase_corte,
            "tipo_servicio_sumiller_maridaje":self.tipo_servicio_sumiller_maridaje,
            "tipo_servicio_sumiller_cata":self.tipo_servicio_sumiller_cata,
            "tipo_servicio_pastelero_clase":self.tipo_servicio_pastelero_clase,
            "tipo_servicio_pastelero_desayuno":self.tipo_servicio_pastelero_desayuno,
            "tipo_servicio_pastelero_merienda":self.tipo_servicio_pastelero_merienda,
            "tipo_servicio_barman_barra":self.tipo_servicio_barman_barra,
            "tipo_servicio_barman_clase":self.tipo_servicio_barman_clase,            
            "is_active": self.is_active
        }

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(15), nullable=True)
    apellidos = db.Column(db.String(15), nullable=True)   
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)
    telefono = db.Column(db.String(12), unique=True, nullable=True)
    localizacion = db.Column(db.String(20), nullable=True)  
    longitud = db.Column(db.Float, nullable=True)
    latitud = db.Column(db.Float, nullable=True)
    direccion = db.Column(db.String(30), nullable=True)
    foto_de_perfil = db.Column(db.String, unique=True, nullable=True)
    tipo_de_dieta = db.Column(db.Enum('Vegetariano', 'Vegano', 'Omnivoro', name='tipo_de_dieta'), nullable=True)
    alergias = db.Column(db.String(50), nullable=True)
    reset_token = db.Column(db.String(120), unique=True, nullable=True)
    token_expiration = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f'<User {self.id}>'
    
    
    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

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
    fecha_creacion = db.Column(db.DateTime, nullable=False)
    coment_text = db.Column(db.String(800), nullable=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('Profesional.id'), nullable=False)

    usuario = db.relationship('User', backref='conversaciones', foreign_keys=[usuario_id])
    profesional = db.relationship('Profesional', backref='conversaciones', foreign_keys=[profesional_id])

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
    precio = db.Column(db.Float, nullable=True)
    pax = db.Column(db.Integer, nullable=True)
    menu = db.Column(db.String, nullable=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('Profesional.id'), nullable=False)
    fecha = db.Column(db.DateTime, nullable=True)

    cliente = db.relationship('User', backref='servicios_contratados', foreign_keys=[cliente_id])
    profesional = db.relationship('Profesional', backref='servicios_contratados', foreign_keys=[profesional_id])

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

class Favoritos(db.Model):
    __tablename__ = 'favoritos'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    profesional_id = db.Column(db.Integer, db.ForeignKey('Profesional.id'), nullable=False)

    usuario = db.relationship('User', backref='favoritos', foreign_keys=[usuario_id])
    profesional = db.relationship('Profesional', backref='favoritos', foreign_keys=[profesional_id])

    def __repr__(self):
        return f'<Favoritos {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "profesional_id": self.profesional_id
        }
