import React from 'react';
import { ResourceCardTemplate } from '../templates/ResourceCardTemplate';
import { RatingTemplate } from '../templates/RatingTemplate';
import { ResourcesNavBar } from '../templates/ResourcesNavBar';
import '../App.css';

export const ResourcesPage = () => {

    return (
      <div>
        <ResourcesNavBar />
        <ResourceCardTemplate />
      </div>
    );
  }

export default ResourcesPage;
