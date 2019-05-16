pipenv install

export APP_SETTINGS="development"
export DATABASE_URL="postgresql://localhost/magnetism"

psql -c 'create database magnetism;'

python api/manage.py db init;
python api/manage.py db migrate;
python api/manage.py db upgrade;