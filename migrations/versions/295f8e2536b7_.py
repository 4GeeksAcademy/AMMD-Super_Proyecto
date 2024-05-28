"""empty message

Revision ID: 295f8e2536b7
Revises: 
Create Date: 2024-05-27 09:53:31.034742

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '295f8e2536b7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Profesional',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=15), nullable=True),
    sa.Column('apellidos', sa.String(length=15), nullable=True),
    sa.Column('nombre_usuario', sa.String(length=15), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=20), nullable=False),
    sa.Column('telefono', sa.String(length=12), nullable=True),
    sa.Column('localizacion', sa.String(length=20), nullable=True),
    sa.Column('direccion', sa.String(length=30), nullable=True),
    sa.Column('foto_de_perfil', sa.String(), nullable=True),
    sa.Column('descripcion', sa.String(length=300), nullable=True),
    sa.Column('info_adicional', sa.String(length=300), nullable=True),
    sa.Column('tipo_servicio_chef', sa.Enum('picapica', 'clase_de_cocina', 'comida_de_trabajo', 'servicio_degustacion', 'batchcooking', name='tipo_servicio_chef'), nullable=True),
    sa.Column('tipo_servicio_jamonero', sa.Enum('clase_de_corte_jamon', 'corte_de_jamon', name='tipo_servicio_jamonero'), nullable=True),
    sa.Column('tipo_servicio_sumiller', sa.Enum('clase_de_cata_de_vinos', 'maridaje', name='tipo_servicio_sumiller'), nullable=True),
    sa.Column('tipo_servicio_pastelero', sa.Enum('clase_de_pasteleria', 'merienda', 'desayuno', name='tipo_servicio_pastelero'), nullable=True),
    sa.Column('tipo_servicio_barman', sa.Enum('clase_de_cocteleria', 'servicio_barra', name='tipo_servicio_barman'), nullable=True),
    sa.Column('servicio_pasteleria', sa.Enum('clase_de_pasteleria', 'desayuno', 'merienda', name='servicio_pasteleria'), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('foto_de_perfil'),
    sa.UniqueConstraint('nombre_usuario'),
    sa.UniqueConstraint('telefono')
    )
    op.create_table('User',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=15), nullable=True),
    sa.Column('apellidos', sa.String(length=15), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=20), nullable=False),
    sa.Column('telefono', sa.String(length=12), nullable=True),
    sa.Column('localizacion', sa.String(length=20), nullable=True),
    sa.Column('longitud', sa.Float(), nullable=True),
    sa.Column('latitud', sa.Float(), nullable=True),
    sa.Column('direccion', sa.String(length=30), nullable=True),
    sa.Column('foto_de_perfil', sa.String(), nullable=True),
    sa.Column('tipo_de_dieta', sa.Enum('Vegetariano', 'Vegano', 'Omnivoro', name='tipo_de_dieta'), nullable=True),
    sa.Column('alergias', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('foto_de_perfil'),
    sa.UniqueConstraint('telefono')
    )
    op.create_table('conversacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('fecha_creacion', sa.DateTime(), nullable=False),
    sa.Column('coment_text', sa.String(length=800), nullable=True),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.Column('profesional_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['profesional_id'], ['Profesional.id'], ),
    sa.ForeignKeyConstraint(['usuario_id'], ['User.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('servicios_contratados',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('precio', sa.Float(), nullable=True),
    sa.Column('pax', sa.Integer(), nullable=True),
    sa.Column('menu', sa.String(), nullable=True),
    sa.Column('cliente_id', sa.Integer(), nullable=False),
    sa.Column('profesional_id', sa.Integer(), nullable=False),
    sa.Column('fecha', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['cliente_id'], ['User.id'], ),
    sa.ForeignKeyConstraint(['profesional_id'], ['Profesional.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('servicios_contratados')
    op.drop_table('conversacion')
    op.drop_table('User')
    op.drop_table('Profesional')
    # ### end Alembic commands ###