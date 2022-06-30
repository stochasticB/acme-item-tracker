import React from 'react';
import ThingForm from './ThingForm';

const Things = ({ things, createThing })=> {
  return (
    <div>
      <h1>Things</h1>
      <ul>
        {
          things.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name }
              </li>
            );
          })
        }
      </ul>
      <ThingForm createThing={ createThing }/>
    </div>
  );
};

export default Things;
