import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
import { ResourceCardTemplate } from '../templates/ResourceCardTemplate';
import { RatingTemplate } from '../templates/RatingTemplate';
import { ResourcesNavBar } from '../templates/ResourcesNavBar';
import '../App.css';

export const ResourcesPage = () => {

  const [score, setScore] = useState("");

    return (
      <div>
        <ResourcesNavBar />
        <ResourceCardTemplate />
      </div>
    );
  }

export default ResourcesPage;
