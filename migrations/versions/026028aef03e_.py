"""empty message

Revision ID: 026028aef03e
Revises: 295f8e2536b7
Create Date: 2024-05-28 10:29:21.001674

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '026028aef03e'
down_revision = '295f8e2536b7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Profesional', schema=None) as batch_op:
        batch_op.drop_constraint('Profesional_nombre_usuario_key', type_='unique')
        batch_op.drop_column('nombre_usuario')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Profesional', schema=None) as batch_op:
        batch_op.add_column(sa.Column('nombre_usuario', sa.VARCHAR(length=15), autoincrement=False, nullable=True))
        batch_op.create_unique_constraint('Profesional_nombre_usuario_key', ['nombre_usuario'])

    # ### end Alembic commands ###