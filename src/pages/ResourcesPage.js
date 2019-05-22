import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
import { ResourceCardTemplate } from '../templates/ResourceCardTemplate';
import { RatingTemplate } from '../templates/RatingTemplate';
import '../App.css';

export const ResourcesPage = () => {

  const [score, setScore] = useState("");

    return (
      <div>
        <ResourceCardTemplate />
      </div>

    );
  }

export default ResourcesPage;
