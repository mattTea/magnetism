import React, { useState } from 'react';
import { Container, Form, Input, Button, Rating } from 'semantic-ui-react';
import '../App.css';

export class RatingTemplate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      score: 1
    }
  }

  setScore = (data) => {
    this.setState({
      score: data.rating
    })
  }

  render = () => {
    return (<Form>
        <Form.Field>
          <Rating
          icon="star"
          size="huge"
          rating={this.state.score}
          maxRating={10}
          onRate={(_, data) => {this.setScore(data)}}
          />
        </Form.Field>
        <Form.Field>
          <Button
          href="javascript:history.back()"
          onClick={async () => {
            const review = this.state.score
            const response = await fetch('/api' + window.location.pathname + "/" + this.props.id +"/reviews", {
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
}
export default RatingTemplate;
