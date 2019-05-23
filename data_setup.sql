insert into topics (name, description)
values ('Swimming2', 'Swimming is the self-propulsion of a person through water, usually for recreation, sport, exercise, or survival.');

-- insert into subtopics (name, description, topic_id, display_order)
-- values ('butterfly', 'The butterfly is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick.', SELECT id from topics where name = 'Swimming', 1);

insert into subtopics (name, description, topic_id, display_order)
SELECT 'butterfly1', 'The butterfly is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick.', topics.id, 1
FROM topics
where topics.name = 'Swimming2'
limit 1;

insert into resources (name, content, url, subtopic_id)
SELECT 'How to do butterfly', 'The butterfly stroke is one of the most difficult swimming strokes. It is sometimes referred to as "Fly" for short. Although it is the second fastest stroke when done properly by a skilled athlete, it requires a very exact technique, strength and rhythm. It does requires a lot of practice to perfect it, but when you have it right, it is one of the most rewarding, respected and aesthetically pleasing swimming styles currently used in competition. Being able to execute a good butterfly stroke is the hallmark of a true competitive swimmer.', 'http://url.com', subtopics.id
from subtopics
where subtopics.name = 'butterfly1'
limit 1;
