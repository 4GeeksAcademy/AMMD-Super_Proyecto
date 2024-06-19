"""empty message

Revision ID: bc3127284e06
Revises: f0ae54306a64
Create Date: 2024-06-19 14:46:30.216665

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'bc3127284e06'
down_revision = 'f0ae54306a64'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Profesional', schema=None) as batch_op:
        batch_op.alter_column('tipo_de_cocina_especialidad',
               existing_type=postgresql.ENUM('cocina española', 'cocina peruana', 'cocina griega', 'cocina americana', 'cocina italiana', 'cocina argentina', 'cocina tailandesa', 'cocina mexicana', 'cocina creativa', 'cocina japonesa', 'cocina vegana', name='tipo_de_cocina'),
               type_=sa.Enum('cocina española', 'cocina peruana', 'cocina griega', 'cocina americana', 'cocina italiana', 'cocina argentina', 'cocina tailandesa', 'cocina mexicana', 'cocina creativa', 'cocina japonesa', 'cocina vegana', name='tipo_de_cocina_especialidad'),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Profesional', schema=None) as batch_op:
        batch_op.alter_column('tipo_de_cocina_especialidad',
               existing_type=sa.Enum('cocina española', 'cocina peruana', 'cocina griega', 'cocina americana', 'cocina italiana', 'cocina argentina', 'cocina tailandesa', 'cocina mexicana', 'cocina creativa', 'cocina japonesa', 'cocina vegana', name='tipo_de_cocina_especialidad'),
               type_=postgresql.ENUM('cocina española', 'cocina peruana', 'cocina griega', 'cocina americana', 'cocina italiana', 'cocina argentina', 'cocina tailandesa', 'cocina mexicana', 'cocina creativa', 'cocina japonesa', 'cocina vegana', name='tipo_de_cocina'),
               existing_nullable=True)

    # ### end Alembic commands ###