
-- Topic - Physics

INSERT INTO TOPICS (name, description)
VALUES ('Physics', 'Learn the essential science that forms the basis of our understanding of the origins of time and the universe.');


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Gravity', 'Gravity (from Latin gravitas, meaning "weight"), or gravitation, is a natural phenomenon by which all things with mass or energy—including planets, stars, galaxies, and even light—are brought toward (or gravitate toward) one another.', topics.id, 1
FROM TOPICS
WHERE topics.name = 'Physics'
LIMIT 1;

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'General Relativity', 'General relativity (GR, also known as the general theory of relativity or GTR) is the geometric theory of gravitation published by Albert Einstein in 1915 and the current description of gravitation in modern physics.', 'https://en.wikipedia.org/wiki/General_relativity', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Gravity'
LIMIT 1;


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Space', 'Space is the boundless three-dimensional extent in which objects and events have relative position and direction. Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime.', topics.id, 2
FROM TOPICS
WHERE topics.name = 'Physics'
LIMIT 1;

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Spaced', 'Spaced is a British television sitcom created, written by and starring Simon Pegg and Jessica Stevenson', 'https://en.wikipedia.org/wiki/Spaced', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Space'
LIMIT 1;


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Magnetism', 'Magnetism is a class of physical phenomena that are mediated by magnetic fields. Electric currents and the magnetic moments of elementary particles give rise to a magnetic field, which acts on other currents and magnetic moments.', topics.id, 3
FROM TOPICS
WHERE topics.name = 'Physics'
LIMIT 1;

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Magnets', 'A magnet is a material or object that produces a magnetic field.', 'https://en.wikipedia.org/wiki/Magnet', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Magnetism'
LIMIT 1;

-- Topic - Swimming

INSERT INTO TOPICS (name, description)
VALUES ('Swimming', 'Swimming is the self-propulsion of a person through water, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs, the body, or both.');


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Swimming strokes', 'Human swimming typically consists of repeating a specific body motion or swimming stroke to propel that body forward. There are many kinds of strokes, each defining a different swimming style or crawl.', topics.id, 1
FROM TOPICS
WHERE topics.name = 'Swimming'
LIMIT 1;


INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Butterfly', 'The butterfly (colloquially shortened to fly) is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick (also known as the "dolphin kick").', 'https://en.wikipedia.org/wiki/Butterfly_stroke', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Swimming strokes'
LIMIT 1;
