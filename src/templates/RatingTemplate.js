import React, { useState } from 'react';
import { Container, Form, Input, Button, Rating } from 'semantic-ui-react';
import '../App.css';

export const RatingTemplate = ({id}) => {

  const [rating, setRating] = useState(1);
  const [score, setScore] = useState(1);

    return (
      <Form>
        <Form.Field>
          <Rating
            icon="star"
            size="huge"
            rating={score}
            maxRating={10}
            onRate={(_, data) => {
              setScore(data.rating);
            }}
          />
        </Form.Field>
        <Form.Field>
          <Button
            onClick={async () => {
              const review = { score }
              const response = await fetch('/api' + window.location.pathname + "/" + id +"/reviews", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(review)
              });
              if (response.ok) {
                console.log("response worked!");
              }
            }}
            >
            Submit
          </Button>
        </Form.Field>
      </Form>


    );
  }

export default RatingTemplate;
