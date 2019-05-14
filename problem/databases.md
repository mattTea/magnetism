### Users
 **id** | **username** | **email**  | **password** | **password encrypted**
--|---|---|---|--
 1 | saypop  | sp@pm.com | 123456 | £@$@%$£


### Topics
 **id** | **topic_name**
--|---
 1 | Physics

e.g. Physics, Cookery, Coding, Spanish

Topics and users have many to many relationship.

### Steps
 **id** | **user_id** | **topic_id**
--|---|--
 1 | 1 | 1
 
### Steps are steps to learning topics
**id** | **topic_id** | **step_name**
--|---|--
 1 | 1 | Mechanics

e.g. Physics: kinematics, mechanics, fundamentals, motion, etc.

### Resources needed to understand each step
 **id** | **step_id** | **url** | **rank**
--|---|---|---
 1 | 1 | khanacademy.com/mechanics | 1
 2 | 1 | berkley.com/mechanics | 2

e.g. kinematics: raw links from google compiled using search query  step 1: "beginner courses in kinematics" step 2: "intermediate courses in kinematics" step 3: "advanced courses in kinematics"

### Feedback qualifies resources
  **id** | **user_id** | **resource_id** | **score** | **feedback**
--|---|---|---|---
 1 | 1 | 1 | +1 | I get it now


### Tying this into our users stories:

```
As an undecided self-directed learner
So that I can learn something new
I can select a topic
```

`topics.all()`

```
As a decided self-directed learner
So that I can direct my own learning
I can see a list of all the subtopics I need to learn
```

`steps.find(topic_id)`

```
As a committed self-directed learner
So that I can learn
I am directed to a resource relating to the step I am completing
```

`resources.find(step_id)`

```
As an engaged self-directed learner
So that I can refine my learning path
I want to provide feedback on a resource
```

`feedback.create(resource_id, score, feedback)`

```
As a successful self-directed learner
So that I can understand how I have grown
I want to see a record of all the resources that have helped me along the way
```

`feedback.find(user_id)`
