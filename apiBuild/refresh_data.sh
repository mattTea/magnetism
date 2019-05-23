psql magnetism -c 'delete from reviews;'
psql magnetism -c 'delete from resources;'
psql magnetism -c 'delete from subtopics;'
psql magnetism -c 'delete from topics;'

psql magnetism -c '\i apiBuild/data_setup.sql'
