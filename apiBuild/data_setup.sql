
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

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Magnetism for kids', 'Playing with magnets is one of the first bits of science most children discover. That is because magnets are easy to use, safe, and fun. They are also quite surprising.', 'https://www.explainthatstuff.com/magnetism.html', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Magnetism'
LIMIT 1;


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Mechanics', 'Mechanics is that area of science concerned with the behaviour of physical bodies when subjected to forces or displacements, and the subsequent effects of the bodies on their environment.', topics.id, 4
FROM TOPICS
WHERE topics.name = 'Physics'
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


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Science of Swimming', 'Swimming relies on the nearly neutral buoyancy of the human body. On average, the body has a relative density of 0.98 compared to water, which causes the body to float. However, buoyancy varies on the basis of body composition, lung inflation, and the salinity of the water.', topics.id, 2
FROM TOPICS
WHERE topics.name = 'Swimming'
LIMIT 1;


-- Topic - Software Development

INSERT INTO TOPICS (name, description)
VALUES ('Software Development', 'Cooking or cookery is the art, technology, science and craft of preparing food for consumption. Cooking techniques and ingredients vary widely across the world, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting unique environmental, economic, and cultural traditions and trends.');

INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Ruby language', 'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.', topics.id, 1
FROM TOPICS
WHERE topics.name = 'Software Development'
LIMIT 1;

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Arrays', 'In computer science, a dynamic array, growable array, resizable array, dynamic table, mutable array, or array list is a random access, variable-size list data structure that allows elements to be added or removed.', 'https://en.wikipedia.org/wiki/Dynamic_array', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Ruby language'
LIMIT 1;

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Loops', 'A loop is a sequence of statements which is specified once but which may be carried out several times in succession. The code "inside" the loop (the body of the loop) is obeyed a specified number of times, or once for each of a collection of items, or until some condition is met, or indefinitely.', 'https://en.wikipedia.org/wiki/Control_flow#Loops', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Ruby language'
LIMIT 1;

INSERT INTO RESOURCES (name, content, url, subtopic_id)
SELECT 'Dependency Injection', 'In software engineering, dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.', 'https://en.wikipedia.org/wiki/Dependency_injection', subtopics.id
FROM SUBTOPICS
WHERE subtopics.name = 'Ruby language'
LIMIT 1;


INSERT INTO SUBTOPICS (name, description, topic_id, display_order)
SELECT 'Python language', 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, the python design philosophy emphasizes code readability with its notable use of significant whitespace.', topics.id, 2
FROM TOPICS
WHERE topics.name = 'Software Development'
LIMIT 1;


-- Topic - French

INSERT INTO TOPICS (name, description)
VALUES ('French', 'French is a Romance language of the Indo-European family. It descended from the Vulgar Latin of the Roman Empire, as did all Romance languages. French evolved from Gallo-Romance, the spoken Latin in Gaul, and more specifically in Northern Gaul.');


-- Topic - Cooking

INSERT INTO TOPICS (name, description)
VALUES ('Cooking', 'Cooking or cookery is the art, technology, science and craft of preparing food for consumption. Cooking techniques and ingredients vary widely across the world, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting unique environmental, economic, and cultural traditions and trends.');


-- Topic - Yoga

INSERT INTO TOPICS (name, description)
VALUES ('Yoga', 'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. The term "yoga" in the Western world often denotes a modern form of Hatha yoga, consisting largely of the postures called asanas.');
