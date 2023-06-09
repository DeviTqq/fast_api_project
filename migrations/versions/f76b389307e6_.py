"""empty message

Revision ID: f76b389307e6
Revises: 6e26f9bcfca2
Create Date: 2023-05-22 16:59:04.808075

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'f76b389307e6'
down_revision = '6e26f9bcfca2'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('operation', sa.Column('codeNameDirection', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('specializationProfile', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('studentQualification', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('educationalForm', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('department', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('creatorProgramm', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('recommended', sa.String(), nullable=False))
    op.add_column('operation', sa.Column('academicYear', sa.String(), nullable=False))
    op.drop_column('operation', 'figi')
    op.drop_column('operation', 'type')
    op.drop_column('operation', 'quantity')
    op.drop_column('operation', 'date')
    op.drop_column('operation', 'instrument_type')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('operation', sa.Column('instrument_type', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('operation', sa.Column('date', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
    op.add_column('operation', sa.Column('quantity', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('operation', sa.Column('type', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('operation', sa.Column('figi', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('operation', 'academicYear')
    op.drop_column('operation', 'recommended')
    op.drop_column('operation', 'creatorProgramm')
    op.drop_column('operation', 'department')
    op.drop_column('operation', 'educationalForm')
    op.drop_column('operation', 'studentQualification')
    op.drop_column('operation', 'specializationProfile')
    op.drop_column('operation', 'codeNameDirection')
    # ### end Alembic commands ###
