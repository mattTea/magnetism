pipenv install

export APP_SETTINGS="config.Development"
export DATABASE_URL="postgresql://localhost/magnetism"

psql -c 'create database magnetism;'

python src/manage.py db init;
python src/manage.py db migrate;
python src/manage.py db upgrade;
