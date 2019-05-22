import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
import '../App.css';

export const RatingTemplate = ({idd}) => {

  const [score, setScore] = useState("");

    return (
      <Form>
        <Form.Field>
          <Input
            placeholder="enter your score"
            value={score}
            onChange={e => setScore(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Button
            onClick={async () => {
              const review = { score }
              const response = await fetch('/api' + window.location.pathname + "/" + idd +"/reviews", {
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
